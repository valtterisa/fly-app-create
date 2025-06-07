# Python Fly.io Bulk Creator (CLI)

This script allows you to create multiple Fly.io apps and machines from the command line.

## Requirements

- Python 3.7+
- Fly.io CLI installed and authenticated

## Usage

```sh
python3 fly-create.py --count <number_of_apps> --org-slug <your_org_slug> --image <docker_image>
```

- `--count`: Number of Fly.io apps to create (1-100)
- `--org-slug`: Your Fly.io organization slug
- `--image`: Docker image to use

Example:

```sh
python3 fly-create.py --count 3 --org-slug my-org --image nginx:latest
```
