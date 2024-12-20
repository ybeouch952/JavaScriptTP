// const adresse_mail= "rayanhassani37@gmail.com";
// const regex= /^[a-z0-9]*@gmail\.com/;
// console.log(regex.test(adresse_mail));





let mailForm = document.getElementById("mailForm");
mailForm.addEventListener('submit', function(event) {
event.preventDefault(); // Empêche la soumission réelle du formulaire
let mail = document.getElementById('mail').value;
//mail = mail.replace(/<[^>]*>/g, ""); // on remplace les balises html par un espace
//if (/^0[1-68]([-. ]?[0-9]{2}){4}$/.test(phone)) {
if (/^[a-z0-9]*@gmail\.com$/.test(mail)) {
    document.getElementById('result').innerHTML = 'Le mail ' + mail + ' est un mail <strong>valide</strong> !';
} 
else {
    document.getElementById('result').innerHTML = 'mail ' + mail + ' n\'est pas valide, recommencez !';
}
});