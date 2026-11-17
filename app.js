"use strict";
(()=>{
  const p=window.PORTFOLIO,$=id=>document.getElementById(id);
  const strings={
    en:{skip:"Skip to content",education:"Education",projects:"Projects",research:"Research",background:"Background",contact:"Contact me",hello:"hello_world",heroRole:"Mechatronics Engineer",heroDesc:"Building systems that perceive, learn and interact with the real world.",explore:"Explore my work",scroll:"SCROLL TO EXPLORE",introTitle:"Hello, world. I'm Luigi.",introLead:"A mechatronics engineer and researcher working at the intersection of robotics, computer vision and artificial intelligence.",introText:"My background spans robot navigation, software development, physical robot systems and AI research.",viewCV:"Read my CV →",educationTitle:"Education.",educationSubtitle:"The engineering foundation behind my work.",projectsTitle:"Projects.",projectsSubtitle:"Robotics, software and perception — demonstrated through my work.",researchTitle:"Research.",researchSubtitle:"Investigating how AI and perception can enable more capable robotic systems.",backgroundTitle:"Background.",backgroundSubtitle:"Professional experience across research, robotics and industrial technology.",contactTitle:"Let's build something.",contactText:"I'm open to opportunities, research collaboration and projects in robotics, software and artificial intelligence.",updates:"Research updates & publications",updatesText:"Follow my work and technical updates on LinkedIn.",all:"All projects",video:"Video",photo:"Photo",mediaPending:"MEDIA COMING SOON",loading:"LOADING MEDIA...",enlarge:"Enlarge photo",close:"Close photo",openMenu:"Open menu",closeMenu:"Close menu",email:"Email",cv:"Download CV / PDF",post:"LinkedIn activity",projectLink:"View project",back:"Back to top ↑",pause:"Pause showreel",play:"Play showreel"},
    es:{skip:"Saltar al contenido",education:"Educación",projects:"Proyectos",research:"Investigación",background:"Trayectoria",contact:"Contacto",hello:"hola_mundo",heroRole:"Ingeniero Mecatrónico",heroDesc:"Desarrollo sistemas capaces de percibir, aprender e interactuar con el mundo real.",explore:"Explorar mi trabajo",scroll:"DESLIZA PARA EXPLORAR",introTitle:"Hola, mundo. Soy Luigi.",introLead:"Ingeniero mecatrónico e investigador en la intersección de la robótica, visión artificial e inteligencia artificial.",introText:"Mi experiencia abarca navegación robótica, desarrollo de software, sistemas robóticos físicos e investigación de IA.",viewCV:"Leer mi CV →",educationTitle:"Educación.",educationSubtitle:"La formación de ingeniería detrás de mi trabajo.",projectsTitle:"Proyectos.",projectsSubtitle:"Robótica, software y percepción, demostrados a través de mi trabajo.",researchTitle:"Investigación.",researchSubtitle:"Investigando cómo la IA y la percepción pueden habilitar robots más capaces.",backgroundTitle:"Trayectoria.",backgroundSubtitle:"Experiencia profesional en investigación, robótica y tecnología industrial.",contactTitle:"Construyamos algo.",contactText:"Estoy abierto a oportunidades, colaboraciones de investigación y proyectos de robótica, software e inteligencia artificial.",updates:"Actualizaciones y publicaciones",updatesText:"Sigue mi trabajo y novedades técnicas en LinkedIn.",all:"Todos",video:"Vídeo",photo:"Foto",mediaPending:"MULTIMEDIA PRÓXIMAMENTE",loading:"CARGANDO MULTIMEDIA...",enlarge:"Ampliar foto",close:"Cerrar foto",openMenu:"Abrir menú",closeMenu:"Cerrar menú",email:"Correo electrónico",cv:"Descargar CV / PDF",post:"Actividad en LinkedIn",projectLink:"Ver proyecto",back:"Volver arriba ↑",pause:"Pausar vídeo",play:"Reproducir vídeo"}
  };
  let language="en",active="all";
  try{if(localStorage.getItem("luigi-portfolio-language")==="es")language="es"}catch{}
  const t=k=>strings[language][k],tr=v=>typeof v==="string"?v:(v?.[language]??v?.en??"");
  function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node}
  function external(src){try{return new URL(src).protocol==="https:"}catch{return false}}
  function mediaPath(src){return typeof src==="string"&&(external(src)||/^assets\/[\w./-]+$/.test(src))}
  function link(label,url,tab=true){const a=el("a","",label);a.href=url;if(tab){a.target="_blank";a.rel="noopener noreferrer"}return a}
  function tags(values,cls="tags"){const wrap=el("div",cls);for(const item of values||[])wrap.append(el("span","tag",item));return wrap}
  function education(){ $("education-list").replaceChildren(...p.education.map(item=>{
    const row=el("article","education-row"),info=el("div");
    info.append(el("h3","",tr(item.title)),el("div","institution",tr(item.institution)),el("div","location",item.location),el("p","",tr(item.description)),tags(item.tags));
    row.append(el("div","date",tr(item.date)),info);return row
  })) }
  function experience(){ $("experience-list").replaceChildren(...p.experience.map(item=>{
    const row=el("article","experience-row"),info=el("div"),list=el("ul");
    for(const bullet of item.bullets[language]||item.bullets.en)list.append(el("li","",bullet));
    info.append(el("h3","",tr(item.title)),el("div","institution",tr(item.institution)),el("div","location",item.location),list,tags(item.tags));row.append(el("div","date",tr(item.date)),info);return row
  })) }
  function research(){ $("research-list").replaceChildren(...p.research.map(item=>{
    const c=el("article","research-card");c.append(el("div","eyebrow","[RESEARCH_" + item.id + "]"),el("h3","",tr(item.title)),el("p","",tr(item.description)),tags(item.tags));return c
  })) }
  const selected=new Map();
  const dialog=$("media-dialog");
  $("media-close").onclick=()=>dialog.close();
  dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
  dialog.addEventListener("close",()=> $("media-full").removeAttribute("src"));
  function photoDialog(src,alt){$("media-full").src=src;$("media-full").alt=alt;dialog.showModal()}
  function gallery(project,index){
    const wrapper=el("div","gallery"),stage=el("div","media-stage"),empty=el("div","media-empty"),status=el("small","",t("mediaPending")),number=el("span","media-index","PROJECT / "+String(index+1).padStart(2,"0")),toolbar=el("div","media-tabs");
    empty.append(el("span","mark","[ "+tr(project.filter)+" ]"),status);stage.append(empty,number);
    const options=(project.media||[]).filter(x=>mediaPath(x.src)&&["video","image"].includes(x.type));
    let current=null,token=0;
    function choose(i){
      const now=++token;
      if(current){if(current.tagName==="VIDEO"){current.pause();current.removeAttribute("src");current.load()}current.remove();current=null}
      selected.set(project.id,i);[...toolbar.children].forEach((b,j)=>b.setAttribute("aria-pressed",String(i===j)));
      empty.hidden=false;number.hidden=false;status.textContent=t("loading");
      const item=options[i];if(!item){status.textContent=t("mediaPending");return}
      function ready(){if(now!==token)return;current.hidden=false;empty.hidden=true;number.hidden=true}
      function fail(){if(now!==token)return;current.hidden=true;empty.hidden=false;number.hidden=false;status.textContent=t("mediaPending")}
      if(item.type==="video"){
        const v=el("video","project-video");v.controls=true;v.playsInline=true;v.preload="metadata";v.hidden=true;v.setAttribute("aria-label",tr(project.title)+" — "+t("video"));current=v;stage.append(v);
        v.addEventListener("loadedmetadata",ready,{once:true});v.addEventListener("error",fail,{once:true});v.src=item.src
      }else{
        const b=el("button","photo-button"),img=el("img");b.type="button";b.hidden=true;img.alt=tr(item.alt)||tr(project.title);b.setAttribute("aria-label",t("enlarge")+" — "+tr(project.title));b.append(img,el("span","zoom","+"));current=b;stage.append(b);
        img.addEventListener("load",ready,{once:true});img.addEventListener("error",fail,{once:true});b.onclick=()=>photoDialog(item.src,img.alt);img.src=item.src
      }
    }
    let n=0;options.forEach((item,i)=>{const b=el("button","media-tab",item.type==="video"?"▶ "+t("video"):t("photo")+" "+(++n));b.type="button";b.onclick=()=>choose(i);toolbar.append(b)});
    wrapper.append(stage);if(options.length)wrapper.append(toolbar);choose(Math.min(selected.get(project.id)||0,Math.max(0,options.length-1)));return wrapper
  }
  function projects(){
    $("project-list").querySelectorAll("video").forEach(v=>v.pause());
    $("project-list").replaceChildren(...p.projects.map((project,index)=>({project,index})).filter(({project})=>active==="all"||project.id===active).map(({project,index})=>{
      const card=el("article","project-card"),body=el("div","project-body");card.id="project-"+project.id;
      body.append(el("div","project-kicker",tr(project.category)),el("h3","",tr(project.title)),el("p","",tr(project.description)),tags(project.tags));
      if(external(project.url)){const a=link((project.url.includes("linkedin.com")?"LinkedIn":t("projectLink"))+" →",project.url);a.className="project-link";body.append(a)}
      card.append(gallery(project,index),body);return card
    }))
  }
  function filters(){
    const items=[{id:"all",filter:t("all")},...p.projects],wrap=$("project-filters");
    wrap.replaceChildren(...items.map(item=>{const b=el("button","filter",tr(item.filter));b.type="button";b.setAttribute("aria-pressed",String(active===item.id));b.onclick=()=>{active=item.id;[...wrap.children].forEach((button,i)=>button.setAttribute("aria-pressed",String(items[i].id===active)));projects()};return b}))
  }
  function posts(){ $("post-list").replaceChildren(...p.posts.filter(x=>external(x.url)).map(item=>{
    const a=link("",item.url),copy=el("div");a.className="post";copy.append(el("h4","",tr(item.title)),el("p","",tr(item.description)));a.append(el("span","linkedin-mark","in"),copy,el("span","arrow","→"));return a
  })) }
  function contact(){
    const s=p.social,items=[];
    if(s.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email))items.push([s.email,"mailto:"+s.email,false]);
    if(external(s.linkedin))items.push(["LinkedIn",s.linkedin,true]);else if(p.posts?.length&&external(p.posts[0].url))items.push([t("post"),p.posts[0].url,true]);
    if(external(s.github))items.push(["GitHub",s.github,true]);
    if(mediaPath(s.cv))items.push([t("cv"),s.cv,true]);
    $("contact-links").replaceChildren(...items.map(([label,url,newTab])=>{const a=link("",url,newTab);a.append(el("span","",label),el("span","","→"));return a}))
  }
  const nav=$("navigation"),menu=$("menu-toggle");
  function closeMenu(){nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label",t("openMenu"))}
  menu.onclick=()=>{if(nav.classList.contains("open"))closeMenu();else{nav.classList.add("open");menu.setAttribute("aria-expanded","true");menu.setAttribute("aria-label",t("closeMenu"))}};
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenu()});
  const hero=$("hero-video"),heroPoster=$("hero-poster"),heroButton=$("video-toggle");
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
  let userPaused=reduced.matches;
  function syncVideoButton(){heroButton.textContent=hero.paused?"▶":"Ⅱ";heroButton.setAttribute("aria-label",hero.paused?t("play"):t("pause"))}
  if(mediaPath(p.hero?.poster)){heroPoster.addEventListener("load",()=>heroPoster.hidden=false,{once:true});heroPoster.addEventListener("error",()=>heroPoster.hidden=true,{once:true});heroPoster.src=p.hero.poster}
  if(mediaPath(p.hero?.video)){
    hero.autoplay=!userPaused;hero.muted=true;hero.playsInline=true;
    hero.addEventListener("loadedmetadata",()=>{heroButton.hidden=false;syncVideoButton();if(!userPaused)hero.play().catch(()=>{})},{once:true});
    hero.addEventListener("loadeddata",()=>hero.hidden=false,{once:true});
    hero.addEventListener("error",()=>{hero.hidden=true;heroButton.hidden=true},{once:true});
    hero.addEventListener("play",syncVideoButton);hero.addEventListener("pause",syncVideoButton);
    heroButton.onclick=()=>{if(hero.paused){userPaused=false;hero.play().catch(()=>{})}else{userPaused=true;hero.pause()}};
    hero.src=p.hero.video;
    if("IntersectionObserver"in window)new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)hero.pause();else if(!userPaused&&hero.readyState>=2)hero.play().catch(()=>{})}).observe($("home"));
  }
  if(mediaPath(p.photo))$("profile-photo").src=p.photo;
  function render(){document.documentElement.lang=language;document.querySelectorAll("[data-t]").forEach(n=>n.textContent=t(n.dataset.t));$("language").textContent=language==="en"?"ES":"EN";$("language").setAttribute("aria-label",language==="en"?"Cambiar a español":"Switch to English");$("media-close").setAttribute("aria-label",t("close"));syncVideoButton();$("skills").replaceChildren(...p.skills.map(x=>el("span","tag",x)));education();filters();projects();research();experience();posts();contact();$("year").textContent=new Date().getFullYear()}
  $("language").onclick=()=>{language=language==="en"?"es":"en";try{localStorage.setItem("luigi-portfolio-language",language)}catch{}render()};
  if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){nav.querySelectorAll("a").forEach(a=>a.classList.toggle("active",a.hash==="#"+entry.target.id))}},{rootMargin:"-15% 0px -65% 0px"});document.querySelectorAll("main section").forEach(section=>observer.observe(section))}
  render();
})();
