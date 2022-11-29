import { model, Schema } from "mongoose";

export interface Car {
    id: string;
    name: string;
    price: number;
    tags: string[];
    favorite:boolean;
    imageUrl: string;
    origins: string[];
    madeYear: string;
}

export const CarSchema = new Schema<Car>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, required:false},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true},
        madeYear: {type: String, required:true},
    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals:true
        },
        timestamps: true //date imformation
    }
);

export const CarModel = model<Car>('car', CarSchema);