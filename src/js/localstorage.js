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