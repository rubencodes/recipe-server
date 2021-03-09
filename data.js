export const RECIPES = {
    "mamas_meatballs": {
        id: "mamas_meatballs",
        name: "Mama's Meatballs",
        imageUrl: "https://images.unsplash.com/photo-1586955080976-3854194bf139",
        ingredients: [
            {
                id: "frozen_meatballs",
                name: "frozen meatballs",
                amount: 8,
                unit: {
                    name: "ball",
                    pluralName: "balls",
                }
            },
            {
                id: "mozarella_cheese",
                name: "mozarella cheese",
                amount: 6,
                unit: {
                    name: "ounce",
                    pluralName: "ounces",
                    metricName: "gram",
                    metricPluralName: "grams",
                    metricConversionFactor: 28.35
                }
            },
            {
                id: "parmesan_cheese",
                name: "parmesan cheese",
                amount: 2,
                unit: {
                    name: "ounce",
                    pluralName: "ounces",
                    metricName: "gram",
                    metricPluralName: "grams",
                    metricConversionFactor: 28.35
                }
            },
            {
                id: "love",
                name: "love",
                amount: 1,
                unit: {
                    name: "pinch",
                    pluralName: "pinches"
                }
            },
        ],
        steps: [
            "Add frozen meatballs to plate.",
            "Place in microwave for 3 minutes.",
            "Sprinkle parmesan cheese on top.",
            "Enjoy!"
        ]
    },
    "maxs_mac_and_cheese": {
        id: "maxs_mac_and_cheese",
        name: "Max's Mac & Cheese",
        imageUrl: "https://images.unsplash.com/photo-1612892010343-983bfd063dc5",
        ingredients: [
            {
                id: "butter",
                name: "butter",
                amount: 3,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "flour",
                name: "flour",
                amount: 2,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "milk",
                name: "milk",
                amount: 2,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
            {
                id: "cheddar_cheese",
                name: "cheddar cheese",
                amount: 8,
                unit: {
                    name: "ounce",
                    pluralName: "ounces",
                    metricName: "gram",
                    metricPluralName: "grams",
                    metricConversionFactor: 28.35
                }
            },
            {
                id: "macaroni",
                name: "macaroni, cooked",
                amount: 2,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
        ],
        steps: [
            "Heat oven to 350°F.",
            "Melt butter in large saucepan on low heat.",
            "Stir in flour; cook and stir 2 min. or until bubbly.",
            "Gradually stir in milk; bring to boil on medium heat, stirring constantly.",
            "Simmer on low heat 3 to 5 min. or until thickened, stirring constantly.",
            "Add 1-1/2 cups cheese; cook and stir 2 to 3 min. or until melted. Stir in macaroni.",
            "Spoon into 1-1/2-qt. casserole sprayed with cooking spray; sprinkle with remaining cheese.",
            "Bake 20 min. or until heated through.",
        ]
    },
    "tonyas_tortillas": {
        id: "tonyas_tortillas",
        name: "Tonya's Tortillas",
        imageUrl: "https://images.unsplash.com/photo-1599232288126-7dbd2127db14",
        ingredients: [
            {
                id: "flour",
                name: "flour",
                amount: 2,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
            {
                id: "baking_powder",
                name: "baking powder",
                amount: 1.5,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "salt",
                name: "salt",
                amount: 1,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "vegetable_oil",
                name: "vegetable oil",
                amount: 2,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "milk",
                name: "milk",
                amount: 0.75,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
        ],
        steps: [
            "In a bowl, stir together the flour, baking powder, and salt.",
            "Add vegetable oil to the lukewarm milk and whisk briefly to incorporate.",
            "Gradually add the milk to the flour mixture, and using clean hands, work into a sticky dough.",
            "Turn dough out onto a surface dusted with flour and knead vigorously for about 2 minutes or until the dough is no longer sticky.",
            "Return dough to bowl, cover with a damp cloth and allow to rest for 10 -20 minutes so that it will be easier to roll out.",
            "Divide dough into 8 balls of equal size, cover them, and let them rest again for about 20 minutes. Avoid letting them touch, if you don't want them to stick together.",
            "Dust a clean pastry board or working surface with flour.",
            "One at a time, remove each piece of dough. Press it out into a 5-inch circle. Using a flour dusted rolling pin, roll out the tortilla from the center out until the tortilla measures a little less than 1/4 inch thick and is a 7 or 8-inch circle.",
            "Transfer the tortilla to a dry preheated skillet or griddle. when the tortilla begins to blister, allow it to cook for 30 seconds, flip it, and cook the other side the same way.",
            "Remove tortilla, place it in on a clean paper towel and cover loosely with foil. Repeat for remaining tortillas."
        ]
    },
    "harrys_hotdogs": {
        id: "harrys_hotdogs",
        name: "Harry's Hotdogs",
        imageUrl: "https://images.unsplash.com/photo-1496905583330-eb54c7e5915a",
        ingredients: [
            {
                id: "hot_dog_bun",
                name: "hot dog buns",
                amount: 4,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
            {
                id: "hot_dog",
                name: "hot dogs",
                amount: 4,
            },
            {
                id: "cheddar_cheese",
                name: "cheddar cheese",
                amount: 3,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
            {
                id: "green_onions",
                name: "green onions",
                amount: 3,
            },
            {
                id: "butter",
                name: "butter",
                amount: 2,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "garlic_powder",
                name: "garlic powder",
                amount: 0.25,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "onion_powder",
                name: "onion powder",
                amount: 0.25,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
        ],
        steps: [
            "Flatten hot dog buns with a rolling pin.",
            "In a small bowl, stir together butter, garlic powder, and onion powder. Spread all over outsides of buns.",
            "Split hotdogs length-wise, with care not to slice all the way through.",
            "In a large skillet over medium heat, sear hot dogs (working in batches if necessary) until charred, 2 minutes per side. Set aside.",
            "Place a bun buttered-side down in skillet and top with 1/2 cup of cheddar cheese, a hot dog, a little more cheddar cheese, and 1/4 of green onions.",
            "Cover and cook over medium heat until cheese melts, then use a spatula to close the bun.",
            "Repeat with remaining ingredients to make 4 cheese dogs total."
        ]
    },
    "lanas_lentils": {
        id: "lanas_lentils",
        name: "Lana's Lentils",
        imageUrl: "https://images.unsplash.com/photo-1560260330-727f7f5c0277",
        ingredients: [
            {
                id: "lemon_juice",
                name: "lemon juice",
                amount: 3,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "olive_oil",
                name: "olive oil",
                amount: 1,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "chopped_parsley",
                name: "chopped parsley",
                amount: 0.5,
                unit: {
                    name: "cup",
                    pluralName: "cups",
                    metricName: "liter",
                    metricPluralName: "liters",
                    metricConversionFactor: 0.24
                }
            },
            {
                id: "salt",
                name: "salt",
                amount: 1,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "dijon_mustard",
                name: "dijon mustard",
                amount: 0.25,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "red_pepper_flakes",
                name: "red pepper flakes",
                amount: 1,
                unit: {
                    name: "pinch",
                    pluralName: "pinches"
                }
            },
            {
                id: "black_pepper",
                name: "Freshly ground black pepper",
            }
        ],
        steps: [
            "In a medium saucepan, combine the lentils and water and bring to a boil.",
            "Cover, reduce the heat, and simmer, stirring occasionally, for 20 minutes, or until tender but not mushy.",
            "Drain any excess water and let cool.",
            "Transfer the cooked lentils to a medium bowl.",
            "Stir in the lemon juice, olive oil, salt, mustard, and pepper.",
            "Stir in the parsley and red pepper flakes, if using.",
            "Serve as a side dish or store in the refrigerator for up to 5 days."
        ]
    },
    "zacks_zuccini": {
        id: "zacks_zuccini",
        name: "Zack's Zuccini",
        imageUrl: "https://images.unsplash.com/photo-1575255902511-e37f08b8435d",
        ingredients: [
            {
                id: "zucchini",
                name: "zucchini",
                amount: 3,
                unit: {
                    name: "zucchini",
                    pluralName: "zucchini",
                }
            },
            {
                id: "olive_oil",
                name: "olive oil",
                amount: 1,
                unit: {
                    name: "tablespoon",
                    pluralName: "tablespoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 14.8
                }
            },
            {
                id: "garlic",
                name: "garlic",
                amount: 2,
                unit: {
                    name: "clove",
                    pluralName: "cloves",
                }
            },
            {
                id: "dried_oregano",
                name: "dried oregano",
                amount: 0.5,
                unit: {
                    name: "teaspoon",
                    pluralName: "teaspoons",
                    metricName: "milliliter",
                    metricPluralName: "milliliters",
                    metricConversionFactor: 4.9
                }
            },
            {
                id: "parmesan_cheese",
                name: "parmesan cheese",
                amount: 2,
                unit: {
                    name: "ounce",
                    pluralName: "ounces",
                    metricName: "gram",
                    metricPluralName: "grams",
                    metricConversionFactor: 28.35
                }
            },
            {
                id: "red_pepper_flakes",
                name: "red pepper flakes",
                amount: 1,
                unit: {
                    name: "pinch",
                    pluralName: "pinches"
                }
            },
            {
                id: "black_pepper",
                name: "Freshly ground black pepper",
            },
            {
                id: "kosher_salt",
                name: "Kosher salt",
            }
        ],
        steps: [
            "In a large skillet over medium heat, heat oil.",
            "Add garlic and cook until fragrant, 30 seconds.",
            "Add zucchini and oregano.",
            "Cook until zucchini is tender, about 10 minutes.",
            "Season with salt, pepper, and a pinch red pepper flakes.",
            "Top with Parmesan and serve warm."
        ]
    }
};
