⏰ BuiltReminder – React + Supabase Reminder App
BuiltReminder is a full-featured reminder management application developed with React and TypeScript, integrated with Supabase for real-time backend functionality and user authentication. The app showcases a clean, modular component architecture and demonstrates robust handling of CRUD operations with real-time updates.

🔗 GitHub Repository
https://nazaninhashemian.github.io/reminders-app

✨ Features
➕ Add a Reminder: Submit a new task via a controlled form.

❌ Delete a Reminder: Easily remove reminders from the list.

🔄 Real-Time Sync: Seamless updates through Supabase's real-time data layer.

🔐 User Authentication: Secure login and user-specific data handling via Supabase Auth.

📦 Persistent Storage: Reminders are stored and retrieved from the cloud.

🧩 Modular Components: Clean React structure with reusable components and custom hooks.

📱 Responsive UI: Styled with CSS and Bootstrap classes for mobile and desktop layouts.

🧠 Type-Safe Forms: Strong typing with TypeScript ensures safe, predictable form behavior.

🌐 Simulated API Service Layer: Abstracted interactions with Supabase via Axios-based service logic.

🛠 Technologies Used
React

TypeScript

Supabase (Auth + Database)

Axios

useState, useEffect

Bootstrap & CSS

RESTful API Integration

Modular Component Design

📁 Folder Structure Overview

reminders-app/
├── src/
│   ├── components/
│   │   ├── ReminderList.tsx
│   │   ├── AddReminderForm.tsx
│   ├── services/
│   │   └── reminderService.ts
│   ├── auth/
│   │   └── supabaseClient.ts
│   ├── App.tsx
│   ├── index.tsx
├── public/
├── package.json
├── README.md



🚀 Getting Started

1. Clone the Repository
git clone https://github.com/NazaninHashemian/reminders-app.git
cd reminders-app

2. Install Dependencies

npm install

3. Configure Supabase
Create a project at supabase.com

Create a table (e.g., reminders) with fields for id, title, and user_id.

Enable authentication.

Add your Supabase API keys and project URL to .env:

VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_KEY=your_anon_key

4. Start the App

npm run dev
Open http://localhost:5173 to view it in your browser.