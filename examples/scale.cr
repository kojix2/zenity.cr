require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/scale.html.en

# VALUE=`zenity --scale --text="Select window transparency." --value=50`
#
# case $? in
#          0)
# 		echo "You selected $VALUE%.";;
#          1)
#                 echo "No value selected.";;
#         -1)
#                 echo "An unexpected error has occurred.";;
# esac

r = zenity.scale(
  text: "Select window transparency.",
  value: 50
)

pp r
