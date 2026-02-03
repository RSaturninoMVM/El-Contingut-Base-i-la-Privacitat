class Multimedia{
    Constructor(titol, durada, views) {
        this.titol = titol;
        this.durada = 60;
        this.views = 0;
    }
    play() {
        console.log("Reproduint ...");
        this.views + 1;
    }
    getViews() {
        return this.views;
    }
    calcularCostServer() {
        this.durada * 0.01;
    }
}
    