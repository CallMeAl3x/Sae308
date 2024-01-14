import React, { createContext, useState } from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Simulation from '../components/Simulation';

export const SimContext = createContext();

function Part3() {




  function nombreAleatoireEntreUnEtVingtSix() {
    return Math.floor(Math.random() * (10 - 3 + 1)) + 3;
  }

  let nombreAleatoire = nombreAleatoireEntreUnEtVingtSix();

  const hobbiesList = [
    "Patinage ⛸️", "Dessin ✏️", "Photographie 📸", "Cuisine 🍽️", "Voyages🧳", "Musique 🎸", "Lecture 📖", "Sport ⚽",
    "Jardinage 🪴", "Danse 💃", "Théâtre 🎬", "Artisanat 🎆", "Natation 🥽", "Informatique 💻", "Écriture 📝", "Jeux vidéo 🖥️",
    "Mode 🧥", "Shopping 🧣", "Randonnée 🥾", "Yoga 🧘‍♀️, peinture 🎨"
  ];

  function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbiesList.length);
    return hobbiesList[randomIndex];
  }

  const secondTableau = [getRandomHobby()];
  

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
      Intitulé: "Hobbys : Jardinage 🪴 , cuisine 🍽️",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Randonnée 🥾, peinture 🎨",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Yoga 🧘‍♀️, lecture 📖",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Cinéma 🎬, photographie 📸",
      Réponse: "Faux",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Danse 💃, sculpture 🗿",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie",
      Age: "26",
      Intitulé: "Hobbys : Pêche 🐟, écriture 📝",
      Réponse: "Vrai",
      Image: "./img/Part3img/woman" + nombreAleatoire + ".jpg",
      Video: false,
      Imagerep: true,
    },
    {
      Prenom: "Julie, ",
      Age: "26",
      Intitulé: "Hobbys : Ski ⛷️, musique 🎸",
      Réponse: "Vrai",
      Image: "./videos/presentation.mp4",
      Video: true,
      Imagerep: false,
    },
  ];

  const prenomsList = [
    "Sophie", "Emma", "Charlotte", "Alice", "Léa", "Manon", "Camille", "Sarah", "Lucie", "Zoé",
    "Chloé", "Eva", "Inès", "Lola", "Anna", "Clara", "Lina", "Mia", "Louise", "Léna",
    "Jade", "Lilou", "Ambre", "Julia", "Romane", "Elsa", "Océane", "Maëlys", "Eléna", "Mélanie",
    "Agathe", "Alicia", "Maëlle", "Amandine", "Mathilde", "Noémie", "Elise", "Lauren", "Margot",
    "Louna", "Eloïse", "Romy", "Lily", "Nina", "Victoria", "Mélissa", "Laura", "Sofia"
  ];

  const getRandomPrenom = () => prenomsList[Math.floor(Math.random() * prenomsList.length)];
  const getRandomAge = () => Math.floor(Math.random() * 16) + 20;

  const db2Randomized = db2.map(entry => {
    const imageName = entry.Video ? randomImageName() : entry.Image.split('/').pop();
    const beautyValue = beautyMapping[imageName] || "belle";

    console.log(`BeautyMapping for image ${imageName}: ${beautyValue}`);

    return {
      ...entry,
      Prenom: getRandomPrenom(),
      Age: getRandomAge(),
      Beaute: beautyValue,
    };
  });

  const [currentCardIndex2, setCurrentCardIndex2] = useState(0);

  return (
    <div>
      <SimContext.Provider value={{ db2: db2Randomized, currentCardIndex2, setCurrentCardIndex2 }}>
        <div className='w-full h-40'>
          <NavBar />
          <Logo />
        </div>
        <Simulation />
      </SimContext.Provider>
    </div>
  );
}

export default Part3;
