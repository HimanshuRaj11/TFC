const Dishes = require("../Models/Dishes.model");

exports.AddDishes = async (req, res) => {
  try {
    const {
      image,
      dish_Name,
      description,
      price,
      discount_percent,
      Ingredients,
      Cuisine,
    } = req.body.formData;
    const { isVej, inStock } = req.body.checkBox;
    const categories = req.body.formCategory;
    const discount_amount = (price / 100) * discount_percent;
    const newDish = await Dishes.create({
      image,
      dish_Name,
      description,
      price,
      discount_percent,
      discount_amount,
      Ingredients,
      categorys:categories,
      Cuisine,
      isVej,
      inStock,
    }).then((Dish) => {
      return res.status(201).json({ msg: "Dish Added Successfully", Dish });
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.RemoveDishes = async (req, res) => {
  try {
  } catch (error) {
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.EditDishes = async (req, res) => {
  try {
    const { _id } = req.params;
    const {
      image,
      dish_Name,
      description,
      price,
      discount_percent,
      discount_amount,
      Ingredients,
      Cuisine,
      isVej,
      inStock,
    } = req.body.formData;
    const categorys = req.body.formCategory;
    const dish = await Dishes.findByIdAndUpdate(
      { _id },
      {
        image,
        dish_Name,
        description,
        price,
        discount_percent,
        discount_amount,
        categorys,
        Ingredients,
        Cuisine,
        isVej,
        inStock,
      }
    )
      .then((Dish) => {
        return res.status(201).json({ msg: "Dish Updated Successfully", Dish });
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.fetchAllDishes = async (req, res) => {
  try {
    await Dishes.find().then((dishes) => {
      return res.status(201).json({ dishes });
    });
  } catch (error) {
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};
exports.fetchCategoryDishes = async (req, res) => {
  try {
    const { category } = req.params;
    await Dishes.find({categorys: {$elemMatch: {category}}}).then((dishes) => {
      console.log(dishes);
      return res.status(201).json({ dishes });
    });
  } catch (error) {
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.fetchDishById = async (req, res) => {
  try {
    const { _id } = req.params;
    await Dishes.findById({ _id }).then((dish) => {
      return res.status(200).json({ dish });
    });
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.AddReviews = async (req, res) => {
  try {
    const { _id } = req.params;
    const { reviewData, rating } = req.body;
    const { people, comment } = reviewData;
    await Dishes.findByIdAndUpdate(
      { _id },
      { $push: { Reviews: { people, comment, rating } } }
    )
      .then((Reviews) => {
        return res.status(201).json({ Reviews });
      })
      .catch((error) => {
        log.error(error);
        return res.status(503).json({ msg: "Something Went Wrong..", error });
      });
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.updateRetings = async (req, res) => {
  try {
    const { _id } = req.params;
    const dish = await Dishes.findById({ _id });
    const { Reviews } = dish;
    const ReviewsLength = Reviews.length;
    let AllRating = 0;
    Reviews.map((data, i) => {
      AllRating += data.rating;
    });
    const Ratings = (AllRating / ReviewsLength).toFixed(1);
    await Dishes.findByIdAndUpdate({ _id }, { Ratings });
    return;
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const { _id } = req.params;
    const dish = await Dishes.findById({ _id }).then((dish) => {});
  } catch (error) {
    console.log(error);
    return res.status(503).json({ msg: "Internal Server Error", error });
  }
};
