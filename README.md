# Photographer Portfolio Server

This is a simple Node.js/Express server for handling authentication with [ImageKit.io](https://imagekit.io/) for a photographer's portfolio application.

## Features
- Provides authentication endpoints for ImageKit.io
- CORS enabled for cross-origin requests
- Environment variable support via `.env`

## Endpoints

- `GET /` — Health check, returns `Hello World`.
- `GET /auth` — Returns ImageKit authentication parameters (token, expire, signature).
- `POST /auth` — Returns ImageKit authentication parameters and the public key.

## Setup

1. **Clone the repository**
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file** in the root directory with the following variables:
   ```env
   IMAGEKIT_PUBLIC_KEY=your_public_key
   IMAGEKIT_PRIVATE_KEY=your_private_key
   IMAGEKIT_URL_ENDPOINT=your_url_endpoint
   PORT=3000 # or any port you prefer
   ```
4. **Start the server:**
   ```sh
   npm start
   # or for development with auto-reload
   npm run dev
   ```

## Dependencies
- express
- cors
- dotenv
- imagekit
- nodemon (dev)

## License
ISC
