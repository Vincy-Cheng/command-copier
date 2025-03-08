import { confirm } from "@tauri-apps/plugin-dialog";

async function confirmDialog(
  type: "warning" | "error" | "info" = "warning",
  content: string,
  title?: string,
  confirmAction?: () => void,
) {
  const confirmed = await confirm(content, {
    kind: type,
    title,
    okLabel: "Ok",
    cancelLabel: "Cancel",
  });

  if (confirmed && confirmAction) {
    confirmAction();
  }
}

export default confirmDialog;
