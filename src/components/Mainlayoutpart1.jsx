import React, { useState } from "react";
import "./Mainlayoutpart1.css";
import { Modal } from "./Modal";
import tinder from "../img/Tinder-icon.png";
import badoo from "../img/Badoo-icon-square.png";
import fruitz from "../img/fruitz.png";
import hapn from "../img/Hapn.png";
import meetic from "../img/meetic-8QZScb.png";
import hinge from "../img/hinge.png";
import Card from "./Card";
import trophee from "../img/trophee.svg";
import masque from "../img/masque.svg";
import { Link } from "react-router-dom";

function Mainlayoutpart1() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const [showTitlteCard1, setShowTitleCard1] = useState(false);
  const [showTitlteCard2, setShowTitleCard2] = useState(false);
  const [showTitlteCard3, setShowTitleCard3] = useState(false);

  const showTitle = () => {
    setShowTitleCard1(true);
    console.log("hello");
  };

  const showTitle2 = () => {
    setShowTitleCard2(true);
  };

  const showTitle3 = () => {
    setShowTitleCard3(true);
  };

  return (
    <main className="lg:p-24 p-6 max-w-7xl lg:ml-auto lg:mr-auto lg:mt-32 mt-6 text-almost-black">
      <div>
        <h1 className="lg:text-5xl text-4xl text-center">
          Tension masculines dans les applications de rencontre
        </h1>

        <p className="lg:mt-24 mt-12 text-center lg:text-start">
          Les dynamiques complexes du monde des applications de rencontres
          exposent les hommes à diverses tensions, les poussant à naviguer dans
          un paysage où les attentes sociales en matière de masculinité sont
          omniprésentes.
        </p>

        <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-5 mt-12 lg:flex lg:w-full lg:justify-center lg:gap-12">
          <img
            src={tinder}
            alt=""
            className="w-20 h-20 rounded-2xl shadow-lg"
          />
          <img src={badoo} alt="" className="w-20 h-20 rounded-2xl shadow-lg" />
          <img
            src={fruitz}
            alt=""
            className="w-20 h-20 rounded-2xl shadow-lg"
          />
          <img src={hapn} alt="" className="w-20 h-20 rounded-2xl shadow-lg" />
          <img
            src={meetic}
            alt=""
            className="w-20 h-20 rounded-2xl shadow-lg"
          />
          <img src={hinge} alt="" className="w-20 h-20 rounded-2xl shadow-lg" />
        </div>

        <p className="mt-12 text-center">
          Les hommes peuvent alors rencontrer des problèmes d'ordre
          psycho-sociologique qui peuvent être caractérisés sous formes de :
        </p>

        <h2 className="text-[#571B46] mt-12 text-center text-4xl lg:text-6xl font-bold">
          Pressions
        </h2>
        <div className="mt-12 lg:mt-16">
          <Card
            showTitle1={showTitle}
            showTitle2={showTitle2}
            showTitle3={showTitle3}
            className="mt-12 lg:mt-16"
          />
        </div>

        <p className="mt-16">
          Certains comportements aparaissent pour apaiser cette pression comme
          <b>”la façace sociale"</b> ou <b>"le conformisme social "</b>
          Découvrez comment ils apparaissent en glissant les cartes !
        </p>

        <div className="mt-16">
          <table>
            <thead>
              <tr>
                <th>Comportement 1</th>
                <th>Comportement 2</th>
                <th>Comportement 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {showTitlteCard1 ? (
                    <>
                      <span className="spantableau">
                        {" "}
                        Les retouches photos ( faible ){" "}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="spantableau2">
                        {" "}
                        Vous avez oublié de draguer la première carte ;){" "}
                      </span>
                    </>
                  )}
                </td>

                <td>
                  {showTitlteCard2 ? (
                    <>
                      <span className="spantableau">
                        {" "}
                        Changement de style vestimentaire drastique
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="spantableau2">
                        {" "}
                        Vous avez oublié de draguer la première carte ;){" "}
                      </span>
                    </>
                  )}
                </td>
                <td>
                  {showTitlteCard3 ? (
                    <>
                      <span className="spantableau">
                        {" "}
                        Les retouches photos ( fort ){" "}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="spantableau2">
                        {" "}
                        Vous avez oublié de draguer la première carte ;){" "}
                      </span>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-[#571B46] text-4xl lg:text-6xl font-bold text-center mt-24">
          Comparaison sociale et concurrence
        </h2>

        <div className="mt-24 flex gap-3 flex-col lg:flex-row ">
          <p className=" text-almost-black">
            La compétition dans les applications de rencontres crée une
            atmosphère où les hommes se comparent constamment les uns aux
            autres. On évalue non seulement l'apparence, mais aussi le succès
            professionnel, l'intelligence, et d'autres critères sociaux. Cette
            comparaison constante peut rendre certains hommes anxieux et moins
            sûrs d'eux, ce qui rend la recherche d'un partenaire plus
            stressante. En d'autres termes, l'environnement compétitif de ces
            applications peut susciter des sentiments d'insécurité et
            d'infériorité chez certains hommes, compliquant ainsi leur quête de
            relations amoureuses.
          </p>
          <img src={trophee} alt="" />
        </div>

        <div className="flex gap-24 lg:flex-row  flex-col-reverse">
          <img src={masque} alt="" className="-mt-12" />
          <p className="font-bold text-almost-black">
            Cette pression permanente de se mesurer aux autres peut également
            créer un climat anxiogène, où les individus se sentent constamment
            jugés par des critères parfois idéalisés. En résumé, la compétition
            et la comparaison sociale dans ces applications peuvent avoir des
            conséquences significatives sur le bien-être émotionnel des hommes
            qui y participent, soulignant la nécessité d'une réflexion sur les
            dynamiques induites par ces plateformes de rencontres. [transiton
            phrase ]
          </p>
        </div>

        <p className=" text-2xl font-bold mt-24 text-center">
          Entrevue avec Ivy Daure, psychologue en blablabla
        </p>

        <div className="w-full flex justify-center mt-16">
          <iframe
            className="rounded-lg shadow-xl border-4 border-[#E0861B]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tiDNAr9lFuc?si=a_yoIZBgvx802qkY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <h2 className="text-[#571B46] text-4xl lg:text-6xl font-bold text-center mt-36">
          Peur du Rejet ou de l'Échec <br /> sur la Santé Mentale Masculine
        </h2>

        <p className="mt-12 text-white max-w-3xl text-center lg:text-start ml-auto mr-auto">
          La nature impitoyable des rencontres en ligne peut entraîner des
          expériences fréquentes de rejet ou d'échec. Les hommes peuvent réagir
          différemment à ces situations, mais pour beaucoup, cela peut avoir un
          impact significatif sur leur santé mentale. La répétition des rejets
          peut créer des sentiments de désespoir, d'anxiété sociale et de
          dévalorisation personnelle. Certains hommes peuvent internaliser ces
          expériences négatives, compromettant ainsi leur estime de soi et leur
          bien-être émotionnel.
        </p>

        <div className="flex flex-col lg:flex-row items-start text-white mt-48 gap-12">
          <div className="relative lg:w-1/2">
            <p className="text-center lg:text-start">
              Témoignage de Karime Baudouin : <br />
              Etudiant en BUT GEII : <br /> <br /> Tu peux être affecté par certaines choses sur l'application, comme le fait de ne pas avoir delikes. Le fait de catégoriser ou de se faire catégoriser peut baisser le morale où le monter.
            </p>
            <div className="hidden lg:block absolute top-[81%] left-[67%] rectangle"></div>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
            <iframe
              className="rounded-lg shadow-xl lg:w-[560px] lg:h-[315px] w-[300px] h-[200px]"
              src="https://www.youtube.com/embed/tiDNAr9lFuc?si=a_yoIZBgvx802qkY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-start text-white mt-2 gap-12">
          <div className="relative lg:w-1/2">
            <p className="mt-8 lg:text-start text-center ">
              Point de vue du coach : <br />
              Etudiant en BUT GEII : <br /> <br /> Tu peux être affecté par
              certaines choses sur l'application, comme le fait de ne pas avoir
              delikes. Le fait de catégoriser ou de se faire catégoriser peut
              baisser le morale où le monter.
            </p>
            <div className="hidden lg:block absolute top-[0%] -left-[7.5%] rectangle rotate-180"></div>
          </div>
          <div className="lg:w-1/2  flex justify-center w-full">
            <iframe
              className="rounded-lg shadow-xl lg:w-[560px] lg:h-[315px] w-[300px] h-[200px]"
              src="https://www.youtube.com/embed/tiDNAr9lFuc?si=a_yoIZBgvx802qkY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>

        <p className="text-white max-w-xl ml-auto mr-auto mt-24 text-center">
          En somme, les tensions masculines dans le monde des applications de
          rencontres sont profondément ancrées dans les normes culturelles et
          les dynamiques sociales. Comprendre ces pressions est essentiel pour
          favoriser des interactions plus saines et promouvoir la santé mentale
          des hommes engagés dans ces espaces virtuels de recherche d'amour.
        </p>

        <div className="flex items-center justify-center gap-12 mt-12">
          <button
            to="/Partie2"
            onClick={openModal}
            className="flex items-center rounded-xl bg-slate-600 px-5 py-2">
            <p className="text-black">Sources</p>
          </button>
          <Link
            to="/Partie2"
            className="flex items-center rounded-xl bg-slate-600 px-5 py-2">
            <p className="text-black">Partie 2</p>
          </Link>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal} />
    </main>
  );
}

export default Mainlayoutpart1;
