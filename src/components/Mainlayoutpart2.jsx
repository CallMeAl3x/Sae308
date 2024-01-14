/* eslint-disable jsx-a11y/iframe-has-title */
import ads from "../img/part2/ads.svg";
import like from "../img/part2/like.svg";
import tinderangry from "../img/part2/tinderangry.svg";
import certificat from "../img/part2/certificat.svg";
import personsad from "../img/part2/personsad.svg";
import money from "../img/part2/money.svg";
import fruitztime from "../img/part2/fruitztime.svg";
import warning from "../img/part2/warning.svg";
import entonoir from "../img/part2/entonoir.svg";
import badooangry from "../img/part2/badooangry.svg";
import fruitzeloscore from "../img/part2/fruitzeloscore.svg";
import tindereloscore from "../img/part2/tindereloscore.svg";
import fruitz from "../img/part2/fruitz.svg";

const Mainlayoutpart2 = () => {
  return (
    <main className="lg:p-24 p-6 max-w-7xl lg:ml-auto lg:mr-auto lg:mt-32 mt-6 text-almost-black">
      <h1 className="lg:text-5xl text-4xl text-center">
        Un système budgétaire ne permettant <br /> pas la tenue des promesses
        des applications
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-24">
        <p className="text-center lg:text-justify font-bold max-w-2xl ml-auto mr-auto">
          Le problème avec les applications de rencontre, c'est que si pour
          vous, c'est un jeu, pour les créateurs de cette application, c'est un
          business, dont le but est de tendre vers la rentabilité. Sauf que la
          plupart des applications de rencontre sont gratuites.
        </p>
        <iframe
          className="w-fit h-fit lg:rotate-12 lg:mr-auto mt-6 lg:mt-0"
          id="SVGmator__yemha1705248393865"
          frameBorder="0"
          src="https://www.svgmator.com/embed/xIuQgwkSkTiAyyD?onload=true&onclick=false&onhover=true"></iframe>
      </div>

      <h2 className="text-center text-[#571B46] mt-16 text-3xl lg:text-3xl lg:mt-4 font-bold">
        "Si c'est gratuit, c'est toi le produit" <br />
        D'où viennent leurs sources de revenus ? <br />
        Quel est leur modèle économique ?
      </h2>

      <div className="w-full flex justify-center flex-col items-center mt-20 relative">
        <img
          draggable={false}
          src={like}
          className="likeimage w-[359.69px] h-[328.13px] top-[-151px] right-[-118px]"
          alt=""
        />
        <img
          draggable={false}
          src={tinderangry}
          className="tinderangry top-[9%] left-[-18%] lg:top-[7%] lg:left-[-25%] lg:w-[359.69px] lg:h-[328.13px] w-24 h-24"
          alt=""
        />
        <img draggable={false} src={ads} className="h-60 w-60" alt="" />
        <h2 className="font-bold text-4xl text-center mt-8">Publicité</h2>
        <p className="mt-8">
          Ces applications ont des partenariats avec des entreprises pour
          promouvoir leurs produits ou services. <br />
          Les partenariats sont rémunérés et constituent une grande partie de la
          richesse perçue par l'application.
        </p>

        <div className="bg-white px-12 py-5 mt-8 relative lg:text-start text-center">
          <p>
            Après une étude menée par Facebook, il a été découvert que les
            personnes en pleine rupture amoureuse :
          </p>
          <img
            draggable={false}
            src={certificat}
            alt=""
            className="certificat w-[88px] h-[56px] top-[-15%] left-[82%] lg:top-[-31%] lg:left-[94%]"
          />
        </div>

        <ul className="flex flex-col lg:flex-row justify-center w-full mt-8 gap-8 lg:gap-16">
          <li className="border-[3px] border-white rounded-[5px] bg-[#DD6064] text-white p-6 text-center lg:w-1/3">
            Consacrent + de temps aux réseaux sociaux
          </li>
          <li className="border-[3px] border-white rounded-[5px] bg-[#DD6064] text-white p-6 text-center lg:w-1/3">
            Qu'ils sont plus amenés à accepter des invitations pour sortir
          </li>
          <li className="border-[3px] border-white rounded-[5px] bg-[#DD6064] text-white p-6 text-center lg:w-1/3">
            Que leurs achats en rapport avec les voyages augmentent de 25 %
          </li>
        </ul>

        <p className="mt-12 max-w-2xl text-center lg:text-justify ">
          Tout cela dans le but de renouer des liens avec ses amis, famille, et
          de se faire des nouveaux amis. Sur les réseaux sociaux, ces personnes,
          passant du statut d'en "couple" à "célibataire", postent plus de
          contenus sur la santé et s'intéressent aux pratiques sportives, a de
          nouvelles passions...
        </p>

        <div className="relative">
          <h2 className="mt-12 lg:mt-48 text-3xl lg:text-4xl text-center lg:text-justify text-[#571B46]">
            Mais pourquoi est ce qu'on explique tout ça ?
          </h2>
          <img
            draggable={false}
            src={fruitz}
            className="fruitz lg:w-[240px] lg:h-[240px] w-24 h-24 top-[76%] left-[73%] lg:top-[25%] lg:left-[110%]"
            alt=""
          />
        </div>

        <div className="max-w-2xl mt-16 flex lg:items-start gap-4 flex-col lg:flex-row items-center">
          <p className="text-center lg:text-justify">
            Car ces applications de rencontres peuvent être a même de vendre ces
            données à des entreprises pour que ces dernières réalisent de la
            publicité ciblée. D'après une citation, "Les messages d'empathies
            sont un moyen très efficace de fidéliser un utilisateur devenu
            célibataire". Ce genre d'information est capital pour les agences de
            voyages ou les salles de sport par exemple, cibler cette clientèle
            est une aubaine, c'est pour cette raison que vos données ont de la
            valeur.
          </p>
          <img
            draggable={false}
            src={personsad}
            height={85}
            width={85}
            alt=""
          />
        </div>

        <div className="max-w-2xl mt-8 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-4">
          <img draggable={false} src={money} alt="" height={85} width={85} />
          <p className="text-center lg:text-justify">
            Donc avec les données que l'application a, elle peut les revendre à
            d'autres entreprises qui sont intéressées par ces données, et même
            proposer des publicités ciblées sur l'application elle-même.
          </p>
        </div>

        <div className="bg-white p-4 text-center max-w-[50rem] flex items-center flex-col relative lg:mt-12 mt-20">
          <img
            draggable={false}
            src={badooangry}
            alt=""
            className=" top-[-14%] left-[-14%] lg:top-[7%] lg:left-[-30%] w-24 h-24 lg:w-[166px] lg:h-[137.27px] badooangry"
          />
          <p>
            Le modèle économique de ces applications repose donc évidemment sur
            l'implication de ces utilisateurs <br /> <br />
            Plus vous passez du temps dessus, plus vous regardez des publicités.{" "}
            <br />
            Plus vous êtes impliqués sur l’application, plus vous serez
            suceptibles de prendre l’abonnement payant. <br />
            Plus vous interagissez, plus les données seront pertinentes.
          </p>
          <img
            draggable={false}
            src={fruitztime}
            className="w-[123px] h-[84px]"
            alt=""
          />
        </div>

        <h2 className="text-4xl mt-20 lg:mt-48 lg:text-start text-center">
          Des algorithmes toujours plus sélectifs et déloyaux
        </h2>
        <p className="text-center max-w-3xl mt-8 text-almost-white">
          C'est un ensemble d'opérations mathématique, de règle et d'instruction
          permettant de résoudre un problème. On peut percevoir ça comme une
          recette de cuisine qui permet d'obtenir un plat.
        </p>

        <div className="bg-white px-4 lg:px-12 py-5 mt-8 relative max-w-4xl text-center">
          <p>
            D'après le brevet US9733811B2 déposé par "Matchgroup" , maison mère
            de Tinder,Meetic et OkCupid, une application de rencontre est bien
            plus complexe qu'un simple système d'offre et de demande. C'est un
            système qui répertorie des produits (nous) , et les classifie.
          </p>
          <img
            draggable={false}
            src={certificat}
            alt=""
            className="certificat top-[-10%] left-[82%] lg:top-[-20%] lg:left-[94%]"
          />
        </div>

        <p className="lg:text-start mt-8 max-w-4xl mr-4 ml-4 relative">
          <img
            draggable={false}
            src={entonoir}
            alt=""
            className="entonoir lg:top-[-40%] lg:left-[90%] lg:w-[486.21px] lg:h-[366.52px] top-[-5%]"
          />
          <div className="mt-52 lg:mt-0">
            Avec cette notion, on obtient un système qui contrôle à qui est
            montré votre profil et qui vous est montré. On a là, un filtre.{" "}
            <br />
            Il y a des filtres que vous pouviez déjà contrôler, comme : <br />
            <ul className="list-disc ml-8 mt-4 mb-4 lg:mb-0 lg:mt-0">
              <li>
                le périmètre dans lequel vous voulez trouver votre partenaire,
              </li>
              <li>l'âge que vous voulez qu'il ait,</li>
              <li>etc...</li>
            </ul>
            Mais d'autres ne sont pas de votre ressort, et c'est l'algorithme
            qui les gère. Il les gère dans le but :
            <ul className="list-disc ml-8 mt-4 mb-4 lg:mb-0 lg:mt-0">
              <li>
                de vous proposer des partenaires qui pourraient vous intéresser,
              </li>
              <li>mais aussi des partenaires qui sont intéresses par vous.</li>
            </ul>
          </div>
        </p>

        <div className="bg-white px-4 lg:px-12 py-5 mt-8 relative max-w-4xl text-center">
          <p>
            Les algorithmes des applicationss ne sont pas connu du grand public,
            ces informations sont prises à partir de brevets, aucune preuve
            tangible montre que c'est bien le système que nous allons présenté
            qui à été mis en place.
          </p>
          <img
            draggable={false}
            src={warning}
            alt=""
            className="warning-top w-[46px] h-[43px] top-[-12%] left-[88%] lg:top-[-9%] lg:left-[96%]"
          />
          <img
            draggable={false}
            src={warning}
            alt=""
            className="warning-bottom w-[46px] h-[43px] top-[88%] left-[-5%] lg:top-[62.5%] lg:left-[-2%]"
          />
        </div>

        <h3 className=" text-3xl lg:text-2xl mt-24 lg:text-start text-center">
          Mais comment l'algorithme peut faire ce tri ?
        </h3>

        <div className="bg-white px-4 lg:px-12 py-5 mt-8 relative max-w-4xl text-center">
          <p>
            D'après le brevet mentionnné précedemment : "Un utilisateur devrait
            obtenir un avantage à être présenté a des potentiels matchs qui sur
            la base d'une évaluation sont aussi attractif que lui"
          </p>
          <img
            draggable={false}
            src={certificat}
            alt=""
            className="certificat top-[-10%] left-[82%] lg:top-[-31%] lg:left-[94%]"
          />
        </div>

        <div className="ml-4 flex flex-col gap-2.5 max-w-4xl text-almost-black mt-10 relative">
          <p className="flex flex-col gap-4">
            <p className="text-xl">
              Apparition de l'
              <span className="text-almost-white">ELOSCORE</span>
            </p>
            Système de notation d'individu. Deux individus auront + de chances
            de se matcher s'ils ont le même score (caché) qui leur est attribué.
            Pour que votre score monte, il faut qu'une personne ayant beaucoup
            de points vous like. À l'inverse, si une personne ayant peu de
            points vous ignore, vous perdez des points. "Le serveur pourrait
            classer un utilisateur recevant plus de likes qu'un autre comme plus
            pertinent."
          </p>

          <p>
            Cet <span className="text-almost-white">ELOSCORE</span> crée donc
            des groupes de personnes ayant à peu de choses près le même score à
            partir de leur "désirabilité". Ce système permet de répondre une
            problématique d'égalité dans le sens où une personne de niveau "x"
            peut être proposé à une personne de niveau "x" mais ce système n'est
            pas parfait.
          </p>
          <p className="mt-8">
            En effet, cela implique que les "produits non matchés" restent entre
            eux et qu'à l'inverse les "produits a succès" en ont encore plus.
          </p>
          <img
            draggable={false}
            src={fruitzeloscore}
            alt=""
            className="fruitzeloscore lg:top-[100%] lg:left-[55%] lg:w-[255.5px] lg:h-[255.5px] top-[100%] left-[55%] w-24 h-24"
          />
          <img
            draggable={false}
            src={tindereloscore}
            alt=""
            className="tindereloscore lg:top-[115%] lg:left-[12%] lg:w-[234.5px] lg:h-[274px] top-[100%] left-[15%] w-24 h-24"
          />
        </div>
      </div>
    </main>
  );
};

export default Mainlayoutpart2;
