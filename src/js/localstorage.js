[
    'e-mail',
    'family-status',
    'my-city-id',
    'name',
    'Number',
].forEach((id) => {
    const inputElement = document.getElementById(id);

    inputElement.value = localStorage.getItem(id);
    inputElement.addEventListener(
        'change',
        () => localStorage.setItem(id, inputElement.value),
    );
});