#!/usr/bin/env python3
import sys
import argparse
import uuid
import csv
import subprocess

def fly_launch(org_slug: str, app_name: str, image: str) -> str:
    cmd = [
        'fly', 'launch',
        '--config', 'fly.toml',
        '--org', org_slug,
        '--name', app_name,
        '--now',
        '--image', image,
        '--yes',
        '--detach',
        '--ha=false',
        '--vm-cpu-kind', 'shared',
        '--vm-memory', '512mb',
        '--vm-cpus', '1'
    ]
    
    try:
        subprocess.run(cmd, check=True)
        return app_name
    except subprocess.CalledProcessError as e:
        print(f"fly launch failed: {e}", file=sys.stderr)
        sys.exit(1)

def parse_args():
    parser = argparse.ArgumentParser(description="Create multiple Fly.io apps and machines")
    parser.add_argument('--count', type=int, required=True,
                        help="Number of apps to create (must be 1-100)")
    parser.add_argument('--org-slug', required=True,
                        help="Organization slug for apps (required)")
    parser.add_argument('--image', required=True,
                        help="Container image to deploy (required)")
    args = parser.parse_args()
    if not (1 <= args.count <= 100):
        parser.error("--count must be between 1 and 100")
    return args

def main():
    args = parse_args()
    results = []

    for i in range(1, args.count + 1):
        print(f"[{i}/{args.count}] Creating app via fly launch...")
        app_name = fly_launch(args.org_slug, f'app-{uuid.uuid4().hex}', args.image)
        print(f"    App created: {app_name}")
        results.append({'app_name': app_name})

    print("Created apps:", results)
if __name__ == '__main__':
    main() 