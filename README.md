📌 Personal Portfolio – Built with React & Tailwind CSS

A modern, clean and fully responsive Developer Portfolio Website built using React, Tailwind CSS, and Lucide Icons, designed to showcase skills, projects, education, and contact information.
This portfolio also includes a working contact form using EmailJS (no backend required).

🚀 Features
✨ 1. Beautiful Hero Section

Your name, role, and CTA buttons

Smooth hover effects

Fully responsive layout

✨ 2. About Me

Short professional summary

Clean typography

Subtle animations

✨ 3. Skills

Frontend, Backend, Database, and Tools

Modern pill UI

Easily editable via constants file

✨ 4. Projects Section

Grid layout with images

GitHub + Live Demo links

Beautiful card hover effects

Dynamic data from PROJECTS array

✨ 5. Education Timeline

Vertical timeline

Lucide icons

Clean layout with tracking lines

Editable via EDUCATION array

✨ 6. Contact Form (EmailJS — No Backend Needed)

Sends email directly to your inbox

Success/Error toast at top-right corner

Validations + reset

No backend or server required

✨ 7. Fully Responsive

Works on all screen sizes

Mobile-first styling

Consistent spacing & typography

🛠️ Tech Stack
Frontend

React.js

Tailwind CSS

Lucide-react Icons

Email Handling

EmailJS

Other Tools

Vite / CRA (whatever you used)

Git & GitHub

Responsive Design Best Practices

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio

2️⃣ Install dependencies
npm install

3️⃣ Add EmailJS Keys

Replace your keys in Contact.jsx:

emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  form.current,
  'YOUR_PUBLIC_KEY'
);

4️⃣ Run the development server
npm run dev

5️⃣ Build for production
npm run build

🔗 Live Demo

(You can add your deployed Vercel URL here)
➡️ https://your-portfolio.vercel.app/