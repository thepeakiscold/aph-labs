# APH Systems — Official Website

Modern, high-performance website for **APH Systems**, specializing in precision machinery, in-line optical filament metrology, ducted wind turbines, and industrial shredders.

## 🚀 Live Production & DNS Configuration

- **Domain**: `www.aphsystems.com` / `aphsystems.com`
- **Hosting**: GitHub Pages
- **CNAME**: Configured in [`CNAME`](./CNAME)

### DNS Records to set at your Domain Registrar (Porkbun / Cloudflare)

| Type | Name / Host | Target / Value | TTL | Note |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (or `aphsystems.com`) | `185.199.108.153` | Auto / 300 | GitHub Pages Server 1 |
| **A** | `@` (or `aphsystems.com`) | `185.199.109.153` | Auto / 300 | GitHub Pages Server 2 |
| **A** | `@` (or `aphsystems.com`) | `185.199.110.153` | Auto / 300 | GitHub Pages Server 3 |
| **A** | `@` (or `aphsystems.com`) | `185.199.111.153` | Auto / 300 | GitHub Pages Server 4 |
| **CNAME** | `www` | `<your-github-username>.github.io` | Auto / 300 | Subdomain redirect |

---

## 🛠️ Project Structure

```
APH SYSTEMS WEBPAGE/
├── index.html                  # Main responsive single-page landing site
├── CNAME                       # GitHub Pages domain routing (www.aphsystems.com)
├── assets/
│   ├── css/style.css           # Styling, dark engineering aesthetic, animations
│   ├── js/main.js              # Telemetry simulator, RFQ modal, mobile drawer
│   └── img/                    # Engineering graphics, FEA results, sensor snaps
└── .github/workflows/
    └── deploy.yml              # Automatic GitHub Pages CI/CD deployment
```

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or serve it locally:

```bash
# Using Python built-in server:
python3 -m http.server 8080
```
Then visit `http://localhost:8080`.
