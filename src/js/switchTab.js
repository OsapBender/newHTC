
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