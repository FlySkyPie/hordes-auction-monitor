//https://stackoverflow.com/questions/44728723
var originalFetch = fetch;
fetch = (input, init) => {
    return originalFetch(input, init).then(response => {
        // it is not important to create new Promise in ctor, we can await existing one, then wrap result into new one
        return new Promise((resolve) => {
            if (input === '/api/item/get' && JSON.parse(init.body).hasOwnProperty('auction')) {
                response.clone().json().then(json => {
                    //console.log(JSON.stringify(json));
                })
                //console.log('Hook the fetch!');
            }
            resolve(response);
        });
    });
};

!function () {
    let isAdded = false;
    function createNavButton() {
        let elixirIcon = document.querySelector('#sysgem');
        let button = document.createElement("div");
        button.className = "btn border black js-marketwatcher-icon";
        button.innerHTML = "W";
        elixirIcon.parentNode.appendChild(button);
        button.addEventListener('click', () => {
            let isCanvasHide = false;
            // hidden/visible canvases
            let canvases = document.querySelectorAll('.l-canvas');
            canvases.forEach((canvas) => {
                isCanvasHide = (canvas.style.visibility !== 'hidden');
                canvas.style.visibility = (canvas.style.visibility === 'hidden') ? 'visible' : 'hidden';
            });
            //merchant
            if (isCanvasHide) {
                let children =
                    document.querySelector('.js-merchant-initd .choices').childNodes;
                //document.querySelector('.js-merchant-initd > .slot > .layout > .choices').childNodes;
                for (let i = 0; i < children.length; i++) {
                    setTimeout(function () {
                        children[i].click();
                    }, 5000 * i);
                }
            }
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