export const profile = {
  name: "Aditya Yudha Hari Pratama",
  role: "IT Student @ Telkom University",
  tagline: "Cybersecurity Enthusiast & Fullstack Developer",
  location: "Indonesia",
  bio: "Fokus pada tantangan CTF dan pembangunan sistem POS yang aman dan efisien. Eksplorasi mendalam pada Teori Graph, Modular Arithmetic, dan Cybersecurity Tactics.",
  email: "adityayudha.works@gmail.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
  codeSnippet: `// TryHackMe: yoodha
// Status: CTF Active
// Skill: LFI to RCE`,
  links: [
    {
      label: "GitHub",
      href: "https://github.com/BULLSH4RK",
      accent: "mint",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/aditya-yudha-hari-pratama-906621407",
      accent: "mint",
    },
    {
      label: "TryHackMe",
      href: "https://tryhackme.com/p/yoodha",
      accent: "solid",
    },
  ],
  stats: [
    { value: "CTF", label: "Active Player" },
    { value: "POS", label: "Systems Built" },
    { value: "Web", label: "Exploitation Focus" },
  ],
}

export const projects = [
  {
    title: "Kasir-App (Flutter)",
    description:
      "Aplikasi POS mobile dengan SQLite untuk manajemen barang, transaksi, dan export laporan Excel secara instan.",
    tags: ["Flutter", "SQLite", "Excel-Export"],
    status: "On Progress",
    emoji: "📱",
    size: "lg",
  },
  {
    title: "CTF Write-ups",
    description:
      "Cheese CTF (LFI-to-RCE), Hextroadinary, dan berbagai tantangan di TryHackMe.",
    tags: ["LFI", "RCE", "THM"],
    emoji: "🚩",
    href: "https://tryhackme.com/p/yoodha",
    size: "sm",
  },
  {
    title: "Web POS System",
    description:
      "Sistem kasir berbasis web dengan Role-Based Access Control (RBAC) dan integrasi LLM lokal.",
    tags: ["PHP", "RBAC", "LLM"],
    emoji: "💻",
    size: "sm",
  },
  {
    title: "Technical Core",
    description:
      "Eksplorasi mendalam pada Teori Graph, Modular Arithmetic, dan Cybersecurity Tactics.",
    tags: ["Math", "Security", "Graph Theory"],
    emoji: "🧠",
    size: "lg",
  },
]

export const skills = [
  { category: "Dev", label: "Flutter & Dart", level: 4 },
  { category: "Dev", label: "PHP & Laravel", level: 3 },
  { category: "Dev", label: "Go", level: 3 },
  { category: "Dev", label: "SQLite / MySQL", level: 4 },
  { category: "Sec", label: "CTF / Web Exploitation", level: 4 },
  { category: "Sec", label: "LFI to RCE", level: 4 },
  { category: "Sec", label: "Linux / WSL2", level: 4 },
  { category: "Math", label: "Linear Algebra", level: 3 },
  { category: "Math", label: "Modular Arithmetic", level: 3 },
  { category: "Math", label: "Graph Theory", level: 3 },
]

export const experiences = [
  {
    period: "2024 — Sekarang",
    title: "Mahasiswa IT",
    org: "Telkom University",
    description:
      "Menempuh studi di bidang teknologi informasi, aktif mendalami keamanan siber dan pengembangan aplikasi.",
  },
  {
    period: "Aktif",
    title: "CTF Player",
    org: "TryHackMe — yoodha",
    description:
      "Menyelesaikan room dan tantangan web exploitation, termasuk Cheese CTF dengan teknik LFI-to-RCE.",
  },
  {
    period: "In Progress",
    title: "Developer",
    org: "Proyek Pribadi",
    description:
      "Membangun sistem POS berbasis web dengan RBAC dan integrasi LLM lokal, serta aplikasi POS mobile Flutter.",
  },
]
