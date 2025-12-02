# Netflix GPT 🎬

An AI-powered Netflix-style movie discovery app built with **React**, **Redux Toolkit**, **Firebase Auth**, **The Movie Database (TMDB)** APIs, and **OpenAI**.  
Users can sign up / log in, browse live movie data (now playing, popular, top rated, upcoming), and get **GPT-generated movie suggestions** via a smart search experience.

---

## 🚀 Tech Stack

- **Frontend**: React 18, React DOM, React Router, TailwindCSS, Tailwind Scrollbar Hide
- **State Management**: Redux Toolkit, React Redux
- **Backend Services**: Firebase Authentication, Firebase Analytics
- **Movie Data**: TMDB REST APIs
- **AI / GPT**: OpenAI SDK (Netflix-GPT search experience)
- **Build Tooling**: Parcel bundler

---

## ✨ Core Features

### Authentication (Login / Signup)
- Email/password authentication using **Firebase Auth**
- **Sign In / Sign Up** form with client-side validation (custom `Validata.js`)
- Uses `useRef` for form inputs and validation handling
- Auth state is persisted and synced globally via `userSlice` and Redux store
- Automatic redirect:
  - Unauthenticated users → `"/"` (Login page)
  - Authenticated users → `"/browser"` (main app)

### Authenticated Browser Experience
- **Header**
  - Netflix-style logo
  - Language switcher (`LanguageSelect` + `LangauageConstant.js`)
  - Toggle between **Home** and **GPT Search** view (`gptSlice`)
  - Logout button (Firebase `signOut`)
  - User profile section (`Profile`)
  
- **Main Movie Section**
  - Hero section with **trailer/video background** (`VideoBackground`, `VideoTitle`, `MainContainer`)
  - Shows title, description, and rich visual layout
  
- **Movie Suggestions / Lists**
  - Multiple horizontal movie rows powered by:
    - `useNowPlayingMovie`
    - `usePopularMovies`
    - `useTopRatedMovies`
    - `useUpComingMovie`
  - Data cached in Redux via `moveSlice` for:
    - Now Playing
    - Popular
    - Top Rated
    - Upcoming
  - Movie cards (`MovieCard`, `MovieList`, `GPTList`) render TMDB poster images using `IMG_BASE_URL`

### Netflix-GPT (AI Movie Assistant)
- Accessible from the header via **GPT Search** toggle
- `GPTSearch` screen includes:
  - Large **hero background** with overlay
  - Centered **GPTSearchBar** for natural language queries
  - **GPTMovieSuggestion** to display AI-powered movie recommendations
- Integrates with OpenAI using the key defined in `openai.js` / `constant.js`
- Designed for queries like:
  - "Suggest some sci-fi movies like Interstellar"
  - "Family-friendly comedies" style prompts

### Multi-Language Support
- Centralized language constants in `LangauageConstant.js`
- `configSlice` stores current language (`config.lang`)
- Header language dropdown updates texts (e.g., GPT Search label, Logout, Home)
- Ready to extend with more languages (`SUPPORTED_LANGUAGES` in `constant.js`)

### Responsive, Modern UI
- TailwindCSS-based layout with Netflix-inspired visuals
- Scrollable movie rows, gradient overlays, fixed header
- Optimized for desktop first, behaves well across common breakpoints

---

## 📁 Project Structure (High Level)

