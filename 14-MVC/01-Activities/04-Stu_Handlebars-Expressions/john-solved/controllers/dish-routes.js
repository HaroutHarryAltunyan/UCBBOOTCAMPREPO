const router = require("express").Router();

// ? We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    dish_name: "French Bread with Brie Cheese",
    description: "French baguette with warm brie",
    css_class: "bread",
  },
  {
    dish_name: "Cheese Plate with Spanish Chorizo",
    description:
      "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanish Chorizo",
    css_class: "cheese",
  },
  {
    dish_name: "Fish Tacos",
    description:
      "Battered/fried fish, corn tortillas, fresh slaw with jalapeños and cilantro, pickled red onion",
    css_class: "meat",
  },
  {
    dish_name: "Tropical Fruit Salad",
    description: "Guava, papaya, pineapple, mango, and star fruit",
    css_class: "fruit",
  },
  {
    dish_name: "Pork Gyoza",
    description:
      "Homemade Japanese dumplings stuffed with a pork and green onion filling",
    css_class: "prepareed",
  },
  {
    dish_name: "Yebeg Tibs with Injera Bread",
    description:
      "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
    css_class: "",
  },
  {
    dish_name: "Cape Malay Curry",
    description: "Chicken and vegetable curry dish with basmati rice",
    css_class: "",
  },
];

// ? Get all dishes
router.get("/", async (req, res) => {
  res.render("all");
});

// TODO: Add a route called `/dish/:num` below
router.get("/dish/:num", (req, res) => {
  const dishIndex = req.params.num - 1;
  const dishObject = dishes[dishIndex];

  res.render("dish", dishObject);
});

module.exports = router;
