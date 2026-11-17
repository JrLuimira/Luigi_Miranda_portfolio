"use strict";
(() => {
  const profile = window.PORTFOLIO;
  const translations = {
    es: {
      skip:"Saltar al contenido", navAbout:"Sobre mí", navExperience:"Trayectoria", navProjects:"Proyectos", navPosts:"Publicaciones",
      heroLabel:"INGENIERÍA · ROBÓTICA · IA", heroRole:"Ingeniería mecatrónica y sistemas inteligentes.", heroDescription:"Desarrollo soluciones que conectan la percepción, el software y la robótica con aplicaciones en el mundo real.",
      seeProjects:"Explorar proyectos", contact:"Contacto", aboutTitle:"De la percepción a la acción.",
      aboutText:"Mi enfoque está en la robótica y la visión artificial, integrando conocimientos de mecánica, electrónica y software para desarrollar sistemas capaces de percibir e interactuar con su entorno.",
      aboutText2:"Me interesa investigar y aplicar inteligencia artificial, percepción visual y sistemas autónomos en desafíos de ingeniería.",
      experienceTitle:"Formación y experiencia.", experienceSubtitle:"Mi recorrido académico y profesional.", education:"Formación académica", professional:"Experiencia profesional",
      projectsTitle:"Proyectos en movimiento.", projectsSubtitle:"Explora los proyectos, demostraciones y resultados de mi trabajo.", projectLink:"Ver proyecto",
      allProjects:"Todos", video:"Vídeo", photo:"Foto", mediaPending:"Contenido multimedia próximamente", mediaLoading:"Cargando multimedia…", expandPhoto:"Ampliar foto", closePhoto:"Cerrar foto", mediaCategory:"Multimedia", projectCategories:"Categorías de proyectos",
      postsTitle:"Actividad y publicaciones.", postsSubtitle:"Investigación, aprendizajes y avances compartidos en LinkedIn.",
      postsEmpty:"Próximamente, nuevas publicaciones.", postsEmptyText:"Aquí podrás explorar mis aportes y actualizaciones en LinkedIn.",
      contactTitle:"Construyamos algo interesante.", contactText:"Abierto a oportunidades de colaboración, investigación y desarrollo en robótica e inteligencia artificial.",
      contactEmpty:"Enlaces de contacto próximamente.", backTop:"Volver arriba ↑", cv:"Descargar CV", email:"Correo electrónico", menuOpen:"Abrir menú", menuClose:"Cerrar menú"
    },
    en: {
      skip:"Skip to content", navAbout:"About me", navExperience:"Background", navProjects:"Projects", navPosts:"Publications",
      heroLabel:"ENGINEERING · ROBOTICS · AI", heroRole:"Mechatronics engineering and intelligent systems.", heroDescription:"Developing solutions that connect perception, software and robotics with real-world applications.",
      seeProjects:"Explore projects", contact:"Contact", aboutTitle:"From perception to action.",
      aboutText:"My focus is robotics and computer vision, combining mechanical, electronic and software engineering to develop systems capable of perceiving and interacting with their environment.",
      aboutText2:"I am interested in researching and applying artificial intelligence, visual perception and autonomous systems to engineering challenges.",
      experienceTitle:"Education & experience.", experienceSubtitle:"My academic and professional journey.", education:"Education", professional:"Professional experience",
      projectsTitle:"Projects in motion.", projectsSubtitle:"Explore my projects, demonstrations and results.", projectLink:"View project",
      allProjects:"All", video:"Video", photo:"Photo", mediaPending:"Multimedia coming soon", mediaLoading:"Loading media…", expandPhoto:"Enlarge photo", closePhoto:"Close photo", mediaCategory:"Media", projectCategories:"Project categories",
      postsTitle:"Activity & publications.", postsSubtitle:"Research, insights and progress shared on LinkedIn.",
      postsEmpty:"New publications coming soon.", postsEmptyText:"Explore my contributions and updates on LinkedIn here.",
      contactTitle:"Let's build something interesting.", contactText:"Open to opportunities to collaborate, research and develop solutions in robotics and artificial intelligence.",
      contactEmpty:"Contact links coming soon.", backTop:"Back to top ↑", cv:"Download CV", email:"Email", menuOpen:"Open menu", menuClose:"Close menu"
    }
  };
  const $ = id => document.getElementById(id);
  let language = "es";
  try { if (localStorage.getItem("portfolio-language") === "en") language = "en"; } catch {}
  const tr = value => typeof value === "string" ? value : value?.[language] || value?.es || "";
  const t = key => translations[language][key];
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  function validExternal(url) {
    try { return new URL(url).protocol === "https:"; } catch { return false; }
  }
  function link(label, url, external = true) {
    const a = element("a", "", label);
    a.href = url;
    if (external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function tags(values) {
    const container = element("div", "skills");
    for (const value of values || []) container.append(element("span", "tag", value));
    return container;
  }
  function timeline(id, entries) {
    $(id).replaceChildren(...entries.map(entry => {
      const article = element("article", "timeline-item");
      article.append(element("div","date",tr(entry.date)), element("h4","",tr(entry.title)), element("div","meta",tr(entry.institution)), element("p","",tr(entry.description)));
      return article;
    }));
  }
  const drawings = {
    robot: '<path d="M40 122h160M80 122V86l34-50 48 20 24 29" fill="none" stroke="#214c4b" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><g fill="#abccbc" stroke="#214c4b" stroke-width="3"><circle cx="80" cy="86" r="9"/><circle cx="114" cy="36" r="10"/><circle cx="162" cy="56" r="8"/></g><path d="m181 77 13 12m-9-16 12 1m-8 8 3 13" stroke="#214c4b" stroke-width="3" fill="none"/><path d="M203 52v50H154" stroke="#589c88" stroke-dasharray="5 5" fill="none"/>',
    vision: '<rect x="36" y="22" width="168" height="104" rx="6" stroke="#507f74" fill="none" stroke-width="2"/><path d="M50 106 92 62l27 24 35-44 34 64Z" fill="#abc9b7"/><path d="M90 97c-9-17 2-29 17-34 7-10 19-7 24 0 22 2 29 18 14 30-8 9-20 6-29 4Z" fill="#477d6e"/><rect x="83" y="53" width="73" height="53" rx="2" stroke="#245449" stroke-width="2" fill="none" stroke-dasharray="4 3"/><path d="M83 64V53h12m50 0h11v11m-73 31v11h12m50 0h11V95" stroke="#245449" fill="none" stroke-width="3"/><circle cx="172" cy="43" r="9" fill="#8aba9d"/>',
    dataset: '<g stroke="#427769" stroke-width="2" fill="#c2d9c9"><rect x="38" y="31" width="63" height="48" rx="4"/><rect x="50" y="43" width="63" height="48" rx="4"/><rect x="62" y="55" width="63" height="48" rx="4"/><path d="m72 91 14-19 11 12 12-7 8 14Z" fill="#659987"/><rect x="153" y="48" width="50" height="55" rx="5"/></g><path d="M131 76h17m-5-5 5 5-5 5" stroke="#245449" stroke-width="2" fill="none"/><g fill="#507f74"><rect x="164" y="60" width="27" height="4" rx="2"/><rect x="164" y="70" width="20" height="4" rx="2"/><rect x="164" y="80" width="27" height="4" rx="2"/><rect x="164" y="90" width="15" height="4" rx="2"/></g>'
  };
  let activeProject = "all";
  const selectedMedia = new Map();
  function validMedia(src) {
    return typeof src === "string" && (validExternal(src) || /^assets\/[\w./-]+$/.test(src));
  }
  function openPhoto(src, alt) {
    $("media-full").src = src;
    $("media-full").alt = alt;
    $("media-dialog").showModal();
  }
  $("media-close").addEventListener("click",()=> $("media-dialog").close());
  $("media-dialog").addEventListener("click",event=>{
    if (event.target === $("media-dialog")) $("media-dialog").close();
  });
  $("media-dialog").addEventListener("close",()=> $("media-full").removeAttribute("src"));
  function renderMedia(project, index) {
    const gallery = element("div","project-gallery");
    const stage = element("div","project-art media-stage");
    const fallback = element("div","media-placeholder");
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox","0 0 240 145");
    svg.setAttribute("aria-hidden","true");
    svg.innerHTML = drawings[project.art] || drawings.dataset;
    const status = element("span","media-caption",t("mediaPending"));
    fallback.append(svg,status);
    stage.append(fallback);
    const number = element("span","project-index",String(index + 1).padStart(2,"0"));
    stage.append(number);
    const options = (project.media || []).filter(item=>validMedia(item.src) && ["video","image"].includes(item.type));
    const toolbar = element("div","media-toolbar");
    toolbar.setAttribute("aria-label",t("mediaCategory"));
    let currentNode = null;
    let currentToken = 0;
    function choose(optionIndex) {
      if (currentNode) {
        const videos = currentNode.matches("video") ? [currentNode] : currentNode.querySelectorAll("video");
        for (const video of videos) { video.pause(); video.removeAttribute("src"); video.load(); }
        currentNode.remove(); currentNode=null;
      }
      const token = ++currentToken;
      selectedMedia.set(project.id,optionIndex);
      [...toolbar.children].forEach((btn,i)=>btn.setAttribute("aria-pressed",String(i===optionIndex)));
      fallback.hidden=false;
      number.hidden=false;
      status.textContent=t("mediaLoading");
      const option = options[optionIndex];
      if (!option) { status.textContent=t("mediaPending"); return; }
      function fail() {
        if (token!==currentToken) return;
        if (currentNode) currentNode.hidden=true;
        fallback.hidden=false; number.hidden=false;
        status.textContent=t("mediaPending");
      }
      function ready() {
        if (token!==currentToken) return;
        currentNode.hidden=false;
        fallback.hidden=true; number.hidden=true;
      }
      if (option.type === "video") {
        const video = element("video","project-video");
        video.controls=true; video.playsInline=true; video.preload="metadata";
        video.hidden=true; video.setAttribute("aria-label",tr(project.title)+" — "+t("video"));
        video.addEventListener("loadedmetadata",ready,{once:true});
        video.addEventListener("error",fail,{once:true});
        currentNode=video; stage.append(video); video.src=option.src;
      } else {
        const photo = element("button","project-photo-button");
        photo.type="button"; photo.hidden=true;
        photo.setAttribute("aria-label",t("expandPhoto")+" — "+tr(project.title));
        const img=element("img","project-photo");
        img.alt=tr(option.alt)||tr(project.title);
        img.addEventListener("load",ready,{once:true});
        img.addEventListener("error",fail,{once:true});
        photo.append(img,element("span","photo-zoom","＋"));
        photo.addEventListener("click",()=>openPhoto(option.src,img.alt));
        currentNode=photo; stage.append(photo); img.src=option.src;
      }
    }
    let imageNumber = 0;
    options.forEach((option,i)=>{
      const button=element("button","media-tab",option.type==="video"?"▶ "+t("video"):t("photo")+" "+(++imageNumber));
      button.type="button"; button.setAttribute("aria-pressed","false");
      button.addEventListener("click",()=>choose(i));
      toolbar.append(button);
    });
    gallery.append(stage);
    if(options.length) gallery.append(toolbar);
    choose(Math.min(selectedMedia.get(project.id)||0, Math.max(0,options.length-1)));
    return gallery;
  }
  function renderFilters() {
    const filters=$("project-filters");
    filters.setAttribute("aria-label",t("projectCategories"));
    const items=[{id:"all",filter:t("allProjects")}, ...profile.projects];
    filters.replaceChildren(...items.map(item=>{
      const button=element("button","project-filter",tr(item.filter||item.title));
      button.type="button"; button.setAttribute("aria-pressed",String(activeProject===item.id));
      button.addEventListener("click",()=>{
        activeProject=item.id;
        [...filters.children].forEach((btn,i)=>btn.setAttribute("aria-pressed",String(items[i].id===activeProject)));
        renderProjects();
      });
      return button;
    }));
  }
  function renderProjects() {
    // Stop playback before filtering or changing the language.
    $("project-list").querySelectorAll("video").forEach(video=>video.pause());
    $("project-list").replaceChildren(...profile.projects.map((project,index) => ({project,index}))
      .filter(({project})=>activeProject==="all"||project.id===activeProject).map(({project,index}) => {
      const card = element("article","project-card");
      card.id="project-"+project.id;
      const art=renderMedia(project,index);
      const body = element("div","project-body");
      body.append(element("div","project-category",tr(project.category)),element("h3","",tr(project.title)),element("p","",tr(project.description)),tags(project.tags));
      if (validExternal(project.url)) {
        const a = link((project.url.includes("linkedin.com")?"LinkedIn":t("projectLink"))+" →",project.url);
        a.className = "project-link"; body.append(a);
      }
      card.append(art,body); return card;
    }));
  }
  function renderPosts() {
    const posts = profile.posts.filter(post => validExternal(post.url));
    const container = $("post-list");
    if (!posts.length) {
      const empty = element("div","post-empty");
      const copy = element("div");
      copy.append(element("strong","",t("postsEmpty")),element("p","",t("postsEmptyText")));
      empty.append(element("span","linkedin-icon","in"),copy);
      container.replaceChildren(empty); return;
    }
    container.replaceChildren(...posts.map(post => {
      const a = link("",post.url);
      a.className = "post";
      const copy = element("div");
      if (post.date) {
        const date = new Date(post.date + "T12:00:00Z");
        copy.append(element("div","date",Number.isNaN(date.getTime()) ? post.date : date.toLocaleDateString(language==="es"?"es-EC":"en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})));
      }
      copy.append(element("h3","",tr(post.title)),element("p","",tr(post.description)));
      a.append(element("span","linkedin-icon","in"),copy,element("span","post-arrow","→"));
      return a;
    }));
  }
  function renderContact() {
    const links = [];
    const {linkedin, github, email, cv} = profile.social;
    if (validExternal(linkedin)) links.push(link("LinkedIn →",linkedin));
    if (validExternal(github)) links.push(link("GitHub →",github));
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) links.push(link(t("email")+" →","mailto:"+email,false));
    if (cv && (validExternal(cv) || /^assets\/[\w./-]+\.pdf$/i.test(cv))) links.push(link(t("cv")+" →",cv));
    $("contact-links").replaceChildren(...(links.length ? links : [element("p","contact-placeholder",t("contactEmpty"))]));
  }
  const toggle = document.querySelector(".menu-toggle");
  const nav = $("navigation");
  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
    toggle.setAttribute("aria-label",t("menuOpen"));
  }
  function render() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(node => node.textContent = t(node.dataset.i18n));
    $("language").textContent = language==="es"?"EN":"ES";
    $("language").setAttribute("aria-label",language==="es"?"Switch to English":"Cambiar a español");
    toggle.setAttribute("aria-label",t(nav.classList.contains("open")?"menuClose":"menuOpen"));
    $("skills").replaceChildren(...profile.skills.map(skill=>element("span","tag",skill)));
    timeline("education-list",profile.education);
    timeline("experience-list",profile.experience);
    renderFilters(); renderProjects(); renderPosts(); renderContact();
    $("media-close").setAttribute("aria-label",t("closePhoto"));
    $("year").textContent = new Date().getFullYear();
  }
  $("language").addEventListener("click", () => {
    language = language==="es"?"en":"es";
    try { localStorage.setItem("portfolio-language",language); } catch {}
    render();
  });
  toggle.addEventListener("click", () => {
    if (nav.classList.contains("open")) closeMenu();
    else { nav.classList.add("open"); toggle.setAttribute("aria-expanded","true"); toggle.setAttribute("aria-label",t("menuClose")); }
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu();});
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries=>{
      for(const entry of entries) if(entry.isIntersecting) {
        nav.querySelectorAll("a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
      }
    },{rootMargin:"-15% 0px -65% 0px"});
    document.querySelectorAll("main section").forEach(section=>observer.observe(section));
  }
  render();
  const portrait=$("profile-photo");
  if (validMedia(profile.photo)) {
    portrait.addEventListener("load",()=>portrait.hidden=false,{once:true});
    portrait.addEventListener("error",()=>portrait.hidden=true,{once:true});
    portrait.src=profile.photo;
  }
})();
