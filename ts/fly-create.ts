import { execFile } from "child_process";
import { randomUUID } from "crypto";

export interface CreateAppsOptions {
  count: number;
  orgSlug: string;
  image: string;
}

export interface CreateAppsResult {
  appNames: string[];
}

function flyLaunch(
  orgSlug: string,
  appName: string,
  image: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const cmd = "fly";
    const args = [
      "launch",
      "--config",
      "fly.toml",
      "--org",
      orgSlug,
      "--name",
      appName,
      "--now",
      "--image",
      image,
      "--yes",
      "--detach",
      "--ha=false",
      "--vm-cpu-kind",
      "shared",
      "--vm-memory",
      "512mb",
      "--vm-cpus",
      "1",
    ];
    execFile(cmd, args, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`fly launch failed: ${stderr || error.message}`));
      } else {
        resolve(appName);
      }
    });
  });
}

export async function createApps(
  options: CreateAppsOptions
): Promise<CreateAppsResult> {
  const { count, orgSlug, image } = options;
  if (count < 1 || count > 100) {
    throw new Error("count must be between 1 and 100");
  }
  const appNames: string[] = [];
  for (let i = 0; i < count; i++) {
    const appName = `app-${randomUUID().replace(/-/g, "")}`;
    await flyLaunch(orgSlug, appName, image);
    appNames.push(appName);
  }
  return { appNames };
}
