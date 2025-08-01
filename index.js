
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ImageKit = require("imagekit");

const app = express();
app.use(cors()); // Allow cross-origin requests (adjust as needed)

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });
  
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/auth", (req, res) => {
  const authParams = imagekit.getAuthenticationParameters();
  res.json(authParams);
});

app.post("/auth", (req, res) => {
  const { token, expire, signature } = imagekit.getAuthenticationParameters();
  res.send({ token, expire, signature, publicKey: imagekit.publicKey });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ImageKit auth server listening on http://localhost:${PORT}`);
});
