class Zenity
  class Result
    getter command : String
    getter output : String?
    getter error : String?
    getter exit_code : Int32

    def initialize(@command, @output, @error, @exit_code)
    end

    def to_h
      {command: command, output: output, error: error, exit_code: exit_code}
    end
  end
end
