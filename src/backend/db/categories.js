import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        categoryName: "Documentary",
    },
    {
        _id: uuid(),
        categoryName: "Gardening Tips",
    },
    {
        _id: uuid(),
        categoryName: "Farming Equipments",
    },
];
