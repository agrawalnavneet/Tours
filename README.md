# Aviatours Australia – Travel Booking Platform

Aviatours Australia is a modern, responsive travel booking web application built with React and Vite. It allows users to explore, book, and manage tours across Australia, featuring a beautiful UI, real-time booking form, and admin management panel.


## 🚀 Deployment Guide

This project is live at: [[https://aviatours.com.au](https://aviatours.com.au)](https://aviatours.com.au/)

## Features

- Home Page: Engaging hero slider, featured tours, and gallery sections.
- **Tour Cards**: Interactive cards with images, ratings, Google Maps routes, and instant booking.
- **Booking Form**: Modern, animated booking form with country code, geolocation, and progress feedback.
- **Statistics**: Live stats for visitors and bookings, animated with CountUp.
- **Gallery Sliders**: Two responsive image sliders for showcasing destinations and experiences.
- **Company Location**: Embedded Google Map for the company's location in Sydney, Australia.
- **YouTube Integration**: Embedded YouTube video for promotional or informational content.
- **WhatsApp & Call Buttons**: Floating buttons for instant contact via WhatsApp or phone.
- **Dark Mode**: Toggleable dark/light mode for better user experience.
- **Responsive Design**: Fully mobile-friendly and visually appealing on all devices.
- **Admin Panel**: Simple admin page for managing tours and bookings (placeholder, extendable).
- **Footer**: About, services, contact info, and social media links.


## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Tours
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit (for eg: [http://localhost:5173](http://localhost:5173)) (or the port shown in your terminal).

### Build for Production
```bash
npm run build
# or
yarn build
```

### Linting
```bash
npm run lint
```

## Project Structure
```
src/
  assets/           # Images and static assets
  components/       # Reusable React components
  pages/            # Main page components (Home, AdminPanel)
  App.jsx           # Main app component with routing
  main.jsx          # Entry point
```

## Main Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/) (UI components)
- [React Slick](https://react-slick.neostack.com/) (carousel)
- [React Select](https://react-select.com/) (dropdowns)
- [React CountUp](https://www.npmjs.com/package/react-countup) (animated stats)
- [FontAwesome](https://fontawesome.com/) (icons)
- [Tailwind CSS](https://tailwindcss.com/) (utility classes)

## Customization
- **Tour Data**: Update `TourCardList.jsx` for your own tours.
- **Contact Info**: Edit `Footer.jsx` and `WhatsAppButton.jsx` for your business details.
- **Admin Panel**: Extend `AdminPanel.jsx` for real admin features.
- **API Integration**: The booking form posts to `http://localhost:5000/api/bookings` (update as needed).

## Credits
- Developed by [FreelancerPro (INDIA)](https://freelancerpro.in/)
- UI/UX inspired by modern travel platforms.


🚀 Getting Started
Follow these steps to set up the project on your local machine:

1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
🔁 Replace your-username/your-repo-name with your actual GitHub repo link.

2️⃣ Go to the Project Directory
cd your-repo-name
3️⃣ Install Dependencies
Make sure you have Node.js installed. Then, run:
npm install
This will install all the required dependencies from package.json.

4️⃣ Start the Development Server
npm run dev
This will start the project in development mode.
Open http://localhost:5173 in your browser to view it.

📦 Build for Production
To create a production build, run:
npm run build

