# Health E-Commerce Dashboard - Complete Implementation

> **Frontend Modul 2: React Advanced dengan Router, Query & Ant Design**

[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-6.21-red)](https://reactrouter.com/)
[![React Query](https://img.shields.io/badge/TanStack_Query-5.17-purple)](https://tanstack.com/query/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-5.12-cyan)](https://ant.design/)

**Complete reference implementation - All features working!**

---

## Apa Isi Project Ini?

**Finished project** dengan **semua fitur lengkap**:

- React Router v6 - Multi-page navigation (5 pages)
- TanStack Query v5 - Smart caching & auto-refetch
- Ant Design v5 - Professional UI components
- Context API - Global cart state
- Backend integration - localhost:5000
- localStorage persistence - Cart survives reload!

**Status:** **COMPLETE** - Siap dipelajari & dijalankan!

---

## What You'll See

**Complete Features:**

1. **Homepage** - Hero section + features cards
2. **Products Page** - Product grid dengan filters (category, search)
3. **Product Detail** - Dynamic routing, detailed view
4. **Shopping Cart** - Add/remove/update dengan table
5. **Login Page** - Authentication dengan JWT

**Tech Highlights:**

- React Query caching (data persists 5 minutes!)
- Cart persists in localStorage
- Responsive Ant Design components
- Clean routing dengan React Router v6
- Global state dengan Context API

---

## Quick Start (Untuk Newbie)

### Prerequisites

**Wajib Running:** backend API di `http://localhost:5000`.

PENTING - Backend (Modul 5):

Clone dan jalankan backend dari Modul 5 atau gunakan link:

https://github.com/BINAR-Learning/health-ecommerce-external-integration

Contoh singkat:

```bash
git clone https://github.com/BINAR-Learning/health-ecommerce-external-integration.git
cd health-ecommerce-external-integration/finished-project
npm install
# Jika ada seed data:
npm run seed
npm run dev
# Backend akan berjalan di http://localhost:5000
```

---

### Run Finished Project

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/health-ecommerce-react-dashboard.git
cd health-ecommerce-react-dashboard

# 2. Masuk ke finished-project
cd finished-project

# 3. Install dependencies
npm install
# Tunggu 2-3 menit

# 4. Start development server
npm run dev

# 5. Browser auto-opens di http://localhost:3000
# Jika tidak, buka manual
```

** Expected Result:**

- Homepage dengan hero section
- Navigate to Products → Product grid loads
- Click product → Detail page dengan info lengkap
- Add to cart → Badge updates, cart persists
- React Query DevTools visible (bottom-left)

---

## Key Features Explained

### 1. React Router v6 Multi-Page

**Navigation without page reload!**

```jsx
// src/App.jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/products" element={<ProductsPage />} />
  <Route path="/products/:id" element={<ProductDetailPage />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
```

**Test:**

- Click navigation links → URL changes
- Use browser back/forward → Works perfectly!
- Bookmark product detail → Direct access works!

---

### 2. React Query Smart Caching

**Data fetching done right!**

```jsx
// src/pages/ProductsPage.jsx
const { data, isLoading } = useQuery({
  queryKey: ["products", filters],
  queryFn: () => getProducts(filters),
  staleTime: 5 * 60 * 1000, // Fresh for 5 minutes!
});
```

**Benefits:**

- No duplicate requests (smart caching)
- Auto background refetch (keep data fresh)
- Loading & error states built-in
- DevTools untuk debugging

**Test React Query:**

1. Open React Query DevTools (bottom-left)
2. Navigate to Products → See "fetching" → "fresh"
3. Navigate away → Navigate back
4. Data instant! (from cache)

---

### 3. Ant Design Professional UI

**50+ ready-to-use components!**

Used in this project:

- Card, Button, Table, Form, Input
- Select, Tag, Badge, Spin, Alert, Empty
- Descriptions, InputNumber

**Why Ant Design?**

- Consistent design system
- Accessibility built-in
- Mobile responsive
- Customizable themes

---

### 4. Global State dengan Context API

**Cart accessible from anywhere!**

```jsx
// src/context/CartContext.jsx
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => { /* logic */ };
  const removeFromCart = (id) => { /* logic */ };

  return (
    <CartContext.Provider value={{ cart, addToCart, ... }}>
      {children}
    </CartContext.Provider>
  );
}

// Usage anywhere:
const { cart, addToCart } = useCart();
```

**Benefits:**

- No prop drilling
- Cart persists across pages
- Easy to use (1 hook)

---

### 5. localStorage Persistence

**Cart survives page reload!**

```jsx
// Load on mount
useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) setCart(JSON.parse(saved));
}, []);

// Save on change
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

**Test:**

- Add products to cart
- Reload page (Ctrl+R)
- Cart still there!

---

