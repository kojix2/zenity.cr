require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/color-selection.html.en

# COLOR=`zenity --color-selection --show-palette`
#
# case $? in
#          0)
# 		echo "You selected $COLOR.";;
#          1)
#                 echo "No color selected.";;
#         -1)
#                 echo "An unexpected error has occurred.";;
# esac

r = zenity.color_selection(
  show_palette: true
)

pp r
