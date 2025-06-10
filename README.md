# Hazrr Portfolio - Professional Full-Stack Portfolio Website

A modern, responsive portfolio website built with React, Express, and PostgreSQL, featuring advanced animations, floating geometric elements, and dark/light theme support.

## 🚀 Live Demo

- **Frontend (Vercel)**: [Your Vercel deployment URL]
- **Backend (Render)**: [Your Render deployment URL]

## 🏗️ Architecture

This project uses a separated frontend/backend architecture optimized for independent deployment:

- **Frontend**: React + Vite + TypeScript deployed to Vercel
- **Backend**: Express + TypeScript deployed to Render
- **Database**: PostgreSQL hosted on Neon

## 📦 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utilities and configurations
│   │   └── hooks/          # Custom React hooks
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
├── server/                 # Backend Express application
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database operations
│   ├── db.ts              # Database connection
│   ├── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript configuration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and types
├── vercel.json            # Vercel deployment config
├── render.yaml            # Render deployment config
└── drizzle.config.ts      # Database migrations config
```

## 🌟 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Advanced Animations**: Framer Motion powered transitions and floating elements
- **Interactive Cursor**: Custom cursor effects and hover interactions
- **Theme System**: Dark/light mode with glass-morphism design
- **Portfolio Showcase**: 3D interactive project displays
- **Blog System**: Dynamic blog posts with CMS capabilities
- **Contact Form**: Functional contact form with database storage
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Technologies

### Frontend
- React 18 + TypeScript
- Vite for build tooling
- Tailwind CSS + shadcn/ui components
- Framer Motion for animations
- React Query for state management
- Wouter for routing

### Backend
- Express.js + TypeScript
- Drizzle ORM for database operations
- Zod for validation
- PostgreSQL with Neon
- Session-based authentication

## 🚀 Deployment Guide

### Prerequisites

1. **Neon Database**: Create a PostgreSQL database at [neon.tech](https://neon.tech)
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Render Account**: Sign up at [render.com](https://render.com)

### Step 1: Database Setup (Neon)

1. Create a new Neon project
2. Copy the connection string
3. Run database migrations:
   ```bash
   npm run db:push
   ```

### Step 2: Backend Deployment (Render)

1. **Connect Repository**: Link your GitHub repository to Render
2. **Create Web Service**:
   - Build Command: `cd server && npm install && npm run build`
   - Start Command: `cd server && npm start`
   - Environment: Node.js
   - Plan: Free tier available

3. **Environment Variables**:
   ```
   DATABASE_URL=your_neon_connection_string
   NODE_ENV=production
   PORT=10000
   SESSION_SECRET=your_super_secret_key
   FRONTEND_URL=https://your-frontend.vercel.app
   ```

4. **Database Setup**: Connect your Neon database in Render's dashboard

### Step 3: Frontend Deployment (Vercel)

1. **Connect Repository**: Import your project to Vercel
2. **Build Settings**:
   - Framework Preset: Vite
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
   - Install Command: `cd client && npm install`

3. **Environment Variables**:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   VITE_APP_NAME=Hazrr Portfolio
   VITE_APP_VERSION=1.0.0
   ```

### Step 4: Configuration Updates

1. **Update API URL**: Replace the placeholder in `vercel.json`:
   ```json
   {
     "env": {
       "VITE_API_URL": "https://your-actual-backend-url.onrender.com"
     }
   }
   ```

2. **CORS Configuration**: Update backend to allow your Vercel domain
3. **Database Migrations**: Run migrations on your production database

## 🧪 Local Development

### Prerequisites
- Node.js 18+
- PostgreSQL database (local or Neon)

### Setup

1. **Clone Repository**:
   ```bash
   git clone <your-repo-url>
   cd hazrr-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   # Install all dependencies
   npm install
   
   # Or install separately
   cd client && npm install
   cd ../server && npm install
   ```

3. **Environment Setup**:
   ```bash
   # Copy environment files
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   
   # Update with your database URL
   ```

4. **Database Setup**:
   ```bash
   npm run db:push
   ```

5. **Start Development**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📝 API Endpoints

### Blog Posts
- `GET /api/blog-posts` - Get all published posts
- `GET /api/blog-posts/:slug` - Get post by slug
- `POST /api/blog-posts` - Create new post

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact-messages` - Get all messages (admin)

### Health Check
- `GET /health` - Service health status

## 🎨 Customization

### Theme Colors
Update `client/src/index.css` to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Add your custom colors */
}
```

### Content Updates
- **Hero Section**: Update `client/src/components/hero-section.tsx`
- **About Info**: Modify `client/src/components/about-section.tsx`
- **Projects**: Edit `client/src/components/portfolio-showcase.tsx`

## 🔧 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.onrender.com
VITE_APP_NAME=Your Portfolio Name
VITE_APP_VERSION=1.0.0
```

### Backend (.env)
```env
DATABASE_URL=postgresql://username:password@host:port/database
NODE_ENV=production
PORT=10000
SESSION_SECRET=your-secret-key
FRONTEND_URL=https://your-frontend.vercel.app
```

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure `FRONTEND_URL` is set correctly in backend
2. **Database Connection**: Verify `DATABASE_URL` format and credentials
3. **Build Failures**: Check Node.js version compatibility (18+)
4. **API Errors**: Verify environment variables are set in deployment platforms

### Debugging

```bash
# Check backend health
curl https://your-backend.onrender.com/health

# View logs
# Render: Dashboard > Service > Logs
# Vercel: Dashboard > Project > Functions
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact [your-email@example.com]

---

**Built with ❤️ by Hazrat Abu Bakar (Hazrr)**