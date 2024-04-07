crystal_doc_search_index_callback({"repository_name":"zenity","body":"# zenity.cr\n\n[![build](https://github.com/kojix2/deepl-cli/actions/workflows/build.yml/badge.svg)](https://github.com/kojix2/deepl-cli/actions/workflows/build.yml)\n\nA [Zenity](https://help.gnome.org/users/zenity/stable/) wrapper for the Crystal programming language.\n\n## Installation\n\n1. Add the dependency to your `shard.yml` file:\n\n```yaml\ndependencies:\n  zenity:\n    github: kojix2/zenity.cr\n```\n\n2. Execute `shards install` in your terminal.\n\n## Usage\n\n```crystal\nrequire \"zenity\"\n\n# Initialize Zenity with the path to the zenity executable\nzenity = Zenity.new(path: \"/usr/bin/zenity\")\n\n# Display a file selection dialog\nresult = zenity.file_selection(title: \"Select a file\")\n\n# Print the path of the selected file\nputs result.success? ? result.output : \"No file selected\"\n```\n\nExplore the [examples](examples) directory to try out more functionalities.\n\nYou can run the examples on both macOS and Windows using the Go language implementation of [Zenity](https://github.com/ncruces/zenity). However, note that it does not support all features of the original Zenity.\n\nFor further information, refer to the [documentation](https://kojix2.github.io/zenity.cr).\n\n## Development\n\nThis project is currently in progress, and efforts are made to maintain the implementation as straightforward as possible to minimize the likelihood of bugs. Please feel free to reach out with any suggestions or feedback.\n\n## Contributing\n\nContributions are always welcome.\n\n- Report bugs\n- Fix bugs and submit pull requests\n- Write, clarify, or fix documentation\n- Suggest or add new features\n\n## License\n\nThis project is licensed under the MIT License.\n","program":{"html_id":"zenity/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"zenity","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"zenity/Zenity","path":"Zenity.html","kind":"class","full_name":"Zenity","name":"Zenity","abstract":false,"superclass":{"html_id":"zenity/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zenity/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zenity/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zenity.cr","line_number":4,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L4"},{"filename":"src/zenity/result.cr","line_number":1,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L1"},{"filename":"src/zenity/version.cr","line_number":1,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/version.cr#L1"}],"repository_name":"zenity","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"{{ (`shards version /home/runner/work/zenity.cr/zenity.cr/src/zenity`).chomp.stringify }}"}],"constructors":[{"html_id":"new(path:String=\"zenity\",history:Bool=true,timeout:Float=0.5)-class-method","name":"new","abstract":false,"args":[{"name":"path","default_value":"\"zenity\"","external_name":"path","restriction":"String"},{"name":"history","default_value":"true","external_name":"history","restriction":"Bool"},{"name":"timeout","default_value":"0.5","external_name":"timeout","restriction":"Float"}],"args_string":"(path : String = \"zenity\", history : Bool = true, timeout : Float = 0.5)","args_html":"(path : String = <span class=\"s\">&quot;zenity&quot;</span>, history : Bool = <span class=\"n\">true</span>, timeout : Float = <span class=\"n\">0.5</span>)","location":{"filename":"src/zenity.cr","line_number":11,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L11"},"def":{"name":"new","args":[{"name":"path","default_value":"\"zenity\"","external_name":"path","restriction":"String"},{"name":"history","default_value":"true","external_name":"history","restriction":"Bool"},{"name":"timeout","default_value":"0.5","external_name":"timeout","restriction":"Float"}],"visibility":"Public","body":"_ = allocate\n_.initialize(path, history, timeout)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"calendar(*args,**options)-instance-method","name":"calendar","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":128,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L128"},"def":{"name":"calendar","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"calendar\", *args, **options)\nrun(cmd)\n"}},{"html_id":"calendar(*args,**options,&)-instance-method","name":"calendar","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":128,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L128"},"def":{"name":"calendar","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"calendar\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"color_selection(*args,**options)-instance-method","name":"color_selection","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":140,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L140"},"def":{"name":"color_selection","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"color-selection\", *args, **options)\nrun(cmd)\n"}},{"html_id":"color_selection(*args,**options,&)-instance-method","name":"color_selection","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":140,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L140"},"def":{"name":"color_selection","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"color-selection\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"entry(*args,**options)-instance-method","name":"entry","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":130,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L130"},"def":{"name":"entry","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"entry\", *args, **options)\nrun(cmd)\n"}},{"html_id":"entry(*args,**options,&)-instance-method","name":"entry","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":130,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L130"},"def":{"name":"entry","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"entry\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"error(*args,**options)-instance-method","name":"error","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":135,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L135"},"def":{"name":"error","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"error\", *args, **options)\nrun(cmd)\n"}},{"html_id":"error(*args,**options,&)-instance-method","name":"error","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":135,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L135"},"def":{"name":"error","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"error\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"file_selection(*args,**options)-instance-method","name":"file_selection","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":133,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L133"},"def":{"name":"file_selection","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"file-selection\", *args, **options)\nrun(cmd)\n"}},{"html_id":"file_selection(*args,**options,&)-instance-method","name":"file_selection","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":133,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L133"},"def":{"name":"file_selection","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"file-selection\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"forms(*args,**options)-instance-method","name":"forms","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":134,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L134"},"def":{"name":"forms","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"forms\", *args, **options)\nrun(cmd)\n"}},{"html_id":"forms(*args,**options,&)-instance-method","name":"forms","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":134,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L134"},"def":{"name":"forms","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"forms\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"history:Array(Zenity::Result)-instance-method","name":"history","abstract":false,"location":{"filename":"src/zenity.cr","line_number":6,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L6"},"def":{"name":"history","return_type":"Array(Zenity::Result)","visibility":"Public","body":"@history"}},{"html_id":"history_enabled:Bool-instance-method","name":"history_enabled","abstract":false,"location":{"filename":"src/zenity.cr","line_number":7,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L7"},"def":{"name":"history_enabled","return_type":"Bool","visibility":"Public","body":"@history_enabled"}},{"html_id":"info(*args,**options)-instance-method","name":"info","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":136,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L136"},"def":{"name":"info","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"info\", *args, **options)\nrun(cmd)\n"}},{"html_id":"info(*args,**options,&)-instance-method","name":"info","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":136,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L136"},"def":{"name":"info","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"info\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"last_command:String-instance-method","name":"last_command","abstract":false,"location":{"filename":"src/zenity.cr","line_number":8,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L8"},"def":{"name":"last_command","return_type":"String","visibility":"Public","body":"@last_command"}},{"html_id":"last_result:Zenity::Result|Nil-instance-method","name":"last_result","abstract":false,"location":{"filename":"src/zenity.cr","line_number":9,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L9"},"def":{"name":"last_result","return_type":"Zenity::Result | ::Nil","visibility":"Public","body":"@last_result"}},{"html_id":"list(*args,**options)-instance-method","name":"list","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":139,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L139"},"def":{"name":"list","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"list\", *args, **options)\nrun(cmd)\n"}},{"html_id":"list(*args,**options,&)-instance-method","name":"list","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":139,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L139"},"def":{"name":"list","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"list\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"notification(*args,**options)-instance-method","name":"notification","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":141,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L141"},"def":{"name":"notification","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"notification\", *args, **options)\nrun(cmd)\n"}},{"html_id":"notification(*args,**options,&)-instance-method","name":"notification","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":144,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L144"},"def":{"name":"notification","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"notification\", *args, **options)\nrun(cmd, terminate: true) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"password(*args,**options)-instance-method","name":"password","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":132,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L132"},"def":{"name":"password","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"password\", *args, **options)\nrun(cmd)\n"}},{"html_id":"password(*args,**options,&)-instance-method","name":"password","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":132,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L132"},"def":{"name":"password","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"password\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"path:String-instance-method","name":"path","abstract":false,"location":{"filename":"src/zenity.cr","line_number":5,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L5"},"def":{"name":"path","return_type":"String","visibility":"Public","body":"@path"}},{"html_id":"path=(path:String)-instance-method","name":"path=","abstract":false,"args":[{"name":"path","external_name":"path","restriction":"String"}],"args_string":"(path : String)","args_html":"(path : String)","location":{"filename":"src/zenity.cr","line_number":5,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L5"},"def":{"name":"path=","args":[{"name":"path","external_name":"path","restriction":"String"}],"visibility":"Public","body":"@path = path"}},{"html_id":"progress(*args,**options)-instance-method","name":"progress","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":142,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L142"},"def":{"name":"progress","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"progress\", *args, **options)\nrun(cmd)\n"}},{"html_id":"progress(*args,**options,&)-instance-method","name":"progress","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":142,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L142"},"def":{"name":"progress","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"progress\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"question(*args,**options)-instance-method","name":"question","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":138,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L138"},"def":{"name":"question","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"question\", *args, **options)\nrun(cmd)\n"}},{"html_id":"question(*args,**options,&)-instance-method","name":"question","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":138,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L138"},"def":{"name":"question","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"question\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"scale(*args,**options)-instance-method","name":"scale","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":129,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L129"},"def":{"name":"scale","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"scale\", *args, **options)\nrun(cmd)\n"}},{"html_id":"scale(*args,**options,&)-instance-method","name":"scale","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":129,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L129"},"def":{"name":"scale","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"scale\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"text_info(*args,**options)-instance-method","name":"text_info","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":131,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L131"},"def":{"name":"text_info","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"text-info\", *args, **options)\nrun(cmd)\n"}},{"html_id":"text_info(*args,**options,&)-instance-method","name":"text_info","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":131,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L131"},"def":{"name":"text_info","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"text-info\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}},{"html_id":"warning(*args,**options)-instance-method","name":"warning","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options)","args_html":"(*args, **options)","location":{"filename":"src/zenity.cr","line_number":137,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L137"},"def":{"name":"warning","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"visibility":"Public","body":"cmd = build_command(\"warning\", *args, **options)\nrun(cmd)\n"}},{"html_id":"warning(*args,**options,&)-instance-method","name":"warning","abstract":false,"args":[{"name":"args","external_name":"args","restriction":""}],"args_string":"(*args, **options, &)","args_html":"(*args, **options, &)","location":{"filename":"src/zenity.cr","line_number":137,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L137"},"def":{"name":"warning","args":[{"name":"args","external_name":"args","restriction":""}],"double_splat":{"name":"options","external_name":"options","restriction":""},"splat_index":0,"yields":1,"block_arity":1,"visibility":"Public","body":"cmd = build_command(\"warning\", *args, **options)\nrun(cmd) do |stdin|\n  yield stdin\nend\n"}}],"macros":[{"html_id":"define_command(name)-macro","name":"define_command","abstract":false,"args":[{"name":"name","external_name":"name","restriction":""}],"args_string":"(name)","args_html":"(name)","location":{"filename":"src/zenity.cr","line_number":113,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity.cr#L113"},"def":{"name":"define_command","args":[{"name":"name","external_name":"name","restriction":""}],"visibility":"Public","body":"    def \n{{ name.id }}\n(*args, **options)\n      cmd = build_command(\"\n{{ (name.gsub(/_/, \"-\")).id }}\n\", *args, **options)\n      run(cmd)\n    \nend\n\n    def \n{{ name.id }}\n(*args, **options, &block)\n      cmd = build_command(\"\n{{ (name.gsub(/_/, \"-\")).id }}\n\", *args, **options)\n      \n# FIXME: Should we add --listen option automatically?\n\n      run(cmd) do |stdin|\n        yield stdin\n      \nend\n    \nend\n  \n"}}],"types":[{"html_id":"zenity/Zenity/Result","path":"Zenity/Result.html","kind":"class","full_name":"Zenity::Result","name":"Result","abstract":false,"superclass":{"html_id":"zenity/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"zenity/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"zenity/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/zenity/result.cr","line_number":2,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L2"}],"repository_name":"zenity","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"zenity/Zenity","kind":"class","full_name":"Zenity","name":"Zenity"},"constructors":[{"html_id":"new(command:String,output:Nil|String,error:Nil|String,status:Process::Status)-class-method","name":"new","abstract":false,"args":[{"name":"command","external_name":"command","restriction":"::String"},{"name":"output","external_name":"output","restriction":"::Nil | ::String"},{"name":"error","external_name":"error","restriction":"::Nil | ::String"},{"name":"status","external_name":"status","restriction":"::Process::Status"}],"args_string":"(command : String, output : Nil | String, error : Nil | String, status : Process::Status)","args_html":"(command : String, output : Nil | String, error : Nil | String, status : Process::Status)","location":{"filename":"src/zenity/result.cr","line_number":8,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L8"},"def":{"name":"new","args":[{"name":"command","external_name":"command","restriction":"::String"},{"name":"output","external_name":"output","restriction":"::Nil | ::String"},{"name":"error","external_name":"error","restriction":"::Nil | ::String"},{"name":"status","external_name":"status","restriction":"::Process::Status"}],"visibility":"Public","body":"_ = allocate\n_.initialize(command, output, error, status)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"command:String-instance-method","name":"command","abstract":false,"location":{"filename":"src/zenity/result.cr","line_number":3,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L3"},"def":{"name":"command","return_type":"String","visibility":"Public","body":"@command"}},{"html_id":"error:String|Nil-instance-method","name":"error","abstract":false,"location":{"filename":"src/zenity/result.cr","line_number":5,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L5"},"def":{"name":"error","return_type":"String | ::Nil","visibility":"Public","body":"@error"}},{"html_id":"output:String|Nil-instance-method","name":"output","abstract":false,"location":{"filename":"src/zenity/result.cr","line_number":4,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L4"},"def":{"name":"output","return_type":"String | ::Nil","visibility":"Public","body":"@output"}},{"html_id":"status:Process::Status-instance-method","name":"status","abstract":false,"location":{"filename":"src/zenity/result.cr","line_number":6,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L6"},"def":{"name":"status","return_type":"Process::Status","visibility":"Public","body":"@status"}}],"macros":[{"html_id":"method_missing(call)-macro","name":"method_missing","abstract":false,"args":[{"name":"call","external_name":"call","restriction":""}],"args_string":"(call)","args_html":"(call)","location":{"filename":"src/zenity/result.cr","line_number":11,"url":"https://github.com/kojix2/zenity.cr/blob/f93cd0bc7f29c41f612449c4e45503bcabe10f8d/src/zenity/result.cr#L11"},"def":{"name":"method_missing","args":[{"name":"call","external_name":"call","restriction":""}],"visibility":"Public","body":"      @status.\n{{ call }}\n\n    \n"}}]}]}]}})