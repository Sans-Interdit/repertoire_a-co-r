function addContact() {
  let list = [document.getElementById("firstName"),document.getElementById("lastName"),document.getElementById("phone")];
  if (list[0].value==""||list[1].value==""||list[2].value=="") {
    alert("Merci de renseigner tous les éléments");
  }
  else{
    var refTable = document.getElementById("tab");
    var newLine = refTable.insertRow(refTable.rows.length);
    for (let pas = 0; pas < 3; pas++) {
      var newCell = newLine.insertCell(pas);
      newCell.appendChild(document.createTextNode(list[pas].value));
      list[pas].value = "";
    }
    var supprButton = document.createElement("button");
    supprButton.onclick = function() {newLine.remove()};
    var bin = document.createElement("img");
    bin.src = "https://cdn-icons-png.flaticon.com/512/1214/1214428.png?w=740&t=st=1686419059~exp=1686419659~hmac=bfbbf61f4e75265c289be3224cba94458f449b657aa0cdef95e6eac833f29ed8";
    var newCell = newLine.insertCell(3);
    supprButton.appendChild(bin);
    newCell.appendChild(supprButton);
  }
}