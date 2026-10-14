// ==========================================
// FOOTSTEP — DESTINATIONS
// ==========================================

const destinations = [
  {
    id: "bali",
    name: "Bali",
    country: "Indonésie",
    theme: "Relaxation",
    budget: 2,
    days: "8 à 12 jours",
    image: "photo-1537996194471-e657df975ab4",
    desc: "Rizières verdoyantes, temples et couchers de soleil.",
    highlights: ["Ubud et ses rizières", "Temples balinais", "Plages et cascades"]
  },
  {
    id: "iceland",
    name: "Islande",
    country: "Islande",
    theme: "Aventure",
    budget: 3,
    days: "7 à 10 jours",
    image: "photo-1476610182048-b716b8518aae",
    desc: "Une terre spectaculaire entre glaciers, volcans et cascades.",
    highlights: ["Cercle d'Or", "Plages de sable noir", "Paysages volcaniques"]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japon",
    theme: "Culture",
    budget: 3,
    days: "5 à 7 jours",
    image: "photo-1493976040374-85c8e12f0c0e",
    desc: "Jardins paisibles, sanctuaires et traditions japonaises.",
    highlights: ["Quartier de Gion", "Fushimi Inari", "Arashiyama"]
  },
  {
    id: "amalfi",
    name: "Côte amalfitaine",
    country: "Italie",
    theme: "Gastronomie",
    budget: 2,
    days: "5 à 8 jours",
    image: "photo-1533105079780-92b9be482077",
    desc: "Villages colorés, mer azur et saveurs italiennes.",
    highlights: ["Positano", "Pâtes et spécialités locales", "Balades côtières"]
  },
  {
    id: "marrakech",
    name: "Marrakech",
    country: "Maroc",
    theme: "Culture",
    budget: 1,
    days: "4 à 6 jours",
    image: "photo-1597212618440-806262de4f6b",
    desc: "Une ville vibrante entre souks, jardins et architecture.",
    highlights: ["Médina", "Jardin Majorelle", "Palais Bahia"]
  },
  {
    id: "swiss",
    name: "Alpes suisses",
    country: "Suisse",
    theme: "Aventure",
    budget: 3,
    days: "5 à 9 jours",
    image: "photo-1531366936337-7c912a4589a7",
    desc: "Lacs alpins, randonnées et sommets impressionnants.",
    highlights: ["Randonnées", "Lacs de montagne", "Panoramas alpins"]
  },
  {
    id: "edinburgh",
    name: "Édimbourg",
    country: "Écosse",
    theme: "Culture",
    budget: 2,
    days: "3 à 5 jours",
    image: "photo-1506377585622-bedcbb027afc",
    desc: "Une ville littéraire et mystérieuse, associée à l'univers de Harry Potter.",
    highlights: ["Victoria Street", "Château d'Édimbourg", "Patrimoine littéraire"]
  },
  {
    id: "dubrovnik",
    name: "Dubrovnik",
    country: "Croatie",
    theme: "Culture",
    budget: 2,
    days: "4 à 6 jours",
    image: "photo-1467269204594-9661b134dd2b",
    desc: "Une cité fortifiée devenue célèbre grâce aux tournages de Game of Thrones.",
    highlights: ["Remparts historiques", "Vieille ville", "Lieux de tournage"]
  },
  {
    id: "newyork",
    name: "New York",
    country: "États-Unis",
    theme: "Culture",
    budget: 3,
    days: "6 à 9 jours",
    image: "photo-1486325212027-8081e485255e",
    desc: "Cinéma, séries, musique et quartiers emblématiques.",
    highlights: ["Central Park", "Lieux de tournage", "Brooklyn et Manhattan"]
  },
  {
    id: "versailles",
    name: "Versailles",
    country: "France",
    theme: "Culture",
    budget: 1,
    days: "1 à 3 jours",
    image: "photo-1590490360182-c33d57733427",
    desc: "Plongez dans l'histoire de la monarchie française.",
    highlights: ["Château de Versailles", "Galerie des Glaces", "Jardins historiques"]
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italie",
    theme: "Culture",
    budget: 2,
    days: "4 à 6 jours",
    image: "photo-1552832230-c0197dd311b5",
    desc: "Un véritable voyage dans le temps, au cœur de l'Antiquité.",
    highlights: ["Colisée", "Forum romain", "Fontaine de Trevi"]
  },
  {
    id: "petra",
    name: "Pétra",
    country: "Jordanie",
    theme: "Culture",
    budget: 3,
    days: "5 à 8 jours",
    image: "photo-1509316785289-025f5b846b35",
    desc: "Une cité antique spectaculaire, également célèbre au cinéma.",
    highlights: ["Le Trésor", "Histoire nabatéenne", "Paysages désertiques"]
  },
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japon",
    theme: "Gastronomie",
    budget: 3,
    days: "6 à 10 jours",
    image: "photo-1519501025264-65ba15a82390",
    desc: "Une exploration culinaire entre traditions et modernité.",
    highlights: ["Ramen", "Marchés alimentaires", "Cuisine de quartier"]
  },
  {
    id: "naples",
    name: "Naples",
    country: "Italie",
    theme: "Gastronomie",
    budget: 2,
    days: "3 à 5 jours",
    image: "photo-1516483638261-f4dbaf036963",
    desc: "La destination incontournable pour les amateurs de pizza.",
    highlights: ["Pizza napolitaine", "Street food", "Centre historique"]
  },
  {
    id: "lyon",
    name: "Lyon",
    country: "France",
    theme: "Gastronomie",
    budget: 2,
    days: "2 à 4 jours",
    image: "photo-1524396309943-e03f5249f002",
    desc: "Un voyage gourmand au cœur des traditions françaises.",
    highlights: ["Bouchons lyonnais", "Halles Paul Bocuse", "Vieux Lyon"]
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thaïlande",
    theme: "Gastronomie",
    budget: 1,
    days: "4 à 7 jours",
    image: "photo-1508009603885-50cf7c579365",
    desc: "Marchés animés, street food et parfums épicés.",
    highlights: ["Pad thaï", "Marchés de nuit", "Cuisine thaïlandaise"]
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turquie",
    theme: "Gastronomie",
    budget: 2,
    days: "4 à 6 jours",
    image: "photo-1524231757912-21f4fe3a7200",
    desc: "Une rencontre gourmande entre l'Europe et l'Asie.",
    highlights: ["Grand Bazar", "Baklava", "Cuisine turque"]
  },
  {
    id: "lisbon",
    name: "Lisbonne",
    country: "Portugal",
    theme: "Gastronomie",
    budget: 2,
    days: "3 à 5 jours",
    image: "photo-1555881400-74d7acaacd8b",
    desc: "Une escapade ensoleillée entre ruelles et pâtisseries.",
    highlights: ["Pastéis de nata", "Marchés gourmands", "Quartier de l'Alfama"]
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    theme: "Relaxation",
    budget: 3,
    days: "7 à 10 jours",
    image: "photo-1514282401047-d79a71a590e8",
    desc: "Eaux turquoise, sable blanc et déconnexion totale.",
    highlights: ["Lagons", "Snorkeling", "Plages paradisiaques"]
  },
  {
    id: "seychelles",
    name: "Seychelles",
    country: "Seychelles",
    theme: "Relaxation",
    budget: 3,
    days: "7 à 12 jours",
    image: "photo-1500375592092-40eb2168fd21",
    desc: "Des plages de rêve et une nature tropicale préservée.",
    highlights: ["La Digue", "Anse Source d'Argent", "Nature tropicale"]
  },
  {
    id: "santorini",
    name: "Santorin",
    country: "Grèce",
    theme: "Relaxation",
    budget: 2,
    days: "4 à 7 jours",
    image: "photo-1613395877344-13d4a8e0d49e",
    desc: "Villages blancs et couchers de soleil sur la mer Égée.",
    highlights: ["Oia", "Caldeira", "Villages traditionnels"]
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzanie",
    theme: "Relaxation",
    budget: 2,
    days: "7 à 10 jours",
    image: "photo-1507525428034-b723cf961d3e",
    desc: "Plages tropicales et douceur de vivre.",
    highlights: ["Stone Town", "Plages", "Excursions marines"]
  },
  {
    id: "dolomites",
    name: "Dolomites",
    country: "Italie",
    theme: "Aventure",
    budget: 2,
    days: "5 à 8 jours",
    image: "photo-1519681393784-d120267933ba",
    desc: "Des montagnes spectaculaires à explorer à pied.",
    highlights: ["Tre Cime", "Lacs alpins", "Randonnées"]
  },
  {
    id: "patagonia",
    name: "Patagonie",
    country: "Argentine / Chili",
    theme: "Aventure",
    budget: 3,
    days: "12 à 18 jours",
    image: "photo-1464822759023-fed622ff2c3b",
    desc: "L'aventure au bout du monde, entre glaciers et grands espaces.",
    highlights: ["Trekking", "Glaciers", "Paysages sauvages"]
  },
  {
    id: "norway",
    name: "Fjords norvégiens",
    country: "Norvège",
    theme: "Aventure",
    budget: 3,
    days: "7 à 10 jours",
    image: "photo-1531366936337-7c912a4589a7",
    desc: "Une immersion dans des paysages nordiques grandioses.",
    highlights: ["Fjords", "Randonnées", "Routes panoramiques"]
  },
  {
    id: "cappadocia",
    name: "Cappadoce",
    country: "Turquie",
    theme: "Aventure",
    budget: 2,
    days: "4 à 6 jours",
    image: "photo-1570939274717-7eda259b50ed",
    desc: "Formations rocheuses étonnantes et paysages presque irréels.",
    highlights: ["Vallées", "Habitations troglodytes", "Montgolfières"]
  }
];

