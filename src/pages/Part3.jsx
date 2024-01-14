import React, { createContext, useState } from 'react'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import Simulation from '../components/Simulation'




export const SimContext = createContext();



function Part3() {


  const hobbiesList = [
    "Patinage", "Dessin", "Photographie", "Cuisine", "Voyages", "Musique", "Lecture", "Sport",
    "Jardinage", "Danse", "Théâtre", "Artisanat", "Natation", "Informatique", "Écriture", "Jeux vidéo",
    "Mode", "Shopping", "Randonnée", "Yoga"
  ];
  

// Fonction pour obtenir un hobby au hasard
function getRandomHobby() {
    const randomIndex = Math.floor(Math.random() * hobbiesList.length);
    return hobbiesList[randomIndex];
}

// Créer un deuxième tableau avec un hobby au hasard
const secondTableau = [getRandomHobby()];


const db2 = [
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
      "Hobbys : Jardinage, cuisine",
    Réponse: "Vrai",
    Image: "./img/Part3img/woman3.jpg",
    
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
    "Hobbys : Randonnée, peinture",
    Réponse: "Vrai",
    Image: "./img/Part3img/woman6.jpg",
    
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
      "Hobbys : Yoga, lecture",
    Réponse: "Faux",
    Image: "./img/Part3img/woman3.jpg",
   
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
    "Hobbys : Cinéma, photographie",
    Réponse: "Faux",
    Image: "./img/Part3img/woman5.jpg",
    
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
      "Hobbys : Danse, sculpture",
    Réponse: "Vrai",
    Image: "./img/Part3img/woman4.jpg",
    
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
      "Hobbys : Pêche, écriture",
    Réponse: "Vrai",
    Image: "./img/Part3img/woman3.jpg",
    
    Video: false,
    Imagerep: true,
  },
  {
    Prenom: "Julie, ",
    Age: "26",
    Intitulé:
      "Hobbys : Ski, musique",
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
            <NavBar/>
            <Logo/>
        </div>
        <Simulation/> 

        </SimContext.Provider>
        
    </div>
  )
}

export default Part3