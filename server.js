const express = require("express");
const path = require("path");

const complements = [
  "I ate a clock yesterday, it was very time-consuming.",
  "Have you played the updated kids’ game? I Spy With My Little Eye . . . Phone.",
  "A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.",
  "I used to breed rabbits. Then I realized they can handle it themselves.",
  "My dog is an awesome fashion adviser. Every time I ask him what I look like in my clothes, he says “WOW!”",
  "Google request: How to disable autocorrect in wife?",
  "Why are eggs not very much into jokes? Because they could crack up.",
  "What is Jesus' favorite food? - Cheeses.",
  "Losing a wife can be very tough. Some may even say impossible."
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");

