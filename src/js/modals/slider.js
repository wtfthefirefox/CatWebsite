const slider = (prevArrow, nextArrow, itemsSelector, activeClass, leftItemClass = 0, rightItemClass = 0) => {
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const items = document.querySelectorAll(itemsSelector);

    let activeIndex = 2;
    
    const removeActiveClass = (item) => {
        if (item.classList.contains(activeClass)) {
            item.classList.remove(activeClass);
        }
        if (item.classList.contains(leftItemClass)) {
            item.classList.remove(leftItemClass);
        }
        if (item.classList.contains(rightItemClass)) {
            item.classList.remove(rightItemClass);
        }
    }

    const changeActiveSlide = (idx) => {
        if (leftItemClass && rightItemClass) {
            removeActiveClass(items[idx]);

            items[idx].classList.add(activeClass);

            if (idx === 0) {
                removeActiveClass(items[idx + 1]);
                removeActiveClass(items[items.length - 1]);

                items[idx + 1].classList.add(rightItemClass);
                items[items.length - 1].classList.add(leftItemClass);
            } else if (idx === items.length - 1) {
                removeActiveClass(items[idx - 1]);
                removeActiveClass(items[0]);

                items[idx - 1].classList.add(rightItemClass);
                items[0].classList.add(leftItemClass);
            } else {
                removeActiveClass(items[idx + 1]);
                removeActiveClass(items[idx - 1]);

                items[idx + 1].classList.add(rightItemClass);
                items[idx - 1].classList.add(leftItemClass);
            }
            
        } 
    }

    const changeActiveIndex = (BModeSign = 0) => {
        if (BModeSign) { // sign = +
            if (activeIndex === items.length - 1) { // idx = items.length
                return 0
            } else { // idx < items.length
                return ++activeIndex
            }
        } else { // sign = -
            if (activeIndex === 0) { // idx = 0
                return items.length - 1
            } else { // idx != 0
                return --activeIndex
            }
        }
    }

    prev.addEventListener('click', () => {
        activeIndex = changeActiveIndex();
        changeActiveSlide(activeIndex);
    })
    next.addEventListener('click', () => {
        activeIndex = changeActiveIndex(1);
        changeActiveSlide(activeIndex);
    })

}

export default slider;