// Render the PayPal button into #paypal-button-container
window.addEventListener("load", () => {
  paypal
    .Buttons({
      style: {
        layout: "horizontal",
      },
    })
    .render("#paypal__btn");
});

// REFERENCE PAGE -> https://developer.paypal.com/demo/checkout/#/pattern/horizontal
