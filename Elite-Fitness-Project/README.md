# 🚀 **Elite Fitness Club — React + Tailwind + Mock Auth App**

A sleek, responsive, high-performance fitness club web app built with **React**, **Tailwind CSS**, and a **simulated backend**.
It delivers a full authentication flow, a dynamic dashboard, and a polished UI that feels like a premium SaaS product.

---

## ✨ **Features at a Glance**

### 🔐 **Authentication System**

* Register new users
* Login with mock backend validation
* Persistent session via simulated storage
* Logout + view state reset
* Auto-detect active session on app load (user retention FTW)

### 🧭 **Smooth Navigation Flow**

The app intelligently switches between:

* Home Page (Hero)
* Login Page
* Register Page
* Dashboard (only if authenticated)

All controlled through a central `view` state for clean UX routing.
Check the logic in `App.tsx` → the switch-case flow is crisp and scalable. 

### 📊 **User Dashboard**

* Personalized dashboard that displays after successful authentication
* Tailwind-powered layout for consistent UI
* Clean, minimal, futuristic vibe consistent with fitness-tech branding

### 🎨 **UI/UX Powered by Tailwind CSS**

* Modern dark theme
* Adaptive layout with full responsiveness
* Utility-first classes for fast iteration & clean components

### 🧪 **Mock Backend for Demo Environments**

* `getSession()` to auto-login returning users
* `mockLogout()` for clearing auth state
* Fully front-end simulated environment → perfect for demos, prototyping, onboarding flows

---

## 🧱 **Project Architecture**

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── services/
│   └── mockBackend.ts
├── types/
│   └── index.ts
└── App.tsx     <-- core app routing + auth logic
```

---

## 🧠 **Core Logic Explained (TL;DR)**

### ➤ Session Bootstrapping

On mount, the app runs `getSession()`
If a stored user exists → login state is restored.


### ➤ Login + Register

Pass handlers downstream → child components update global state on success.

### ➤ Logout

Clears session via `mockLogout()` and resets the `view` back to home.


### ➤ View-Based Rendering

The function `renderView()` handles dynamic component switching based on both:

* `view`
* `auth.isAuthenticated`

Powerful, simple, scalable.


---

## 🛠️ **Tech Stack**

| Layer        | Tech                                            |
| ------------ | ----------------------------------------------- |
| UI           | React, Tailwind CSS                             |
| Logic        | TypeScript                                      |
| Auth         | Mock Backend (in-memory session simulation)     |
| Architecture | Component-driven, state-lifted, view-controlled |
| Styling      | Tailwind utility classes, dark theme            |

---

## 🚀 **Getting Started**

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/elite-fitness-club.git
cd elite-fitness-club
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

---

## 📌 **Future Enhancements**

Here’s where you can flex for recruiters 👀

* Replace mock backend → connect real Node/Express or Firebase
* Add workout recommendation system using AI (Gemini, OpenAI, Llama, etc.)
* Add Stripe integration for subscriptions
* Add role-based dashboards (Member, Trainer, Admin)
* Add Progress Charts via Recharts or D3.js
* Add Protected Routes with React Router

---

## 🏆 **Value Proposition**

This project demonstrates:

* Complete auth workflow
* State management & component architecture
* UX-first design thinking
* Production-style code patterns
* Clean TypeScript integration
* Real-world application structure recruiters love

---
