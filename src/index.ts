import { write } from "bun";
import fsAsync from "fs/promises";
import path from "path";

// ------------------------
// Configuration
// ------------------------
const PADDING = 45;
const TOP_LAYER = "My Mod/";

interface PathEntry {
    path: string;
    desc?: string;
}

interface TreeNode {
    __desc?: string;
    __children: TreeMap; // children is a map of name -> TreeNode
}
type TreeMap = Record<string, TreeNode>;

// ------------------------
// Example file/folder paths
// ------------------------
const paths: PathEntry[] = JSON.parse(await Bun.file(path.join(__dirname, "paths.json")).text());

// ------------------------
// Setup paths
// ------------------------
for (const p of paths) p.path = `${TOP_LAYER}${p.path}`;
paths.unshift({ path: TOP_LAYER });

// ------------------------
// Helpers
// ------------------------
function hasFileExtension(filename: string): boolean { return /\.[a-zA-Z0-9]+$/.test(filename); }

// Build folder tree (fixed)
function buildTree(paths: PathEntry[]): TreeMap {
    const tree: TreeMap = {};

    for (const { path, desc } of paths) {
        const parts = path.split("/").filter(Boolean);
        let current: TreeMap = tree;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]!;
            const isFile = i === parts.length - 1 && !path.endsWith("/");

            if (!current[part]) current[part] = { __children: {} };

            const node = current[part];
            if (i === parts.length - 1 && desc) node.__desc = desc;

            current = node.__children;
        }
    }

    return tree;
}


// Render formatted tree
function renderTree(node: Record<string, TreeNode>, prefix = ""): string {
    const entries = Object.entries(node);
    return entries
        .map(([key, value], index) => {
            const isLast = index === entries.length - 1;
            const branch = prefix + (isLast ? "└─ " : "├─ ");
            const nextPrefix = prefix + (isLast ? "   " : "│  ");
            const hasChildren = Object.keys(value.__children).length > 0;
            const isDir = !hasFileExtension(key);
            const emoji = isDir ? "📂" : "📄";

            let output = `${branch}${emoji} ${key}${isDir ? "/" : ""}`;
            const descText = value.__desc ? ` # ${value.__desc}` : "";
            output += `${"".padEnd(PADDING - output.length)}${descText}`;

            if (hasChildren) output += "\n" + renderTree(value.__children, nextPrefix);
            return output;
        })
        .join("\n");
}

// ------------------------
// Main
// ------------------------
const tree = buildTree(paths);
const result = renderTree(tree);
const exportPath = path.join(__dirname, "../exports/");
await fsAsync.mkdir(exportPath, { recursive: true });
await write(path.join(exportPath, "TREE.md"), "```text\n" + result + "\n```");
console.log("✅  TREE.md generated");
