// Insertions des éléments dans le PDF::::::::::
function afficherPDF(){
    // Les variables
    var form_nom = document.querySelector('.form-nom').value;
    var form_prenom = document.querySelector('.form-prenom').value;
    var form_age = document.querySelector('.form-age').value;
    var form_mail = document.querySelector('.form-mail').value;
    var form_adresse = document.querySelector('.form-adresse').value;
    var body = document.querySelector('body');

    // Insertion La page affichage après les saisis du champs(pdf2)
    body.innerHTML = `
    <div class="piece">
        <div class="logo">
            <img src="logo.png" alt="">
            <p>Générateur PDF</p>
        </div>
 
        <h1>Pièce d'identité Partielle</h1>

        <div class="elements">
            <p>Nom:<strong>${form_nom}</strong></p>
            <p>Prenom:<strong>${form_prenom}</strong></p>
            <p>Age:<strong>${form_age}ans</strong></p>
            <p>Adresse Mail:<strong>${form_mail}</strong></p>
            <p>Adresse:<strong>${form_adresse}</strong></p>

            <div class="certification">
                <img src="logo.png" alt="">
                <p>Dji Dev</p>
            </div>
        </div>
    </div>

    <div class="generateurBtn">
    <button class="submit" onclick="generateurPDF()">Télécharger PDF</button>
    <a href="pdf.html" class="submit">Générer un autre PDF</a>
    </div>
    ` 

    // ::::::::::::Générer puis télécharger PDF::::::::::::
    function generateurPDF(){
        const piece =document.querySelector(".piece")
        html2pdf()
        .from(piece)
        .save()
    }   

    // function generateurPDF(){
    //     const piece = document.querySelector(".piece");
    //     html2pdf()
    //         .from(piece)
    //         .save();
    // }
    // ``    
    
}