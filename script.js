/* =========================================================
   Portfolio Daouda Ka
   Modifiez la section CONFIG pour mettre à jour vos liens.
   ========================================================= */

const CONFIG = {
  // Collez ici le lien de partage de votre dossier Google Drive
  driveUrl: "https://drive.google.com/",
  email: "daoudaka418@gmail.com",
  whatsapp: "221774180104",
  profileDriveId: "1Dc6GDXudqxJtNRClsU5vlEeo1RbmBMeP",
  coverDriveId: "",
};

const GH = "https://github.com/DaoudaKA/";

// Projets affichés. feature: true = grande carte mise en avant.
const PROJECTS = [
  {
    name: "Modern Data Platform",
    repo: "modern_data_platform",
    cat: "engineering",
    label: "Mémoire de Master",
    desc: "Plateforme de données moderne qui associe Data Lakehouse et Data Mesh : pipelines ELT avec dbt, orchestration avec Dagster et Airflow, intégration continue avec GitHub Actions. Une architecture scalable et gouvernée, soutenue en mai 2026.",
    stack: ["dbt", "Dagster", "Airflow", "Lakehouse", "Data Mesh", "GitHub Actions"],
    feature: true,
  },
  {
    name: "Détection de fraude Big Data",
    repo: "hadoop-spark-docker",
    cat: "engineering",
    label: "Data Engineering",
    desc: "Pipeline complet d'analyse de données financières : ingestion dans HDFS, traitement Spark SQL, orchestration et visualisation, le tout sous Docker.",
    stack: ["Hadoop", "Spark", "Kafka", "Airflow", "Superset"],
  },
  {
    name: "Cluster Big Data",
    repo: "Cluster-Big-Data",
    cat: "engineering",
    label: "Data Engineering",
    desc: "Un cluster Big Data autonome, entièrement configuré avec Docker Compose, prêt à être réutilisé dans tout projet d'ingénierie de données.",
    stack: ["Docker Compose", "Hadoop", "Spark"],
  },
  {
    name: "E-commerce Snowflake et dbt",
    repo: "ecommerce-snowflake-dbt-pipeline",
    cat: "engineering",
    label: "Data Engineering",
    desc: "Pipeline de données e-commerce de bout en bout : modélisation dans Snowflake, transformations dbt et restitution dans Power BI.",
    stack: ["Snowflake", "dbt", "Power BI"],
  },
  {
    name: "Data Vault",
    repo: "Project-Data-Vault-",
    cat: "engineering",
    label: "Modélisation",
    desc: "Modélisation d'un entrepôt de données selon la méthode Data Vault : hubs, liens et satellites.",
    stack: ["Data Vault", "SQL", "Python"],
  },
  {
    name: "PolluTrack",
    repo: "PolluTrack",
    cat: "engineering",
    label: "Data Engineering",
    desc: "Pipeline de surveillance environnementale : collecte de mesures de pollution et reporting automatisé.",
    stack: ["Python", "ETL", "Reporting"],
  },
  {
    name: "Projet ETL",
    repo: "Projet-ETL",
    cat: "engineering",
    label: "Data Engineering",
    desc: "Extraction, transformation et chargement de données vers un entrepôt, avec contrôles de qualité.",
    stack: ["ETL", "SQL", "Python"],
  },
  {
    name: "15 projets Data",
    repo: "Projets-Data-",
    cat: "ia",
    label: "Data Science",
    desc: "Quinze projets réalistes sur des données publiques et des API gratuites : churn, fraude, pricing, sentiment, énergie. Aucun jeu de données Titanic.",
    stack: ["Python", "Machine Learning", "API"],
  },
  {
    name: "Prédiction de l'attrition",
    repo: "projet-attrition-ml",
    cat: "ia",
    label: "Machine Learning",
    desc: "Prédiction du taux de départ des employés : analyse des données RH, entraînement et évaluation de modèles avec PyTorch.",
    stack: ["Python", "PyTorch", "Scikit-learn"],
  },
  {
    name: "NLP appliqué à la BI",
    repo: "NLP-an-BI-",
    cat: "ia",
    label: "NLP",
    desc: "Traitement du langage naturel au service de la Business Intelligence : analyse de sentiment sur des données textuelles non structurées.",
    stack: ["NLP", "Python", "Jupyter"],
  },
  {
    name: "Scraping et visualisation UEFA 2024",
    repo: "DK-Scrapping-et-Visualisation-UEFA-2024",
    cat: "bi",
    label: "Analyse de données",
    desc: "Collecte automatisée de données sur l'Euro 2024 en Python, puis visualisations interactives des performances.",
    stack: ["Python", "Web scraping", "Visualisation"],
  },
  {
    name: "Analyse des ventes 2019",
    repo: "Sales-Data-Analysis-2019",
    cat: "bi",
    label: "Analyse de données",
    desc: "Analyse exploratoire d'une année de données de ventes pour dégager les tendances et orienter les décisions commerciales.",
    stack: ["Python", "Pandas", "Jupyter"],
  },
  {
    name: "RH Perspectives",
    repo: "rh-perspectives",
    cat: "web",
    label: "Application web",
    desc: "Application de gestion de tâches où plusieurs utilisateurs collaborent autour d'un processus de validation simple.",
    stack: ["TypeScript", "Web"],
  },
  {
    name: "Formation JOJ",
    repo: "formation-joj",
    cat: "web",
    label: "Bootcamp AI Programming",
    desc: "Travaux réalisés pendant le bootcamp AI Programming des JOJ Dakar 2026 organisé par Artefact et Anthropic.",
    stack: ["TypeScript", "IA"],
  },
  {
    name: "DK Movies",
    repo: "Dk_movies",
    cat: "web",
    label: "Application mobile",
    desc: "Application mobile de catalogue de films développée en Dart.",
    stack: ["Dart", "Mobile"],
  },
];

