const languageBtn = document.querySelectorAll(".lang-switch");
window.addEventListener("DOMContentLoaded", () => {
  const savedLangval = localStorage.getItem("preferredLangval") || "fr"; // default to french
  const savedLanginner =
    localStorage.getItem("preferredLanginner") || "Français"; // default to french
  const savedLangtitle =
    localStorage.getItem("preferredLangtitle") ||
    "click here to switch to english";
  languageBtn.forEach((el) => {
    el.value = savedLangval;
    el.innerHTML = savedLanginner;
    el.title = savedLangtitle;
  });
  // set dropdown
  setLanguage(savedLangval); // apply saved language
  updateLinkBasedOnLanguage(savedLangval);
});
const translations = {
  en: {
    about_transalation: "About Me",
    experience_transalation: "Experience",
    projects_transalation: "Projects",
    contact: "Contact",
    hello: "Hello , I am",
    job_title: "Full Stack Developer",
    get_to_know: "Get to Know More",
    experience_summary: "1+ year  Full Stack Development",
    education: "Education",
    degree: "Senior Technician Web and Multimedia Developer",
    explore: "Explore my",
    frontend: "Frontend Development",
    intermediate: "Intermediate",
    backend: "Backend Development",
    basic: "Basic",
    browse: "Browse my recent",
    project_one: "Project One",
    live_demo: "Live demo",
    project_two: "Project Two",
    project_three: "Project Three",
    contact_me: "Contact me",
    description:
      "Hi! I’m a web developer with a strong foundation in front-end and back-end development. I specialize in building user-friendly websites and web applications using technologies like HTML, CSS,JavaScript, PHP , and MySQL. With a solid understanding of UI/UX principles and experience in working with MVC architecture. I enjoy solving problems, learning new tools , and continuously improving my craft. When I’m not coding, I like to explore new tech trends, or refine personal projects that push my skillsfurther . I'm currently open to new opportunities where I can contribute, learn, and grow as a developer.",
    experienced: "Experienced",
    intermediate: "Intermediate",
  },
  fr: {
    about_transalation: "À propos de moi",
    experience_transalation: "Expérience",
    projects_transalation: "Projets",
    contact: "Contact",
    hello: "Bonjour, je suis",
    job_title: "Développeur Full Stack",
    get_to_know: "En savoir plus",
    experience_summary: "1+ an  de développement Full Stack",
    education: "Éducation",
    degree: "Technicien supérieur en développement web et multimédia",
    explore: "Explorez mes",
    frontend: "Développement Frontend",
    intermediate: "Intermédiaire",
    backend: "Développement Backend",
    basic: "Débutant",
    browse: "Découvrez mes projets récents",
    project_one: "Projet Un",
    live_demo: "Démo en direct",
    project_two: "Projet Deux",
    project_three: "Projet Trois",
    contact_me: "Contactez-moi",
    description:
      "Salut ! Je suis développeur web avec une solide maîtrise du développement front-end et back-end. Je suis spécialisé dans la création de sites web  conviviaux en utilisant des technologies comme HTML, CSS, JavaScript, PHP et MySQL.Je possède une bonne compréhension des principes d’UI/UX et une expérience dans l’utilisation de l’architecture MVC. J’aime résoudre des problèmes, découvrir de nouveaux outils et améliorer continuellement mes compétences.Quand je ne code pas, j’aime explorer les nouvelles tendances technologiques ou perfectionner des projets personnels qui me permettent de progresser.\nJe suis actuellement à la recherche de nouvelles opportunités où je peux contribuer, apprendre et évoluer en tant que développeur.",
    experienced: "expérimenté",
    intermediate: "Intermédiaire",
  },
};

function setLanguage(lang) {
  for (const key in translations[lang]) {
    // Select all elements with that key as a class
    const elements = document.querySelectorAll(`.${key}`);
    elements.forEach((el) => {
      el.textContent = translations[lang][key];
    });
  }
}

function updateLinkBasedOnLanguage(lang) {
  const cv = document.getElementById("cv-btn");

  // Example: use different URLs based on language
  if (lang === "fr") {
    cv.href = "https://ilyeswebdev.github.io/portfolio/fr_cv.pdf";
  } else {
    cv.href = "https://ilyeswebdev.github.io/portfolio/en_cv.pdf";
  }
}

languageBtn.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.value == "en") {
      el.value = "fr";
      el.innerHTML = "Français";
      el.title = "click here to switch to english";
      localStorage.setItem("preferredLangval", "fr");
      localStorage.setItem("preferredLanginner", el.innerHTML);
      localStorage.setItem("preferredLangtitle", el.title);
      setLanguage("fr");
      updateLinkBasedOnLanguage("fr");
    } else {
      el.value = "en";
      el.innerHTML = "English";
      el.title = "Appuyez pour passer en français";

      localStorage.setItem("preferredLangval", "en");
      localStorage.setItem("preferredLanginner", el.innerHTML);
      localStorage.setItem("preferredLangtitle", el.title);
      setLanguage("en");
      updateLinkBasedOnLanguage("en");
    }
  });
});
