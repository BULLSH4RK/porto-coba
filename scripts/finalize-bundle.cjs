const fs = require("fs")
const path = require("path")

const bpath = path.join(process.cwd(), "bundle.html")
const dist = path.join(process.cwd(), "dist")
let s = fs.readFileSync(bpath, "utf8")

const fontRe = /url\(([^)]*\.(?:woff2|woff))\)/g
let m
const cache = {}
let fonts = 0
while ((m = fontRe.exec(s))) {
  const f = path.basename(m[1])
  const p = path.join(dist, f)
  if (fs.existsSync(p) && !cache[m[1]]) {
    cache[m[1]] = "data:font/" + (f.endsWith(".woff2") ? "woff2" : "woff") + ";base64," + fs.readFileSync(p).toString("base64")
    fonts++
  }
}
for (const [k, v] of Object.entries(cache)) s = s.split(k).join(v)

const rules = s.split("}")
let fixed = 0
for (let i = 0; i < rules.length; i++) {
  const rule = rules[i]
  const hasUnprefixed = /[{;]backdrop-filter:/.test(rule)
  if (rule.includes("-webkit-backdrop-filter:") && !hasUnprefixed) {
    const value = rule.match(/-webkit-backdrop-filter:([^;]+);/)
    if (value) {
      rules[i] = rule.replace("-webkit-backdrop-filter:", "backdrop-filter:" + value[1] + ";-webkit-backdrop-filter:")
      fixed++
    }
  }
}
s = rules.join("}")

fs.writeFileSync(bpath, s)
console.log("fonts inlined:", fonts, "| backdrop-filter rules fixed:", fixed)
