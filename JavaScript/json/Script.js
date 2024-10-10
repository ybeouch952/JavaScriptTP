// const fs = require('fs');
// fs.readFile('settings.json', 'utf8', (err, jsonString) => {
//     if (err) {
//         console.log('Error reading file from disk:', err);
//         return;
//     }
//     console.log(jsonString);
//     try {
//         const data = JSON.parse(jsonString);
//         console.log(data);
//     } catch (err) {
//         console.log('Error parsing JSON string:', err);
//     }
// });


// Extraction d’une valeur d’un fichier JSON :
// Ce code lit le fichier settings.json, le parse en objet JavaScript, puis extrait la valeur de la
// propriété 'chaine' de l'objet 'chaine 1' et l'affiche dans la console

// const fs = require('fs');
// fs.readFile('settings.json', 'utf8', (err, jsonString) => {
// if (err) {
// console.log('Error reading file from disk:', err);
// return;
// }
// try {
// const obj = JSON.parse(jsonString);
// const chaine = obj['chaine 3']['chaine'];
// console.log(chaine);
// } catch(err) {
// console.log('Error parsing JSON string:', err);
// }
// });

// Ce code lit le fichier settings.json, le parse en objet JavaScript, puis extrait les valeurs des
// propriétés 'chaine', 'multicast' et 'port' de l'objet 'chaine 7'. Ensuite, il affiche ces valeurs dans
// une phrase.

// const fs = require('fs');
// fs.readFile('settings.json', 'utf8', (err, jsonString) => {
// if (err) {
// console.log('Error reading file from disk:', err);
// return;
// }
// try {
// const obj = JSON.parse(jsonString);
// const chaine = obj['chaine 7']['chaine'];
// const multicast = obj['chaine 7']['multicast'];
// const port = obj['chaine 7']['port'];
// console.log(`La chaîne 7 est la chaine ${chaine}, elle a
// l’adresse multicast ${multicast}, son port est ${port}`);
// } catch(err) {
// console.log('Error parsing JSON string:', err);
// }
// });


// Création d’un objet JSON :
// Ce code crée un objet JavaScript, le convertit en chaîne JSON avec JSON.stringify(), puis
// reconvertit la chaîne JSON en objet JavaScript avec JSON.parse(), et affiche l'objet résultant
// dans la console.
const tableau = {
'chaine': 'TF1',
'multicast': '239.1.1.1',
'port': 1234
};
const objet_json = JSON.stringify(tableau);
console.log(JSON.parse(objet_json));