// ==========================================
// PHOTOS LOCALES
// ==========================================

// Les noms correspondent aux fichiers visibles dans ton dossier images.
// Pour les autres destinations, on conserve temporairement Unsplash.
//
// Quand tu ajoutes une nouvelle photo, il suffit d'ajouter son nom ici.
// Exemple : dubrovnik: "dubrovnik.png"

const localImages = {
  bali: "bali.png",
  iceland: "islande.png",
  kyoto: "kyoto.png",
  amalfi: "coteamalfitaine.png",
  swiss: "suisse.png",
  newyork: "newyork.png",
  versailles: "versailles.png",
  petra: "petra.png",
  tokyo: "tokyo.png",
  naples: "naples.png",
  lyon: "lyon.jpg",
  bangkok: "bangkok.png",
  lisbon: "lisbonne.png",
  seychelles: "seychelles.png",
  dolomites: "dolomites.png",
  cappadocia: "cappadoce.png"
};

// ==========================================
// OUTILS ET SAUVEGARDE
// ==========================================

const $ = selector => document.querySelector(selector);

// Cette fonction est utilisée partout :
// cartes, fiches détaillées, carnet et questionnaire.
// Ainsi, toutes les photos changent automatiquement au même endroit.

const photo = (destination, width = 900) => {
  const localFile = localImages[destination.id];

  if (localFile) {
    return `images/${localFile}`;
  }

  return `https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=${width}&q=80`;
};

