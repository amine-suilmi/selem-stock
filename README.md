# SelemExpress e-Stock MVP - Visual Prototype

## 🎯 Project Overview

This is a **visual prototype** (HTML + Tailwind CSS mockup) for the SelemExpress e-Stock MVP system. This prototype is designed to refine the UI/UX before full backend development with Laravel and FilamentPHP.

**Purpose:** Test and validate the user interface with stakeholders before building the real system.

---

## ✨ Currently Completed Features

### 1. **Welcome Screen with Role Selection**
- Clean landing page with role-based navigation
- Three main entry points:
  - Shop Owner Dashboard
  - Selem Admin Panel
  - QR Code Scanner

### 2. **Shop Owner Mobile Dashboard** 📱
- **Mobile-first design** with large, easy-to-tap buttons
- **3 Weekly Model Cards** displaying:
  - Model photo placeholder (gradient backgrounds)
  - Model name and price
  - Real-time stock counter
  - Two big action buttons per model:
    - 🔵 **Update Stock** (manual override)
    - 🟠 **Sold in Store** (quick -1 deduction)
- **Pending Online Orders Section**:
  - Order cards with customer info
  - Quantity display
  - Big green **"Confirm & Reserve"** button
  - Automatic stock deduction on confirmation
  - "No orders" state when all confirmed
- **Quick QR Scanner Access** button at bottom

### 3. **Selem Admin Upload Screen** 🛠️
- **Shop selector** dropdown (simulates multi-shop management)
- **Weekly period display** (April 7-13, 2026)
- **3 Model Upload Forms** with:
  - Model name input
  - Brand input
  - Price input (TND)
  - Initial stock quantity
  - Professional photo upload area (drag & drop UI)
  - Individual "Save Model" buttons
  - Visual "Saved" indicators
- **Publish All Models** button:
  - Enabled only when all 3 models are saved
  - Confirmation dialog before publishing
  - Loading state simulation

### 4. **QR Code Scanner Screen** 📷
- **Camera view simulation** with scanning frame overlay
- **Three quick scan buttons** to simulate scanning each model:
  - Nike Air Max 2024
  - Adidas Ultraboost
  - Puma RS-X Elite
- **Scan Result Modal** showing:
  - Detected model name
  - Current stock vs. new stock preview
  - "Confirm Sale" button (decreases stock)
  - Cancel option
- **Instructions panel** with step-by-step guide

### 5. **Interactive Prototype Flow** ⚙️
Complete clickable demonstration:
1. **Admin adds models** → Fill forms → Save → Publish
2. **Models appear in shop dashboard** → 3 cards displayed with stock
3. **Owner confirms orders** → Stock decreases automatically
4. **QR scanner works** → Scan → Confirm → Stock updates

### 6. **Visual Feedback & UX Enhancements**
- ✅ Success toast notifications for all actions
- 🎨 Smooth transitions and animations
- 📱 Mobile-optimized layout (responsive design)
- 🎯 Clear visual hierarchy with big buttons
- 🌈 Color-coded sections (blue for owner, green for admin, purple for QR)
- ⚡ Keyboard shortcuts (1=Shop Owner, 2=Admin, 3=QR, H=Home)

---

## 🚀 Functional Entry URIs (Screens)

| Screen | Path | Description |
|--------|------|-------------|
| **Welcome** | `index.html` | Role selection landing page |
| **Shop Owner Dashboard** | `#shop-owner-dashboard` | Mobile view with 3 models + orders |
| **Admin Panel** | `#admin-dashboard` | Upload 3 weekly models interface |
| **QR Scanner** | `#qr-scanner` | Camera simulation + scan actions |

### Interactive Actions:
- ✅ Update stock manually
- ✅ Mark item sold in store (-1)
- ✅ Confirm online orders (reserves stock)
- ✅ Save admin models (3 forms)
- ✅ Publish models to shop
- ✅ QR scan simulation → confirm sale

---

## ❌ Features NOT Yet Implemented

This is a **visual prototype only**. The following are **NOT included**:

### Backend & Database
- ❌ No Laravel backend
- ❌ No MySQL database
- ❌ No FilamentPHP admin panels
- ❌ No actual data persistence
- ❌ No API endpoints

### Authentication & Security
- ❌ No login system
- ❌ No user authentication
- ❌ No role-based access control
- ❌ No session management

### Real Functionality
- ❌ No actual photo uploads (just UI mockup)
- ❌ No real QR code generation/scanning
- ❌ No order management system
- ❌ No stock history logging
- ❌ No multi-shop database
- ❌ No weekly archive system
- ❌ No customer notifications

### Advanced Features
- ❌ No AI agent integration
- ❌ No SMS/WhatsApp notifications
- ❌ No analytics dashboard
- ❌ No inventory reporting
- ❌ No sales history

---

## 🛠️ Tech Stack (Prototype)

**Current (Visual Prototype):**
- HTML5 (semantic structure)
- **Tailwind CSS** (via CDN) - Utility-first styling
- Vanilla JavaScript - Interactive behaviors
- **Font Awesome** icons
- No server, no database

