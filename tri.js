var poubellebleu=["programme tv","catalogue","bulletin de note","enveloppe","cahier","feuille","pub"];

var poubellejaune=["boite de conserve","bouteille d'eau","désodorisants","barquettes en aluminium","canettes","bidons de sirop"," laques pour cheveux","bouteilles de lait"];

var poubellevert=["pots de confiture","bouteilles d'huile","jus de fruit","bouteille de champomy","soupes","verre de champagne","verre a biere","pot bébé","papier souiller","vins"];

var poubellemarron=["couche de bebe","carotte","pomme de terre","pensement","carotte","album de jul","coton","reste de repas"];

var dechets=["programme tv","catalogue","bulletin de note","enveloppe","cahier","feuille","pub","boite de conserve","bouteille d'eau",
    "désodorisants","barquettes en aluminium","canettes","bidons de sirop"," laques pour cheveux","bouteilles de lait","pots de confiture",
    "bouteilles d'huile","jus de fruit","bouteille de champomy","soupes","verre de champagne","verre a biere","pot bébé","papier souiller","vins",
    "couche de bebe","carotte","pomme de terre","pensement","carotte","album de jul","coton","reste de repas"];
var win=0;
var essaie=0;
//affiche les dechets aux hasard

var dechetsAleatoire=dechets[Math.floor(Math.random()*dechets.length)];


document.getElementById("dechetsAleatoire").innerHTML= dechetsAleatoire;
function reset(){
    dechetsAleatoire=dechets[Math.floor(Math.random()*dechets.length)];
    document.getElementById("dechetsAleatoire").innerHTML=dechetsAleatoire;

}

//poubelle jaune
document.getElementById("trashyellow").addEventListener("click",function () {
    var test=0;

    for(var y=0;y<poubellejaune.length;y++)
    {

        if (dechetsAleatoire == poubellejaune[y]){test=1;win++}



    }if (test==1){
        alert("bravo");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500);
        findepartie()
    }
    else{ alert("non");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500);
        findepartie()}
});


// poubelle marron
document.getElementById("trashbrown").addEventListener("click",function () {
    var test1=0;
    for (var b=0;b<poubellemarron.length;b++)
    {
        if (dechetsAleatoire == poubellemarron[b]){test1=1;win++}

        gg()

    }if (test1==1){
        alert("bravo");
        essaie=essaie+1;
        console.log(essaie);

        setTimeout(reset,500);
        findepartie()
    }
    else{alert("non");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500);
        findepartie()}

});
//poubelle verte
document.getElementById("trashgreen").addEventListener("click",function () {

    var test2=0;
    for (var g=0;g<poubellemarron.length;g++)
    {

        if (dechetsAleatoire == poubellevert[g]){test2=1;win++;findepartie()}

        gg()
    }if (test2==1){alert("bravo");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500)}
    else {alert("non");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500);
        findepartie()}

});
//poubelle bleu
document.getElementById("trashblue").addEventListener("click",function () {
    var test3=0;
    for (var i=0;i<poubellebleu.length;i++)
    {

        if (dechetsAleatoire == poubellebleu[i]) {test3=1;win++;findepartie()}

        gg()

    }if (test3==1){alert("bravo");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,500)}

    else {alert("non");
        essaie=essaie+1;
        console.log(essaie);
        setTimeout(reset,400);
        findepartie()}

});
//score
function gg() {

    document.getElementById("score").innerHTML="nombre de bonnes réponses: "+win;

}

//bouton reset
document.getElementById('boutonreset').addEventListener('click',function reset() {
    window.location.reload(false);});
//fin de partie
function findepartie() {
    if (essaie==10){
        alert("tu a fait "+win+" bonne reponse");
        document.location.reload(false)
    }

}
