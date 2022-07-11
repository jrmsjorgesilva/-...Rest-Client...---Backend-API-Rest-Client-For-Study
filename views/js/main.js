

fetch('http://localhost:8000/persons').then((res) => {
    res.json().then((data) => {
        data.map(item => {
            item.firstName ? console.log(item.firstName + ' ' + item.lastName) : '';
        })
    })
})

const btnSubmit = document.querySelector('form__btn');

console.log(btnSubmit);

btnSubmit.addEventListener('submit', (e) => {
    e.prenventDefault();
    console.log('prevented');
})