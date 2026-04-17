# 🎉 KeenKeeper

> Your personal shelf of meaningful connections — browse, tend, and nurture the relationships that matter most.

Live site: [keen-keeper-app-mocha.vercel.app](https://keen-keeper-app-mocha.vercel.app)

---

## 📖 Description

KeenKeeper is a relationship management app that helps you stay in touch with the people who matter. Set contact goals for each friend, log interactions, and get notified when you're falling behind — so no important relationship quietly fades away.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js + Vite | UI framework and build tool |
| React Router DOM | Client-side page navigation |
| Tailwind CSS + DaisyUI | Styling and responsive design |
| Recharts | Pie chart on analytics page |
| React Hot Toast | Toast notifications |
| React Icons | Icons throughout the UI |
| Google Fonts (Geist) | Typography |

---

## ✨ Key Features

### 1. 👥 Friend Dashboard
View all your friends as cards with their contact status — colour-coded as **On Track**, **Almost Due**, or **Overdue** — so you always know who needs attention at a glance.

### 2. ⚡ Quick Check-In Logging
From any friend's detail page, log a **Call**, **Text**, or **Video** interaction in one click. A toast notification confirms it, and the entry is instantly added to your Timeline.

### 3. 📊 Friendship Analytics
A live pie chart (powered by Recharts) breaks down your interactions by type, so you can see whether you're calling, texting, or video-chatting your friends most.

---

## 📋 Pages

- **Home** — Friend cards grid with summary stats
- **Friend Details** — Full profile, stats, relationship goal, and quick check-in
- **Timeline** — Full interaction history with filter by type, search by name or type, and sort by date
- **Stats** — Pie chart of interaction breakdown
- **404** — Custom not-found page

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Redwanhossain200/keen-keeper-app.git

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components (Navbar, Footer, FriendCard…)
├── pages/            # Route-level pages (Home, FriendDetails, Timeline, Stats)
├── context/          # TimelineContext for global interaction state
public/
└── friends.json      # Friend data
```

---

*Built with React + Vite · Deployed on Vercel*
