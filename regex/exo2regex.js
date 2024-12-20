const ip ="192.11168.5.1"
// = prompt("veuillez choisir votre adresse ip : ")
const regex = /(25?[0-5]|2?[0-4][0-9]|1?[0-9]{2}|0?[0-9]{2}\.){3}25[0-5]|2[0-4][0-9]|1[0-9]{2}|0[0-9]{2}/
console.log(regex.test(ip))