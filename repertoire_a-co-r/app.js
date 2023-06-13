/**
 * Ajoute une ligne au tableau composé des informlations renseignés ou envoi une alerte si il y a un manque d'informations
 */
function addContact() {
  let listInfo = [document.getElementById("firstName"), document.getElementById("lastName"), document.getElementById("phone")];
  if (listInfo[0].value == "" || listInfo[1].value == "" || listInfo[2].value == "") { // Verification de la présence des informations
    alert("Merci de renseigner tous les éléments");
  } else {
    var refTable = document.getElementById("tab");
    var newLine = refTable.insertRow(refTable.rows.length);
    for (let pas = 0; pas < 3; pas++) {  // Ajout des cellules d'informations
      var newCell = newLine.insertCell(pas);
      newCell.appendChild(document.createTextNode(listInfo[pas].value));
      listInfo[pas].value = "";
    }
    var supprButton = document.createElement("button");
    supprButton.onclick = function() {
      newLine.remove()
    };
    var binImg = document.createElement("img");
    binImg.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=740&t=st=1686419059~exp=1686419659~hmac=bfbbf61f4e75265c289be3224cba94458f449b657aa0cdef95e6eac833f29ed8";
    var newCell = newLine.insertCell(3);
    supprButton.appendChild(binImg);
    newCell.appendChild(supprButton);
  }
}
