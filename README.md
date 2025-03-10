# Command Copier

This project is a [Tauri](https://v2.tauri.app/) application developed with Vue 3 and TypeScript in Vite. The application allows users to store, manage, and copy shell commands easily.

## Features

- **Adding Commands**: Users can add new commands with descriptions and group them.
- **Listing Commands**: Commands are displayed in an accordion-style list, grouped by their categories.
- **Copying Commands**: Users can copy commands to the clipboard with a single click.
- **Exporting Commands**: Users can export the list of commands to a JSON file for backup or sharing. It is exported to /Download folder.
- **Importing Commands**: Users can import commands from a JSON file to restore or update their command list.

## Prerequisites

Please ensure you have install the required dependencies according to this [doc](https://v2.tauri.app/start/prerequisites/) before start development or building.

## Local Development

Install packages

```bash
npm install
```

Run the application in development mode

```bash
npm run dev:tauri
```

Build the application

```bash
npm run build
```
Build the application in release mode

```bash
npm run build:tauri
```

### Screenshots
![image](https://github.com/user-attachments/assets/9e7bd2ef-5096-4596-b298-bdcfe7f12829)

