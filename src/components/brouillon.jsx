import React, { createContext, useState } from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import Simulation from '../components/Simulation';

export const SimContext = createContext();

function Part3() {
  // Move nombreAleatoireEntreUnEtVingtSix to the top
  function nombreAleatoireEntreUnEtVingtSix() {
    return Math.floor(Math.random() * 25) + 1;
  }

  // Move prenomsList to the top
  const prenomsList = ["Sophie", "Emma", "Charlotte", "Alice", "Léa", "Manon", "Camille", "Sarah", "Lucie", "Zoé", "Chloé", "Eva", "Inès", "Lola", "Anna", "Clara", "Lina", "Mia", "Louise", "Léna", "Jade", "Lilou", "Ambre", "Julia", "Romane", "Elsa", "Océane", "Maëlys", "Eléna", "Mélanie", "Agathe", "Alicia", "Maëlle", "Amandine", "Mathilde", "Noémie", "Elise", "Lauren", "Margot", "Louna", "Eloïse", "Romy", "Lily", "Nina", "Victoria", "Mélissa", "Laura", "Sofia"];

  // Move hobbiesList to the top
  const hobbiesList = ["Patinage", "Dessin", "Photographie", "Cuisine", "Voyages", "Musique", "Lecture", "Sport", "Jardinage", "Danse", "Théâtre", "Artisanat", "Natation", "Informatique", "Écriture", "Jeux vidéo", "Mode", "Shopping", "Randonnée", "Yoga"];

  // Move getRandomPrenom to the top
  const getRandomPrenom = () => prenomsList[Math.floor(Math.random() * prenomsList.length)];
  const getRandomAge = () => Math.floor(Math.random() * 16) + 20;

  const db2 = Array.from({ length: 7 }, (_, index) => ({
    Prenom: getRandomPrenom(),
    Age: getRandomAge(),
    Intitulé: `Hobbys : ${getRandomHobby()}, ${getRandomHobby()}`,
    Réponse: index % 2 === 0 ? "Vrai" : "Faux",
    Image: `./img/Part3img/woman${nombreAleatoireEntreUnEtVingtSix()}.jpg`,
    Video: index === 6,
    Imagerep: true,
  }));

  function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbiesList.length);
    return hobbiesList[randomIndex];
  }

  const db2Randomized = db2.map(entry => ({
    ...entry,
    Prenom: getRandomPrenom(),
    Age: getRandomAge(),
  }));

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
