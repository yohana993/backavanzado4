const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const ticketSchema = new mongoose.Schema({
  id: Number,
  name: String,
  articles: [articleSchema],
});

const Article = mongoose.model("Article", articleSchema);
const Ticket = mongoose.model("Ticket", ticketSchema);

