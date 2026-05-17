# 🛒 Angular E-Commerce Application

A full-stack e-commerce web application built with **Angular 17** featuring user authentication, product browsing, and an admin panel.

## ✨ Features

- 🏠 **Home Page** — Browse and view products with details (name, price, category, color)
- 🔐 **User Authentication** — Sign up and login system
- 🛡️ **Admin Panel** — Protected admin dashboard (accessible only after authentication via Auth Guard)
- 📱 **Responsive Design** — Built with Bootstrap 5 for mobile-friendly UI
- ⚡ **Server-Side Rendering (SSR)** — Powered by Angular Universal for better performance and SEO

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| Angular | 17.3.0 |
| TypeScript | 5.4.2 |
| Bootstrap | 5.3.3 |
| PrimeNG | 17.16.1 |
| Angular SSR | 17.3.7 |
| Express.js | 4.18.2 |
| RxJS | 7.8.0 |

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
│ │ ├── services/ # API & business logic services
│ │ ├── auth.guard.ts # Route protection
│ │ └── app-routing.module.ts
│ ├── assets/
│ └── styles.css
├── db.json # Mock database (JSON Server)
├── server.ts # SSR server
└── package.json


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI v17

```bash
npm install -g @angular/cli@17

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
