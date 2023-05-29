
var rowCount = 0;
var rowNumber = 1; // Variable pour suivre le numéro de ligne

// :::::::TABLEAU:::::::::::::::
function addRow() {
var designation = document.getElementById("designation").value;
var quantite = document.getElementById("quantite").value;
var prixUnitaire = document.getElementById("prixUnitaire").value;

 // Vérifier si les champs sont vides
 if (designation === "" || quantite === "" || prixUnitaire === "") {
    alert("Veuillez remplir tous les champs avant d'ajouter une ligne.");
    return;
  }

var montant = document.getElementById("montant").value;
var idt = rowNumber; // Utilise le numéro de ligne comme ID "idt"

if (rowCount < 20) {
var table = document.getElementById("t1");
var newRow = table.insertRow(-1);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);

cell1.innerHTML = idt;
cell2.innerHTML = designation;
cell3.innerHTML = quantite;
cell4.innerHTML = prixUnitaire;
cell5.innerHTML = montant;

rowCount++;


if (rowCount === 20) {
    document.getElementById("t2").style.display = "table";
    rowNumber++; // Incrémente le numéro de ligne
  }

  rowNumber++;

} else {
var table = document.getElementById("t2");
var newRow = table.insertRow(-1);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);

cell1.innerHTML = idt;
cell2.innerHTML = designation;
cell3.innerHTML = quantite;
cell4.innerHTML = prixUnitaire;
cell5.innerHTML = montant;
}


// Appelle la fonction Vider les champs
clearFields();

 // Réinitialiser les champs
//  document.getElementById("designation").value = "";
//  document.getElementById("quantite").value = "";
//  document.getElementById("prixUnitaire").value = "";

// Appelle la fonction Montant HT
calculateTotal();

// Appelle la fonction Montant TVA
calculerTVA();

calculerSomme();



} 

// :::::::::::CALCULER LA SOMME:::::::::::::::
// Calcul Prix Unitaire * Quantité
function calculateMontant() {
var quantite = document.getElementById("quantite").value;
var prixUnitaire = document.getElementById("prixUnitaire").value;
var montant = quantite * prixUnitaire;
document.getElementById("montant").value = montant;
}
// Calculer le montant HT
function calculateTotal() {
var table = document.getElementById("t1"); // Obtient la référence de la table
var rows = table.getElementsByTagName("tr"); // Obtient toutes les lignes du tableau
var total = 0;

// Parcours chaque ligne du tableau à l'exception de l'en-tête
for (var i = 1; i < rows.length; i++) {
var row = rows[i];
var cells = row.getElementsByTagName("td"); // Obtient les cellules de la ligne

// Vérifie si la ligne a les cellules nécessaires
if (cells.length >= 5) {
var montant = parseFloat(cells[4].innerHTML); // Récupère le montant de la cellule correspondante

// Vérifie si le montant est un nombre valide
if (!isNaN(montant)) {
total += montant; // Ajoute le montant au total
}
}
}
// Affiche le total dans la classe "montantHT"
var montantHT = document.querySelector(".montantHT h2 span");
montantHT.textContent = Math.floor(total) + " fcfa"; // Affiche le total sans décimales
}

// ::::::::::::::::TVA::::::::::::::
function calculerTVA() {
var table = document.getElementById("t1"); // Obtient la référence de la table
var rows = table.getElementsByTagName("tr"); // Obtient toutes les lignes du tableau
var total = 0;

// Parcours chaque ligne du tableau à l'exception de l'en-tête
for (var i = 1; i < rows.length; i++) {
var row = rows[i];
var cells = row.getElementsByTagName("td"); // Obtient les cellules de la ligne

// Vérifie si la ligne a les cellules nécessaires
if (cells.length >= 5) {
var quantite = parseFloat(cells[2].innerHTML); // Récupère la quantité de la cellule correspondante
var prixUnitaire = parseFloat(cells[3].innerHTML); // Récupère le prix unitaire de la cellule correspondante
var montant = quantite * prixUnitaire; // Calcul le montant de la ligne

// Vérifie si le montant est un nombre valide
if (!isNaN(montant)) {
total += montant; // Ajoute le montant au total
}
}
}

var oeuvres = parseFloat(document.getElementById("oeuvres").value); // Récupère la valeur de "oeuvres"
var totalAvecOeuvres = total + oeuvres; // Ajoute la valeur de "oeuvres" au total

var tva = totalAvecOeuvres * 0.18; // Calcul la TVA (18% du total avec "oeuvres")

// Affiche le résultat dans la classe "tva"
var tvaElement = document.querySelector(".tva h2 span");
tvaElement.textContent = tva.toFixed(2) + " fcfa"; // Affiche la TVA avec 2 décimales
}

