import { IFood } from "../models/IFood";
import { IMeal } from "../models/IMeal";

export function getMeals(): IMeal[] {
    const foods: IFood[] = getFoods();

     let paella: IMeal = {
        id: "1",
        name: "Paella",
        description: "A Spanish rice dish.",
        image: {
            type: "meal",
            name: "paella",
            extension: "jpg"
        },
        duration: 60,
        ingredients: [
            {
                id: "1",
                food: foods[0],
                unit: "g",
                quantity: 200
            },
            {
                id: "2",
                food: foods[1],
                unit: "g",
                quantity: 100
            },
            {
                id: "3",
                food: foods[2],
                unit: "g",
                quantity: 100
            },
            {
                id: "4",
                food: foods[3],
                unit: "g",
                quantity: 100
            },
            {
                id: "5",
                food: foods[4],
                unit: "g",
                quantity: 100
            },
            {
                id: "6",
                food: foods[5],
                unit: "g",
                quantity: 10
            },
            {
                id: "7",
                food: foods[6],
                unit: "g",
                quantity: 10
            }
        ]
    };

    let spaghetti: IMeal = {
        id: "2",
        name: "Spaghetti",
        description: "A pasta dish.",
        image: {
            type: "meal",
            name: "spaghetti",
            extension: "jpg"
        },
        duration: 30,
        ingredients: [
            {
                id: "10",
                food: foods[7],
                unit: "g",
                quantity: 200
            },
            {
                id: "11",
                food: foods[8],
                unit: "g",
                quantity: 100
            },
            {
                id: "12",
                food: foods[3],
                unit: "g",
                quantity: 100
            }
        ]
    };

    let pizza: IMeal = {
        id: "3",
        name: "Pizza de la Mama ! Si si ma que bela !",
        description: "A pizza.",
        image: {
            type: "meal",
            name: "pizza",
            extension: "jpg"
        },
        duration: 30,
        ingredients: [
            {
                id: "13",
                food: foods[10],
                unit: "g",
                quantity: 200
            },
            {
                id: "14",
                food: foods[8],
                unit: "g",
                quantity: 100
            },
            {
                id: "15",
                food: foods[3],
                unit: "g",
                quantity: 100
            },
            {
                id: "16",
                food: foods[9],
                unit: "g",
                quantity: 100
            }
        ]
    };


    return [paella, spaghetti, pizza];
};

export function getFoods(): IFood[] {
    let foods: IFood[] = [
        {
            id: "1",
            name: "Riz"
        },
        {
            id: "2",
            name: "Poulet"
        },
        {
            id: "3",
            name: "Tomate"
        },
        {
            id: "4",
            name: "Oignon"
        },
        {
            id: "5",
            name: "Petits pois"
        },
        {
            id: "6",
            name: "Paprika"
        },
        {
            id: "7",
            name: "Safran"
        },
        {
            id: "8",
            name: "Pâtes"
        },
        {
            id: "9",
            name: "Sauce tomate"
        },
        {
            id: "10",
            name: "Champignon"
        },
        {
            id: "11",
            name: "Pâte à pizza"
        },
    ];
    
    return foods;
};

