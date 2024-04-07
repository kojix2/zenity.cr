class Zenity
  class Result
    getter command : String
    getter output : String?
    getter error : String?
    getter status : Process::Status

    def initialize(@command, @output, @error, @status)
    end

    forward_missing_to @status
  end
end
