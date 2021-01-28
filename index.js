require("dotenv").config();
require("./config/passport");

const express = require("express");
const db = require("./models");
const app = express();


const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const cartItemRoutes = require("./routes/cartItem");
const orderRoutes = require("./routes/order");
const adminRoutes = require("./routes/admin");

app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cartItems", cartItemRoutes);
app.use("/orders", orderRoutes);
app.use("/admin",adminRoutes);

app.use((err, req, res, next) => {
   console.log(err);
   res.status(500).json({ message: `what happen ${err.message}` });
});

app.listen(process.env.PORT, () => {
   console.log(`Server is running at PORT ${process.env.PORT} `);
});

db.sequelize.sync({ force:false })
.then(() => {
   console.log("Database connected.");
}).catch(err => {
   console.log(err);
});