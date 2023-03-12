/*--burger-menu--*/
const burgerMenu = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".burger");
const link = document.querySelector(".link");
const cover = document.querySelector(".cover");

function toggleMenu () {
    burgerMenu.classList.toggle("showMenu");
    cover.classList.toggle("showMenu");
};


burgerButton.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", toggleMenu);
cover.addEventListener("click", toggleMenu);
/*--end-of-burger-menu--*/


/*--service-section--*/
const serviceButtons = document.querySelector('.service-buttons')
const serviceCards = document.querySelector('.service-cards')

const gardensButton = serviceButtons.querySelector('[data-service="gardens"]')
const lawnButton = serviceButtons.querySelector('[data-service="lawn"]')
const plantingButton = serviceButtons.querySelector('[data-service="planting"]')

const gardenCards = serviceCards.querySelectorAll('.garden') //array
const lawnCards = serviceCards.querySelectorAll('.lawn') //array
const plantingCards = serviceCards.querySelectorAll('.planting') //array
const cards = serviceCards.querySelectorAll('.card') //array


function twoButtonsMax (item) {
    const activatedButtons = serviceButtons.querySelectorAll('.serv-btn-selected')
    if(activatedButtons.length > 2) {
        gardensButton.classList.remove('serv-btn-selected')
        lawnButton.classList.remove('serv-btn-selected')
        plantingButton.classList.remove('serv-btn-selected')
        item.classList.add('serv-btn-selected')  
    }
}

function blurAllCards () {
    cards.forEach((item) => {
        item.classList.add('blur')
    })
}

function unBlurCards () {
    const activatedButtons = serviceButtons.querySelectorAll('.serv-btn-selected')
    if (activatedButtons.length <= 0) {
        cards.forEach((item) => {
            item.classList.remove('blur')
        })
    } else {
        activatedButtons.forEach((i) => {
            if (i.dataset.service === 'gardens') {
                gardenCards.forEach((item) => {
                    item.classList.remove('blur')
                })
            } else if (i.dataset.service === 'lawn') {
                lawnCards.forEach((item) => {
                    item.classList.remove('blur')
                })
            } else if (i.dataset.service === 'planting') {
                plantingCards.forEach((item) => {
                    item.classList.remove('blur')
                })
            }
        })
    }
}

gardensButton.addEventListener('click', () => {
    const {target} = event;
    target.classList.toggle('serv-btn-selected')

    twoButtonsMax(target)
    blurAllCards()
    unBlurCards()
})

lawnButton.addEventListener('click', () => {
    const {target} = event;
    target.classList.toggle('serv-btn-selected')

    twoButtonsMax(target)
    blurAllCards()
    unBlurCards()
})

plantingButton.addEventListener('click', () => {
    const {target} = event;
    target.classList.toggle('serv-btn-selected')

    twoButtonsMax(target)
    blurAllCards()
    unBlurCards()
})
/*--end-of-service-section--*/



/*--accordion--*/
const basicsButton = document.querySelector('[data-price="basics"]')
const standardButton = document.querySelector('[data-price="standard"]')
const proButton = document.querySelector('[data-price="pro"]')

const basicsItem = document.querySelector('[data-item="basics"]')
const standardItem = document.querySelector('[data-item="standard"]')
const proItem = document.querySelector('[data-item="pro"]')

basicsButton.addEventListener('click', () => {
    basicsItem.classList.toggle('prices-item-active')
    basicsButton.classList.toggle('prices-item-button-active')

    standardItem.classList.remove('prices-item-active')
    proItem.classList.remove('prices-item-active')
    standardButton.classList.remove('prices-item-button-active')
    proButton.classList.remove('prices-item-button-active')
})

standardButton.addEventListener('click', () => {
    standardItem.classList.toggle('prices-item-active')
    standardButton.classList.toggle('prices-item-button-active')

    basicsItem.classList.remove('prices-item-active')
    proItem.classList.remove('prices-item-active')
    basicsButton.classList.remove('prices-item-button-active')
    proButton.classList.remove('prices-item-button-active')
})

proButton.addEventListener('click', () => {
    proItem.classList.toggle('prices-item-active')
    proButton.classList.toggle('prices-item-button-active')

    basicsItem.classList.remove('prices-item-active')
    standardItem.classList.remove('prices-item-active')
    standardButton.classList.remove('prices-item-button-active')
    basicsButton.classList.remove('prices-item-button-active')
})
/*--end-of-accordion--*/


/*--contacts--*/
const contactHead = document.querySelector('.contacts-head')
const contactButton = document.querySelector('.contacts-drop-menu-button')
const contactArrow = document.querySelector('.contacts-drop-menu-button-arrow')
const contactMenu = document.querySelector('.contacts-drop-menu')
const contactTitle = document.querySelector('.contacts-drop-menu-title')
const cityCards = document.querySelectorAll('.city-card')

contactButton.addEventListener('click', () => {
    contactHead.classList.toggle('contacts-head-active')
    contactMenu.classList.toggle('contacts-drop-menu-active')
    contactButton.classList.toggle('contacts-drop-menu-button-active')
    contactArrow.classList.toggle('contacts-drop-menu-button-arrow-active')

    cityCards.forEach((i) => {
        i.classList.add('hidden')
    })
})

const contactBody = document.querySelectorAll('.contact-option')
const canandaigua = document.querySelector('[data-city="1"]')
const newYorkCity = document.querySelector('[data-city="2"]')
const yonkers = document.querySelector('[data-city="3"]')
const sherrill = document.querySelector('[data-city="4"]')

contactBody.forEach((item) => {
    
    item.addEventListener('click', () => {
        contactMenu.classList.remove('contacts-drop-menu-active')
        contactHead.classList.remove('contacts-head-active')
        contactButton.classList.remove('contacts-drop-menu-button-active')
        contactArrow.classList.remove('contacts-drop-menu-button-arrow-active')
        
        contactTitle.textContent = item.textContent

        if (item.textContent === 'Canandaigua, NY') {
            canandaigua.classList.remove('hidden')
        }

        if (item.textContent === 'New York City') {
            newYorkCity.classList.remove('hidden')
        }

        if (item.textContent === 'Yonkers, NY') {
            yonkers.classList.remove('hidden')
        }

        if (item.textContent === 'Sherrill, NY') {
            sherrill.classList.remove('hidden')
        }
    })
})