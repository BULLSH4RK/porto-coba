# Design: GlassmorphismPortfolioBlock v2 (Aditya)

Tanggal: 2026-08-03

## Ringkasan

Menggantikan `Hero.tsx` dengan hero section glassmorphism dua kolom: content di kiri (bio, highlights, CTA), profile card di kanan (avatar, nama, social links). Fully data-driven dari `src/lib/data.ts`.

## Info

Mode: Experience — portfolio. Artifact yang leading, interface yang menutup.

## Data source

Semua konten berasal dari `src/lib/data.ts`:

- `profile.name`, `profile.role`, `profile.bio`, `profile.email`, `profile.avatar`, `profile.links`
- Array baru `highlights` (3 item, role-focused) yang ditambahkan ke `data.ts`

## Struktur `highlights`

```ts
export const highlights = [
  {
    title: "Cybersecurity & Fullstack",
    description:
      "Membangun aplikasi end-to-end — dari mobile POS Flutter dengan SQLite hingga web POS dengan RBAC dan integrasi LLM lokal.",
  },
  {
    title: "CTF Active Player",
    description:
      "Cheese CTF (LFI-to-RCE), Hextroadinary, dan berbagai tantangan web exploitation di TryHackMe.",
  },
  {
    title: "Math as Foundation",
    description:
      "Modular Arithmetic dan Graph Theory bukan sekadar teori — dipakai untuk optimasi sistem keamanan dan algoritma.",
  },
]
```

## Struktur komponen

```
section#home (min-h-screen, fluid px/py)
└── container max-w-6xl (lg:max-w-7xl)
    └── glass card rounded-3xl backdrop-blur-2xl
        └── grid gap-8 lg:grid-cols-2
            ├── Kolom kiri
            │   ├── Badge "Portfolio Insight"
            │   ├── H2 (nama + role) — fluid clamp
            │   ├── P bio singkat
            │   ├── Highlights grid — 1 kolom, semua card full-width
            │   └── CTA Button "View my work"
            └── Kolom kanan — Profile card
                ├── Avatar + glow
                ├── Nama + subtitle
                ├── Bio singkat
                └── Social links (icon + label)
```

### Highlights grid (3 item ganjil, tanpa ruang kosong)

Karena 3 item ganjil, seluruh kartu dibuat full-width dalam satu kolom grid (`gap-3 sm:gap-4`). Tidak ada bagian yang lebih sempit — setiap kartu memegang lebar penuh kontainer sehingga tidak ada celah kosong yang tergantung. Pada layar ≥1280 tinggi baru memberi ruang.

## Responsive matrix

| Breakpoint | Layout | Highlights |
|---|---|---|
| < 640 (mobile) | stack, card full-width | 1 kolom, 3 kartu penuh |
| 640–1023 (tablet) | stack, ruang lebih luas | 1 kolom, 3 kartu penuh |
| ≥ 1024 (lg) | grid 2 kolom | 1 kolom di kiri |
| ≥ 1280 (xl) | grid 2 kolom, container 7xl | 1 kolom di kiri |

## Touch targets

Semua elemen interaktif (social links, CTA, menu) min-height 44px.

## Aksesibilitas

- Dekorasi orbs `aria-hidden`
- `alt` dari `profile.name`
- Focus ring pada tombol
- Hormati `prefers-reduced-motion`

## Dependencies

Sudah terinstall: `lucide-react`, `framer-motion`. Tidak ada tambahan.

## Verifikasi

- `pnpm build` (tsc + vite)
- `pnpm lint` (oxlint)
- Playwright screenshot 320/375/768/1024/1280/1920 — tanpa horizontal overflow, tanpa target kecil