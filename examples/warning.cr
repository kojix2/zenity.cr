require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/warning.html.en

# zenity --warning \
# --text="Disconnect the power cable to avoid electrical shock."

r = zenity.warning(
  text: "Disconnect the power cable to avoid electrical shock."
)

pp r
