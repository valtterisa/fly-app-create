# TypeScript Fly.io Bulk Creator (API)

This module provides an API to create multiple Fly.io apps and machines programmatically.

## Requirements

- Node.js 18+
- Fly.io CLI installed and authenticated

## Usage as an API

```ts
import { createApps } from "./fly-create";

const result = await createApps({
  count: 3,
  orgSlug: "my-org",
  image: "nginx:latest",
});
console.log(result.appNames);
```

- `count`: Number of Fly.io apps to create (1-100)
- `orgSlug`: Your Fly.io organization slug
- `image`: Docker image to use

## Running the Example from Console

You can run the provided example script to test the API from the console:

1. Edit `run-example.ts` to set your desired `orgSlug`, `image`, and `count`.
2. Run the example with:
   ```sh
   npm run example
   ```
   (from the `ts/` directory)

This will create the specified number of apps and print their names.
