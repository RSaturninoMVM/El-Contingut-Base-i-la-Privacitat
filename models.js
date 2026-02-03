class Multimedia{
    Constructor( titol, durada, #views) {
        this.titol = titol;
        this.durada = 60;
        this.#views = 0;
        this.#calcularCostServer();
    }
    play(views) {
        console.log("Reproduint ...");
        return (this.#views + 1);
    }
    getViews(views) {
        return this.#views;
    }
    #calcularCostServer(durada) {
        return (this.durada * 0.01);
    }
}
