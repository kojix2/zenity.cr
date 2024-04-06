require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/question.html.en

# zenity --question \
# --text="Are you sure you wish to proceed?"

r = zenity.question(
  text: "Are you sure you wish to proceed?"
)

pp r
