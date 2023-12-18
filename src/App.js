import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { createContext, useState } from "react";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";

export const AppContext = createContext();

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0); // Nouvel état pour suivre l'index de la carte actuellement affichée

  const db = [
    {
      Intitulé:
        "En 2023, le moyen le plus utilisé pour rencontrer des personnes est internet.",
      Réponse: "Vrai",
      RéponseDéveloppé:
        "Vrai, en effet d'après une étude faite aux Etat-Unis on compte 40% des gens se sont rencontré via internet en 2020.",
      Image: "./img/presentation.png",
      Source:
        'Disintermediating your friends: How Online Dating in the United States displaces other ways of meeting" Michael Rosenfeld & Sonia Hausen, Stanford University, Reuben J. Thomas, University of New Mexico Données provenant des enquêtes « How Couples Meet and Stay Together », 2009 et 2017',
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé:
        "Plus d'une personne sur deux avoue utiliser des filtres ou des retouches excessives sur leurs photos de profil.",
      Réponse: "Vrai",
      RéponseDéveloppé:
        "Vrai, en effet plus de 60% des utilisateurs admettent utiliser des filtres ou des retouches pour améliorer leur apparence sur les photos de leurs profils.",
      Image: "./img/presentation.png",
      Source: "",
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé:
        "Les algorithmes des sites de rencontre sont conçus pour garantir des correspondances précises et durables entre les utilisateurs.",
      Réponse: "Faux",
      RéponseDéveloppé:
        "Les algorithmes des sites de rencontre peuvent ne pas toujours mener à des correspondances précises ou durables. Ils sont souvent basés sur des critères superficiels.",
      Image: "./img/presentation.png",
      Source: "",
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé:
        "Les utilisateurs de sites de rencontre passent en moyenne moins de 30 minutes par jour",
      Réponse: "Faux",
      RéponseDéveloppé:
        "Faux, en effet les utilisateurs de sites de rencontre passent en moyenne 35 minutes par jour",
      Image: "./img/presentation.png",
      Source: "",
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé:
        "Les utilisateurs ouvrent en moyenne l'application Tinder plus de 5 fois par jour ?",
      Réponse: "Vrai",
      RéponseDéveloppé:
        "Vrai, en effet les utilisateurs de l'application Tinder l'ouvrent en moyenne 11 fois par jour.",
      Image: "./img/presentation.png",
      Source: "",
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé:
        "La moitié des personnes âgées de moins de 30 ans ont déjà utilisé une application de rencontre.",
      Réponse: "Vrai",
      RéponseDéveloppé:
        "Environ la moitié des moins de 30 ans utilisent des applis de rencontre, attirés par leur praticité pour rencontrer de nouvelles personnes partageant des intérêts similaires. Cette tendance reflète comment la technologie façonne les relations sociales des jeunes générations.",
      Image: "./img/presentation.png",
      Source: "",
      Video: false,
      Imagerep: true,
    },
    {
      Intitulé: "Etes vous prêt a découvrir ce qui se cache au dela du swipe ?",
      Réponse: "Vrai",
      RéponseDéveloppé:
        "Vrai, en effet d'après une étude faite aux Etat-Unis on compte 40% des gens se sont rencontré via internet en 2020.",
      Image: "./videos/presentation.mp4",
      Source:
        'Disintermediating your friends: How Online Dating in the United States displaces other ways of meeting" Michael Rosenfeld & Sonia Hausen, Stanford University, Reuben J. Thomas, University of New Mexico Données provenant des enquêtes « How Couples Meet and Stay Together », 2009 et 2017',
      Video: true,
      Imagerep: false,
    },
  ];

  return (
    <div>
      <AppContext.Provider
        value={{ db, currentCardIndex, setCurrentCardIndex }}>
        <BrowserRouter>
          <Link to="/Part1"></Link>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/Part1" element={<Part1 />} />
            <Route path="/Part2" element={<Part2 />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
