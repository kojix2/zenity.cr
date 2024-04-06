require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/notification.html.en

# zenity --notification\
#   --window-icon="info" \
#   --text="There are system updates necessary!"

r = zenity.notification(
  window_icon: "info",
  text: "There are system updates necessary!"
)

pp r

sleep 1

# #!/bin/sh
# cat <<EOH| zenity --notification --listen
# message: this is the message text
# EOH

r = zenity.notification(
  window_icon: "info",
  listen: true
) do |ps|
  i = ps.input
  i.puts "message: this is the message text"
end
