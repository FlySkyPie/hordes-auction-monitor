!function () {
    let isAdded = false;
    function createNavButton() {
        let elixirIcon = document.querySelector('#sysgem');
        let button = document.createElement("div");
        button.className = "btn border black js-marketwatcher-icon";
        button.innerHTML = "W";
        elixirIcon.parentNode.appendChild(button);
        button.addEventListener('click', () => {
            // hidden/visible canvases
            let canvases = document.querySelectorAll('.l-canvas');
            canvases.forEach((canvas) => {
                canvas.style.visibility = (canvas.style.visibility === 'hidden') ? 'visible' : 'hidden';
            });
        });
        isAdded = true;
    }

    const pageObserver = new MutationObserver(() => {
        const isUiLoaded = !!document.querySelector('.layout');

        if (isUiLoaded && !isAdded) {
            createNavButton();
        }
    });

    pageObserver.observe(document.body, { attributes: true, childList: true });
}();