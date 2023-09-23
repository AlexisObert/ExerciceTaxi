"use strict";

let personnage="John";
let santeMentale=10;
let nbrFeuxRouge=30;
let musiques=["Anissa - Wejdene","Meuda - Tiakola","Nouvelles - PLK","Kpop - Freeze corleone","DIE - Gazo"];
let musiqueChoisie;
function choixMusique(){
    let musiqueChoisie = Math.floor(Math.random() *5 );
    return musiqueChoisie;
}
while(santeMentale > 0 && nbrFeuxRouge >=1){
    musiqueChoisie=musiques[choixMusique()];
    console.log(`John a écouté la musique ${musiqueChoisie}. Santé mentale actuelle : ${santeMentale}`)
    if(musiqueChoisie == "Anissa - Wejdene"){
        santeMentale -=1;
    }
    nbrFeuxRouge--;
}
if (santeMentale <= 0) {
    console.log("John a épuisé sa santé mentale.");
  } else {
    console.log("John a terminé son trajet avec une santé mentale finale de : " + santeMentale);
  }
  console.log(`Nombre feux restant : ${nbrFeuxRouge}`);

