require "../src/zenity"

zenity = Zenity.new

# https://help.gnome.org/users/zenity/stable/text.html.en

# FILE=`dirname $0`/COPYING
#
# zenity --text-info \
#        --title="License" \
#        --filename=$FILE \
#        --checkbox="I read and accept the terms."
#
# case $? in
#     0)
#         echo "Start installation!"
# 	# next step
# 	;;
#     1)
#         echo "Stop installation!"
# 	;;
#     -1)
#         echo "An unexpected error has occurred."
# 	;;
# esac

r = zenity.text_info(
  title: "License",
  filename: File.expand_path("../LICENSE", __DIR__),
  checkbox: "I read and accept the terms."
)

pp r
