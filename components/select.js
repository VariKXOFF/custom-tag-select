class Select extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p class="select__option-text">1</p>
            <svg class="select__image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z" fill="currentColor"/>
            </svg>
            <div class="select__option"></div>
        `
        this.addEventListener("click", this.eventHandler)
    }
    eventHandler(e) {
        let option = this.querySelector('.select__option')
        let image = this.querySelector('.select__image')
        if(option.style.display === "none") {
            image.style.transform = "rotate(180deg)"
            option.style.display = "block"
        }
        if(option.style.display === "block") {
            image.style.transform = "rotate(0)"
            option.style.display = "none"
        }
    }
}

customElements.define("custom-select", Select)
