require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/info.html.en

# zenity --info \
# --text="Merge complete. Updated 3 of 10 files."

r = zenity.info(
  text: "Merge complete. Updated 3 of 10 files."
)

pp r
