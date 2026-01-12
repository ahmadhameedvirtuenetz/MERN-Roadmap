# MERN Stack Documentation

A comprehensive, interactive documentation site for the MERN Stack Internship Program.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue)
![React](https://img.shields.io/badge/React-18-61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

## 🚀 Features

- **Interactive Documentation** - Navigate through weekly modules with detailed explanations
- **Code Examples** - Copy-ready code snippets for all topics
- **Responsive Design** - Works perfectly on desktop and mobile
- **Dark Theme** - Easy on the eyes for extended reading
- **4-Week Curriculum** - Structured learning path from basics to deployment

## 📚 Content Covered

### Week 1: JavaScript Advanced & Node.js
- ES6+ Features (let/const, arrow functions, destructuring, spread/rest)
- Async JavaScript (Promises, async/await)
- Node.js Fundamentals (fs, path, modules)
- npm & Package Management

### Week 2: React & Express.js
- React Fundamentals (JSX, Components, Props)
- React Hooks (useState, useEffect, custom hooks)
- Express.js Basics (Routing, Middleware)
- REST API Development

### Week 3: MongoDB & Advanced React
- MongoDB Basics (CRUD, Queries)
- Mongoose ODM (Schemas, Models, Validation)
- React Router (Navigation, Protected Routes)
- Context API (Global State Management)

### Week 4: Authentication & Deployment
- JWT Authentication
- Security Best Practices
- Deployment (Vercel, Render, MongoDB Atlas)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-company/mern-docs.git

# Navigate to project directory
cd mern-docs

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure the build
5. Click "Deploy"

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder can be deployed to any static hosting service
# - GitHub Pages
# - AWS S3 + CloudFront
# - Firebase Hosting
# - Cloudflare Pages
```

## 🎨 Customization

### Change Colors
Edit the color values in `src/App.jsx` to match your brand:

```javascript
const docData = {
  sections: [
    {
      id: 'week1',
      color: '#3B82F6', // Change this color
      // ...
    }
  ]
};
```

### Add New Sections
Add new content by creating additional content objects in the Week components.

### Update Company Branding
1. Change the title in `index.html`
2. Update the footer in `src/App.jsx`
3. Replace favicon in `public/`

## 📁 Project Structure

```
mern-docs/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    └── App.jsx        # Main documentation component
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-topic`)
3. Commit your changes (`git commit -m 'Add new topic'`)
4. Push to the branch (`git push origin feature/new-topic`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for your company's training materials.

---

Made with ❤️ for MERN Stack Developers
