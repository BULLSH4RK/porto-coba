const fs = require("fs")
const path = require("path")

const src = path.join(process.cwd(), "src", "assets", "profile.jpg")
const out = path.join(process.cwd(), "src", "lib", "avatar.ts")

if (!fs.existsSync(src)) {
  console.error("profile.jpg not found at", src)
  process.exit(1)
}

const mime = ".jpg" === path.extname(src).toLowerCase() ? "jpeg" : path.extname(src).toLowerCase().slice(1)
const dataUri = "data:image/" + mime + ";base64," + fs.readFileSync(src).toString("base64")

fs.writeFileSync(out, "const avatar = \"" + dataUri + "\"\n\nexport default avatar\n")
console.log("avatar.ts generated:", Math.round(dataUri.length / 1024) + "KB")
