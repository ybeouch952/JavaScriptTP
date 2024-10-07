// document.addEventListener("DOMContentLoaded", function () {
//     var form = document.getElementById("myForm");
//     var tableBody = document.querySelector("#resultTable tbody");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         var nom = document.getElementById("Nom").value;
//         var prenom = document.getElementById("Prénom").value;
//         var adresse = document.getElementById("Adresse").value;
//         var ville = document.getElementById("Ville").value;
//         var codePostal = document.getElementById("CodePostal").value;
//         var newRow = document.createElement("tr");

//         if (!nom || !prenom || !adresse || !ville || !codePostal) {
//             alert("Veuillez remplir tous les champs obligatoires.");
//             return; 
//         }

//         newRow.innerHTML = `
//             <td>${nom}</td>
//             <td>${prenom}</td>
//             <td>${adresse}</td>
//             <td>${ville}</td>
//             <td>${codePostal}</td>
//         `;
//         tableBody.appendChild(newRow);
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     var form = document.getElementById("myForm");
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();

//         var password = document.getElementById("Motdepasse").value;

//         if (password === "BTSCIEL92110") {
//             window.location.href = "codes_sources.html"; 
//         } else {
//             alert("Mot de passe incorrect");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("MyForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
    
        var revenus = parseFloat(document.getElementById("revenus").value);
        var loyer = parseFloat(document.getElementById("loyer").value);
        var electricite = parseFloat(document.getElementById("electricite").value);
        var eau = parseFloat(document.getElementById("eau").value);
        var courses = parseFloat(document.getElementById("courses").value);
        var loisirs = parseFloat(document.getElementById("loisirs").value);
        var autre = parseFloat(document.getElementById("autres").value);

        if (revenus < 0 || loyer < 0 || electricite < 0 || eau < 0 || courses < 0 || loisirs < 0 || autre < 0) {
            alert("Veuillez entrer uniquement des nombres positifs.");
            return;
        }

        var depenses = loyer + electricite + eau + courses + loisirs + autre;
        var soldenet = revenus - depenses;

        var resultatDiv = document.createElement("div");
        resultatDiv.style.marginTop = "20px";

        if (soldenet < 0) {
            resultatDiv.textContent = "Votre solde net est de " + soldenet + " euros. Vous êtes en déficit pour le mois !";
            resultatDiv.style.color = "red"; 
        } else {
            resultatDiv.textContent = "Votre solde net est de " + soldenet + " euros. Vous êtes en excédent pour le mois !";
            resultatDiv.style.color = "green"; 
        }

        // Supprime le résultat précédent s'il existe
        var previousResult = document.getElementById("resultat");
        if (previousResult) {
            previousResult.remove();
        }

        // Ajoute le résultat à la page
        resultatDiv.id = "resultat";
        document.body.appendChild(resultatDiv);
    });
});

