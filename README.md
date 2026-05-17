# 🛒 Angular E-Commerce Application

A full-stack e-commerce platform built with **Angular 17**, featuring product browsing, user authentication, an admin dashboard, and server-side rendering (SSR).

## ✨ Features

- 🏠 **Home Page** — Browse products with details (name, price, category, color)
- 🔐 **User Authentication** — Sign up and login system
- 🛡️ **Admin Panel** — Protected dashboard accessible only to authenticated users via Route Guard
- 📱 **Responsive Design** — Built with Bootstrap 5 and PrimeNG
- ⚡ **Server-Side Rendering (SSR)** — Powered by Angular Universal for better performance and SEO

## 🛠️ Tech Stack

| Technology        | Version  |
|-------------------|----------|
| Angular           | 17.3.0   |
| TypeScript        | 5.4.2    |
| Bootstrap         | 5.3.3    |
| Bootstrap Icons   | 1.11.3   |
| PrimeNG           | 17.16.1  |
| Angular SSR       | 17.3.7   |
| Express.js        | 4.18.2   |
| RxJS              | 7.8.0    |

## 📁 Project Structure
ecommerce/
├── src/
│ ├── app/
│ │ ├── admin/
│ │ │ └── admin-panel/ # Admin dashboard (protected)
│ │ ├── components/
│ │ │ ├── home/ # Home page
│ │ │ └── signup/ # Registration page
│ │ ├── models/ # Data interfaces & types
│ │ ├── nav/ # Navigation component
│ │ ├── services/ # API & business logic
│ │ ├── auth.guard.ts # Route protection
│ │ └── app-routing.module.ts
│ ├── assets/
│ └── styles.css
├── db.json # Mock database (JSON Server)
├── server.ts # SSR server
└── package.json

## 🚀 Getting Started
### Prerequisites
- Node.js v18+
- npm v9+
- Angular CLI v17
```bash
npm install -g @angular/cli@17
Installation
git clone https://github.com/Ayman-ms/angular-ecommerce.git
cd angular-ecommerce/ecommerce
npm install
Running the App
1. Start the mock backend (JSON Server):

npx json-server db.json
API available at http://localhost:3000

2. Start the Angular development server:

npm start
App available at http://localhost:4200

Build for Production
npm run build
Run with SSR
npm run serve:ssr:ecommerce
Run Tests
npm test
🗺️ Routes
Route	Component	Protected
/	Home	❌
/signup	Signup	❌
/admin	Admin Panel	✅ AuthGuard
📦 Data Models
// Product
{
  id: string;
  productName: string;
  price: number;
  category: string;
  color: string;
  description: string;
  image: string;
}

// User
{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
