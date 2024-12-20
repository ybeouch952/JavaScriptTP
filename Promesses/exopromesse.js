// const maPromesse = new Promise((resolue, rejete) => {
//     // Définir un délai de 2 secondes avec setTimeout
//     setTimeout(() => {
//       const condition = Math.random() > 0.5; // Utiliser une condition aléatoire pour tester résolution ou rejet
  
//       if (condition) {
//         resolue("Succès : La promesse a été résolue !");  
//       } else {
//         rejete("Échec : La promesse a été rejetée.");
//       }
//     }, 2000); 
//   })
  
// //   maPromesse
//   .then((succes) => {
//     console.log(succes); 
//   })
//   .catch((erreur) => {
//     console.log(erreur); 
//   });



// // Fonction qui vérifie si l'utilisateur est majeur ou mineur
// function verifierUtilisateur(utilisateur) {
//   return new Promise((resolve, reject) => {
//     if (utilisateur.age >= 18) {
//       resolve("Utilisateur majeur");
//     } else {
//       reject("Utilisateur mineur");
//     }
//   });
// }

// // Test avec un utilisateur majeur
// const utilisateurMajeur = {
//   nom: "Alice",
//   age: 25
// };

// verifierUtilisateur(utilisateurMajeur)
//   .then(result => {
//     console.log(result);  // Affiche "Utilisateur majeur"
//   })
//   .catch(error => {
//     console.log(error);   // Ne sera pas exécuté ici
//   });

// // Test avec un utilisateur mineur
// const utilisateurMineur = {
//   nom: "Bob",
//   age: 16
// };

// verifierUtilisateur(utilisateurMineur)
//   .then(result => {
//     console.log(result);  // Ne sera pas exécuté ici
//   })
//   .catch(error => {
//     console.log(error);   // Affiche "Utilisateur mineur"
//   });






// function diviser(a, b) {
//   return new Promise((resolve, reject) => {
//     if (b === 0) {
//       reject("Division par zéro !");
//     } else {
//       resolve(a / b);  
//     }
//   });
// }

// diviser(10, 2)
//   .then(result => {
//     console.log("Résultat de la division : " + result);  
//   })
//   .catch(error => {
//     console.log(error);  
//   });

// diviser(10, 0)
//   .then(result => {
//     console.log("Résultat de la division : " + result);  
//   })
//   .catch(error => {
//     console.log(error); 
//   });



// Fonction qui simule un appel API
function appelAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ nom: "Alice", age: 25 });
      } else {
        reject("Erreur lors de l'appel API");
      }
    }, 3000); 
  });
}


appelAPI()
  .then(utilisateur => {
    console.log("Informations sur l'utilisateur :");
    console.log("Nom:"+ utilisateur.nom + " Âge:" +utilisateur.age);
  })
  .catch(error => {
    console.log(error);
  });
