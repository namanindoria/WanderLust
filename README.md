# 🌍 WanderLust – Vacation Rental Platform

**WanderLust** is a full-stack web application inspired by Airbnb, built using the **Node.js, Express, EJS, and MongoDB** stack. It allows users to explore, create, manage vacation rental properties, leave reviews, and view locations dynamically with interactive maps.

Created & Maintained by **[Naman Indoria](https://github.com/namanindoria)**.

## 🔗 Live Demo
👉 **[https://wanderlust-s8oq.onrender.com/listings](https://wanderlust-s8oq.onrender.com/listings)**

---

## 🚀 Key Features

- 🏘️ **Listings Management**: Browse, create, update, and delete vacation property listings.
- 📸 **Image Uploads**: Cloud image storage integration powered by **Cloudinary**.
- 🗺️ **Interactive Maps**: Geocoding and map rendering powered by **Mapbox SDK**.
- ⭐ **Reviews & Ratings**: Add reviews and ratings for stays.
- 🔒 **Authentication & Authorization**:
  - Local authentication using Passport.js.
  - Google OAuth 2.0 social login.
  - Granular role-based permissions (only owners can edit/delete listings).
- 🛡️ **Security & Validation**:
  - Express rate limiting.
  - Server-side validation with Joi schemas.
  - Mongo session store with encrypted session cookies.
  - Flash notifications for immediate user feedback.
- 📱 **Responsive Design**: Mobile-first, sleek UI built with Bootstrap 5 and custom CSS.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM), MongoDB Atlas
- **Templating**: EJS & EJS-Mate
- **Cloud & Services**: Cloudinary (Media storage), Mapbox (Geocoding & Maps)
- **Authentication**: Passport.js (Local & Google OAuth 2.0)
- **Deployment**: Render

---

## ⚙️ Getting Started (Local Setup)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) installed locally OR a MongoDB Atlas cluster URI
- Free API keys from [Cloudinary](https://cloudinary.com/) and [Mapbox](https://www.mapbox.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/namanindoria/WanderLust.git
cd WanderLust
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the root directory and copy the contents from `.env.example`:
```env
PORT=8080
NODE_ENV=development
SECRET=your_secret_session_key
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

# Cloudinary
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

# Mapbox
MAP_TOKEN=your_mapbox_public_token

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BASE_URL=http://localhost:8080
```

### 5. Initialize Sample Data (Optional)
To populate initial sample listings into your database:
```bash
cd init
node index.js
cd ..
```

### 6. Run the Application
```bash
npm start
```
Open `http://localhost:8080/listings` in your browser.

---

## ☁️ Deployment on Render

1. Create a new **Web Service** on [Render](https://render.com).
2. Connect your GitHub repository `namanindoria/WanderLust`.
3. Set the following build settings:
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node app.js`
4. Add the following **Environment Variables** in the Render Dashboard:
   - `NODE_ENV`: `production`
   - `ATLASDB_URL`: Your MongoDB Atlas connection string
   - `SECRET`: Random secure string
   - `CLOUD_NAME`: Cloudinary Cloud Name
   - `CLOUD_API_KEY`: Cloudinary API Key
   - `CLOUD_API_SECRET`: Cloudinary API Secret
   - `MAP_TOKEN`: Mapbox Public Token
   - `BASE_URL`: Your Render app URL (e.g., `https://wanderlust.onrender.com`)
   - `GOOGLE_CLIENT_ID`: (If Google login is enabled)
   - `GOOGLE_CLIENT_SECRET`: (If Google login is enabled)
5. Hit **Deploy Web Service**! 🚀

---

## 📄 License
This project is licensed under the ISC License.
