# AWKUM LMS Frontend

A modern Learning Management System for AWKUM University built with React and Tailwind CSS.

## Features

- Role-based access (Admin, Teacher, Student)
- Modern and responsive UI
- Course management
- Assignment handling
- Real-time notifications
- Custom theming per role

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run development server:
```bash
npm run dev
```

## Deployment

You can deploy this project to either Netlify or Vercel.

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Log in to [Netlify](https://www.netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Choose your GitHub repository
5. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Log in to [Vercel](https://vercel.com)
3. Click "Add New" > "Project"
4. Choose your GitHub repository
5. Keep the default settings (they're automatically detected)
6. Click "Deploy"

## Development Notes

- The site uses React Router for navigation
- Tailwind CSS for styling
- Role-specific themes with AWKUM branding colors
- Mobile-first responsive design
