import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

// (1)
const values = [
    ["0x0000000000000000000000000000000000000001"],
    ["0x0000000000000000000000000000000000000002"],
];

// (2)
const tree = StandardMerkleTree.of(values, ["address"]);

// (3)
console.log('Merkle Root:', tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));

console.log(tree.render())