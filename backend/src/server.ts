import express from "express";
import cors from "cors";
import { sample_cars, sample_tags } from "./data";

const app = express();
app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.get("/api/cars", (req, res) => {
  res.send(sample_cars);
});

app.get("/api/cars/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const cars = sample_cars
    .filter(car  => car.name.toLowerCase()
    .includes(searchTerm.toLocaleLowerCase()));
  res.send(cars);
});

app.get("/api/cars/tags", (req, res) => {
  res.send(sample_tags);
});

app.get("/api/cars/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const cars = sample_cars
    .filter(car => car.tags?.includes(tagName));
  res.send(cars);
});

app.get("/api/cars/:carId", (req, res) => {
  const carId = req.params.carId;
  const car = sample_cars.find(car => car.id == carId);
  res.send(car);
});

const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});