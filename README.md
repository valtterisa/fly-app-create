# Fly.io Bulk Creator - Create Flu.io apps and machines in bulk
This project provides a Python script to automate the creation of multiple Fly.io apps and their associated machines. It is designed to help users quickly spin up several Fly.io applications with custom images and organization slugs.

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

Run the script with the required arguments:

```sh
python main.py --count <number_of_apps> --org-slug <your_org_slug> --image <docker_image>
```

- `--count`: Number of Fly.io apps to create (integer)
- `--org-slug`: Your Fly.io organization slug (string)
- `--image`: Docker image to use for the apps (string)

**Example:**

```sh
python main.py --count 3 --org-slug my-org --image nginx:latest
```

This will create 3 Fly.io apps in the organization `my-org` using the `nginx:latest` image.

## Notes

- Make sure you are authenticated with Fly.io CLI (`fly auth login`).
- You may need to edit the generated `fly.toml` files if your app requires custom configuration.

## License

MIT
