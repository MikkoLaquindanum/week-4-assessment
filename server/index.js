const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getFruits,
  deleteFruits,
  createFruits,
  updateFruits
} = require('.controller')

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get('/api/fruits', getFruits)
app.delete(`/api/fruits/:id`, deleteFruits)
app.post(`/api/fruits`, createFruits)
app.put(`/api/fruits/:id`, updateFruits)

app.listen(4000, () => console.log("Server running on 4000"));
