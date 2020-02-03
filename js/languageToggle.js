// Function to set the text for each section
// Each HTML file needs a langSettings object
// Structured as an array of objects with the following properties
// Element: a string indicating the ID of the element to which the text belongs
// Text: an object containing a eng and fr property which house the respective text
function setLang() {
  langSettings.forEach(setting => {
    if (localStorage.lang === "eng") {
      var text = setting.text.eng;
    } else if (localStorage.lang === "fr") {
      var text = setting.text.fr;
    }
    document.getElementById(setting.element).innerHTML = text;
  });
}

// Language setting
const langBtn = document.querySelector(".lang-btn");

// If local storage has not stored a language default to english
if (!localStorage.lang) {
  localStorage.lang = "eng";
}

// Initial run of setLang to set all text when first opened
setLang();
langBtn.addEventListener("click", toggleLang);

// Function to toggle the language between english and french
function toggleLang() {
  if (localStorage.lang === "eng") {
    localStorage.lang = "fr";
  } else {
    localStorage.lang = "eng";
  }
  setLang();
}
