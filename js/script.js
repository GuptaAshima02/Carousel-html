const serviceCards_container = document.querySelector('.serviceCards_container');
const serviceCards_controls_container = document.querySelector('.serviceCards_controls');
const serviceCards_controls = ['previous', 'next'];
const serviceCards_items = document.querySelectorAll('.serviceCards_item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }
    updateServiceCards() {
        this.carouselArray.forEach(el => {
            el.classList.remove('item1', 'item2', 'item3', 'item4', 'item5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`item${i + 1}`);
        });
    }
    setCurrentState(direction) {
        if (direction.className == 'serviceCards_controls_previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateServiceCards();
    }
    setControls() {
        this.carouselControls.forEach(control => {
            serviceCards_controls_container.appendChild(document.createElement('button')).className = `serviceCards_controls_${control}`;
            document.querySelector(`.serviceCards_controls_${control}`).innerText = control;
        });
    }

    useControls() {
        const triggers = [...serviceCards_controls_container.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(serviceCards_container, serviceCards_items, serviceCards_controls);
exampleCarousel.setControls();
exampleCarousel.useControls();
