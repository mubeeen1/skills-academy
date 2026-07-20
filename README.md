# 🌟 Siddiqui Skills Academy Portal

<div align="center">

![Siddiqui Skills Academy Banner](https://img.shields.io/badge/Siddiqui%20Skills%20Academy-Admission%20Portal-blue?style=for-the-badge&logo=military)

[![Next.js Version](https://img.shields.io/badge/Next.js-14.2-black?style=flat-squared&logo=nextdotjs)](https://nextjs.org/)
[![React Version](https://img.shields.io/badge/React-18-blue?style=flat-squared&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-squared&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff69b4?style=flat-squared&logo=framer)](https://www.framer.com/motion/)
[![Database SheetDB](https://img.shields.io/badge/Database-SheetDB-emerald?style=flat-squared&logo=google-sheets)](https://sheetdb.io/)
[![Licence](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-squared)](LICENSE)

An optimized, glassmorphic admissions portal and CRM engineered with **Next.js 14** and **Tailwind CSS**. Built to streamline candidate registrations, host student photographs, and sync form submissions to cloud spreadsheets.

[Explore Programs](src/app/courses/page.js) • [Online Registration](src/app/register/page.js) • [Helpline Support](tel:+923231774948)

</div>

---

## ⚡ Key Highlights

> [!TIP]
> **No-apps-script Database:** Google Sheet synchronization is powered by SheetDB.io, eliminating Apps Script quota limitations, slow response times, and cross-origin (CORS) security warnings.

*   **✨ Interactive Dark & Light Theme:** Complete theme control with zero layout flashes on page load. State is cached in local storage.
*   **📅 Responsive Calendar Date-Picker:** A zero-dependency custom-engineered date picker in `RegisterForm` supporting leap-year checks, click-away selectors, and automated typing inputs.
*   **☁️ Edge Image Hosting:** Direct file streams route through **ImgBB Client-Side APIs** with 3MB upload limits to save server bandwidth.
*   **📧 Automated Inquiry Routing:** All contact requests and registration profiles are instantly dispatched to the academy inbox via **Web3Forms**.

---

## 📁 System Architecture & Components

| Component | File Path | Description |
| :--- | :--- | :--- |
| **Header** | [`Header.jsx`](src/components/Header.jsx) | Global navigation bar with route-specific navigation filtering and theme toggler. |
| **Courses catalog** | [`Courses.jsx`](src/components/Courses.jsx) | Exhaustive eligibility lists, syllabus guidelines, and course parameters. |
| **Skills Directory** | [`Skills.jsx`](src/components/Skills.jsx) | Animated tab lists showcasing creative arts, freelancing, and development courses. |
| **Registration CRM** | [`RegisterForm.jsx`](src/components/RegisterForm.jsx) | Unified registration form featuring direct photo upload triggers and custom date-picker. |
| **Contact Center** | [`ContactForm.jsx`](src/components/ContactForm.jsx) | Direct email dispatcher and pre-formatted WhatsApp callouts. |

---

## 🔧 Environment Configuration

Create a `.env.local` file in the project root containing your API credentials:

```env
# 📧 Web3Forms email configuration
NEXT_PUBLIC_WEB3FORMS_KEY="your-web3forms-access-token"

# ☁️ ImgBB API token for candidate photos
NEXT_PUBLIC_IMGBB_KEY="your-imgbb-api-key"

# 📊 SheetDB.io API endpoint linked to your Google Sheet
NEXT_PUBLIC_SHEETS_URL="https://sheetdb.io/api/v1/your-sheetdb-id"
```

> [!IMPORTANT]
> Your Google Sheet must contain the following exact headers in the first row (case sensitive):
> `Submitted At`, `Full Name`, `Father's Name`, `CNIC`, `Date of Birth`, `Email`, `WhatsApp`, `Current Address`, `Permanent Address`, `Qualification`, `Course`, `Digital Sub-Course`, `Photo Link`

---

## 🛠️ Local Development & Scripts

### 1. Installation
Pull dependencies from the package registry:
```bash
npm install
```

### 2. Run Dev Server
Launch Next.js hot-reloaded development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.

### 3. Production Build
Compile optimized static and dynamic server-side assets:
```bash
npm run build
npm run start
```
