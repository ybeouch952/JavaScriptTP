class Animal {
    constructor(nom){
        this.nom = nom
    }

    parler(){
        console.log("Cet animal fais du bruit ")
    }

}

class Chien extends Animal {
    parler(){
        console.log(`Le chien ${this.nom} aboie`);
    }
}

class Chat extends Animal {
    parler(){
        console.log(`Le chat ${this.nom} miaule`);
    }
}

const Rex = new Chien("Rex")
Rex.parler();

const Minou = new Chat("Minou")
Minou.parler();