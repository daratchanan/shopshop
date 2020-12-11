const db = require("../models");

exports.getAllOrder = async (req, res) => {
   const order = await db.Order.findAll({});
   res.status(200).json({ order });
};

exports.getOrderById = async (req, res) => {
   try {
      const { id } = req.params;
      const order = await db.Order.findOne({ where: { id }});
      res.status(200).json({ order })
   } catch (error){
      res.status(500).json({message: "err.message"})
   }
};

exports.createOrder = async (req, res) => {
   try {
      const { date, total_price, delivery_date, user_id } = req.body;
      const order = await db.Order.create({
         date,
         total_price,
         delivery_date,
         user_id,
       });

       res.status(201).json({ order });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};

exports.updateOrder = async (req, res) => {
   const { id } = req.params;
   const { date, total_price, delivery_date } = req.body;
 
   const order = await db.Order.findOne( {where: {id}} );
 
   if (date) order.date = date;
   if (total_price) order.total_price = total_price;
   if (delivery_date) order.delivery_date = delivery_date;
   
   await order.save();
 
   res.status(200).json({ order });
 };
 
 exports.deleteOrder = async (req, res) => {
   try {
     const { id } = req.params;
     await db.Order.destroy({ where: {id} });
     res.status(204).json();
   } catch (error) {
     res.status(500).json({ message: err.message });
   }
 };
