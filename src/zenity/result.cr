class Zenity
  # Represents the result of a zenity command execution.
  # it delegates all missing methods to the Process::Status object
  # See: https://crystal-lang.org/api/Process/Status.html
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
