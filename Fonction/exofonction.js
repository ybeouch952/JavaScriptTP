// function direbonjour (nom){
//     console.log("Bonjour", nom)
// }
// direbonjour("Younes")

// const direbonjour = (nom) => {
//     console.log("Bonjour", nom)
// }
// direbonjour("Younes")

// function calculatrice(n1,n2,op) {
//     let resultat
//     switch(op){
//     case "+" :
//         resultat = n1 + n2;
//         break;
//     case "-" :
//         resultat = n1 - n2
//         break;
//     case "*" :
//         resultat = n1 * n2
//         break;
//     case "/" :
//         if (n2==0){
//             return"le denomiateur est egale a 0 donc le calcul impossible";
//         }
//         else {
//             resultat = n1 / n2
//         }
//         break;
// }
// }
// console.log(calculatrice(40,0,"/"))

// function puissance(n,e){
//     let resultat = 1
//     if ( e<0)
//     {
//         for (let i=0; i<-e; i++)
//             resultat /=n
//     }
//     else{
//         for (let i=0;i<e;i++)
//             resultat *=n
//     }
//     console.log(resultat)
// }
// puissance(7,3)

// function estpair (a)
// {
//     if (a%2==0){
//         return true
//     }
//     else {
//         return false
//     }
//     }
// console.log(estpair(2))

// function calculTva(prixht,tva)
// {
//     prixTTC = prixht*(1+(tva/100))
//     return prixTTC
// }
// console.log(calculTva(120,20))

// function conversiontemperature(tempcel)
// {
//     return ( (tempcel*1.8) + 32 )
// }
// console.log(conversiontemperature(20))

// function perimetreCercle(ray){
//     return 2*Math.PI*ray;
// }

// function aireCercle(ray)
// {
//     let resultat = Math.PI*ray**2
//     console.log(resultat)
// }
// console.log(perimetreCercle(30))
// aireCercle(20)
