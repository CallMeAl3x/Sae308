import React, { createContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Simulation from "../components/Simulation";

export const SimContext = createContext();

function Part3() {
  useEffect(() => {
    // Reset box shadow when component unmounts or page changes
    return () => {
      document.body.style.boxShadow = "none";
    };
  }, []);

  function nombreAleatoireEntreUnEtVingtSix() {
    return Math.floor(Math.random() * (27 - 1 + 1)) + 1;
  }

  let nombreAleatoire = nombreAleatoireEntreUnEtVingtSix();

  const hobbiesList = [
    "Patinage ⛸️",
    "Dessin ✏️",
    "Photographie 📸",
    "Cuisine 🍽️",
    "Voyages🧳",
    "Musique 🎸",
    "Lecture 📖",
    "Sport ⚽",
    "Jardinage 🪴",
    "Danse 💃",
    "Théâtre 🎬",
    "Artisanat 🎆",
    "Natation 🥽",
    "Informatique 💻",
    "Écriture 📝",
    "Jeux vidéo 🖥️",
    "Mode 🧥",
    "Shopping 🧣",
    "Randonnée 🥾",
    "Yoga 🧘‍♀️, peinture 🎨",
  ];

  function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbiesList.length);
    return hobbiesList[randomIndex];
  }

  getRandomHobby();

  const beautyMapping = {
    "woman3.jpg": "belle",
    "woman4.jpg": "belle",
    "woman5.jpg": "belle",
    "woman6.jpg": "belle",
    "woman7.jpg": "belle",
    "woman8.jpg": "belle",
    "woman9.jpg": "moche",
    "woman10.jpg": "belle",
    "woman11.jpg": "belle",
    "woman12.jpg": "moche",
    "woman13.jpg": "belle",
    "woman14.jpg": "belle",
    "woman15.jpg": "moche",
    "woman16.jpg": "moche",
    "woman17.jpg": "belle",
    "woman18.jpg": "belle",
    "woman19.jpg": "moche",
    "woman20.jpg": "moche",
    "woman21.jpg": "moche",
    "woman22.jpg": "moche",
    "woman23.jpg": "belle",
    "woman24.jpg": "moche",
    "woman25.jpg": "moche",
    "woman26.jpg": "moche",
    "woman27.jpg": "belle",
  };

  const randomImageName = () => `woman${nombreAleatoire}.jpg`;

  const db2 = [

    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Yoga, lecture",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
     
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
      "Hobbys : Cinéma, photographie",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Danse, sculpture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Pêche, écriture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Ski, musique",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: true,
      Imagerep: false,
    },
  
  
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Jardinage, cuisine",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
      "Hobbys : Randonnée, peinture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Yoga, lecture",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
     
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
      "Hobbys : Cinéma, photographie",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Danse, sculpture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Pêche, écriture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Ski, musique",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: true,
      Imagerep: false,
    },
  
  
  
  
  
  
  
  
  
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Jardinage, cuisine",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
      "Hobbys : Randonnée, peinture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Yoga, lecture",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
     
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
      "Hobbys : Cinéma, photographie",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Danse, sculpture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Pêche, écriture",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé:
        "Hobbys : Ski, musique",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      
      Video: true,
      Imagerep: false,
    },


    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Jardinage 🪴 , cuisine 🍽️",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Cuisinière cherche partenaire pour partager de délicieuses recettes ?",
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Randonnée 🥾, peinture 🎨",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Hello, une aventurière passionnée de randonnée. Prêt à explorer les sentiers de la vie avec moi ?",
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Yoga 🧘‍♀️, lecture 📖",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Coucou, originaire de Dijon ! Qui veut faire un tour virtuel dans ma ville natale ?",
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Cinéma 🎬, photographie 📸",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Je fais quoi ici? Quelqu'un peut me sortir d'ici? S'il vous plait ? ...🤔",
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Danse 💃, sculpture 🗿",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Qui aurait cru que je viendrais un jour ici ? A la découverte de l'inattendu !",
    },
    {
      Prenom: "Julie",
      Age: "26",
      Intitulé: "Hobbys : Pêche 🐟, écriture 📝",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
      Biographie:
        "Amoureuse de la pêche, passionnée d'écriture, et gourmande de chocolats.",
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Ski ⛷️, musique 🎸",
      Réponse: "Vrai",
      Image: "./videos/presentation.mp4",
      Video: true,
      Imagerep: false,
      Biographie:
        "Je cherche quelqu’un avec qui partager un compte Netflix et une cinquantaine de McNuggets.",
    },
  ];

  const prenomsList = [
    "Sophie",
    "Emma",
    "Charlotte",
    "Alice",
    "Léa",
    "Manon",
    "Camille",
    "Sarah",
    "Lucie",
    "Zoé",
    "Chloé",
    "Eva",
    "Inès",
    "Lola",
    "Anna",
    "Clara",
    "Lina",
    "Mia",
    "Louise",
    "Léna",
    "Jade",
    "Lilou",
    "Ambre",
    "Julia",
    "Romane",
    "Elsa",
    "Océane",
    "Maëlys",
    "Eléna",
    "Mélanie",
    "Agathe",
    "Alicia",
    "Maëlle",
    "Amandine",
    "Mathilde",
    "Noémie",
    "Elise",
    "Lauren",
    "Margot",
    "Louna",
    "Eloïse",
    "Romy",
    "Lily",
    "Nina",
    "Victoria",
    "Mélissa",
    "Laura",
    "Sofia",
  ];

  const relationList = [
    "Relation sérieuse",
    "Hésitant",
    "Relation courte",
    "Coup d'un soir",
  ];

  const getRandomPrenom = () =>
    prenomsList[Math.floor(Math.random() * prenomsList.length)];
  const getRandomAge = () => Math.floor(Math.random() * 16) + 20;

  const db2Randomized = db2.map((entry) => {
    const imageName = entry.Video
      ? randomImageName()
      : entry.Image.split("/").pop();
    const beautyValue = beautyMapping[imageName] || "belle";

    console.log(`BeautyMapping for image ${imageName}: ${beautyValue}`);

    return {
      ...entry,
      Relation: relationList[Math.floor(Math.random() * relationList.length)],
      Prenom: getRandomPrenom(),
      Age: getRandomAge(),
      Beaute: beautyValue,
    };
  });

  const [currentCardIndex2, setCurrentCardIndex2] = useState(0);

  return (
    <div>
      <NavBar />
      <SimContext.Provider
        value={{ db2: db2Randomized, currentCardIndex2, setCurrentCardIndex2 }}>
        <div className="flex items-center justify-center max-lg:flex-col">
          <Simulation />
        </div>
      </SimContext.Provider>
    </div>
  );
}

export default Part3;
