const btnPayStripe = () => {
  fetch("/stripe-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
};

// fetch("http://localhost:8000/persons").then((res) => {
//   res.json().then((data) => {
//     data.map((item) => {
//       item.firstName ? console.log(item.firstName + " " + item.lastName) : "";
//     });
//   });
// });
