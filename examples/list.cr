require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/list.html.en

# zenity --list \
#   --title="Choose the Bugs You Wish to View" \
#   --column="Bug Number" --column="Severity" --column="Description" \
#     992383 Normal "GtkTreeView crashes on multiple selections" \
#     293823 High "GNOME Dictionary does not handle proxy" \
#     393823 Critical "Menu editing does not work in GNOME 2.0"

r = zenity.list(
  "--title", "Choose the Bugs You Wish to View",
  "--column", "Bug Number", "--column", "Severity", "--column", "Description",
  "992383", "Normal", "GtkTreeView crashes on multiple selections",
  "293823", "High", "GNOME Dictionary does not handle proxy",
  "393823", "Critical", "Menu editing does not work in GNOME 2.0"
)

pp r