// ::::::::MONTANT TTC:::::::::::::::::::
function calculerSomme() {
var montantHT = parseFloat(document.querySelector(".montantHT h2 span").textContent);
var mainOeuvre = parseFloat(document.querySelector(".MainOeuvre h2 span").textContent);
var tva = parseFloat(document.querySelector(".tva h2 span").textContent);

var montantTTC = montantHT + mainOeuvre + tva;

var montantTTCElement = document.querySelector(".montantTTC h2 span");
montantTTCElement.textContent = montantTTC + " fcfa";
}




// ::::::::::Vider les champs::::::::
function clearFields() {
document.getElementById("designation").value = "";
document.getElementById("quantite").value = "";
document.getElementById("prixUnitaire").value = "";
document.getElementById("montant").value = "";
}

// Fonction Récupérer Automatique input Destinateur::::::::::::::::::::::
function updateDoit() {
var destinateur = document.getElementById("destinateur").value;
var doitElement = document.querySelector(".doit span");
doitElement.textContent = destinateur;
}
// Appeler la fonction lorsqu'il y a un changement dans l'input "destinateur"
document.getElementById("destinateur").addEventListener("input", updateDoit);

// Fonction Récupérer Automatique input Object::::::::::::::::::::::
function updateObjet() {
var objet = document.getElementById("objet").value;
var objetSpan = document.querySelector(".objet span");
objetSpan.textContent = objet;
}
// Appel de la fonction lorsqu'il y a un changement dans l'input
document.getElementById("objet").addEventListener("input", updateObjet);


// Fonction Récupérer Automatique input Facture::::::::::::::::::::::
function afficherNumFacture() {
var numFactureInput = document.getElementById("numfacture");
var numFactureSpan = document.querySelector(".numfact span");
numFactureSpan.textContent = numFactureInput.value;
}
// Appel de la fonction lorsqu'un changement est détecté dans l'input
document.getElementById("numfacture").addEventListener("input", afficherNumFacture);

// Fonction Récupérer Automatique input MainOeuvre::::::::::::::::::::::
function displayMainOeuvre() {
var mainOeuvreInput = document.getElementById("oeuvres");
var mainOeuvreValue = mainOeuvreInput.value;
var mainOeuvreSpan = document.querySelector(".MainOeuvre span");

mainOeuvreSpan.textContent = mainOeuvreValue;
}
// Appeler la fonction lorsqu'un changement est détecté dans l'élément input
document.getElementById("oeuvres").addEventListener("input", displayMainOeuvre);


// Fonction qui prend automatiquement la date du jour:::::::::::::::::::::
function ajouterDateDuJour() {
var dateDuJour = new Date();
var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
var dateFormatee = dateDuJour.toLocaleDateString('fr-FR', options);
var paragraphe = document.querySelector('.droitegerant > p');
paragraphe.textContent = dateFormatee;
}
ajouterDateDuJour();


