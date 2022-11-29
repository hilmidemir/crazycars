import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { sample_cars, sample_tags } from '../data';
import { CarModel } from '../models/car.model';

const router = Router();

router.get("/seed", asyncHandler(
  async (req, res) => {
    const carsCount = await CarModel.countDocuments();
    if(carsCount > 0) {
      res.send("Seed is alredy done.");
      return;
    }
    await CarModel.create(sample_cars);
    res.send("Seed is done!!!");
  }
));


router.get("", asyncHandler(
  async (req, res) => {
    const cars = await CarModel.find();
    res.send(cars);
  }
));
  
  router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const cars = await CarModel.find({name: {$regex: searchRegex}})
      res.send(cars);
    }
  ));
  
  router.get("/tags", asyncHandler(
    async (req, res) => {
      const tags = await CarModel.aggregate([
        {
          $unwind: '$tags'
        },
        {
          $group: {
            _id: '$tags',
            count: {$sum: 1}
          }
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: '$count'
          }
        }
      ]).sort({count: -1});

      const all = {
        name: 'All', 
        count: await CarModel.countDocuments()
      }

      tags.unshift(all);
      res.send(tags);
    }
  ));
  
  router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
      const cars = await CarModel.find({tags: req.params.tagName})
      res.send(cars);
    }
  ));
  
  router.get("/:carId", asyncHandler (
    async (req, res) => {
      const car = await CarModel.findById(req.params.carId);
      res.send(car);
    }
  ));

  export default router;