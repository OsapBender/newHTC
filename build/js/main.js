
(function () {
    document.querySelector('.tab-panel').classList.add('active');

    function selectPanel(e) {
        let target = e.target.dataset.target;
        document.querySelectorAll('.nav-tabs__link, .tab-panel').forEach(el => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
        document.querySelector('.' + target).classList.add('active');
    }
    document.querySelectorAll('.nav-tabs__link').forEach(el => {
        el.addEventListener('click', selectPanel)
    })
}());
const keys = ["name", "my-city-id", "family-status",
    "Number", "e-mail"
];
for (let id of keys) {
    // выставил
    let input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    console.log("сохранено");
    // закинул
    let fun = function(id, input) {
        input.addEventListener("change", function() {
            localStorage.setItem(id, input.value);
        });
    };
    fun(id, input);
}
const inputHobbies = document.querySelector(".page-info-wrap__hobbies-input");
const btnAddHobbies = document.querySelector(".page-info-wrap__add-hobbies");
const ul = document.querySelector(".page-info-wrap__hobbies-list");

let listValues = [];

if (localStorage.getItem("myHobbies")) {
    listValues = JSON.parse(localStorage.getItem("myHobbies"));
}
for (let i = 0; i <= listValues.length-1; i++) {
    let newLi = document.createElement('li');
    ul.appendChild(newLi);
    newLi.textContent = listValues[i];
}


btnAddHobbies.addEventListener("click", () => {
        let newLi = document.createElement('li');
        const input = inputHobbies.value;
        if (input) {
            // убрать манипулирование стилями
            newLi.textContent = input;
            ul.appendChild(newLi);
            // добавляю значения в массив, чтобы потом кинуть в локалстор
            listValues.push(newLi.textContent);
            inputHobbies.value = "";
            localStorage.setItem("myHobbies", JSON.stringify(listValues));
            if (listValues.length >= 5) {
                btnAddHobbies.setAttribute('disabled', 'disabled');
            }
        }
});

ul.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === "LI") {
        target.remove();
        listValues.pop(target);
        localStorage.setItem("myHobbies", JSON.stringify(listValues));
    }
});