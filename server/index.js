const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 6969;
const axios = require("axios");
const app = express();
const { googleMapsApiKey } = require("../config");
const CircularJSON = require("circular-json");
const { addData } = require("../app/Data.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/userLocation", (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.lat},${req.query.long}&key=${googleMapsApiKey}`;
  axios
    .get(url)
    .then(result => {
      let json = CircularJSON.stringify(result);
      console.log(json.body);
      res.send(json.body);
    })
    .catch(err => console.log(err));
});

// app.get("/getNews", (req, res) => {
//   console.log("hi from news server");
//   fetch(
//     "http://newsapi.org/v2/top-headlines?sources=bbc-news,cnn,politico,time,npr,the-wall-street-journal,bloomberg,independent,vice-news,associated-press&apiKey=9c76a13dd58b48ad94dad381323fbd4e&pageSize=5&q=trump"
//   )
//     .then(response => {
//       // let json = JSON.parse(response);
//       // console.log(json);
//       return response.json();
//     })
//     .then(json =>
//       json.articles.forEach((article, i) => {
//         addData(i, article);
//       })
//     );
// });

app.listen(PORT, () => {
  console.log("server up on port ", PORT);
});
