// function to display mobile menu

document.querySelector("#openMenu").addEventListener("click", function () {
  let hamburger = document.querySelector("#menu");
  if (hamburger.style.display === "flex") {
    hamburger.style.display = "";
  } else {
    hamburger.style.display = "flex";
  }
});

// -----------------------------------------------------------------------

// function to put active style in a header btn
function btnActive() {
  const navContainer = document.querySelector("#menu");
  const navMenu = document.querySelectorAll(".btnNav");

  for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener("click", function (event) {
      for (let i = 0; i < navMenu.length; i++) {
        navMenu[i].classList.remove("active");
      }
      const btnNav = event.currentTarget;
      btnNav.classList.add("active");

      let hamburger = document.querySelector("#menu");
      hamburger.style.display = "";
    });
  }
}

btnActive();

// -----------------------------------------------------------------------

// function to filter project by tags
function functionFilter() {
  const containerBtn = document.querySelector("#filter");
  const buttons = containerBtn.getElementsByClassName("btnFilter");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }

      const btn = event.currentTarget;
      btn.classList.add("active");

      const selectedTags = btn.dataset.tags;

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

functionFilter();

// -----------------------------------------------------------------------

// function to go up
let btnTop = document.querySelector("#top");
btnTop.addEventListener("click", goTop);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

function goTop() {
  window.scrollTo(0, 0);
}

scrollFunction();
