# Portfolio Website - Glitch Theme

A modern portfolio website with bento-grid layout and subtle glitch aesthetic, built for showcasing full-stack web development skills.

![Tech Stack](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-cyan?style=flat-square&logo=tailwindcss)

## 🎨 Design Features

- **Bento Grid Layout**: Compact, non-scrollable design with organized content blocks
- **Glitch Aesthetic**: Subtle glitch effects and animations (not overly aggressive)
- **Dark Theme**: Dark base colors with neon accents (cyan, pink, purple, green, blue)
- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment Ready**: Vercel-optimized

## 📁 Project Structure

```
portfolio-glitch/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page (Hero + About)
│   │   ├── projects/
│   │   │   └── page.tsx          # Projects showcase
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact form & info
│   │   ├── layout.tsx            # Root layout with navigation
│   │   └── globals.css           # Global styles & animations
│   └── components/
│       ├── Navigation.tsx        # Main navigation bar
│       ├── BentoCard.tsx         # Reusable bento card component
│       ├── GlitchText.tsx        # Text with glitch effect
│       └── TechBadge.tsx         # Tech stack badges
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd copilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Pages Overview

### 1. Landing Page (`/`)
- **Hero Section**: Introduction with glitch text effect
- **About Me**: Brief professional summary
- **Education**: RevoU bootcamp credentials
- **Tech Stack**: All technologies displayed with badges
- **Quick Links**: GitHub, LinkedIn, Email

### 2. Projects Page (`/projects`)
- **Project Cards**: Bento grid layout with varying sizes
- **Tech Stack Tags**: Color-coded technology badges
- **Project Links**: Demo and GitHub repository links
- **Expandable**: Easy to add more projects

### 3. Contact Page (`/contact`)
- **Contact Form**: Name, email, and message fields
- **Contact Info**: Email, phone, location cards
- **Social Links**: GitHub and LinkedIn profiles
- **Form Validation**: Built-in HTML5 validation

## 🎨 Customization Guide

### Update Personal Information

1. **Landing Page** (`src/app/page.tsx`)
   - Update hero text and description
   - Add your GitHub, LinkedIn, and email links
   - Modify tech stack array

2. **Projects Page** (`src/app/projects/page.tsx`)
   - Add/modify projects in the `projects` array
   - Update demo and GitHub links
   - Adjust project descriptions

3. **Contact Page** (`src/app/contact/page.tsx`)
   - Update email, phone, and location
   - Configure form submission endpoint
   - Update social media links

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    900: '#0a0a0f',  // Darkest background
    800: '#12121a',  // Card background
    // ... add more
  },
  neon: {
    cyan: '#00ffff',    // Primary accent
    pink: '#ff00ff',    // Secondary accent
    // ... add more
  },
}
```

### Adjust Glitch Effect Intensity

Modify animations in `src/app/globals.css`:

```css
/* Reduce glitch movement distance */
@keyframes glitch-1 {
  20% { transform: translate(-1px, 1px); } /* was -2px, 2px */
  // ...
}
```

## 📝 Content Guidelines

- **Keep it concise**: Bento grid works best with short, impactful content
- **Use quality images**: Add project screenshots to `/public` folder
- **Update regularly**: Keep projects and skills current
- **Professional tone**: Maintain a balance between personality and professionalism

## 🔧 Development Tools Used

- **VS Code**: Primary IDE
- **Postman**: API testing
- **Swagger**: API documentation
- **npm**: Package management

## 📦 Key Dependencies

```json
{
  "next": "14.2.5",
  "react": "18.3.1",
  "typescript": "5.x",
  "tailwindcss": "3.4.4",
  "react-icons": "5.2.1"
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or collaborations, reach out via the contact form on the website.

---

**Built by Jek**
