require "./zenity/version"
require "./zenity/result"

class Zenity
  property path : String = "zenity"
  getter history : Array(Zenity::Result)
  getter history_enabled : Bool
  getter last_command : String
  getter last_result : Zenity::Result?

  def initialize(path : String = "zenity", history : Bool = true, timeout : Float = 0.5)
    @path = path
    @history_enabled = history
    @history = [] of Zenity::Result
    @last_command = ""
    @last_result = nil
    @timeout = timeout # for commands with --listen option
  end

  private def run(cmd : String, terminate : Bool = false, &block)
    @last_command = cmd
    ps = Process.new(
      cmd,
      shell: true,
      input: Process::Redirect::Pipe,
      output: Process::Redirect::Pipe,
      error: Process::Redirect::Pipe
    )
    stdout = ps.output
    stderr = ps.error
    yield ps
    ps.input.flush
    if terminate
      sleep @timeout
      ps.terminate
      s = ps.wait
      ret = Result.new(command: last_command, stdout: nil, stderr: nil, exit_code: s.exit_code)
    else
      o = stdout.gets_to_end.try &.strip
      e = stderr.gets_to_end.try &.strip
      s = ps.wait
      ret = Result.new(command: last_command, stdout: o, stderr: e, exit_code: s.exit_code)
    end
    @last_result = ret
    @history << ret if history_enabled
    return ret
  end

  private def run(cmd : String)
    @last_command = cmd
    ps = Process.new(
      cmd,
      shell: true,
      input: Process::Redirect::Pipe,
      output: Process::Redirect::Pipe,
      error: Process::Redirect::Pipe
    )
    stdout = ps.output
    stderr = ps.error
    o = stdout.gets_to_end.try &.strip
    e = stderr.gets_to_end.try &.strip
    s = ps.wait
    ret = Result.new(command: last_command, stdout: o, stderr: e, exit_code: s.exit_code)
    @last_result = ret
    @history << ret if history_enabled
    return ret
  end

  private def build_command(command, *args, **options) : String
    String.build do |s|
      s << "#{@path}"
      s << " --#{hyphenize(command)}"
      args.each { |a| append_argument(s, a) }
      options.each { |k, v| append_option(s, k, v) }
    end
  end

  private def append_argument(s : String::Builder, arg)
    case arg
    when Hash, NamedTuple
      arg.each { |k, v| append_option(s, k, v) }
    when .starts_with?("--")
      s << " #{hyphenize(arg)}"
    else
      s << " \"#{shellescape(arg)}\""
    end
  end

  private def append_option(s : String::Builder, key, value)
    if value.is_a?(Array)
      value.each { |e| append_single_option(s, key, e) }
    else
      append_single_option(s, key, value)
    end
  end

  private def append_single_option(s : String::Builder, key, value)
    s << " --#{hyphenize(key)}"
    s << "=\"#{shellescape(value)}\"" unless value == true
  end

  private def hyphenize(str) : String
    str = str.to_s # Symbol, etc.
    str.gsub("_", "-").downcase
  end

  private def shellescape(str) : String
    str = str.to_s # Symbol, etc.
    %(#{str})
  end

  macro define_command(name)
    def {{name.id}}(*args, **options)
      cmd = build_command("{{name.gsub(/_/, "-").id}}", *args, **options)
      run(cmd)
    end

    def {{name.id}}(*args, **options, &block)
      cmd = build_command("{{name.gsub(/_/, "-").id}}", *args, **options)
      # FIXME: Should we add --listen option automatically?
      run(cmd) do |stdin|
        yield stdin
      end
    end
  end

  define_command("calendar")
  define_command("scale")
  define_command("entry")
  define_command("text_info")
  define_command("password")
  define_command("file_selection")
  define_command("forms")
  define_command("error")
  define_command("info")
  define_command("warning")
  define_command("question")
  define_command("list")
  define_command("color_selection")
  define_command("notification")
  define_command("progress")

  def notification(*args, **options, &block)
    # Note
    # We can not terminate the notification command by sending EOF.
    # So we need terminate when the block is finished.

    cmd = build_command("notification", *args, **options)
    # terminate
    run(cmd, terminate: true) do |stdin|
      yield stdin
    end
  end

  # From Ruby's Shellwords module

  # Maybe shell escape is good idea, but it is not working well with zenity.
  # So It is disabled and just return the string as is.

  private def shellescape(str) : String
    str = str.to_s

    # An empty argument will be skipped, so return empty quotes.

    # return "''" if str.empty?

    # Treat multibyte characters as is. It is the caller's responsibility
    # to encode the string in the right encoding for the shell
    # environment.

    # str = str.gsub(/[^A-Za-z0-9_\-.,:+\/@\n]/, "\\\\\\0")

    # A LF cannot be escaped with a backslash because a backslash + LF
    # combo is regarded as a line continuation and simply ignored.

    # str = str.gsub(/\n/, "'\n'")

    return str
  end
end
