class Game {
    constructor() {
        console.log("Game window had been instantiated")

        for (let index = 0; index < 10; index++) {
            let fish : Fish = new Fish()
        }

        for (let index = 0; index < 15; index++) {
            let bubble : Bubble = new Bubble()
        }

        for (let index = 0; index < 4; index++) {
            let zeester : Zeester = new Zeester()
        }
    }
}

window.addEventListener("load", () => new Game())