## Perbedaan dengan Starter Project

| Aspect          | Starter Project      | Finished Project           |
| --------------- | -------------------- | -------------------------- |
| **main.jsx**    | TODOs for providers  | All providers configured   |
| **App.jsx**     | TODOs for routes     | All 5 routes working       |
| **CartContext** | TODO implementations | Complete cart logic        |
| **Pages**       | TODO placeholders    | Fully implemented          |
| **Components**  | Basic structure      | Complete with Ant Design   |
| **API calls**   | TODOs                | React Query integration    |
| **Styling**     | Minimal              | Polished dengan Ant Design |

**Learning Approach:**

1. Try implementing starter first (learn by doing)
2. Compare dengan finished (see best practices)
3. Understand WHY certain patterns used

---

## Testing Guide

### 1. Test Backend Connection

```bash
# Check backend running
curl http://localhost:5000/api/products

# Should return JSON dengan products
```

### 2. Test React Query Caching

**Steps:**

1. Navigate to /products
2. Open React Query DevTools (bottom-left corner)
3. See query status: `fetching` → `success` → `fresh`
4. Navigate to different page
5. Navigate back to /products
6. Data loads instantly (from cache!)

**Expected:**

- First load: ~500ms (network request)
- Cached load: <10ms (instant!)

---

### 3. Test Shopping Cart

**Scenario:**

```
1. Add "Vitamin C" from Products page
    Badge shows "1"
    Message: "Vitamin C added to cart!"

2. Navigate to Homepage
    Badge still shows "1" (persists!)

3. Navigate to Cart page
    Vitamin C listed in table

4. Update quantity to 3
    Subtotal updates
    Total updates

5. Remove product
    Product removed
    Badge updates to "0"

6. Reload page (Ctrl+R)
    Cart empty (localStorage cleared on remove)
```

---

### 4. Test Authentication

```bash
# Login credentials (from backend seed data):
Email: aila@example.com
Password: Aila123!

# Try login:
1. Navigate to /login
2. Enter credentials
3. Click Login
4. Should navigate to /products (if backend has auth endpoint)
```

---

## Project Structure (Complete)

```
finished-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            #  Navigation dengan cart badge
│   │   └── ProductCard.jsx       #  Ant Design Card
│   ├── pages/
│   │   ├── HomePage.jsx          #  Hero + features
│   │   ├── ProductsPage.jsx      #  Catalog dengan React Query
│   │   ├── ProductDetailPage.jsx #  Dynamic routing
│   │   ├── CartPage.jsx          #  Cart table
│   │   └── LoginPage.jsx         #  Auth form
│   ├── context/
│   │   └── CartContext.jsx       #  Global cart state
│   ├── services/
│   │   └── api.js                #  API functions
│   ├── App.jsx                   #  Router configured
│   ├── main.jsx                  #  All providers
│   └── index.css                 #  Tailwind + custom
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md (This file!)
```

---

## Troubleshooting

### "Failed to fetch products"

**Problem:** Backend tidak running atau CORS issue

**Fix:**

```bash
# 1. Verify backend running
curl http://localhost:5000/api/products

# 2. If not running, start it
cd ../../../Backend/Modul_5-External_API_Integration/finished-project
npm run dev

# 3. Check backend console untuk CORS config
# Should see: app.use(cors())
```

---

### "useCart is not defined" / Context Error

**Problem:** Import path salah atau provider not setup

**Fix:**

```jsx
// Check main.jsx
import { CartProvider } from "./context/CartContext";

<CartProvider>
  <App />
</CartProvider>;

// Check component
import { useCart } from "../context/CartContext"; // Note: relative path!
```

---

### React Query not showing cached data

**Problem:** QueryClient config issue

**Fix:**

```jsx
// main.jsx - Check staleTime configured
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Must be set!
    },
  },
});
```

---

### Ant Design icons not showing

**Problem:** Icon package tidak ter-install

**Fix:**

```bash
npm install @ant-design/icons

# Or re-install all
npm install
```

---

### Port 3000 already in use

**Problem:** Another service using port 3000

**Fix:**

```js
// vite.config.js
export default defineConfig({
  server: {
    port: 3001, // Change to free port
  },
});
```

---

### "localStorage is not defined"

**Problem:** localStorage access di SSR context

**Fix:**

```jsx
// Add safe check
if (typeof window !== "undefined") {
  localStorage.setItem("cart", JSON.stringify(cart));
}
```

---

## Visual Preview

🖼️ **[GIF Placeholder - Homepage Preview]**
_Hero section dengan gradient background → Features cards (3 columns) → CTA button "Mulai Belanja" → Click navigates to Products_

🖼️ **[GIF Placeholder - Products Page]**
_Products grid (4 columns) → Category filter (Select dropdown) → Search input → Products filter in real-time → React Query DevTools shows "fresh" status_

