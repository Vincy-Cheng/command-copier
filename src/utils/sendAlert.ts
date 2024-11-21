import { message } from "@tauri-apps/plugin-dialog";

async function sendAlert(
  type: "warning" | "error" | "info" = "warning",
  content: string,
  title?: string,
) {
  await message(content, { kind: type, title });
}

export default sendAlert;
