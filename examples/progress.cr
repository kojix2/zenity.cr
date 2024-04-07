require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/3.32/progress.html.en

# (
# echo "10" ; sleep 1
# echo "# Updating mail logs" ; sleep 1
# echo "20" ; sleep 1
# echo "# Resetting cron jobs" ; sleep 1
# echo "50" ; sleep 1
# echo "This line will just be ignored" ; sleep 1
# echo "75" ; sleep 1
# echo "# Rebooting system" ; sleep 1
# echo "100" ; sleep 1
# ) |
# zenity --progress \
#   --title="Update System Logs" \
#   --text="Scanning mail logs..." \
#   --percentage=0

# if [ "$?" = -1 ] ; then
#         zenity --error \
#           --text="Update canceled."
# fi

r = zenity.progress(
  title: "Update System Logs",
  text: "Scanning mail logs...",
  percentage: 0
) do |ps|
  i = ps.input
  i.puts "10"
  sleep 1
  i.puts "# Updating mail logs"
  sleep 1
  i.puts "20"
  sleep 1
  i.puts "# Resetting cron jobs"
  sleep 1
  i.puts "50"
  sleep 1
  i.puts "This line will just be ignored"
  sleep 1
  i.puts "75"
  sleep 1
  i.puts "# Rebooting system"
  sleep 1
  i.puts "100"
  sleep 1
end

# FIXME: It raises the following error when the user cancels the dialog:
# 
# Unhandled exception: Error writing file (#<IO::FileDescriptor:0x1011ad600>): 
# Broken pipe (IO::Error)

pp r
