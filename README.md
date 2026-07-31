# Portfolio Glassmorphism — Aditya Yudha

Website portofolio pribadi bergaya **Glassmorphism** untuk **Aditya Yudha Hari Pratama** (Cybersecurity Enthusiast & Fullstack Developer).

## Fitur

- **Aurora Background**: Bola cahaya beranimasi + grid halus di atas base `#23212C`
- **Glassmorphism Components**: Kartu kaca multi-level (`backdrop-blur` 16–28px, border tint mint `#F1FEC8`)
- **Bento Grid Layout**: Showcase proyek modular
- **Scroll Reveal Animations**: Framer Motion (`whileInView`), menghormati `prefers-reduced-motion`
- **Responsive Design**: Optimal di mobile dan desktop, navigasi pill dapat di-scroll
- **Font self-hosted**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono (ter-inline di bundle)

## Tech Stack

React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Framer Motion + Parcel

## Cara Menjalankan

```bash
pnpm install
pnpm dev        # development server
pnpm build      # build produksi (vite)
```

Hasil bundel satu file ada di `bundle.html` — cukup buka di browser (sudah termasuk font).

## Palet Warna

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `void` | `#23212C` | Background utama |
| `mint` | `#F1FEC8` | Accent, glow, CTA |

## Struktur

```
src/
├── components/
│   ├── ui/            # shadcn/ui primitives
│   ├── AuroraOrbs.tsx # background animasi
│   ├── NavPill.tsx    # navigasi kaca fixed
│   ├── Hero.tsx       # kartu hero + profil
│   ├── About.tsx      # kartu fakta
│   ├── Projects.tsx   # bento grid proyek
│   ├── Skills.tsx     # badge keahlian
│   ├── Experience.tsx # timeline
│   ├── Contact.tsx    # form kontak glass
│   └── Footer.tsx
├── hooks/useScrollReveal.ts  # variants Framer Motion
└── lib/data.ts                # konten portofolio
```

## Rebuild Bundel Satu File

```bash
bash .claude/skills/frontend-design/skills/web-artifacts-builder/scripts/bundle-artifact.sh
node /tmp/finalize_bundle.js   # inline font + fix backdrop-filter prefix
```

---
Built with React + Tailwind CSS + Framer Motion.
