# Fly.io Bulk Creator - Create Fly.io apps and machines in bulk

This project provides both Python and TypeScript code snippets to automate the creation of multiple Fly.io apps and their associated machines. These are intended as reusable snippets users can copy into their own codebases.

## Folder Structure

- `python/` — Python implementation (CLI script)
- `ts/` — TypeScript implementation (API module)

## What It Does

- Launches multiple Fly.io apps using the Fly.io CLI.
- Allows you to specify the number of apps to create, the Docker image to use, and the organization slug.
- Outputs relevant information for each created app.

## Requirements

- Python 3.7+
- [Fly.io CLI](https://fly.io/docs/hands-on/install-flyctl/)
- A Fly.io account and organization

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/valtterisa/fly-app-create.git
   cd fly-app-create
   ```
2. (Optional) Create a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install Python dependencies:
   ```sh
   pip install -r requirements.txt
   ```

## Usage

See the respective folders for usage instructions and code.

## Notes

- Make sure you are authenticated with Fly.io CLI (`fly auth login`).
- You may need to edit the generated `fly.toml` files if your app requires custom configuration.

## License

MIT
