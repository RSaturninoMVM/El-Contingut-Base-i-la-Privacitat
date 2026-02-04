class Multimedia{
    Constructor(titol, durada, #views) {
        this.titol = titol;
        this.durada = 60;
        this.#views = 0;
    }
    play() {
        console.log("Reproduint ...");
        return (this.#views + 1);
    }
    getViews() {
        return this.#views;
    }
    #calcularCostServer() {
        return (this.durada * 0.01);
    }
}
class Pelicula extends Multimedia{
    Constructor(any, costFix) {
        this.any = any;
        this.costFix = costFix;
    }
    calcularRoyalties(views, costFix) {
        return (views * costFix);
    }
}
class Serie extends Multimedia{
    Constructor(cap1, cap2, cap3) {
        this.cap1 = cap1;
        this.cap2 = cap2;
        this.cap3 = cap3;
    }
    calcularRoyalties() {
        return (views * cap * 0.05)
    }
}
