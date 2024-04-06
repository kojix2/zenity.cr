require "./spec_helper"

# Allow calling private method for testing
class Zenity
  def build_command(command, *args, **options)
    previous_def(command, *args, **options)
  end
end

describe Zenity do
  it "has a version number" do
    Zenity::VERSION.should be_a(String)
  end

  it "builds a simple command" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start")
    command.should eq("zenitier --start")
  end

  it "builds a command with a single argument" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", "argument")
    command.should eq("zenitier --start \"argument\"")
  end

  it "builds a command with multiple arguments" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", "arg1", "arg2")
    command.should eq("zenitier --start \"arg1\" \"arg2\"")
  end

  it "builds a command with options" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", "--verbose", pet: "tanuki")
    command.should eq("zenitier --start --verbose --pet=\"tanuki\"")
  end

  it "builds a command with array option" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", targets: ["target1", "target2"])
    command.should eq("zenitier --start --targets=\"target1\" --targets=\"target2\"")
  end

  it "builds a command with mixed arguments and options (with false value)" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", "arg1", mode: "fast", retry: false)
    command.should eq("zenitier --start \"arg1\" --mode=\"fast\"")
  end

  it "builds a command with mixed arguments and options (with true value)" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", "arg1", mode: "fast", retry: true)
    command.should eq("zenitier --start \"arg1\" --mode=\"fast\" --retry")
  end

  it "builds a command with Hash option (with false value)" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", {mode: "fast", target: ["target1", "target2"], retry: false})
    command.should eq("zenitier --start --mode=\"fast\" --target=\"target1\" --target=\"target2\"")
  end

  it "builds a command with Hash option (with true value) and add_lang option" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", {good_mode: "fast", rich_target: ["target1", "target2"], re_retry: true}, add_lang: ["crystal", "ruby"])
    command.should eq("zenitier --start --good-mode=\"fast\" --rich-target=\"target1\" --rich-target=\"target2\" --re-retry --add-lang=\"crystal\" --add-lang=\"ruby\"")
  end

  it "builds a command with Hash option (with false value) and add_lang option" do
    zenity = Zenity.new(path: "zenitier")
    command = zenity.build_command("start", {"good_mode" => "fast", "rich_target" => ["target1", "target2"], "re_retry" => true}, add_lang: ["crystal", "ruby"])
    command.should eq("zenitier --start --good-mode=\"fast\" --rich-target=\"target1\" --rich-target=\"target2\" --re-retry --add-lang=\"crystal\" --add-lang=\"ruby\"")
  end
end
