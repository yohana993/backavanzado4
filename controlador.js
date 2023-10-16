const mongoose = require("mongoose");
const ticketsRouter = require("./tickets");

// tickets controller
ticketsRouter.get("/", async (req, res) => {
  const tickets = await Ticket.find({});

  res.json(tickets);
});

ticketsRouter.post("/", async (req, res) => {
  const ticket = await new Ticket({
    id: Number(req.body.id),
    name: req.body.name,
    articles: [
      {
        id: Number(req.body.articles[0].id),
        name: req.body.articles[0].name,
        quantity: Number(req.body.articles[0].quantity),
      },
    ],
  }).save();

  // Actualizar existencias
  const article = await Article.findById(ticket.articles[0].id);
  article.quantity -= ticket.articles[0].quantity;
  await article.save();

  res.json(ticket);
});

module.exports = {
  ticketsRouter,
};

