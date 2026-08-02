const PptxGenJS = require("pptxgenjs")
const pptx = new PptxGenJS()

pptx.layout = "LAYOUT_WIDE"
pptx.author = "Aditya Yudha Hari Pratama"
pptx.subject = "Portfolio"
pptx.title = "Aditya Yudha — Portfolio"

const C = {
  bg: "15151C",
  bgCard: "1E1E28",
  bgCard2: "262633",
  amber: "F8E8C5",
  amberBright: "FFC48B",
  text: "F4F0E6",
  textMuted: "A8A29E",
  white: "FFFFFF",
}

const F = { header: "Cambria", body: "Calibri" }

function addBg(slide, dark = false) {
  slide.background = { color: dark ? C.bg : "FFFFFF" }
}

// ---------- SLIDE 1: TITLE ----------
{
  const s = pptx.addSlide()
  s.background = { color: C.bg }
  s.addText("ADITYA YUDHA", {
    x: 0.6,
    y: 2.0,
    w: 12,
    h: 1.4,
    fontSize: 60,
    bold: true,
    color: C.text,
    fontFace: F.header,
    charSpacing: 4,
  })
  s.addText("HARI PRATAMA", {
    x: 0.6,
    y: 3.2,
    w: 12,
    h: 1.0,
    fontSize: 36,
    color: C.amberBright,
    fontFace: F.header,
    charSpacing: 6,
  })
  s.addText("Building secure systems from CTF to production", {
    x: 0.6,
    y: 4.5,
    w: 12,
    h: 0.6,
    fontSize: 18,
    color: C.textMuted,
    fontFace: F.body,
    italic: true,
  })
  s.addText("Cybersecurity & Fullstack Developer · Telkom University", {
    x: 0.6,
    y: 5.2,
    w: 12,
    h: 0.5,
    fontSize: 14,
    color: C.amber,
    fontFace: F.body,
  })
  s.addShape("ellipse", { x: 10.8, y: 0.8, w: 2.6, h: 2.6, fill: { color: C.amber }, transparency: 85 })
  s.addShape("ellipse", { x: 1.0, y: 5.4, w: 1.2, h: 1.2, fill: { color: C.amberBright }, transparency: 75 })
  s.addShape("ellipse", { x: 12.0, y: 4.6, w: 0.8, h: 0.8, fill: { color: C.amber }, transparency: 70 })
}

// ---------- SLIDE 2: ABOUT ----------
{
  const s = pptx.addSlide()
  addBg(s)
  s.addText("ABOUT", { x: 0.6, y: 0.5, w: 4, h: 0.5, fontSize: 13, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 3 })
  s.addText("Mahasiswa IT yang hidup di antara dua dunia: keamanan siber dan membangun software.", {
    x: 0.6, y: 1.0, w: 12, h: 0.9, fontSize: 24, bold: true, color: "1A1A22", fontFace: F.header,
  })

  const facts = [
    { title: "Dari CTF ke Production", desc: "Pertama tertarik lewat Cheese CTF (LFI-to-RCE). Kini menggabungkan mindset offensive security di setiap build." },
    { title: "Fullstack Builder", desc: "Flutter POS dengan SQLite, web POS dengan RBAC, integrasi LLM lokal — end-to-end." },
    { title: "Math as Foundation", desc: "Modular Arithmetic dan Graph Theory dipakai untuk optimasi keamanan dan algoritma." },
  ]
  facts.forEach((f, i) => {
    const y = 2.2 + i * 1.7
    s.addShape("roundRect", { x: 0.6, y, w: 12.1, h: 1.4, rectRadius: 0.15, fill: { color: C.bgCard }, line: { color: "E5E5EC", width: 0.5 } })
    s.addShape("ellipse", { x: 0.9, y: y + 0.35, w: 0.7, h: 0.7, fill: { color: C.amberBright } })
    s.addText(String(i + 1), { x: 0.9, y: y + 0.35, w: 0.7, h: 0.7, fontSize: 18, bold: true, color: "1A1A22", align: "center", fontFace: F.header })
    s.addText(f.title, { x: 1.9, y: y + 0.12, w: 10.5, h: 0.45, fontSize: 16, bold: true, color: "1A1A22", fontFace: F.header })
    s.addText(f.desc, { x: 1.9, y: y + 0.6, w: 10.5, h: 0.65, fontSize: 12, color: "5A5A66", fontFace: F.body })
  })
}

