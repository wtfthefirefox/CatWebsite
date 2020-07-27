const tabs = (headerSelector, itemsSelector, contentSelector, selector) => {
    const header = document.querySelector(headerSelector);
    const items = document.querySelectorAll(itemsSelector);
    const content = document.querySelectorAll(contentSelector);

    const hideTabs = () => {
        content.forEach((elem, i) => {
            if (elem.classList.contains('pets__tab-content-active')) {
                elem.classList.remove('pets__tab-content-active')
            }
            if (items[i].classList.contains(selector)) {
                items[i].classList.remove(selector);
            }
        }); 
    }

    const showTab = (idx = 0) => {
        content[idx].classList.add('pets__tab-content-active');
        items[idx].classList.add(selector);
    }

    hideTabs();
    showTab();

    header.addEventListener('click', e => {
        const target = e.target;
        
        items.forEach((item, i) => {
            if (target && target === item && !item.classList.contains(selector)) {
                hideTabs();
                showTab(i);
            }
        })
    })
}

export default tabs;