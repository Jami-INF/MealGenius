import { IMeal } from "../models/IMeal";

export function getMeals(): IMeal[] {
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
                food: {
                    id: "1",
                    name: "Riz"
                },
                unit: "g",
                quantity: 200
            },
            {
                id: "2",
                food: {
                    id: "2",
                    name: "Poulet"
                },
                unit: "g",
                quantity: 100
            },
            {
                id: "3",
                food: {
                    id: "3",
                    name: "Tomate"
                },
                unit: "g",
                quantity: 100
            },
            {
                id: "4",
                food: {
                    id: "4",
                    name: "Oignon"
                },
                unit: "g",
                quantity: 100
            },
            {
                id: "5",
                food: {
                    id: "5",
                    name: "Petits pois"
                },
                unit: "g",
                quantity: 100
            },
            {
                id: "6",
                food: {
                    id: "6",
                    name: "Paprika"
                },
                unit: "g",
                quantity: 10
            },
            {
                id: "7",
                food: {
                    id: "7",
                    name: "Safran"
                },
                unit: "g",
                quantity: 10
            },
            {
                id: "8",
                food: {
                    id: "8",
                    name: "Paprika"
                },
                unit: "g",
                quantity: 10
            },
            {
                id: "9",
                food: {
                    id: "9",
                    name: "Paprika"
                },
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
                food: {
                    id: "10",
                    name: "Pâtes"
                },
                unit: "g",
                quantity: 200
            },
            {
                id: "11",
                food: {
                    id: "11",
                    name: "Sauce tomate"
                },
                unit: "g",
                quantity: 100
            },
            {
                id: "12",
                food: {
                    id: "12",
                    name: "Oignon",
                },
                unit: "g",
                quantity: 100
            }
        ]
    };

    return [paella, spaghetti];
};