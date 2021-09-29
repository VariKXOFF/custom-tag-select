class Select extends HTMLElement {
    fillingElement() {
        let elementData = ["1", "2", "3"]
        for(let i = 0; i < elementData.length; i++){
            document.querySelector('.option').innerHTML += `<div class="option__element">${elementData[i]}</div>`
        }
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="select">
                <p class="select__text">1</p>
                <svg class="select__image" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z" fill="currentColor"/>
                </svg>
            </div>
            <div class="option"></div>
        `
        this.fillingElement()
        let select = this.querySelector('.select')
        select.addEventListener("click", this.eventHandler)
    }
    eventHandler() {
        let option = document.querySelector('.option')
        let image = this.querySelector('.select__image')
        let select = document.querySelector('.select')
        if(option.style.display === "none") {
            image.style.transform = "rotate(180deg)"
            option.style.display = "block"
            select.style.borderRadius = "5px 5px 0 0"
            let textSection = this.querySelector('.select__text')
            option.onclick = function (event) {
                let target = event.target
                textSection.textContent = target.textContent
                image.style.transform = "rotate(0)"
                option.style.display = "none"
                select.style.borderRadius = "5px"
            }
        } else {
            image.style.transform = "rotate(0)"
            option.style.display = "none"
            select.style.borderRadius = "5px"
        }
    }
}

customElements.define("custom-select", Select)
