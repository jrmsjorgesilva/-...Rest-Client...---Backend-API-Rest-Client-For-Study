const router = require("express").Router();
const Products = require("../../models/Products");

router.post("/", async (req, res) => {
  const { priceInCents, name } = req.body;
  const productToPost = { priceInCents, name };
  try {
    await Products.create(productToPost);
    return res.status(201).json(productToPost);
  } catch (error) {
    return res.status(422).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const productToGet = await Products.find();
    return res.status(201).json(productToGet);
  } catch (error) {
    return res.status(422).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productToGet = await Products.findOne({ _id: id });
    return res.status(201).json(productToGet);
  } catch (error) {
    return res.status(422).json({ error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { priceInCents, name } = req.body;
    const productToPatch = { priceInCents, name };
    await Products.updateOne({ _id: id }, productToPatch);
    return res.status(201).json(productToPatch);
  } catch (error) {
    return res.status(422).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Products.deleteOne({ _id: id });
    return res
      .status(201)
      .json({ message: `The id ${id} was deleted succesfully` });
  } catch (error) {
    return res.status(422).json({ error });
  }
});

module.exports = router;