/* ---------- Rendu des projets ---------- */
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const FLOW = `
  <ol class="flow" aria-label="Architecture : sources, ELT, Lakehouse, domaines, restitution">
    <li>Sources</li><li>ELT dbt</li><li>Lakehouse</li><li>Domaines Data Mesh</li><li>Tableaux de bord</li>
  </ol>`;
const grid = document.getElementById("projects");
grid.innerHTML = PROJECTS.map((p) => `
  <a class="project${p.feature ? " project--feature" : ""}" data-cat="${p.cat}" href="${GH}${p.repo}" target="_blank" rel="noopener">
    <p class="project__cat">${p.label}</p>
    <h3>${p.name}</h3>
    <p class="project__desc">${p.desc}</p>${p.feature ? FLOW : ""}
    <ul class="project__stack">${p.stack.map((s) => `<li>${s}</li>`).join("")}</ul>
    <span class="project__go">Voir le code ${arrow}</span>
  </a>`).join("");

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => { c.classList.remove("is-active"); c.setAttribute("aria-pressed", "false"); });
    chip.classList.add("is-active");
    chip.setAttribute("aria-pressed", "true");
    const f = chip.dataset.filter;
    grid.querySelectorAll(".project").forEach((el) => {
      el.classList.toggle("is-hidden", f !== "all" && el.dataset.cat !== f);
    });
  });
});

/* ---------- Liens configurables ---------- */
document.getElementById("driveLink").href = CONFIG.driveUrl;
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Photo de profil : repli sur les initiales ---------- */
const driveImg = (id, w) => `https://lh3.googleusercontent.com/d/${id}=w${w}`;

const avatar = document.getElementById("avatarImg");
const avatarSources = [
  CONFIG.profileDriveId && driveImg(CONFIG.profileDriveId, 600),
  "assets/profile.jpeg",
].filter(Boolean);
let avatarTry = 0;
avatar.addEventListener("error", () => {
  avatarTry++;
  if (avatarTry < avatarSources.length) avatar.src = avatarSources[avatarTry];
  else avatar.style.display = "none";
});
avatar.src = avatarSources[0];