🖼️ **[GIF Placeholder - Cart Interaction]**
_Click "Tambah ke Keranjang" → Success message → Badge updates → Navigate to different page → Badge persists → Cart page shows table dengan products_

🖼️ **[GIF Placeholder - React Query Caching]**
_Navigate to Products (first time) → Query shows "fetching" → Data loads → Navigate away → Navigate back → Data instant (cached!) → DevTools shows "fresh" dengan timer_

---

## What You'll Learn

**By studying this finished project:**

1. **React Router Patterns**

   - Multi-page setup
   - Dynamic routes (:id parameter)
   - Programmatic navigation (useNavigate)
   - Active link styling

2. **React Query Mastery**

   - Query setup dengan useQuery
   - Query keys untuk caching
   - Loading & error states
   - Refetching strategies
   - DevTools debugging

3. **Ant Design Integration**

   - Form handling
   - Table dengan custom columns
   - Icons library
   - Message notifications
   - Responsive grid (Row/Col)

4. **Context API Pattern**

   - Provider setup
   - Custom hook (useCart)
   - State management
   - localStorage integration

5. **API Integration**
   - Axios interceptors (auth token)
   - Error handling
   - Response parsing
   - Query parameters

---

## Code Highlights

### React Query dengan Filters

```jsx
// Products refetch automatically when filters change!
const { data } = useQuery({
  queryKey: ["products", filters], // Key includes filters
  queryFn: () => getProducts(filters),
});
```

### Context dengan localStorage

```jsx
// Cart persists across sessions
useEffect(() => {
  const saved = localStorage.getItem("cart");
  if (saved) setCart(JSON.parse(saved));
}, []);
```

### Ant Design Table Footer

```jsx
<Table
  dataSource={cart}
  footer={() => (
    <div className="flex justify-between">
      <Button>Clear</Button>
      <div>Total: Rp {total.toLocaleString("id-ID")}</div>
    </div>
  )}
/>
```

---

## Challenge untuk Peserta

### Challenge #1: Add Wishlist Feature

Implement wishlist functionality:

- Create WishlistContext (similar to CartContext)
- Add "heart" button on ProductCard
- Create /wishlist page
- Persist to localStorage

**Hint:** Follow same pattern as CartContext!

---

### Challenge #2: Add Sorting

Add sort functionality di ProductsPage:

- Sort by: Price (low to high), Price (high to low), Name (A-Z)
- Use Ant Design Select
- Update query filters

**Hint:**

```jsx
const [sortBy, setSortBy] = useState("");
const { data } = useQuery({
  queryKey: ["products", { ...filters, sort: sortBy }],
  // ...
});
```

---

### Challenge #3: Pagination

Implement pagination untuk products:

- Use Ant Design Pagination component
- Update API call dengan page & limit params
- Show current page & total pages

**Hint:**

```jsx
const [page, setPage] = useState(1);
const { data } = useQuery({
  queryKey: ["products", { ...filters, page }],
  // ...
});
```

---

## Comparison dengan Modul 1

| Feature          | Modul 1 (Fundamentals) | Modul 2 (Advanced) |
| ---------------- | ---------------------- | ------------------ |
| Pages            | 1 page                 | 5 pages            |
| Routing          | None                   | React Router v6    |
| Data Fetching    | useEffect + axios      | React Query        |
| UI Library       | Custom + Tailwind      | Ant Design         |
| State Management | Local useState         | Context API        |
| Caching          | None                   | Smart caching      |
| Cart             | No cart                | Full cart system   |

**Leveling Up:** From basics → Production patterns!

---

## Learning Resources

**Deep Dive:**

- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [React Query Practical Guide](https://tkdodo.eu/blog/practical-react-query)
- [Ant Design Components](https://ant.design/components/overview)
- [Context API Guide](https://react.dev/learn/passing-data-deeply-with-context)

**Video Tutorials:**

- [React Query in 100 Seconds](https://www.youtube.com/watch?v=novnyCaa7To)
- [React Router v6 Tutorial](https://www.youtube.com/watch?v=Ul3y1LXxzdU)

---

## Next Steps

After exploring this finished project:

1.  **Compare dengan starter** - See what was implemented
2.  **Try challenges** - Extend functionality
3.  **Customize** - Change colors, add features
4.  **Deploy** - Share on Vercel/Netlify
5.  **Frontend Modul 3** - UI/UX Best Practices

---

**Well done! You now have a production-ready React dashboard! **

_Reference Implementation - Study & Learn!_

---

** Repository Info:**

- **Name:** `health-ecommerce-react-dashboard`
- **Type:** React Advanced (Complete Implementation)
- **Backend:** `localhost:5000` (ULTIMATE Backend)
- **Status:** Production-ready
