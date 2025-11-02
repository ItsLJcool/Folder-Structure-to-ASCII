# Folder Structure to ASCII

Simple script that converts a folder structure to ASCII art.
Edit the `src/paths.json` file to change the folder structure. There is one there for you to look at for reference.
Here is an example line of the file:
```json
{ "path": "data/", "desc": "Usually contains configuration, or information you want to store." },
```
You can forego `desc` as it's optional.
You can view your recent export in the `./exports/` folder. (if there is not one it will be created on export)

You will need to install Bun to run this project. Install it here [Bun](https://bun.com)
Installing dependencies:
```bash
bun install
```
To run:
```bash
bun .
```

Im too lazy to make this a program so it's a TypeScript project run by Bun... Thanks @frostzzone for getting me into bun LMAO