require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/entry.html.en

# if zenity --entry \
# --title="Add new profile" \
# --text="Enter name of new profile:" \
# --entry-text "NewProfile"
#   then echo $?
#   else echo "No name entered"
# fi

r = zenity.entry(
  title: "Add new profile",
  text: "Enter name of new profile:",
  entry_text: "NewProfile"
)

pp r
