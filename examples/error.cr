require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/error.html.en

# zenity --error \
# --text="Could not find /var/log/syslog."

r = zenity.error(
  text: "Could not find /var/log/syslog."
)

pp r