if (CONFIG.coverDriveId) {
  const coverUrl = driveImg(CONFIG.coverDriveId, 1920);
  const probe = new Image();
  probe.onload = () => {
    document.querySelector(".cover__photo").style.backgroundImage = `url("${coverUrl}")`;
  };
  probe.src = coverUrl;
}

/* ---------- Navigation ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
});
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  links.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}));

// Lien actif selon la section visible
const sections = [...document.querySelectorAll("main section[id]")];
const navMap = new Map([...links.querySelectorAll("a")].map((a) => [a.getAttribute("href").slice(1), a]));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      navMap.forEach((a) => a.classList.remove("is-current"));
      navMap.get(e.target.id)?.classList.add("is-current");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => sectionObserver.observe(s));

/* ---------- Toast & copie ---------- */
const toast = document.getElementById("toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2200);
}
document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      showToast(btn.dataset.copy.includes("@") ? "Adresse e-mail copiée" : "Numéro copié");
    } catch {
      showToast(btn.dataset.copy);
    }
  });
});

/* ---------- Formulaire : e-mail ou WhatsApp ---------- */
const form = document.getElementById("contactForm");
const formError = document.getElementById("formError");
let via = "mail";
form.querySelectorAll("button[type=submit]").forEach((b) => b.addEventListener("click", () => (via = b.dataset.via)));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const org = form.org.value.trim();
  const msg = form.message.value.trim();
  if (!name || !msg) {
    formError.hidden = false;
    (name ? form.message : form.name).focus();
    return;
  }
  formError.hidden = true;
  const signature = org ? `${name} (${org})` : name;
  if (via === "whatsapp") {
    const text = `Bonjour Daouda, je suis ${signature}.\n\n${msg}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    showToast("WhatsApp s'ouvre avec votre message");
  } else {
    const subject = `Contact depuis votre portfolio : ${signature}`;
    window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg + "\n\n" + signature)}`;
    showToast("Votre messagerie s'ouvre avec le message");
  }
});

/* ---------- Ciel de données (couverture animée) ----------
   Des points de données dérivent de gauche à droite comme dans un
   pipeline, se relient quand ils sont proches et s'écartent du curseur. */
(function sky() {
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, dpr, points = [], mouse = { x: -999, y: -999 }, running = true;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(110, (w * h) / 9000));
    points = Array.from({ length: count }, () => spawn(Math.random() * w));
  }
  function spawn(x) {
    const lane = Math.random();
    return {
      x, y: h * (0.08 + lane * 0.84),
      base: h * (0.08 + lane * 0.84),
      v: 0.25 + Math.random() * 0.7,
      r: Math.random() < 0.12 ? 3.2 : 1.2 + Math.random() * 1.6,
      phase: Math.random() * Math.PI * 2,
    };
  }
  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    for (const p of points) {
      p.x += p.v;
      p.y = p.base + Math.sin(t / 1400 + p.phase + p.x / 160) * 14;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 120) { p.x += (dx / d) * 2.2; p.base += (dy / d) * 1.2; }
      if (p.x > w + 20) Object.assign(p, spawn(-20));
    }
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.strokeStyle = `rgba(255,255,255,${0.35 * (1 - d / 110)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const p of points) {
      ctx.fillStyle = p.r > 3 ? "#ffffff" : "rgba(255,255,255,.85)";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      if (p.r > 3) {
        ctx.strokeStyle = "rgba(255,255,255,.35)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 8, 0, Math.PI * 2); ctx.stroke();
      }
    }
    if (running && !reduce) requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", () => { resize(); if (reduce) frame(0); });
  const hero = document.querySelector(".hero");
  hero.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  hero.addEventListener("pointerleave", () => (mouse.x = mouse.y = -999));
  // Pause quand la couverture n'est plus visible
  new IntersectionObserver(([e]) => {
    const was = running; running = e.isIntersecting;
    if (running && !was && !reduce) requestAnimationFrame(frame);
  }).observe(canvas);
  requestAnimationFrame(frame);
})();
