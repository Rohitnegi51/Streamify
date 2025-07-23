# 🌐 Streamify
A real-time language learning & one-on-one chat/video call platform built with React, Node.js, MongoDB — styled beautifully with **Tailwind CSS & DaisyUI**.

---

## 🚀 Live Demo
👉 [Streamify](https://streamify-j93t.onrender.com)

---

## ✏️ Why I Built This
Language learning is most natural when you actually speak to people.  
Streamify makes it easy to:
- Find partners to practice your target language.
- Chat or video call in real-time.
- Manage friends & requests easily.

This project also helped me:
- Explore real-time apps and APIs.
- Work with modern React stack and deployment.
- Learn production-ready architecture.

---

## 🛠️ Tech Stack & Architecture

| Layer             | Technologies                                                                    |
|------------------|---------------------------------------------------------------------------------|
| Frontend          | React, Vite, Zustand, TanStack Query, Axios                                      |
| Styling           | Tailwind CSS + **DaisyUI**                                                       |
| Backend           | Node.js, Express, MongoDB, Mongoose                                              |
| Real-Time Chat    | **Stream** SDK                                                                   |
| Auth              | JWT + bcrypt                                                                     |
| State & Polling   | React Query polling + manual refresh                                             |
| Deployment        | Render (frontend & backend)

---


# 📁 Project Structure

Below is the folder structure of **Streamify**:
```
streamify/
├── backend/
│   ├── controllers/     # API controllers (friend requests, auth, etc.)
│   ├── lib/             # Helper functions and shared logic
│   ├── middleware/      # Custom middleware (auth, error handling)
│   ├── models/          # Mongoose data models
│   ├── routes/          # Express route definitions
│   ├── utils/           # Utility functions
│   ├── server.js        # Entry point for the backend server
│   └── package.json     # Backend dependencies and scripts
└── frontend/
    ├── components/     # Reusable UI components
    ├── constants/      # App-wide constants
    ├── hooks/          # Custom React hooks
    ├── lib/            # API helpers, utils, etc.
    ├── pages/          # Route components (Home, Notifications, etc.)
    ├── store/          # Zustand stores and global state
    ├── app.jsx         # Main App component
    ├── main.jsx        # React entry point
    ├── index.css       # Global styles
    ├── package.json    # Frontend dependencies and scripts
    └── tailwind.config.js # Tailwind CSS configuration

```
# ✨ Key Features
✅ One-on-one chat & video call powered by Stream  
✅ Friend request system: send, accept, reject  
✅ Notifications page for new requests & accepted connections  
✅ Polling + manual refresh button for updated UI  
✅ Recommended users section (shows all logged-in users)  
✅ Clean, responsive UI built with Tailwind CSS & DaisyUI  
✅ Simple JWT auth & secure API  
✅ Deployed on Render

---

## ⚙️ Installation

### 🖥 Backend
```bash
git clone https://github.com/yourusername/streamify.git
cd streamify/backend
npm i
```

Create .env in backend
```
PORT=5001
MONGO_URI=mongodb_connection_string
JWT_SECRET_KEY=jwt_secret_key
STREAM_API_KEY=stream_api_key
STREAM_API_SECRET=stream_api_secret_key
```

Run the server 
```
npm run dev
```
Your API will be available at http://localhost:5001.


### 🌐 Frontend
```bash
cd ../frontend
npm i
```

create .env in frontend
```
VITE_STREAM_API_KEY=(same as backend stream api key)
```

run the dev server 
```
npm run dev
```
By default Vite serves at http://localhost:5173.

---

### 🏃 Usage
On Home Page → see your friends + recommended users.

Send friend requests to new users.

Notifications Page → see pending requests & new accepted friends.

Chat or call one-on-one with connected friends.

---

### 🎨 Styling
Built with **Tailwind CSS** for fast utility-first styling.

Used **DaisyUI** for clean, elegant components.

Fully responsive for mobile & desktop.

---

### 📌 Limitations & Future Ideas
Recommendation system currently shows all users (not filtered by interests).

Using polling & refresh button instead of websockets.

Could add: group chat, interest-based recommendations, better search.

---

### 🙏 Credits & Inspiration
Inspired by Codesistency YouTube channel — I learned a lot from their tutorial and then customized & extended it for my project.

---

### 🏃 Usage
On Home Page → see your friends + recommended users.

Send friend requests to new users.

Notifications Page → see pending requests & new accepted friends.

Chat or call one-on-one with connected friends.

---

### 🎨 Styling
Built with Tailwind CSS for fast utility-first styling.

Used DaisyUI for clean, elegant components.

Fully responsive for mobile & desktop.

---

📫 **Contact**  
Rohit Negi → [@Rohitnegi51](https://github.com/Rohitnegi51)


