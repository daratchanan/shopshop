const db = require("../models");

exports.getProducts = async (req, res) => {
  const products = await db.Product.findAll({});
  res.status(200).json({ products });
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db.Product.findOne({ where:{id} })
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getTopProduct = async (req, res) => {
  try {
    const { limit } = req.query;
    const products = await db.Product.findAll({
      order: [
        ["total_sale", "DESC"],
      ],
      limit: Number(limit)
    });
    res.status(200).json({products})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: error.message})
  }
}


exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, productType_id } = req.body;

    if (!name) return res.status(400).json({ message: "Name is require" });
    if (!price) return res.status(400).json({ message: "Price is require" });

    const product = await db.Product.create({
      name,
      price,
      description,
      productType_id
    });

    res.status(201).json({ product });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  const product = await db.Product.findOne( {where: {id}} );

  if (name) product.name = name;
  if (price) product.price = price;
  if (description) product.description = description;

  await product.save();

  res.status(200).json({ product });
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Product.destroy({ where: {id} });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: err.message });
  }

};