const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MZ0XIDHiXd3eUFzYjUEnBiWE8ln5ylUXtCgXDTnwtv5pcn4fMdyvuiDncJAJA6r0zEjmqacVQQapLzvVx8VA3jQ00Ym4m0F6B"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`listening on port ${port}`));
