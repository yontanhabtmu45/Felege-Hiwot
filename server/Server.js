const express = require("express");
const app = express();

app.use(express.json());

// In-memory storage for posts
const posts = [];

// Webhook endpoint to receive posts
app.post("/webhook", (req, res) => {
  const { id, title, description, createdAt } = req.body;

  // Save the post data to in-memory storage
  posts.push({ id, title, description, createdAt });
  console.log(`Received post: ${id}, ${title}`);

  // Respond to the webhook
  res.status(200).send("Webhook received");
});

// Endpoint to fetch posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log("External website listening on http://localhost:/");
});