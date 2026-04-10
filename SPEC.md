# SPEC.md — Brasil Importados

## Concept & Vision

A premium Brazilian import storefront targeting consumers looking for exclusive international products not easily found in Brazil. The vibe is **premium but approachable** — the feeling of discovering something unique and trustworthy. Think: high-end import boutique, not a flea market. Live sales add urgency and excitement, reinforcing scarcity and exclusivity.

## Brand Identity

- **Name:** Brasil Importados
- **Tagline:** "O mundo ao seu alcance" — The world at your fingertips
- **Color Palette:**
  - Background: `#0f0f13` (deep charcoal)
  - Surface: `#1a1a24` (card bg)
  - Border: `#2a2a3a`
  - Primary: `#e6a817` (Brazilian gold / yellow)
  - Accent: `#1a8a4a` (Brazilian green)
  - Text: `#f0f0f5`
  - Muted: `#7a7a8a`
- **Typography:** System fonts, clean and sharp
- **Emoji aesthetic:** 🇧🇷 warm, confident, Brazilian energy

## Pages

### 1. Home / Landing (`index.html`)
- Full-screen hero with tagline + CTA
- Featured products carousel (3-6 items)
- "How it works" section (import process)
- Live sales teaser (next upcoming live)
- Trust badges (secure payment, fast shipping, original products)
- Newsletter signup
- Footer with links

### 2. Shop (`shop.html`)
- Product grid (all products)
- Category filter (Electronics, Beauty, Fashion, Home)
- Sort by (Price, Newest)
- Cart sidebar (slide-in)
- Each product card: image, name, price (BRL), "Add to Cart" button
- Responsive 2-4 column grid

### 3. Product Detail (`product.html?id=X`)
- Large product image
- Product name, price, description
- Quantity selector
- "Add to Cart" CTA
- Related products section
- Back to shop link

### 4. Live Sales (`live.html`)
- Hero section with "LIVE NOW" badge if active
- Next scheduled live: date, time, teaser products
- Countdown timer to next live
- Past recordings / highlights grid
- "Notify me" button for upcoming lives

### 5. About (`about.html`)
- Story of the business
- How import works (step by step)
- Trust and authenticity section

### 6. Contact (`contact.html`)
- Contact form (name, email, message)
- WhatsApp CTA button
- Social links

## Cart System
- Pure localStorage — no backend
- Cart icon with badge (item count)
- Slide-in cart sidebar
- Update quantities, remove items
- Subtotal display
- "Finalize" button (shows WhatsApp message with order)

## Products (Seed Data — 12 items)

### Electronics
1. Sony WH-1000XM5 — Headphones — R$ 1.899
2. Apple AirPods Pro 2 — R$ 1.299
3. Samsung Galaxy Watch 6 — R$ 1.799

### Beauty
4. Dyson Airwrap — R$ 2.499
5. Skincare Set (The Ordinary) — R$ 349
6. Perfume Chanel Coco Mademoiselle 50ml — R$ 699

### Fashion
7. Casual Leather Watch — R$ 459
8. Ray-Ban Aviator Classic — R$ 599
9. Backpack Herschel — R$ 329

### Home
10. Air Purifier Xiaomi 4 Pro — R$ 899
11. Nespresso Vertuo Pop — R$ 799
12. Smart LED Strip 5m — R$ 189

## Technical
- Pure HTML + CSS + Vanilla JS
- No frameworks, no build step
- Products stored in `products.js` as a shared array
- Cart state in localStorage
- Responsive: mobile-first breakpoints at 480px, 768px, 1024px