```
Netflix-Gpt-V1/
├── src/
│   ├── components/
│   │   ├── Body.js                    # Routing setup
│   │   ├── Login.js                   # Login page
│   │   ├── LoginFrom.js               # Login form component
│   │   ├── Information.js             # Marketing/info sections
│   │   ├── Browser.js                 # Main authenticated layout
│   │   ├── Header.js                  # Top navigation
│   │   ├── Profile.js                 # User profile controls
│   │   ├── LanguageSlect.js           # Language selector
│   │   ├── MainContainer.js           # Hero section container
│   │   ├── SecondaryContainer.js      # Movie rows container
│   │   ├── VideoBackground.js         # Trailer background
│   │   ├── VideoTitle.js              # Movie title overlay
│   │   ├── MovieList.js               # Horizontal movie list
│   │   ├── MovieCard.js               # Individual movie card
│   │   ├── MoviePage.js               # Movie detail view
│   │   ├── GPTSearch.js               # GPT search container
│   │   ├── GPTSearchBar.js            # Search input
│   │   ├── GPTMovieSuggestion.js      # AI recommendations
│   │   ├── GPTList.js                 # GPT result list
│   │   └── InputBox.js                # Reusable input component
│   ├── hooks/
│   │   ├── useNowPlayingMovie.js
│   │   ├── usePopularMovies.js
│   │   ├── useTopRatedMovies.js
│   │   └── useUpComingMovie.js
│   ├── utils/
│   │   ├── appStore.js                # Redux store configuration
│   │   ├── userSlice.js               # User state slice
│   │   ├── moveSlice.js               # Movie data slice
│   │   ├── gptSlice.js                # GPT toggle slice
│   │   ├── configSlice.js             # Config (language) slice
│   │   ├── constant.js                # TMDB config, API keys
│   │   ├── firebase.js                # Firebase initialization
│   │   ├── LangauageConstant.js       # Multi-language strings
│   │   ├── Validata.js                # Form validation helpers
│   │   └── openai.js                  # OpenAI client integration
│   ├── app.js                         # React root
│   └── index.css                      # Global styles
├── index.html                         # HTML shell
└── package.json
```

---

## 🧩 Routing Overview

- **`"/"`** – Login / Signup page
- **`"/browser"`** – Authenticated home with:
  - Header
  - Hero movie section
  - Movie lists / recommendations or GPT Search (based on toggle)
- **`"/movies/:type"`** – Movie page driven by URL type (e.g., category-specific listing)

Routing is handled through `createBrowserRouter` and `RouterProvider` in `Body.js`.

---

## 🔐 Environment & API Keys

> **Important**: For production or public repositories, move all API keys and secrets into environment variables instead of committing them in `constant.js` or `firebase.js`.

### Required API Keys

1. **Firebase Configuration**
   - Firebase API Key
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

2. **TMDB API Key**
   - Get from [The Movie Database](https://www.themoviedb.org/settings/api)

3. **OpenAI API Key**
   - Get from [OpenAI Platform](https://platform.openai.com/api-keys)

### Suggested Environment Variables

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
TMDB_API_KEY=your_tmdb_api_key
OPENAI_API_KEY=your_openai_api_key
```

Then, inject them via your bundler (Parcel) env support and read them in your config files instead of hardcoding.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunal123kumar/Netflix-Gpt-V1.git
   cd Netflix-Gpt-V1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API keys**
   
   Update `src/utils/constant.js` and `src/utils/firebase.js` with your API keys, or better yet, use environment variables.

4. **Run the development server**
   ```bash
   npm start
   ```
   
   This uses Parcel to serve `index.html` and boot the React app.  
   App will typically run at `http://localhost:1234` (Parcel default).

5. **Build for production**
   ```bash
   npm run build
   ```
   
   Parcel will output optimized static assets ready to be deployed.

---

## ✅ Completed Features Checklist

- ✅ **React + Parcel** setup with TailwindCSS
- ✅ **Firebase authentication** integration
- ✅ **TMDB API integration** for multiple movie categories
- ✅ **Redux Toolkit** store with slices for user, movie, GPT, and config
- ✅ **Multi-language UI support**
- ✅ **GPT-powered movie search** experience
- ✅ Responsive **Netflix-like UI** with hero background and movie rows

---

## 💡 Future Improvements (Ideas)

- Replace hardcoded secrets with environment variables everywhere
- Add pagination / infinite scroll for movie lists
- Add detailed movie pages (cast, reviews, similar titles)
- Persist language preference per user in Firebase or local storage
- Improve GPT prompts and ranking logic for better recommendations
- Add user watchlist and favorites functionality
- Implement movie ratings and reviews
- Add movie trailers modal view
- Enhanced error handling and loading states

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is currently licensed under the **ISC License** (see `package.json`).

---

## 👨‍💻 Author

**Kunal Kumar**
- GitHub: [@kunal123kumar](https://github.com/kunal123kumar)

---

## 🙏 Acknowledgments

- Netflix for design inspiration
- OpenAI for GPT API
- The Movie Database (TMDB) for movie data
- Firebase for authentication and backend services

---

⭐ If you found this project helpful, please consider giving it a star!