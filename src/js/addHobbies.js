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