// ---------- SLIDE 3: SKILLS ----------
{
  const s = pptx.addSlide()
  addBg(s)
  s.addText("TECHNICAL CORE", { x: 0.6, y: 0.5, w: 6, h: 0.5, fontSize: 13, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 3 })
  s.addText("Alat & konsep yang saya pakai untuk membangun dan menguji sistem.", {
    x: 0.6, y: 1.0, w: 12, h: 0.6, fontSize: 22, bold: true, color: "1A1A22", fontFace: F.header,
  })

  const skills = [
    { cat: "DEV", label: "Flutter & Dart", level: 4 },
    { cat: "DEV", label: "PHP & Laravel", level: 3 },
    { cat: "DEV", label: "Go", level: 3 },
    { cat: "DEV", label: "SQLite / MySQL", level: 4 },
    { cat: "SEC", label: "CTF / Web Exploit", level: 4 },
    { cat: "SEC", label: "LFI to RCE", level: 4 },
    { cat: "SEC", label: "Linux / WSL2", level: 4 },
    { cat: "MATH", label: "Linear Algebra", level: 3 },
    { cat: "MATH", label: "Modular Arithmetic", level: 3 },
    { cat: "MATH", label: "Graph Theory", level: 3 },
  ]
  const catColor = { DEV: C.bgCard, SEC: "7A2E2E", MATH: "2E4A5A" }

  skills.forEach((sk, i) => {
    const col = i % 5
    const row = Math.floor(i / 5)
    const x = 0.6 + col * 2.44
    const y = 2.0 + row * 2.1
    s.addShape("roundRect", { x, y, w: 2.3, h: 1.85, rectRadius: 0.12, fill: { color: catColor[sk.cat] } })
    s.addText(sk.cat, { x, y: y + 0.15, w: 2.3, h: 0.3, fontSize: 9, bold: true, color: C.amber, fontFace: F.body, charSpacing: 2, align: "center" })
    s.addText(sk.label, { x: x + 0.15, y: y + 0.55, w: 2.0, h: 0.8, fontSize: 13, bold: true, color: "FFFFFF", fontFace: F.body, align: "center", valign: "middle" })
    s.addText("★★★★".slice(0, sk.level) + "★".repeat(5 - sk.level), {
      x, y: y + 1.4, w: 2.3, h: 0.3, fontSize: 10, color: C.amberBright, align: "center", fontFace: F.body,
    })
  })
}

// ---------- SLIDE 4: PROJECTS ----------
{
  const s = pptx.addSlide()
  addBg(s)
  s.addText("FEATURED WORKS", { x: 0.6, y: 0.5, w: 6, h: 0.5, fontSize: 13, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 3 })
  s.addText("Proyek yang sedang saya garap.", { x: 0.6, y: 1.0, w: 12, h: 0.6, fontSize: 22, bold: true, color: "1A1A22", fontFace: F.header })

  const projects = [
    { emoji: "📱", title: "Kasir-App (Flutter)", desc: "POS mobile dengan SQLite — manajemen barang, transaksi, export laporan Excel.", tags: "Flutter · SQLite · Excel", status: "ON PROGRESS" },
    { emoji: "🚩", title: "CTF Write-ups", desc: "Cheese CTF (LFI-to-RCE), Hextroadinary, tantangan TryHackMe.", tags: "LFI · RCE · THM", status: "ACTIVE" },
    { emoji: "💻", title: "Web POS System", desc: "Kasir berbasis web dengan RBAC dan integrasi LLM lokal.", tags: "PHP · RBAC · LLM", status: "IN PROGRESS" },
    { emoji: "🧠", title: "Technical Core", desc: "Graph Theory, Modular Arithmetic, Cybersecurity tactics.", tags: "Math · Security", status: "EXPLORING" },
  ]
  projects.forEach((p, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 0.6 + col * 6.15
    const y = 1.9 + row * 2.2
    s.addShape("roundRect", { x, y, w: 5.9, h: 2.0, rectRadius: 0.15, fill: { color: C.bgCard } })
    s.addShape("roundRect", { x, y: y + 0.12, w: 1.0, h: 0.35, rectRadius: 0.1, fill: { color: C.amberBright } })
    s.addText(p.status, { x, y: y + 0.16, w: 1.0, h: 0.28, fontSize: 7, bold: true, color: "1A1A22", align: "center", fontFace: F.body })
    s.addText(p.emoji, { x: x + 0.25, y: y + 0.5, w: 0.6, h: 0.6, fontSize: 24, align: "center", fontFace: F.body })
    s.addText(p.title, { x: x + 1.0, y: y + 0.45, w: 4.7, h: 0.45, fontSize: 16, bold: true, color: "FFFFFF", fontFace: F.header })
    s.addText(p.desc, { x: x + 1.0, y: y + 0.95, w: 4.7, h: 0.6, fontSize: 11, color: "B8B8C4", fontFace: F.body })
    s.addText(p.tags, { x: x + 1.0, y: y + 1.55, w: 4.7, h: 0.3, fontSize: 10, color: C.amber, fontFace: F.body })
  })
}

