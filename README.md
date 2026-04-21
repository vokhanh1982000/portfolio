# Vo Minh Khanh - Premium Portfolio

A modern, responsive, and highly interactive developer portfolio built with Next.js 14, React, and TailwindCSS.

## 🌟 UI/UX Design System
- **Theme**: Premium Dark Mode with Glassmorphism (Kính mờ).
- **Background**: Lưới Gradient ánh sáng `bg-slate-950 bg-[radial-gradient(...)]` giúp trang web luôn có chiều sâu.
- **Aesthetic**: Hiệu ứng lớp phủ kính `backdrop-blur`, hover nâng viền (glow hover) và micro-animations tĩnh.

## 🏗 Directory Architecture (Cấu trúc Thư viện)
Để bộ nhớ của AI sau này đọc nhanh nhất, cấu trúc dự án được phân chia theo chuẩn Model-View:
- `src/app/` - Next.js App Router root
  - `/components/` - Phân mảnh UI chia nhỏ (Navbar, HeroSection, ProjectSection, Contact, CardProject)
  - `page.js` - Nơi đóng gói và dàn trang tổng.
  - `globals.css` - Chứa Tailwind `@apply` rút gọn.
- `src/data/` 
  - **`portfolio.js`** - NƠI LƯU TRỮ TOÀN BỘ DATA (Text, Hình ảnh, Danh sách dự án, Mạng xã hội). Khi muốn update nội dung, CHỈ CẦN sửa ở đây.
- `tailwind.config.js` - Lưu trữ các `@keyframes` tùy chỉnh (animate-avatar, animate-snow).

## ✨ Key Features
1. **Projects Showcase (`CardProject.jsx`)**: 
    - Bấm vào ảnh để phóng to toàn màn hình (Full-screen Modal Popup) để nhà tuyển dụng soi kỹ UI dự án.
2. **Contact Section (`Contact.jsx`)**:
    - Cấu trúc lưới (Grid 2 Cột). Bên trái là Interactive Cards, bên phải là Form liên hệ.
    - Chức năng tự động trích xuất Mailto chuyển thẳng về Inbox của `vokhanh1982000@gmail.com`.

## 🚀 Getting Started
```bash
# Cài đặt
npm install
# Khởi động máy chủ
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
