let isOpen = false;

document.querySelector("#openMenu").addEventListener("click", function () {
  document.querySelector("#menu").style.display = "flex";
});

document.querySelector("#closeMenu").addEventListener("click", function () {
  document.querySelector("#menu").style.display = "";
});

// -----------------------------------------------------------------------

function btnStyle() {
  const containerBtn = document.querySelector("#filter");
  const buttons = containerBtn.getElementsByClassName("btnFilter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      // dobbiamo togliere la classe active al/ai button che ce l'avevano prima
      // ma visto che non so chi ce l'aveva (e tenersi "memoria" di chi era è un lavoro "inutile")
      // la togliamo a tutti quanti!
      // questo dobbiamo farlo prima, perchè se lo facciamo dopo, togliamo la classe a quello che stiamo per mettere!

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }

      // il button che ha generato l'evento
      const btn = event.currentTarget;
      // gli aggiungiamo la classe 'active'
      btn.classList.add("active");

      const selectedTags = btn.dataset.tags;
      console.log(selectedTags);

      const prjs = document.querySelectorAll(".card-project");
      for (let i = 0; i < prjs.length; i++) {
        const card = prjs[i];
        const prjTags = card.dataset.tags;
        const prjTagsArray = prjTags.split(" ");
        const isActive = prjTagsArray.includes(selectedTags);
        if (isActive) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      }
    });
  }
}

btnStyle();
