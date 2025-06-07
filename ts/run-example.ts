import { createApps } from "./fly-create";

async function main() {
  try {
    const result = await createApps({
      count: 1,
      orgSlug: "my-org",
      image: "nginx:latest",
    });
    console.log("Created apps:", result.appNames);
  } catch (err) {
    console.error("Error creating apps:", err);
  }
}

main();
