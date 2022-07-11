window.addEventListener("load", () => {
  const formValue = document.querySelector("form__btn");

  console.log(formValue);

  function handleForm(e) {
    e.prenventDefault();
    console.log("prevented");
  }

  formValue?.addEventListener("submit", handleForm(e));
  console.log("eita");
});

fetch("http://localhost:8000/persons").then((res) => {
  res.json().then((data) => {
    data.map((item) => {
      item.firstName ? console.log(item.firstName + " " + item.lastName) : "";
    });
  });
});
