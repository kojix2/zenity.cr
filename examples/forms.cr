require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/forms.html.en

# zenity --forms --title="Add Friend" \
# 	--text="Enter information about your friend." \
# 	--separator="," \
# 	--add-entry="First Name" \
# 	--add-entry="Family Name" \
# 	--add-entry="Email" \
# 	--add-calendar="Birthday"
#
# case $? in
#     0)
#         echo "Friend added.";;
#     1)
#         echo "No friend added."
# 	;;
#     -1)
#         echo "An unexpected error has occurred."
# 	;;
# esac

r = zenity.forms(
  "--title", "Add Friend",
  "--text", "Enter information about your friend.",
  "--separator", ",",
  "--add_entry", "First Name",
  "--add_entry", "Family Name",
  "--add_entry", "Email",
  "--add_calendar", "Birthday",
)

pp r

# You can also use the named parameters.
# But you can't use same name multiple times.
# So you can not add another entry after adding a calendar.

r = zenity.forms(
  title: "Add Friend",
  text: "Enter information about your friend.",
  separator: ",",
  add_entry: ["First Name", "Family Name", "Email"],
  add_calendar: "Birthday",
)

pp r
