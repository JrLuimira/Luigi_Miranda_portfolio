/* EDIT YOUR PORTFOLIO HERE. Media paths are relative to the repository root. */
window.PORTFOLIO = {
  hero:{video:"assets/hero/banner.mp4",poster:"assets/hero/poster.jpg"},
  photo:"assets/profile.png",
  social:{email:"mirandaluigi123@gmail.com",linkedin:"",github:"",cv:"assets/cv.pdf"},
  skills:["Python","C","C++","ROS 2","OMPL","Gazebo","RViz","Computer Vision","VLM / VLA"],
  education:[{
    date:"2020 — 2026",title:{en:"Mechatronics Engineering",es:"Ingeniería Mecatrónica"},
    institution:"Escuela Superior Politécnica del Litoral (ESPOL)",location:"Guayaquil, Ecuador",
    description:{en:"Engineering training across mechanics, electronics, programming and control systems, with a focus on social and industrial robotics and robot navigation.",es:"Formación en mecánica, electrónica, programación y control, con enfoque en robótica social e industrial y navegación robótica."},
    tags:["EQF Level 6","Robotics","Control","Automation"]
  }],
  projects:[
    {id:"walter",filter:"WALTER",category:{en:"Engineering project",es:"Proyecto de ingeniería"},title:"WALTER",
      description:{en:"Explore the WALTER project and its original demonstration on LinkedIn.",es:"Conoce el proyecto WALTER y su demostración original en LinkedIn."},tags:["Robotics"],
      url:"https://www.linkedin.com/feed/update/urn:li:activity:7504664035754221568/",
      media:[{type:"video",src:"assets/walter/demo.mp4"},{type:"image",src:"assets/walter/photo-1.jpg"},{type:"image",src:"assets/walter/photo-2.jpg"}]},
    {id:"so101",filter:"SO-101",category:{en:"Physical AI",es:"IA física"},title:"SO-101 / Physical AI",
      description:{en:"Leader–follower manipulator calibration and teleoperation with ROS 2 and LeRobot, exploring physical robot control.",es:"Calibración y teleoperación de manipuladores leader–follower con ROS 2 y LeRobot, explorando el control de robots físicos."},tags:["ROS 2","LeRobot","Manipulation"],url:"",
      media:[{type:"video",src:"assets/so101/demo.mp4"},{type:"image",src:"assets/so101/photo-1.jpg"},{type:"image",src:"assets/so101/photo-2.jpg"}]},
    {id:"cod",filter:"COD",category:{en:"Computer vision",es:"Visión artificial"},title:"Camouflaged Object Detection",
      description:{en:"Exploring detection and segmentation methods for objects that blend into their surroundings.",es:"Exploración de métodos de detección y segmentación de objetos que se confunden con su entorno."},tags:["Computer Vision","Segmentation","Deep Learning"],url:"",
      media:[{type:"video",src:"assets/cod/demo.mp4"},{type:"image",src:"assets/cod/photo-1.jpg"},{type:"image",src:"assets/cod/photo-2.jpg"}]},
    {id:"synthetic",filter:{en:"Synthetic Data",es:"Datos sintéticos"},category:{en:"Data / AI",es:"Datos / IA"},title:{en:"Synthetic Data for Perception",es:"Datos sintéticos para percepción"},
      description:{en:"Creating and preparing synthetic datasets to support training and evaluation of visual perception models.",es:"Creación y preparación de datos sintéticos para apoyar el entrenamiento y evaluación de modelos de percepción visual."},tags:["Python","Datasets","AI"],url:"",
      media:[{type:"video",src:"assets/synthetic/demo.mp4"},{type:"image",src:"assets/synthetic/photo-1.jpg"},{type:"image",src:"assets/synthetic/photo-2.jpg"}]}
  ],
  research:[
    {id:"01",title:{en:"Visual Perception",es:"Percepción visual"},description:{en:"Computer vision and artificial intelligence algorithms, with interests in camouflaged object detection and image segmentation.",es:"Algoritmos de visión artificial e IA, con interés en detección de objetos camuflados y segmentación."},tags:["COD","Computer Vision","Segmentation"]},
    {id:"02",title:{en:"Embodied AI",es:"IA incorporada"},description:{en:"Testing vision-language and vision-language-action models for robotic manipulators.",es:"Pruebas de modelos visión-lenguaje y visión-lenguaje-acción para manipuladores robóticos."},tags:["VLM","VLA","Manipulation"]},
    {id:"03",title:{en:"Robot Navigation",es:"Navegación robótica"},description:{en:"Exploring sampling-based motion planning methods with OMPL and robot navigation simulations in ROS 2, Gazebo and RViz.",es:"Exploración de métodos de planificación basados en muestreo con OMPL y simulación de navegación con ROS 2, Gazebo y RViz."},tags:["OMPL","ROS 2","Motion Planning"]},
    {id:"04",title:{en:"Training Data",es:"Datos de entrenamiento"},description:{en:"Building datasets for training different AI models and keeping up with emerging research.",es:"Creación de datasets para entrenar diferentes modelos de IA y seguimiento de nuevas investigaciones."},tags:["Datasets","AI Research"]}
  ],
  experience:[
    {date:{en:"Jan 2026 — Present",es:"Ene 2026 — Actualidad"},title:{en:"Research Engineer",es:"Ingeniero de investigación"},institution:"ESPOL",location:"Guayaquil, Ecuador",
      bullets:{en:["Research computer vision and AI algorithms.","Test VLM and VLA models for robotic manipulators.","Create training datasets and mentor students in robotics projects."],es:["Investigación de algoritmos de visión artificial e IA.","Pruebas con modelos VLM y VLA para manipuladores.","Creación de datasets y orientación a estudiantes en proyectos de robótica."]},tags:["AI","Computer Vision","Robotics"]},
    {date:{en:"Sep 2025 — Jan 2026",es:"Sep 2025 — Ene 2026"},title:{en:"Administrative Assistant",es:"Asistente administrativo"},institution:"Siemens",location:"Guayaquil, Ecuador",
      bullets:{en:["Supported project managers and service operations.","Maintained product data using Power BI and Excel.","Provided technical customer support, IT assistance and coordination with headquarters in Germany."],es:["Apoyo a gestores de proyectos y operaciones de servicio.","Gestión de datos de productos con Power BI y Excel.","Soporte técnico a clientes, soporte IT y coordinación con la sede en Alemania."]},tags:["Power BI","Excel","Project support"]},
    {date:{en:"Jan 2025 — May 2025",es:"Ene 2025 — May 2025"},title:{en:"Technical Assistant",es:"Asistente técnico"},institution:"University of Cardiff",location:"Ecuador",
      bullets:{en:["Tested sampling-based robot navigation methods using OMPL.","Programmed in Python and C.","Simulated robot navigation in ROS 2 with Gazebo and RViz; reviewed scientific literature."],es:["Pruebas de métodos de navegación basados en muestreo con OMPL.","Programación en Python y C.","Simulación de navegación en ROS 2 con Gazebo y RViz; revisión de literatura científica."]},tags:["OMPL","Python","C","ROS 2"]}
  ],
  posts:[
    {title:{en:"LinkedIn update",es:"Publicación en LinkedIn"},description:{en:"Read the original post.",es:"Consulta la publicación original."},url:"https://www.linkedin.com/feed/update/urn:li:activity:7520899938046623744/"},
    {title:"WALTER",description:{en:"Original project update.",es:"Publicación original del proyecto."},url:"https://www.linkedin.com/feed/update/urn:li:activity:7504664035754221568/"}
  ]
};
