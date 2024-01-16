import React, { useState } from "react";
import "./Mainlayoutpart1.css";
import { Modal } from "./Modal";
import badoo from "../img/Badoo-icon-square.png";
import fruitz from "../img/fruitz.png";
import meetic from "../img/meetic-8QZScb.png";
import hinge from "../img/hinge.png";
import Card from "./Card";
import masque from "../img/masque.svg";
import { Link } from "react-router-dom";
import "../components/part1css2.css";
import tindertriste from "../img/part1/tinndertriste2.svg";
import Svgtrophy from "./Svgtrophy";
import tinderlogo3 from "../img/Tinderloogo3.png";

function Mainlayoutpart1() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const [showTitlteCard1, setShowTitleCard1] = useState(false);
  const [showTitlteCard2, setShowTitleCard2] = useState(false);
  const [showTitlteCard3, setShowTitleCard3] = useState(false);
  const [etatModal1, setEtatModal1] = useState(true);

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
        <h1
          className="lg:text-5xl text-4xl text-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Tension masculines dans les applications de rencontre
        </h1>

        <p
          className="lg:mt-24 mt-12 text-center lg:text-start"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>
          Les dynamiques complexes du monde des applications de rencontres
          exposent les hommes à diverses tensions, les poussant à naviguer dans
          un paysage où les attentes sociales en matière de masculinité sont
          omniprésentes.
        </p>

        <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-5 mt-12 lg:flex lg:w-full lg:justify-center lg:gap-12">
          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter ">
            <img
              src={tinderlogo3}
              alt=""
              className="rounded-xl w-[72px] h-[72px] imglogotinder p-1"
            />
          </div>

          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter">
            <div className="p-1">
              <img
                src={fruitz}
                alt=""
                className="rounded-xl w-16 h-16 imglogofruitz bg-[#FD5883] p-1"
              />
            </div>
          </div>

          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter">
            <img
              src={badoo}
              alt=""
              className="rounded-xl w-[72px] h-[72px] imglogobadoo  p-1"
            />
          </div>

          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter">
            <img
              src={meetic}
              alt=""
              className="rounded-xl w-[72px] h-[72px] imglogomeetic  p-1"
            />
          </div>
          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter">
            <img
              src={badoo}
              alt=""
              className="rounded-xl w-[72px] h-[72px] imglogohappn  p-1"
            />
          </div>
          <div className="w-20 h-20 bg-white rounded-xl relative shadow-xl flotter">
            <img
              src={hinge}
              alt=""
              className="rounded-xl w-[72px] h-[72px] imglogohinge  p-1"
            />
          </div>
        </div>

        <p
          className="mt-12 text-center"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>
          Les hommes peuvent alors rencontrer des problèmes d'ordre
          psycho-sociologique qui peuvent être caractérisés sous formes de :
        </p>

        <h2
          className="text-[#571B46] mt-12 text-center text-4xl lg:text-6xl font-bold"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Pressions
        </h2>
        <div className="w-full h-2 ">
          <div className="relative logotinderrr">
            <div className=" absolute left-[-35%] top-32 ">
              <img
                src={tindertriste}
                alt=""
                className="vrailogo"
                style={{
                  filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mt-16">
          <Card
            showTitle1={showTitle}
            showTitle2={showTitle2}
            showTitle3={showTitle3}
            className="mt-12 lg:mt-16"
          />
        </div>

        <p
          className="mt-16"
          style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>
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
                        Drag & drop l'image pour continuer !
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
                        Drag & drop l'image pour continuer !
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
                        Drag & drop l'image pour continuer !
                      </span>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2
          className="text-[#571B46] text-4xl lg:text-6xl font-bold text-center mt-24"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          Comparaison sociale et concurrence
        </h2>

        <div
          className="mt-24 flex gap-3 flex-col lg:flex-row lg:items-start items-center
        ">
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
          <div>
            <Svgtrophy />
          </div>
        </div>

        <div className="flex gap-24 lg:flex-row  flex-col-reverse">
          <img
            src={masque}
            alt=""
            className="-mt-12"
            style={{ filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))" }}
          />
          <p className="font-bold text-almost-black">
            Cette pression permanente de se mesurer aux autres peut également
            créer un climat anxiogène, où les individus se sentent constamment
            jugés par des critères parfois idéalisés. En résumé, la compétition
            et la comparaison sociale dans ces applications peuvent avoir des
            conséquences significatives sur le bien-être émotionnel des hommes
            qui y participent, soulignant la nécessité d'une réflexion sur les
            dynamiques induites par ces plateformes de rencontres. Des
            expert(e)s se sont penché(e)s sur ce sujet en analysant la place des
            hommes dans ces applications/sites de rencontres, comme Ivy Daure.
          </p>
        </div>

        <p className=" text-2xl font-bold mt-24 text-center">
          Entrevue avec Ivy Daure, psychologue clinicienne
        </p>

        <div className="w-full flex justify-center mt-16">
          <iframe
            className="rounded-lg shadow-xl border-4 border-white"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ueWwnmjqTRE?si=xBIskaPRzw2SVBXs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>

        <h2 className="text-[#571B46] text-4xl lg:text-6xl font-bold text-center mt-36">
          Peur du Rejet ou de l'Échec <br /> sur la Santé Mentale Masculine
        </h2>

        <p
          className="mt-12 text-white max-w-3xl text-center lg:text-start ml-auto mr-auto "
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          <span className="">
            {" "}
            La nature impitoyable des rencontres en ligne peut entraîner des
            expériences fréquentes de rejet ou
          </span>{" "}
          <span>
            {" "}
            d'échec. Les hommes peuvent réagir différemment à ces situations,
            mais pour beaucoup, cela peut avoir
          </span>{" "}
          un impact significatif sur leur santé mentale. La répétition des
          rejets peut créer des sentiments de désespoir, d'anxiété sociale et de
          dévalorisation personnelle. Certains hommes peuvent internaliser ces
          expériences négatives, compromettant ainsi leur estime de soi et leur
          bien-être émotionnel.
        </p>

        <div className="flex flex-col lg:flex-row items-start text-white mt-48 gap-12">
          <div className="relative lg:w-1/2">
            <p
              className="text-center lg:text-start"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              Témoignage de Karime Baudouin : <br />
              Etudiant en BUT GEII : <br /> <br /> "Tu peux être affecté par
              certaines choses sur l'application, comme le fait de ne pas avoir
              delikes. Le fait de catégoriser ou de se faire catégoriser peut
              baisser le morale où le monter".
            </p>
            <div className="hidden lg:block absolute top-[81%] left-[67%] rectangle"></div>
          </div>
          <div className="lg:w-1/2 flex justify-center w-full">
            <iframe
              className="rounded-lg shadow-xl lg:w-[560px] lg:h-[315px] w-[300px] h-[200px] border-2 border-white"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/KR4o1i6uyjk?si=yoXRYXzHtvG0AUXT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-start text-white mt-2 gap-12">
          <div className="relative lg:w-1/2">
            <p
              className="mt-8 lg:text-start text-center "
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
              Point de vue du coach : <br />
              **Citation** <br /> <br /> "Il faut le comprendre, les
              'applications de rencontre', c'est du marketing. Le produit, c'est
              toi, et ce produit, tu dois le mettre en valeur."
            </p>
            <div className="hidden lg:block absolute top-[0%] -left-[7.5%] rectangle rotate-180"></div>
          </div>
          <div className="lg:w-1/2  flex justify-center w-full">
            <iframe
              className="rounded-lg shadow-xl lg:w-[560px] lg:h-[315px] w-[300px] h-[200px] border-2 border-white"
              src="https://www.youtube.com/embed/tiDNAr9lFuc?si=a_yoIZBgvx802qkY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>

        <p
          className="text-white max-w-xl ml-auto mr-auto mt-24 text-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
          En somme, les tensions masculines dans le monde des applications de
          rencontres sont profondément ancrées dans les normes culturelles et
          les dynamiques sociales. Comprendre ces pressions est essentiel pour
          favoriser des interactions plus saines et promouvoir la santé mentale
          des hommes engagés dans ces espaces virtuels de recherche d'amour.
        </p>

        <div className="flex items-center justify-center gap-12 mt-12">
          <button
            to="/Part2"
            onClick={openModal}
            className="flex items-center rounded-xl border-4 px-5 py-2 buttongradient">
            <p className="">Sources</p>
          </button>
          <Link
            to="/Part2"
            className="flex items-center rounded-xl bg-slate-600 px-5 py-2 buttongradient">
            <p className="">Partie 2</p>
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openModal={openModal}
        etatModal1={etatModal1}
        setEtatModal1={setEtatModal1}
      />
    </main>
  );
}

export default Mainlayoutpart1;
