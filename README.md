# APH Labs / APH Systems — Official Website

Modern, high-performance website for **APH Labs**, specializing in precision machinery, optical instruments, ducted aerodynamic flow systems, and industrial shredders.

## 🚀 Live Production & DNS Configuration

- **Domain**: `www.aph-labs.com` / `aph-labs.com`
- **Registrar & DNS**: Cloudflare
- **Hosting**: GitHub Pages
- **CNAME**: Configured in [`CNAME`](./CNAME) (`www.aph-labs.com`)

### DNS Records to set in Cloudflare DNS Dashboard

Direct link: [Cloudflare DNS Records](https://dash.cloudflare.com/505c1a2d6a27a36539028a8a862b6011/aph-labs.com/dns/records)

| Type | Name / Host | Target / IPv4 Address | Proxy Status | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or `aph-labs.com`) | `185.199.108.153` | **DNS only** (Gray Cloud) | Auto |
| **A** | `@` (or `aph-labs.com`) | `185.199.109.153` | **DNS only** (Gray Cloud) | Auto |
| **A** | `@` (or `aph-labs.com`) | `185.199.110.153` | **DNS only** (Gray Cloud) | Auto |
| **A** | `@` (or `aph-labs.com`) | `185.199.111.153` | **DNS only** (Gray Cloud) | Auto |
| **CNAME** | `www` | `thepeakiscold.github.io` | **DNS only** (Gray Cloud) | Auto |

> **Important**: Set **Proxy Status** to **DNS only** (Gray cloud icon). GitHub Pages needs direct DNS resolution to verify domain ownership and provision the free Let's Encrypt SSL/TLS certificate.

---

## 🛠️ Project Structure

```
APH SYSTEMS WEBPAGE/
├── index.html                                  # Main landing page (overview, systems summary, capabilities, contact)
├── products/
│   ├── index.html                              # Systems catalog & platform comparison matrix
│   ├── optical-filament-gauge.html             # Optical Filament Diameter Gauge product page
│   ├── aerodynamic-flow-generator.html         # Ducted Aerodynamic Flow Generator product page
│   └── industrial-shredder.html                # Single-Shaft Industrial Shredder product page
├── CNAME                                       # GitHub Pages domain routing (www.aph-labs.com)
├── sitemap.xml                                 # Search engine sitemap covering homepage & product pages
├── robots.txt                                  # Crawler directives
└── assets/
    ├── css/style.css                           # Styling, executive palette, datasheet & dropdown styles
    ├── js/
    │   ├── tailwind-config.js                  # Shared Tailwind theme palette configuration
    │   └── main.js                             # Multilingual i18n (EN/TR), dropdowns, inquiry routing
    └── img/                                    # Studio renders, branding assets, favicons
```

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or serve it locally:

```bash
cd "/home/eyup/Projects/APH SYSTEMS/APH SYSTEMS WEBPAGE"
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.