function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem("footstep-favorites"));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

let favorites = loadFavorites();

function saveFavorites() {
  localStorage.setItem("footstep-favorites", JSON.stringify(favorites));
  $("#favCount").textContent = favorites.length;
}

function notify(message) {
  const toast = $("#toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.footstepToast);

  window.footstepToast = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function getDestination(id) {
  return destinations.find(destination => destination.id === id);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    notify("Destination retirée du carnet");
  } else {
    favorites.push(id);
    notify("Destination ajoutée au carnet ♡");
  }

  saveFavorites();
  renderCards();
}

// ==========================================
// AFFICHAGE DES DESTINATIONS
// ==========================================

function renderCards() {
  const search = $("#search").value.toLocaleLowerCase("fr").trim();
  const theme = $("#themeFilter").value;
  const budget = $("#budgetFilter").value;

  const filtered = destinations.filter(destination => {
    const searchableText = [
      destination.name,
      destination.country,
      destination.desc,
      ...destination.highlights
    ].join(" ").toLocaleLowerCase("fr");

    const matchesSearch = searchableText.includes(search);
    const matchesTheme = theme === "all" || destination.theme === theme;
    const matchesBudget =
      budget === "all" || destination.budget === Number(budget);

    return matchesSearch && matchesTheme && matchesBudget;
  });

  $("#cards").innerHTML = filtered.map(destination => `
    <article class="destination-card">
      <div class="card-image">
        <img
          src="${photo(destination)}"
          alt="Paysage de ${destination.name}"
          loading="lazy"
        >

        <span class="card-tag">${destination.theme}</span>

        <button
          class="fav ${favorites.includes(destination.id) ? "active" : ""}"
          data-fav="${destination.id}"
          aria-label="Ajouter ou retirer ${destination.name} des favoris"
          aria-pressed="${favorites.includes(destination.id)}"
        >
          ${favorites.includes(destination.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-body">
        <div class="card-title">
          <h3>${destination.name}</h3>
          <span>${"€".repeat(destination.budget)}</span>
        </div>

        <p class="card-country">
          ${destination.country} · ${destination.days}
        </p>

        <div class="card-bottom">
          <p>${destination.desc}</p>

          <button
            data-detail="${destination.id}"
            aria-label="Découvrir ${destination.name}"
          >
            ↗
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("#noResults").hidden = filtered.length > 0;

  $("#catalogueCount").textContent =
    `${filtered.length} destination${filtered.length > 1 ? "s" : ""} à découvrir`;

  // Animation d'apparition des cartes.
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".destination-card").forEach((card, index) => {
      card.animate(
        [
          { opacity: 0, transform: "translateY(15px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        {
          duration: 350,
          delay: Math.min(index * 35, 350),
          fill: "both"
        }
      );
    });
  }
}

$("#cards").addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-fav]");
  const detailButton = event.target.closest("[data-detail]");

  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.fav);
  }

  if (detailButton) {
    openDetail(detailButton.dataset.detail);
  }
});

$("#search").addEventListener("input", renderCards);
$("#themeFilter").addEventListener("change", renderCards);
$("#budgetFilter").addEventListener("change", renderCards);

// ==========================================
// FICHES DÉTAILLÉES
// ==========================================

function openDetail(id) {
  const destination = getDestination(id);

  if (!destination) return;

  $("#detailContent").innerHTML = `
    <img
      class="detail-hero"
      src="${photo(destination, 1200)}"
      alt="${destination.name}"
    >

    <span class="eyebrow">
      ${destination.country.toUpperCase()} / ${destination.theme.toUpperCase()}
    </span>

    <h2>${destination.name}</h2>

    <p>${destination.desc}</p>

    <p>
      <strong>Durée suggérée :</strong> ${destination.days}<br>
      <strong>Budget indicatif :</strong> ${"€".repeat(destination.budget)}
    </p>

    <h3>À découvrir</h3>

    <ul class="detail-list">
      ${destination.highlights.map(item => `<li>${item}</li>`).join("")}
    </ul>

    <button class="btn btn-dark" id="detailFavorite">
      ${favorites.includes(id)
        ? "Retirer du carnet ♥"
        : "Ajouter à mon carnet ♡"}
    </button>
  `;

  $("#detailFavorite").onclick = () => {
    toggleFavorite(id);

    $("#detailFavorite").textContent = favorites.includes(id)
      ? "Retirer du carnet ♥"
      : "Ajouter à mon carnet ♡";
  };

  if (!$("#detailDialog").open) {
    $("#detailDialog").showModal();
  }
}

// ==========================================
// CARNET DE VOYAGE
// ==========================================

function openJournal() {
  const savedDestinations = favorites
    .map(getDestination)
    .filter(Boolean);

  $("#journalContent").innerHTML = `
    <span class="eyebrow">MY FOOTSTEP</span>

    <h2>Mon carnet de voyage.</h2>

    <p>
      Vos destinations préférées sont enregistrées sur cet appareil.
    </p>

    <h3>Mes destinations (${savedDestinations.length})</h3>

    ${
      savedDestinations.length
        ? savedDestinations.map((destination, index) => `
          <div class="journal-item">
            <img
              src="${photo(destination, 200)}"
              alt="${destination.name}"
            >

            <div>
              <strong>
                Étape ${index + 1} · ${destination.name}
              </strong>
              <br>
              <small>${destination.country}</small>
            </div>

            <button
              data-remove="${destination.id}"
              aria-label="Retirer ${destination.name}"
            >
              ✕
            </button>
          </div>
        `).join("")
        : `
          <p>
            Votre carnet est vide. Explorez les destinations pour
            ajouter vos premiers coups de cœur ♡
          </p>
        `
    }

    <button class="btn btn-dark" id="journalExplore">
      Explorer les destinations ↗
    </button>
  `;

  document.querySelectorAll("[data-remove]").forEach(button => {
    button.onclick = () => {
      toggleFavorite(button.dataset.remove);
      openJournal();
    };
  });

  $("#journalExplore").onclick = () => {
    $("#journalDialog").close();
    location.hash = "destinations";
  };

  if (!$("#journalDialog").open) {
    $("#journalDialog").showModal();
  }
}

$("#openJournal").onclick = openJournal;

// ==========================================
// QUESTIONNAIRE
// ==========================================

const questions = [
  {
    title: "De quoi avez-vous envie ?",
    key: "theme",
    options: [
      "Aventure",
      "Relaxation",
      "Gastronomie",
      "Culture"
    ]
  },
  {
    title: "Quel budget imaginez-vous ?",
    key: "budget",
    options: [
      "€ Accessible",
      "€€ Intermédiaire",
      "€€€ Premium",
      "Peu importe"
    ]
  },
  {
    title: "Combien de temps ?",
    key: "duration",
    options: [
      "Un long week-end",
      "5 à 7 jours",
      "8 à 12 jours",
      "Je suis flexible"
    ]
  }
];

let quizStep = 0;
let quizAnswers = {};

function renderQuiz() {
  const question = questions[quizStep];

  $("#quizContent").innerHTML = `
    <span class="eyebrow">
      YOUR JOURNEY / 0${quizStep + 1} — 0${questions.length}
    </span>

    <h2>${question.title}</h2>

    <p>Choisissez la réponse qui vous correspond.</p>

    <div class="option-list">
      ${question.options.map(option => `
        <button class="option" data-answer="${option}">
          ${option}
        </button>
      `).join("")}
    </div>

    <button class="btn btn-dark" id="quizBack">
      ${quizStep === 0
        ? "Passer le questionnaire"
        : "← Retour"}
    </button>
  `;

  document.querySelectorAll("[data-answer]").forEach(button => {
    button.onclick = () => {
      quizAnswers[question.key] = button.dataset.answer;

      if (quizStep < questions.length - 1) {
        quizStep++;
        renderQuiz();
      } else {
        showQuizResults();
      }
    };
  });

  $("#quizBack").onclick = () => {
    if (quizStep === 0) {
      $("#quizDialog").close();
    } else {
      quizStep--;
      renderQuiz();
    }
  };
}

function showQuizResults() {
  const budgetMap = {
    "€ Accessible": 1,
    "€€ Intermédiaire": 2,
    "€€€ Premium": 3
  };

  let results = destinations.filter(destination =>
    destination.theme === quizAnswers.theme &&
    (
      quizAnswers.budget === "Peu importe" ||
      destination.budget === budgetMap[quizAnswers.budget]
    )
  );

  if (!results.length) {
    results = destinations.filter(destination =>
      destination.theme === quizAnswers.theme
    );
  }

  $("#quizContent").innerHTML = `
    <span class="eyebrow">MADE FOR YOU</span>

    <h2>Votre aventure commence ici.</h2>

    <p>
      Voici des destinations inspirées de vos préférences.
      Les durées et budgets sont indicatifs.
    </p>

    ${results.slice(0, 5).map(destination => `
      <div class="journal-item">
        <img
          src="${photo(destination, 200)}"
          alt="${destination.name}"
        >

        <div>
          <strong>${destination.name}</strong>
          <br>
          <small>
            ${destination.country} · ${destination.days}
          </small>
        </div>

        <button
          data-quiz-fav="${destination.id}"
          aria-label="Ajouter ${destination.name}"
        >
          ${favorites.includes(destination.id) ? "♥" : "♡"}
        </button>
      </div>
    `).join("")}

    <button class="btn btn-dark" id="quizExplore">
      Explorer toutes les destinations ↗
    </button>
  `;

  document.querySelectorAll("[data-quiz-fav]").forEach(button => {
    button.onclick = () => {
      const id = button.dataset.quizFav;

      if (!favorites.includes(id)) {
        toggleFavorite(id);
      }

      button.textContent = "♥";
    };
  });

  $("#quizExplore").onclick = () => {
    $("#quizDialog").close();
    location.hash = "destinations";
  };
}

$("#startQuiz").onclick = () => {
  quizStep = 0;
  quizAnswers = {};

  renderQuiz();
  $("#quizDialog").showModal();
};

// ==========================================
// NAVIGATION ET INTERACTIONS
// ==========================================

$("#menuBtn").onclick = () => {
  $("#nav").classList.toggle("open");
};

document.querySelectorAll("#nav a").forEach(link => {
  link.onclick = () => {
    $("#nav").classList.remove("open");
  };
});

document.querySelectorAll("[data-category]").forEach(link => {
  link.onclick = () => {
    $("#themeFilter").value = link.dataset.category;
    $("#search").value = "";
    $("#budgetFilter").value = "all";

    renderCards();
  };
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.onclick = () => {
    document.getElementById(button.dataset.close).close();
  };
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

// ==========================================
// ANIMATIONS AU SCROLL
// ==========================================

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach(element => {
    element.classList.add("visible");
  });
}

// ==========================================
// INITIALISATION
// ==========================================

$("#year").textContent = new Date().getFullYear();

saveFavorites();
renderCards();