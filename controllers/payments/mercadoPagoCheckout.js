require("dotenv").config();
const MercadoPago = require('mercadopago');

// return full url
const getFullUrl = (req) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(url);
  console.log(process.env.MERCADOPAGO_ACCESS_TOKEN)
  return url;
};

// main
async function mercadoPagoCheckout(req, res) {
  MercadoPago.configure({
    sandbox: process.env.SANDBOX == "true" ? true : false,
    access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  });

  const { id, email, description, amount } = req.params;

  //Create purchase item object template
  const purchaseOrder = {
    items: [
      (item = {
        id: id,
        title: description,
        description: description,
        quantity: 1,
        currency_id: "BRL",
        unit_price: parseFloat(amount),
      }),
    ],
    payer: {
      email: email,
    },
    auto_return: "all",
    external_reference: id,
    back_urls: {
      success: getFullUrl(req) + "/mercadopago/success",
      pending: getFullUrl(req) + "/mercadopago/pending",
      failure: getFullUrl(req) + "/mercadopago/failure",
    },
  };

  //Generate init_point to checkout
  try {
    const preference = await MercadoPago.preferences.create(purchaseOrder);
    return res.status(201).redirect(`${preference.body.init_point}`);
  } catch (err) {
    return res.send(err.message);
  }
}

module.exports = mercadoPagoCheckout;