// FAIRE DISPARAITRE TOUT LE CONTENU DU (class="telepdf" et class="telecharger"):::::::::::::::: :::::::::::::::::::::::::::::
function verifierEvenements() {
var inputs = document.getElementsByTagName("input");
var telechargerElement = document.getElementById("telecharger");
var telepdfElements = document.getElementsByClassName("telepdf");

// Vérifier si au moins un input a une valeur
var evenementDetecte = false;
for (var i = 0; i < inputs.length; i++) {
if (inputs[i].value.trim() !== "") {
evenementDetecte = true;
break;
}
}

// Modifier la visibilité des éléments en fonction des événements détectés
if (evenementDetecte) {
telechargerElement.style.display = "block";
for (var j = 0; j < telepdfElements.length; j++) {
telepdfElements[j].style.display = "block";
}
} else {
telechargerElement.style.display = "none";
for (var k = 0; k < telepdfElements.length; k++) {
telepdfElements[k].style.display = "none";
}
}
}
// Appeler la fonction pour vérifier les événements à chaque modification d'un input
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
inputs[i].addEventListener("input", verifierEvenements);
}
// Appeler la fonction une première fois pour initialiser la visibilité des éléments
verifierEvenements();








 // :::::::::::AFFICHER TOUT LE CONTENU D'UNE LIGNE CHOISI(DELETE/UPDATE):::::::::::::
 function surveillerEvenement() {
    var champModif = document.getElementById("idmodif");
    champModif.addEventListener("input", function() {
      var numSaisi = parseInt(champModif.value);
      var tableau = document.getElementById("t1");
      var lignes = tableau.getElementsByTagName("tr");
      var popup = document.getElementById("popup");
      var rienPop = document.querySelector(".rienpop");
      var inputs = document.querySelectorAll("#designation, #quantite, #prixUnitaire, #montant");
  
      // Réinitialiser les valeurs des champs
      inputs.forEach(function(input) {
        input.value = "";
      });
  
      // Parcourir les lignes du tableau
      for (var i = 1; i < lignes.length; i++) {
        var ligne = lignes[i];
        var cellules = ligne.getElementsByTagName("td");
        var idCellule = parseInt(cellules[0].innerHTML);
  
        // Vérifier si le numéro saisi se trouve dans la colonne correspondante
        if (idCellule === numSaisi) {
          // Afficher la popup
          popup.style.display = "block";
          rienPop.style.display = "none";
  
          // Afficher les valeurs dans les champs respectifs
          inputs[0].value = cellules[1].innerHTML;
          inputs[1].value = cellules[2].innerHTML;
          inputs[2].value = cellules[3].innerHTML;
          inputs[3].value = cellules[4].innerHTML;
  
          // Sortir de la boucle après avoir trouvé la correspondance
          return;
        }
      }
  
      // Si aucun numéro correspondant n'est trouvé, afficher le message d'erreur
      popup.style.display = "none";
      rienPop.style.display = "block";
    });
  }
  surveillerEvenement();
  
  // ::::::::::::::::::::::SUPPRESSION LIGNE PAR LIGNE:::::::::::::::
  function supprimerLigne() {
    // Récupérer le numéro de la ligne à supprimer
    var idToDelete = document.getElementById("idmodif").value;
  
    // Récupérer le tableau
    var table = document.getElementById("t1");
  
    // Récupérer toutes les lignes du tableau
    var rows = table.getElementsByTagName("tr");
  
    // Parcourir les lignes du tableau à partir de la deuxième ligne (index 1)
    for (var i = 1; i < rows.length; i++) {
      // Récupérer le numéro de la ligne courante
      var rowId = rows[i].getElementsByTagName("td")[0].innerHTML;
  
      // Vérifier si le numéro correspond au numéro à supprimer
      if (rowId === idToDelete) {
        // Supprimer la ligne
        table.deleteRow(i);
  
        // Vider les champs designation, prixUnitaire et quantite
        document.getElementById("designation").value = "";
        document.getElementById("prixUnitaire").value = "";
        document.getElementById("quantite").value = "";
  
        break; // Sortir de la boucle une fois la ligne supprimée
      }
    }
  
    // Appeler la fonction pour réorganiser les IDs après la suppression
    reorganizeIDs();
  }
  // Récupérer le bouton de suppression
  var deleteBtn = document.getElementById("deleteBtn");
  // Ajouter un gestionnaire d'événements au bouton de suppression
  deleteBtn.addEventListener("click", supprimerLigne);
  
  
  // :::::::: REORGANISATION DU NUMERO DES LIGNES APRES SUPPRESSION::::::::::
  function reorganizeIDs() {
    var table = document.getElementById("t1");
    var rows = table.getElementsByTagName("tr");
  
    // Parcourir toutes les lignes du tableau à partir de la deuxième ligne (index 1)
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var idCell = row.cells[0];
  
      // Mettre à jour l'ID "idt" de chaque ligne
      idCell.textContent = i;
    }
  }




  

// :::::::PDF TELECHARGEMENT/////////
// Transformation en image
window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;
function makePDF(){

html2canvas(document.querySelector("#capture"),{

allowTaint:true,
useCORS: true,
scale: 1
}).then(canvas => {
// document.body.appendChild(canvas)
var img = canvas.toDataURL("image/png");

var doc = new jsPDF();
doc.setFont('Arial');
//   doc.getFontSize(11);
//   doc.addImage(img,'PNG',7,13,195,105);
doc.save("plomberie");
});
}
//   Téléchargement PDF
function downloadPDF() {
var element = document.getElementById("capture");
html2canvas(element, {
scale: 2,
scrollX: 0,
scrollY: 0,
windowWidth: document.documentElement.offsetWidth,
windowHeight: document.documentElement.offsetHeight,
useCORS: true
}).then(function(canvas) {
var imgData = canvas.toDataURL("image/png", 1.0);
var pdf = new jsPDF("p", "mm", "a4");
var width = pdf.internal.pageSize.getWidth();
var height = pdf.internal.pageSize.getHeight();

var table1 = document.getElementById("t1");
var table2 = document.getElementById("t2");

if (table1.rows.length > 20) {
// Première page avec les premières 20 lignes de la table t1
pdf.addImage(imgData, "PNG", 0, 0, width, height);
pdf.addPage();

// Deuxième page avec les lignes restantes de la table t1 et la table t2
var imgData2 = canvas.toDataURL("image/png", 1.0);
pdf.addImage(imgData2, "PNG", 0, 0, width, height);

// Supprimez la première ligne de la table t2 car elle a déjà été ajoutée dans la première page
table2.deleteRow(0);
} else {
pdf.addImage(imgData, "PNG", 0, 0, width, height);
}

pdf.save("plombier.pdf");
});
}
