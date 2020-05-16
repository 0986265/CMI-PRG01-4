class Zeester {

    div: HTMLElement

    constructor() {
        this.instantiateZeester()
    }

    instantiateZeester() {
        this.div = document.createElement("zeester")
        let background = document.getElementsByTagName("background")
        background[0].appendChild(this.div)

        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)

        this.div.style.transform = `translate(${x}px, ${y}px)`
    }
}