// ---------- SLIDE 5: EXPERIENCE ----------
{
  const s = pptx.addSlide()
  s.background = { color: C.bg }
  s.addText("JOURNEY", { x: 0.6, y: 0.5, w: 6, h: 0.5, fontSize: 13, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 3 })
  s.addText("Dari CTF player hingga fullstack developer.", { x: 0.6, y: 1.0, w: 12, h: 0.6, fontSize: 22, bold: true, color: C.text, fontFace: F.header })

  const exps = [
    { period: "2024 — SEKARANG", title: "Mahasiswa IT", org: "Telkom University", desc: "Fokus pada keamanan siber dan pengembangan aplikasi." },
    { period: "AKTIF", title: "CTF Player", org: "TryHackMe — yoodha", desc: "Web exploitation, Cheese CTF, LFI-to-RCE." },
    { period: "IN PROGRESS", title: "Developer", org: "Proyek Pribadi", desc: "POS web dengan RBAC dan LLM lokal, POS mobile Flutter." },
  ]
  s.addShape("rect", { x: 6.4, y: 2.0, w: 0.03, h: 4.3, fill: { color: C.amber } })
  exps.forEach((e, i) => {
    const y = 2.0 + i * 1.55
    s.addShape("ellipse", { x: 6.26, y: y + 0.15, w: 0.3, h: 0.3, fill: { color: C.amberBright } })
    s.addText(e.period, { x: 0.7, y: y, w: 5.0, h: 0.3, fontSize: 10, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 2 })
    s.addText(e.title, { x: 0.7, y: y + 0.32, w: 5.0, h: 0.5, fontSize: 18, bold: true, color: C.text, fontFace: F.header })
    s.addText(e.org, { x: 0.7, y: y + 0.8, w: 5.0, h: 0.35, fontSize: 12, color: C.amber, fontFace: F.body })
    s.addText(e.desc, { x: 7.0, y: y + 0.1, w: 5.3, h: 1.0, fontSize: 12, color: C.textMuted, fontFace: F.body, valign: "middle" })
  })
}

// ---------- SLIDE 6: CONTACT ----------
{
  const s = pptx.addSlide()
  addBg(s)
  s.addText("LET'S BUILD SOMETHING", { x: 0.6, y: 0.5, w: 8, h: 0.5, fontSize: 13, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 3 })
  s.addText("Tertarik berkolaborasi?", { x: 0.6, y: 1.0, w: 12, h: 0.7, fontSize: 28, bold: true, color: "1A1A22", fontFace: F.header })

  const links = [
    { label: "EMAIL", value: "adityayudha.works@gmail.com", color: C.bgCard },
    { label: "GITHUB", value: "github.com/BULLSH4RK", color: "2E2E3A" },
    { label: "LINKEDIN", value: "linkedin.com/in/aditya-yudha-hari-pratama", color: C.bgCard },
    { label: "TRYHACKME", value: "tryhackme.com/p/yoodha", color: "7A2E2E" },
  ]
  links.forEach((l, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 0.6 + col * 6.15
    const y = 2.0 + row * 1.5
    s.addShape("roundRect", { x, y, w: 5.9, h: 1.3, rectRadius: 0.12, fill: { color: l.color } })
    s.addText(l.label, { x: x + 0.3, y: y + 0.2, w: 5.3, h: 0.35, fontSize: 10, bold: true, color: C.amberBright, fontFace: F.body, charSpacing: 2 })
    s.addText(l.value, { x: x + 0.3, y: y + 0.6, w: 5.3, h: 0.4, fontSize: 13, bold: true, color: "FFFFFF", fontFace: F.body })
  })

  s.addText("Terbuka untuk diskusi, kolaborasi, dan peluang baru.", {
    x: 0.6, y: 5.4, w: 12, h: 0.5, fontSize: 13, italic: true, color: "5A5A66", fontFace: F.body, align: "center",
  })
}

pptx.writeFile({ fileName: "portfolio-aditya.pptx" }).then(() => console.log("DONE"))
