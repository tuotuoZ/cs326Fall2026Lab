import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, lab3.1 web!");
});

app.get("/about", (req, res) => {
  res.send("This is a web programming course.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/status", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

const greetHandler = (req, res) => {
  res.send("Hello!");
};

app.get("/greet", greetHandler);

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get("/users/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;
  res.send(`User ${userId}, post ${postId}`);
});

app.get("/search", (req, res) => {
  const term = req.query.term || "nothing";
  const limit = parseInt(req.query.limit) || 5;
  res.send(`Searching for "${term}", showing ${limit} results.`);
});

app.get("/api/user/:id", (req, res) => {
  if (req.params.id !== "1") {
    res.status(404).send("User not found.");
    return;
  }
  res.json({ id: "1", name: "Alice" });
});

app.get("/broken", (req, res) => {
  const user = undefined;
  res.send(user.name);
});
