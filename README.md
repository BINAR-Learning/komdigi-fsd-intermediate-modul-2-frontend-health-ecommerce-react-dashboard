# komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard

> **E-Commerce Dashboard dengan React Router, React Query & Ant Design**

[![React](https://img.shields.io/badge/React-18+-blue)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6+-red)](https://reactrouter.com/)
[![React Query](https://img.shields.io/badge/React_Query-5+-purple)](https://tanstack.com/query/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5+-cyan)](https://ant.design/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Complete e-commerce dashboard dengan multi-page navigation, smart caching, professional UI components, dan global state management.

---

## Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard/
├── README.md (Ini file yang kamu baca)
├── starter-project/     #  Untuk practice (dengan TODO)
│   ├── README.md
│   ├── package.json
│   ├── src/
│   │   ├── components/ (with TODOs)
│   │   ├── pages/ (with TODOs)
│   │   ├── context/
│   │   ├── services/
│   │   └── App.jsx
│   └── ... config files
└── finished-project/    #  Complete dashboard
    ├── README.md
    ├── package.json
    ├── src/
    │   ├── components/ (7 complete components!)
    │   ├── pages/ (5 complete pages!)
    │   ├── context/ (Cart & Auth!)
    │   ├── services/
    │   └── App.jsx
    └── ... config files
```

**Pilih mana?**

- **Starter** - Untuk **practice React advanced** (RECOMMENDED!)
- **Finished** - Untuk **reference** implementation

---

## Quick Start (Untuk Newbie)

### Prerequisites

Sebelum mulai, pastikan backend API tersedia di `http://localhost:5000`.

PENTING - Backend (Modul 5):

Jangan lupa running project final backend dari Modul 5 di backend modul program intermediate ini. Backend yang harus digunakan adalah `komdigi-fsd-intermediate-modul-5-backend-health-ecommerce-external-integration` dari folder `backend/health-ecommerce-external-integration/finished-project`.

Langkah-langkah setup backend:

1. Masuk ke folder backend Modul 5:
```bash
cd backend/health-ecommerce-external-integration/finished-project
```

2. Install dependencies:
```bash
npm install
```

3. Setup file `.env`:
   - Buat file `.env` di folder `finished-project` (copy dari `.env.example` jika ada)
   - Set minimal environment variables berikut:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/health-ecommerce
     JWT_SECRET=your-super-secret-jwt-key-change-in-production-min-32-characters
     JWT_EXPIRES_IN=24h
     ```
   - Untuk fitur tambahan (optional), bisa set:
     - `GOOGLE_AI_API_KEY` (untuk AI chatbot)
     - `CLOUDINARY_*` (untuk image upload)
     - `MIDTRANS_*` (untuk payment)
     - `SMTP_*` (untuk email service)
     - `KEMENKES_API_KEY` (untuk Kemenkes integration)

4. Pastikan MongoDB running:
   - Tidak perlu menjalankan `mongod` jika tidak jalan di localmu
   - Pastikan saja MongoDB jalan dengan caramu, misalnya:
     - Membuka MongoDB Compass dan akses database yang kamu tuju (misalnya local db mu)
     - Jika MongoDB Compass sudah bisa connect ke `mongodb://localhost:27017`, berarti MongoDB sudah jalan
     - Atau jika pakai MongoDB Atlas, pastikan cluster sudah active
     - Intinya: Pastikan MongoDB bisa diakses sesuai MONGODB_URI yang kamu set di .env

5. Seed data (optional, jika ada):
```bash
npm run seed
```

6. Start backend (keep running di terminal terpisah):
```bash
npm run dev
```

7. Verifikasi backend running:
   - Backend akan tersedia di `http://localhost:5000`
   - Test dengan: `curl http://localhost:5000/health` atau buka di browser
   - Pastikan response success

8. Set environment variable di frontend:
   - Di file `.env` di frontend project (jika ada), atau langsung di code, pastikan URL backend sama dengan yang dirun
   - Default: `http://localhost:5000/api`
   - Jika backend running di port lain, update URL di `src/services/api.js` (ubah `BASE_URL`)

Jika instruksi di repo backend berbeda, ikuti README di repo tersebut.

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard

# 3. Masuk ke starter-project
cd starter-project

# 4. Install dependencies
npm install
# Tunggu ~2-3 menit (lebih banyak packages!)

# 5. Start development server
npm run dev

# Opens http://localhost:3000
```

**Note:** Port 3000 (beda dengan Modul 1 yang 5173)

### Option 2: Lihat Complete Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard

# 3. Masuk ke finished-project
cd finished-project

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev

# Complete dashboard with 5 pages ready!
```

---

## Apa yang Akan Kamu Bangun?

**Complete E-Commerce Dashboard** - Leveling up dari Modul 1!

### Features:

- **Multi-Page App** - Home, Products, Detail, Cart, Login (React Router)
- **Smart Caching** - Auto-cache products, no duplicate requests (React Query)
- **Professional UI** - Beautiful components dari Ant Design
- **Global State** - Shopping cart accessible dari semua pages (Context API)
- **Authentication** - Login flow dengan JWT dari backend
- **Advanced Filtering** - Search, category, price range
- **Responsive** - Works di mobile, tablet, desktop

### Tech Stack (Upgrade dari Modul 1):

- **React 18** + **Vite**
- **React Router 6** (NEW! Multi-page navigation)
- **React Query** (NEW! Smart caching)
- **Ant Design** (NEW! Professional UI library)
- **Context API** (NEW! Global state)
- **TailwindCSS** (From Modul 1)
- **Axios** (From Modul 1)

---

## Struktur Starter Project

```
starter-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            #  TODO: Navigation with cart badge
│   │   ├── ProductCard.jsx       #  TODO: Ant Design Card
│   │   └── ProtectedRoute.jsx    #  TODO: Auth guard
│   ├── pages/
│   │   ├── HomePage.jsx          #  TODO: Landing page
│   │   ├── ProductsPage.jsx      #  TODO: Catalog with React Query
│   │   ├── ProductDetailPage.jsx #  TODO: Single product
│   │   ├── CartPage.jsx          #  TODO: Shopping cart
│   │   └── LoginPage.jsx         #  TODO: Auth
│   ├── context/
│   │   └── CartContext.jsx       #  TODO: Global cart state
│   ├── services/
│   │   └── api.js                #  From Modul 1 (ready!)
│   ├── App.jsx                   #  TODO: Setup routes
│   └── main.jsx                  #  TODO: Setup providers
└── package.json                   #  All dependencies listed
```

**TODOs:**

- [ ] Setup React Router dengan 5 routes
- [ ] Configure React Query dengan QueryClient
- [ ] Create CartContext untuk global state
- [ ] Build pages dengan Ant Design components
- [ ] Implement navigation dengan Link components

---

## Struktur Finished Project

```
finished-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            #  Complete with cart badge
│   │   ├── ProductCard.jsx       #  Ant Design + Tailwind
│   │   ├── ProductTable.jsx      #  Admin table
│   │   └── ProtectedRoute.jsx    #  Auth guard working
│   ├── pages/
│   │   ├── HomePage.jsx          #  Hero + features
│   │   ├── ProductsPage.jsx      #  With filters + React Query
│   │   ├── ProductDetailPage.jsx #  Dynamic routing
│   │   ├── CartPage.jsx          #  Cart management
│   │   └── LoginPage.jsx         #  JWT authentication
│   ├── context/
│   │   ├── CartContext.jsx       #  Global cart state
│   │   └── AuthContext.jsx       #  Global auth state
│   ├── services/
│   │   └── api.js                #  Complete API service
│   ├── App.jsx                   #  All routes configured
│   └── main.jsx                  #  All providers nested
└── package.json
```

**All features working:**

- Multi-page navigation (5 pages)
- React Query caching & refetching
- Ant Design professional UI
- Global cart state
- Authentication flow
- Protected routes

---

## Testing

### 1. Test Multi-Page Navigation

```bash
# Start frontend (backend must be running!)
npm run dev

# Open http://localhost:3000
```

**Test flow:**

- Click "Products" → Navigate to /products
- Click product card → Navigate to /products/:id
- Click "Cart" → Navigate to /cart
- URL changes, no page reload!

### 2. Test React Query Caching

**Open React Query DevTools** (bottom left corner):

- Navigate to Products → See query "fetching"
- Data loads → Query shows "fresh"
- Navigate away → Navigate back
- Data instant! → Query shows "fresh" (from cache!)

### 3. Test Shopping Cart

- Add product to cart → Badge updates
- Navigate to different pages → Badge persists
- Go to Cart page → Items listed
- Remove item → Badge updates everywhere!

### 4. Test Authentication

```bash
# Login dengan test account:
Email: aila@example.com
Password: Aila123!

# JWT token saved → Can access protected routes
```

---

## Perbedaan dengan Modul 1

| Aspect            | Modul 1 (Fundamentals)       | Modul 2 (Advanced)                            |
| ----------------- | ---------------------------- | --------------------------------------------- |
| **Navigation**    | Single page (no routing)     | Multi-page dengan React Router                |
| **Data Fetching** | Manual useEffect + axios     | React Query dengan auto-caching               |
| **UI Components** | Custom components + Tailwind | Ant Design + Tailwind                         |
| **State**         | Local state (useState)       | Global state (Context API)                    |
| **Pages**         | 1 page                       | 5 pages (Home, Products, Detail, Cart, Login) |
| **Complexity**    | Beginner-friendly            | Production-ready                              |

**Modul 1 taught:** React basics  
**Modul 2 teaches:** Production patterns

---

## Troubleshooting

### "useQuery is not defined"

**Solusi:**

```bash
npm install @tanstack/react-query
```

Tambahkan di main.jsx:

```jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
```

### "Ant Design styles not loading"

**Solusi:**

```jsx
// main.jsx - add import
import "antd/dist/reset.css";
```

### "useCart must be used within CartProvider"

**Solusi:**
Check main.jsx - CartProvider harus wrap App:

```jsx
<CartProvider>
  <App />
</CartProvider>
```

### "Cannot read property 'data' of undefined"

**Solusi:**
Use optional chaining dengan React Query:

```jsx
const products = data?.data || [];
```

---

## Tips Development

1. **Keep backend running** - Port 5000
2. **Use React Query DevTools** - See cache in action
3. **Check Ant Design docs** - 50+ components available
4. **Context for global only** - Local state untuk UI
5. **Test routing** - Use browser back/forward buttons

---

## Resources

**Documentation:**

- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Ant Design](https://ant.design/)

**Tools:**

- [React Query DevTools](https://tanstack.com/query/latest/docs/react/devtools)
- [Ant Design Components](https://ant.design/components/overview)

---

## Next Steps

After completing this module:

1.  **Test complete dashboard** - All features working
2.  **Deploy to Vercel/Netlify** - Share your work!
3.  **Frontend Modul 3** - UI/UX best practices, Playwright intro
4.  **Common Modules** - Testing & GitHub workflow
5.  **Customize** - Make it yours!

---

**Happy Building!**

_Frontend Modul 2 - React Advanced_  
_Connecting to Health E-Commerce ULTIMATE Backend (Port 5000)_

---

** Repository Info:**

- **Name:** `komdigi-fsd-intermediate-modul-2-frontend-health-ecommerce-react-dashboard`
- **Type:** React Advanced (Multi-Page Dashboard)
- **Backend:** Connects to `localhost:5000` (Backend Modul 5: `komdigi-fsd-intermediate-modul-5-backend-health-ecommerce-external-integration`)
- **Structure:** 1 Repo, 2 Folders (starter + finished)
