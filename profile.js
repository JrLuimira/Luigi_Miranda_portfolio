/* Edita este archivo para actualizar el portafolio. No necesitas modificar app.js.
   Deja las URLs vacías si aún no las tienes. Los enlaces vacíos se ocultan. */
window.PORTFOLIO = {
  // Foto personal real (opcional): guarda el archivo en assets/profile.jpg.
  photo: "assets/profile.jpg",
  social: {
    linkedin: "", // https://www.linkedin.com/in/TU-USUARIO/
    github: "",   // https://github.com/TU-USUARIO
    email: "",    // tu-correo@ejemplo.com
    cv: ""        // assets/cv.pdf (si subes tu CV a esa carpeta)
  },
  skills: ["ROS 2", "Python", "C++", "Computer Vision", "MoveIt 2", "Deep Learning", "Gazebo", "RViz"],
  education: [
    {
      date: "2026",
      title: { es: "Ingeniería Mecatrónica", en: "Mechatronics Engineering" },
      institution: { es: "Ecuador", en: "Ecuador" },
      description: {
        es: "Formación en automatización, sistemas de control, electrónica, programación y robótica.",
        en: "Academic training in automation, control systems, electronics, programming and robotics."
      }
    }
    // Añade aquí otra formación, certificación o máster cuando corresponda.
  ],
  experience: [
    {
      date: { es: "Experiencia en investigación", en: "Research experience" },
      title: { es: "Visión artificial aplicada a robótica", en: "Computer Vision for Robotics" },
      institution: { es: "Percepción e inteligencia artificial", en: "Perception and artificial intelligence" },
      description: {
        es: "Trabajo con detección de objetos camuflados, segmentación de imágenes y generación de conjuntos de datos sintéticos para modelos de percepción visual.",
        en: "Work on camouflaged object detection, image segmentation and synthetic dataset generation for visual perception models."
      }
    }
  ],
  projects: [
    {
      id: "walter", filter: "WALTER",
      art: "robot", category: { es: "Proyecto de ingeniería", en: "Engineering project" },
      title: { es: "WALTER", en: "WALTER" },
      description: { es: "Proyecto WALTER. Conoce el trabajo y la demostración en mi publicación de LinkedIn.", en: "The WALTER project. Explore the work and demonstration in my LinkedIn post." },
      tags: [],
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7504664035754221568/",
      media: [
        { type: "video", src: "assets/walter/demo.mp4" },
        { type: "image", src: "assets/walter/photo-1.jpg" },
        { type: "image", src: "assets/walter/photo-2.jpg" }
      ]
    },
    {
      id: "so101", filter: "SO-101",
      art: "robot", category: { es: "Robótica", en: "Robotics" },
      title: { es: "SO-101 · Physical AI", en: "SO-101 · Physical AI" },
      description: { es: "Teleoperación y calibración de manipuladores leader–follower con ROS 2, explorando el control de robots físicos.", en: "Leader–follower manipulator teleoperation and calibration with ROS 2, exploring physical robot control." },
      tags: ["ROS 2", "LeRobot", "Teleoperation"],
      url: "",
      media: [
        { type: "video", src: "assets/so101/demo.mp4" },
        { type: "image", src: "assets/so101/photo-1.jpg" },
        { type: "image", src: "assets/so101/photo-2.jpg" }
      ]
    },
    {
      id: "cod", filter: "COD",
      art: "vision", category: { es: "Visión artificial", en: "Computer vision" },
      title: { es: "Camouflaged Object Detection", en: "Camouflaged Object Detection" },
      description: { es: "Exploración de técnicas de detección y segmentación para reconocer objetos que se confunden con su entorno.", en: "Exploring object detection and segmentation techniques to identify objects that blend into their surroundings." },
      tags: ["Computer Vision", "Segmentation", "Deep Learning"],
      url: "",
      media: [
        { type: "video", src: "assets/cod/demo.mp4" },
        { type: "image", src: "assets/cod/photo-1.jpg" },
        { type: "image", src: "assets/cod/photo-2.jpg" }
      ]
    },
    {
      id: "synthetic", filter: { es: "Datos sintéticos", en: "Synthetic data" },
      art: "dataset", category: { es: "Inteligencia artificial", en: "Artificial intelligence" },
      title: { es: "Datos sintéticos para percepción", en: "Synthetic Data for Perception" },
      description: { es: "Generación y preparación de datos sintéticos como apoyo al desarrollo de modelos de visión artificial.", en: "Synthetic data generation and preparation to support the development of computer vision models." },
      tags: ["Python", "Datasets", "Computer Vision"],
      url: "",
      media: [
        { type: "video", src: "assets/synthetic/demo.mp4" },
        { type: "image", src: "assets/synthetic/photo-1.jpg" },
        { type: "image", src: "assets/synthetic/photo-2.jpg" }
      ]
    }
  ],
  // Copia el ejemplo, descoméntalo y pega la URL real de cada publicación.
  posts: [
    {
      title: { es: "Publicación en LinkedIn", en: "LinkedIn post" },
      description: { es: "Consulta la publicación original.", en: "Read the original post." },
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7520899938046623744/"
    },
    /*
    {
      date: "2026-11-17",
      title: { es: "Título de tu publicación", en: "Your post title" },
      description: { es: "Breve resumen de lo que compartiste.", en: "A short summary of what you shared." },
      url: "https://www.linkedin.com/posts/TU-PUBLICACION"
    },
    */
  ]
};
