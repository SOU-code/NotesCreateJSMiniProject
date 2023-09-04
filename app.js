function notesFun() {
  const createNote = document.querySelector(".create-notes");
  const noteSecton = document.querySelector(".note-section");
  noteSecton.innerHTML = window.localStorage.getItem("noteSouCodeData");
  createNote.addEventListener("click", () => {
    const eachNote = document.createElement("li");
    eachNote.classList.add("note-form");
    eachNote.innerHTML = `
    <label for="notes">Notes</label>
    <textarea
      class="notes"
      id=""
      cols="50"
      rows="10"
      placeholder="Write down down your notes ......"></textarea>
    <hr />
    <img src="images/delete.png" alt="" />
  `;
    noteSecton.appendChild(eachNote);
    saveData();
  });
  function saveData() {
    window.localStorage.setItem("noteSouCodeData", noteSecton.innerHTML);
  }
  noteSecton.addEventListener("input", (e) => {
    if (e.target.tagName == "TEXTAREA") {
      e.target.innerHTML = e.target.value;
      console.log(noteSecton.innerHTML);
      saveData();
    }
  });
  noteSecton.addEventListener("click", (e) => {
    if (e.target.tagName == "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  });
}
notesFun();
