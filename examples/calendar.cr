require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/calendar.html.en

# if zenity --calendar \
# --title="Select a Date" \
# --text="Click on a date to select that date." \
# --day=10 --month=8 --year=2004
#   then echo $?
#   else echo "No date selected"
# fi

r = zenity.calendar(
  title: "Select a Date",
  text: "Click on a date to select that date.",
  day: 10,
  month: 8,
  year: 2004
)

pp r