**Planned (Real Implementation):**
- **Backend:** Laravel 11
- **Admin UI:** FilamentPHP v3
- **Database:** MySQL/MariaDB
- **Storage:** Local or AWS S3
- **Auth:** Laravel Breeze/Sanctum
- **QR Codes:** SimpleSoftwareIO/simple-qrcode

---

## 📂 Project Structure

```
selemexpress-estock-prototype/
├── index.html              # Main prototype with all screens
├── js/
│   └── app.js             # Interactive JavaScript logic
└── README.md              # This file
```

---

## 🎮 How to Use This Prototype

### 1. **Open the Prototype**
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### 2. **Navigate Between Roles**
- Click **"Shop Owner"** to see the mobile dashboard
- Click **"Selem Admin"** to see the upload interface
- Click **"QR Code Scanner"** to simulate scanning

### 3. **Test Shop Owner Flow**
- View 3 weekly models with stock counters
- Click **"Update Stock"** to manually change quantity
- Click **"Sold in Store"** to deduct 1 pair
- Click **"Confirm & Reserve"** on pending orders
- Watch stock decrease automatically

### 4. **Test Admin Flow**
- Fill out model details for all 3 models
- Click **"Save Model"** on each form
- Notice the "Publish" button becomes enabled
- Click **"Publish Week Models"** to simulate deployment

### 5. **Test QR Scanner**
- Open QR Scanner view
- Click any of the 3 scan simulation buttons
- Review the stock preview in the modal
- Click **"Confirm Sale"** to deduct stock

### 6. **Keyboard Shortcuts**
- Press `1` → Shop Owner Dashboard
- Press `2` → Admin Panel
- Press `3` → QR Scanner
- Press `H` → Home/Welcome

---

## 🎯 Design Principles Demonstrated

### For Shop Owners (Non-Tech-Savvy)
✅ **Big buttons** - Easy to tap on mobile  
✅ **Minimal text** - Clear, simple language  
✅ **Visual feedback** - Toast notifications for every action  
✅ **One-tap actions** - "Sold in Store" and "Confirm Order"  
✅ **Stock always visible** - Large numbers, color-coded  

### For Selem Admin
✅ **Professional upload UI** - Drag & drop photo areas  
✅ **Clear validation** - Must save all 3 before publishing  
✅ **Safety confirmations** - Prevents accidental publishing  
✅ **Visual progress** - "Saved" indicators per model  

### For QR Scanning
✅ **Camera simulation** - Shows how real scanning looks  
✅ **Instant feedback** - Modal pops up with stock preview  
✅ **Safety check** - Preview before confirming sale  
✅ **Quick return** - Auto-returns to dashboard  

---

## 📋 Recommended Next Steps

### Phase 1: UI/UX Validation (Current)
- ✅ Visual prototype complete
- ⏳ **Get stakeholder feedback**
- ⏳ **Refine based on user testing**
- ⏳ **Finalize color scheme and branding**

### Phase 2: Backend Foundation
1. Set up Laravel 11 project
2. Create database migrations:
   - `shops`
   - `weekly_models`
   - `model_photos`
   - `orders`
   - `stock_history`
   - `qr_codes`
3. Install FilamentPHP v3
4. Configure multi-panel authentication

### Phase 3: Core Features
1. **Admin Panel (FilamentPHP)**
   - Shop management resource
   - Weekly model upload forms
   - Photo upload with S3 storage
   - QR code generation
   
2. **Shop Owner Panel (FilamentPHP)**
   - Simple dashboard widget
   - Stock update forms
   - Order confirmation interface
   
3. **Stock Management Logic**
   - Enforce 3-model limit per week
   - Track stock changes in history table
   - Prevent overselling

### Phase 4: QR System
1. Generate unique QR codes per model
2. Build QR scanning mobile view
3. Implement instant stock deduction
4. Add audit logging

### Phase 5: Advanced Features
1. Weekly archiving system
2. Customer notification system (SMS/WhatsApp)
3. AI agent integration for customer communication
4. Analytics and reporting dashboard
5. Multi-shop management at scale

---

## 🎨 Color Scheme

- **Primary (Shop Owner):** Blue (`#2563eb`)
- **Secondary (Admin):** Green (`#10b981`)
- **QR Scanner:** Purple-Pink Gradient
- **Actions:** 
  - Update: Blue
  - Sold: Orange
  - Confirm: Green

---

## 📱 Device Compatibility

This prototype is optimized for:
- ✅ Mobile phones (320px - 480px)
- ✅ Tablets (768px - 1024px)
- ✅ Desktop browsers (1024px+)

Tested on:
- iOS Safari
- Android Chrome
- Desktop Chrome, Firefox, Edge, Safari

---

## 🤝 Feedback & Iteration

**This is NOT a working system yet!**

Please provide feedback on:
- Button sizes and placement
- Text clarity and language
- Color choices
- Flow between screens
- Any confusing interactions
- Missing visual elements

---

## 📞 Contact & Support

**Project:** SelemExpress e-Stock MVP  
**Type:** Visual UI Prototype  
**Version:** 1.0  
**Date:** April 2026  

---

## 📄 License

This prototype is for internal review and testing only.  
Not for production use.

---

**🎉 Ready to test! Open `index.html` and explore the prototype.**
