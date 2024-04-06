class Zenity
  class Result
    getter command : String
    getter stdout : String?
    getter stderr : String?
    getter exit_code : Int32

    def initialize(@command, @stdout, @stderr, @exit_code)
    end

    def to_h
      {command: command, stdout: stdout, stderr: stderr, status: status}
    end
  end
end
