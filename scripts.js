function CreateNotes(){
  let noteWrapper = document.createElement("div"); // Crée un div parent pour la note et l'icône
  noteWrapper.className = "note-wrapper";

  let notes = document.createElement("p");
  notes.setAttribute("contenteditable", "true");
  notes.className = "input-text";

  let container = document.getElementById("input-box");

  // Création de l'icône suppression
  let Delete = document.createElement("span");
  Delete.innerHTML = "&#10060;";
  Delete.className = "Delete-icon";

  // Ajout des éléments au div parent
  noteWrapper.appendChild(notes);
  noteWrapper.appendChild(Delete);
  container.appendChild(noteWrapper);

  // Suppression de la note lors du clic sur l'icône
  Delete.addEventListener("click", () => {
      container.removeChild(noteWrapper);
  });
}
