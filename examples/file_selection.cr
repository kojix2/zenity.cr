require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/file-selection.html.en

# FILE=`zenity --file-selection --title="Select a File"`
#
# case $? in
#          0)
#                 echo "\"$FILE\" selected.";;
#          1)
#                 echo "No file selected.";;
#         -1)
#                 echo "An unexpected error has occurred.";;
# esac

r = zenity.file_selection(
  title: "Select a file"
)

pp r
