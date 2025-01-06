class Animal {
    constructor(nom){
        this.nom = nom
    }

    parler(){
        console.log(`Cet animal ( ${this.nom} ) fais du bruit `)
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


const animaux =  [new Chien("Rex"), new Chat("Minou"), new Animal ("Tanc")]
animaux.forEach(animal => animal.parler());

