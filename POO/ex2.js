class CompteBancaire {
    #solde; 

    constructor() {
        this.#solde = 0; 
    }

    get solde() {
        return this.#solde;
    }

    deposer(montant) {
        if (montant > 0) {
            this.#solde += montant;
        } else {
            console.log("Le montant à déposer doit être positif.");
        }
    }

    retirer(montant) {
        if (montant > 0 && montant <= this.#solde) {
            this.#solde -= montant;
        } else if (montant > this.#solde) {
            console.log("Fonds insuffisants pour ce retrait.");
        } else {
            console.log("Le montant à retirer doit être positif.");
        }
    }
}

const monCompte = new CompteBancaire();
monCompte.deposer(100); 
monCompte.retirer(50);  
monCompte.retirer(100);
console.log(`Solde actuel: ${monCompte.solde}`); 
