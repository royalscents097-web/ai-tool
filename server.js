const express = require("express");
const app = express();
app.use(express.json());

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  res.json(data.choices[0].message.content);
});

app.listen(3000, () => console.log("Server running"));
