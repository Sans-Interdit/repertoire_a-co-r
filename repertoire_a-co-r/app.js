/**
 * Renvoie et réinitialise des valeurs d'inputs ou alerte d'un manque de données
 * @param {Array} Ids des inputs
 * @return {Array} Valeurs des inputs ou vide si incomplet
 */
function takeInputInformations(inputIdList) {
  let listValue = [];
  for (const id of inputIdList) {
    let ref = document.getElementById(id);
    if (ref.value == "") {
      alert("Merci de renseigner tous les éléments");
      return [];
    } else {
      listValue.push(ref.value);
      ref.value = "";
    }
  }
  return listValue;
}

/**
 * Ajoute une ligne d'informations au tableau
 * @param {Array} Valeurs des cellules de la nouvelle ligne
 */
function addContact(valList) {
  let refTable = document.getElementById("tab");
  let newLine = refTable.insertRow(refTable.rows.length);
  for (const e of valList) { // Ajout des cellules d'informations
    let newCell = newLine.insertCell();
    newCell.appendChild(document.createTextNode(e));
  }
  if (newLine.cells.length != 0) {
    let newCell = newLine.insertCell(3);
    let supprButton = document.createElement("button");
    supprButton.onclick = function() {
      newLine.remove()
    };
    let binImg = document.createElement("img");
    binImg.src = "https://cdn.iconscout.com/icon/free/png-256/free-recycle-272-475059.png";
    supprButton.appendChild(binImg);
    newCell.appendChild(supprButton);
  }
}
