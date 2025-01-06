class Personn {
    constructor(nom,age){
        this.nom = nom;
        this.age = age;
    }

    sePresenter(){
        console.log(`Bonjour je m'apelle ${this.nom} et j'ai ${this.age} ans`);
    }
}

const alice = new Personn("Alice",30);
alice.sePresenter();