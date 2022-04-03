// rappel decla objet

let objet = {key:"valeur"};

// array => liste d'élements avec des types différents si on le souhaites


/*déclaration d'un array 1ére facon de maniére litterale*/

let array = ["React","Angular","Ember","Vu"];
console.log("array",array); // afficher contenu d'un array, on pars de l'élément 0 

console.log("---------------------------------------");

let array2 = ["react",20 ,objet,[] ];

// afficher éléments du tableau
console.log("array2" ,array2[0]); // =>1er élement du tableau
console.log("array2" ,array2[1]); // =>2éme élement du tableau
console.log("array2" ,array2[2]); // =>3éme élement du tableau
console.log("array2" ,array2[3]); // =>4éme élement du tableau

console.log("---------------------------------------");

// changer élement du tableau
array2[0] = "java";
console.log("array2" ,array2[0]);
console.log("array2" ,array2);

console.log("---------------------------------------");

/*2éme methode tableau vide puis le remplir*/
let array3 = [];
array3[0] = "pomme";
array3[1] = "poire";
array3[2] = "orange";
array3[3] = "banane";
console.log("array3", array3);
console.log(array3[0]);

console.log("---------------------------------------");

/*3éme methode créer new array*/
let array4 = new Array();
array4[0] = "chien";
array4[1] = "chat";
array4[2] = "lapin";
array4[3] = "singe"; 
console.log("array4", array4);
console.log(array4[2]);

// vérifier qu'une variable Array est est de type array
console.log(array instanceof Array); // true of false sur le navigateur 

console.log("---------------------------------------");

// ajouter des élements ds un tableau fct push => ajoute un élement à la fin de la liste
let array5 = [];
array5.push("chien");
array5.push("chat");
array5.push("lapin");
array5.push("singe");
console.log("array5 aprés push", array5);

console.log("---------------------------------------");

// supprimer le derniere élement de la liste
array5.pop();
console.log("array5 aprés pop", array5);

console.log("---------------------------------------");

// supprimer le premiere élement
array5.shift();
console.log("array5 aprés shift", array5); 

console.log("---------------------------------------");

// ajouter un élement au début de la liste
array5.unshift("chien");
console.log("array5 aprés unshift", array5); 

console.log("---------------------------------------");

// reconstituer liste de départ
array5.push("singe");
console.log("array5", array5);

console.log("---------------------------------------");

/*boucler élements du tableau*/

// boucler avec for 
console.log("1ère méthode parcourir élements d'un tableau:");

let array6 = ["chien", "chat", "lapin", "singe"];

for(let i = 0; i < array6.length; i++){
    console.log(`array6 à index ${i} val ${array6[i]}`); 
}

console.log("---------------------------------------");

// boucle avec ForEach 2éme méthode

// itération sur les tableaux
console.log("2ère méthode parcourir élements d'un tableau:");

let logger = function(value,index,array6){
    console.log(index + " " + value);
}
array6.forEach(logger);

console.log("---------------------------------------");

let modifier = function( value,index, array){
    return `${value} c bien`
}

// MAP => fonction map retourne un 2éme tableau qui sera lui modifié
let array7 = array6.map(modifier);
console.log("array7", array7);

console.log("---------------------------------------");

// fct filter => filtrer un tableau
let numbers = [45,5,19,21,100];

let filtrerMineur = function(value){
    return (value > 18);// ca retourne true ou false
}
let majeurs = numbers.filter(filtrerMineur);// filter retoune un autre tableau
console.log("numbers", numbers);
console.log("majeurs" ,majeurs);