// let nombreetudiant = parseInt(prompt("Combien d'étudiants y a-t-il dans la classe ?"));
// let nombreevaluation = parseInt(prompt("Combien d'évaluations seront saisies pour chaque étudiant ?"));
// let notesEtudiants = [];
// let sommeClasse = 0;  

// for (let i = 1; i <= nombreetudiant; i++) {
//     let notes = [];
//     let sommeNotes = 0; 
//     for (let n = 1; n <= nombreevaluation; n++) {
//         let note = parseFloat(prompt("Entrez la note de l'évaluation " + n + " de l'étudiant " + i));
//         notes.push(note);
//         sommeNotes += note;  
//     }

//     let moyenneEtudiant = sommeNotes / nombreevaluation;
//     sommeClasse += moyenneEtudiant;  

//     let appreciation;
//     if (moyenneEtudiant > 18) {
//         appreciation = "Excellent";
//     } else if (moyenneEtudiant >= 15) {
//         appreciation = "Très bien";
//     } else if (moyenneEtudiant >= 12) {
//         appreciation = "Bien";
//     } else {
//         appreciation = "Peut mieux faire";
//     }

//     alert("Étudiant " + i + " : Moyenne = " + moyenneEtudiant + " - Appréciation : " + appreciation);
// }

// let moyenneClasse = sommeClasse / nombreetudiant;
// alert("Moyenne générale de la classe : " + moyenneClasse) 
 
// let listecourse = ["lait", "banane", "pain"];  
// let choix =''
// while (choix !== '5' && choix !== 'q') {
//     let choix = prompt(`Que voulez-vous faire ?
//     1. Ajouter un élément à la liste de courses
//     2. Retirer un élément de la liste de courses
//     3. Afficher les éléments de la liste de courses
//     4. Vider la liste de courses
//     5. Quitter le programme (ou appuyez sur 'q')`);

//     if (choix === '5' || choix === 'q') {
//         alert("Au revoir !");
//         break; 
//     }

//     if (choix !== '1' && choix !== '2' && choix !== '3' && choix !== '4' && choix !== '5' && choix !== 'q') {
//         alert("Choix invalide. Veuillez réessayer.");
//         continue;  
//     }

//     if (choix == '1') {
//         let aajouter = prompt("Entrez le nom de l'élément à ajouter");
//         if (aajouter == "q") {
//             alert("Au revoir !");
//             break; 
//         } else {
//             listecourse.push(aajouter);
//             alert(`Element ajouté`);
//         }
//     }

//     if (choix == '2') {
//         let asupprimer = prompt(`Liste de course : ${listecourse}\nEntrez le nom de l'élément à retirer`);
//         if (asupprimer == "q") {
//             alert("Au revoir !");
//             break;  
//         } else {
//             let index = listecourse.indexOf(asupprimer);
//             if (index > -1) {
//                 listecourse.splice(index, 1);  
//                 alert(`Element retiré de la liste.`);
//             } else {
//                 alert(`element pas présent dans la liste.`);
//             }
//         }
//     }
//     if (choix == '3') {
//         if (listecourse.length > 0) {
//             alert(`Votre liste de courses contient : ${listecourse}`);
//         } else {
//             alert("Votre liste de courses est vide.");
//         }
//     }

//     if (choix == '4') {
//         listecourse = []; 
//         alert("Liste vidée.");
//     }
// }
// console.log("Programme terminé. Liste finale :", listecourse);
