# zenity.cr

[![build](https://github.com/kojix2/deepl-cli/actions/workflows/build.yml/badge.svg)](https://github.com/kojix2/deepl-cli/actions/workflows/build.yml)

A [Zenity](https://help.gnome.org/users/zenity/stable/) wrapper for the Crystal programming language.

## Installation

1. Add the dependency to your `shard.yml` file:

```yaml
dependencies:
  zenity:
    github: kojix2/zenity.cr
```

2. Execute `shards install` in your terminal.

## Usage

```crystal
require "zenity"

# Initialize Zenity with the path to the zenity executable
zenity = Zenity.new(path: "/usr/bin/zenity")

# Display a file selection dialog
result = zenity.file_selection(title: "Select a file")

# Print the path of the selected file
result.exit_code == 0 ? puts(result.output) : puts("No file selected")
```

Explore the [examples](examples) directory to try out more functionalities.

You can run the examples on both macOS and Windows using the Go language implementation of [Zenity](https://github.com/ncruces/zenity). However, note that it does not support all features of the original Zenity.

For further information, refer to the [documentation](https://kojix2.github.io/zenity.cr).

## Development

This project is currently in progress, and efforts are made to maintain the implementation as straightforward as possible to minimize the likelihood of bugs. Please feel free to reach out with any suggestions or feedback.

## Contributing

Contributions are always welcome.

- Report bugs
- Fix bugs and submit pull requests
- Write, clarify, or fix documentation
- Suggest or add new features

## License

This project is licensed under the MIT License.
