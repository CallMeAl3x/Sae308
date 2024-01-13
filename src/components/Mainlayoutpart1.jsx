import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar'
import "./Mainlayoutpart1.css";
import { IoAccessibilityOutline } from "react-icons/io5";
import tinderimg from "../img/Tinder-icon.png";
import BadooImg from "../img/Badoo-icon-square.png";
import fruitzImg from "../img/fruitz.png";
import hapn from "../img/Hapn.png";
import meetic from "../img/meetic-8QZScb.png";
import Hinge from "../img/hinge.png"
import {motion} from "framer-motion";
import pp1before from "../img/pp1before.png"
import pp1after from "../img/pp1after.png"
import pp2after from "../img/pp2after.png"
import pp2before from "../img/pp2before.png"
import pp3before from "../img/pp3before.png"
import pp3after from "../img/pp3after.png"
import { FaRegHandPointLeft } from "react-icons/fa";
import svg from "../img/decision-maker-analyze-balance-compare-svgrepo-com.svg"
import { FaRegHandPointRight } from "react-icons/fa";
import { FaArrowsAltH } from "react-icons/fa";
import { Modal } from './Modal';
import LogoT from "../img/logoT.png"




function Mainlayoutpart1() {



        const[showTitlteCard1,setShowTitleCard1] = useState(false);
        const[showTitlteCard2,setShowTitleCard2] = useState(false);
        const[showTitlteCard3,setShowTitleCard3] = useState(false);
        

        const tablee = useRef()
        const svgg = useRef();
        const cardDrag = useRef()
        const cardDrag2 = useRef()
        const cardDrag3 = useRef()
        const suiteTexte = useRef()
        const citafre = useRef();
        


        const handleOpacity = () => {
            const img1 = document.getElementsByClassName("img11")[0]; // Access the first element in the collection
            img1.classList.add("img11anime"); // Remove the dot before "img11anime"
        }

        const handleOpacity2 = () => {
            const img2 = document.getElementsByClassName("img22")[0]; // Access the first element in the collection
            img2.classList.add("img22anime"); // Remove the dot before "img11anime"
        }

        const handleOpacity3 = () => {
            const img3 = document.getElementsByClassName("img33")[0]; // Access the first element in the collection
            img3.classList.add("img33anime"); // Remove the dot before "img11anime"
        }

        useEffect(() => {
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              svgg.current.classList.add("active");
              console.log(svgg.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                svgg.current.classList.remove("active");
              }
          });

          



          const observer3 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                cardDrag.current.classList.add("active");
              console.log(cardDrag.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                cardDrag.current.classList.remove("active");
              }
          });


          const observer4 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                cardDrag2.current.classList.add("active");
              console.log(cardDrag2.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                cardDrag2.current.classList.remove("active");
              }
          });

          const observer5 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                cardDrag3.current.classList.add("active");
              console.log(cardDrag3.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                cardDrag3.current.classList.remove("active");
              }
          });



          const observer6 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                suiteTexte.current.classList.add("active");
              console.log(suiteTexte.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                suiteTexte.current.classList.remove("active");
              }
          });


          const observer7 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                citafre.current.classList.add("active");
              console.log(citafre.current.classList); // Vérifiez la classe ajoutée
            }else {
                // Enlève la classe si l'élément n'est plus dans la vue
                citafre.current.classList.remove("active");
              }
          });



    
          
          


        
          observer.observe(svgg.current);
         
          observer3.observe(cardDrag.current);
          observer4.observe(cardDrag2.current);
          observer5.observe(cardDrag3.current);
          observer6.observe(suiteTexte.current);
          observer7.observe(citafre.current);
        }, []);


        const showTitle = ()=>{
            setShowTitleCard1(true);
            console.log("hello");
        }

        const showTitle2= ()=>{
            setShowTitleCard2(true);
        }

        const showTitle3 = ()=>{
            setShowTitleCard3(true);
        }






        const [isOpen, setIsOpen] = useState(false);
        const openModal = ()=>{
            setIsOpen(!isOpen);
        }










  return (
    <div className='h-[360vh] gr2 '>
            <div className='h-screen flex flex-col'>
    <NavBar />
    <div className='h-20 flex justify-center items-center aflouter rounded-br rounded-bl p-2'>
        <h2 className='font-bold text-white text-2xl'>
            Tensions Masculines dans le Monde des Applis de Rencontres
        </h2>
    </div>
    <div className='flex-1 ml-[6vw] px-12 py-6'>
        <div className='w-full h-[800px rounded-lg flex-col flex overflow-y-auto overflow-x-hidden scrdiv relative '>
            
            <div className='w-full h-full '>
                <div className='p-8 '>



                <div className='w-full h-64  rounded-lg flex justify-center items-center '>

                    

                        <div className='pulse3 w-32 h-32 bg-[#00c4ff] rounded-full relative flex justify-center items-center'>
                            <span style={{'--k': 0}}></span>
                            <span style={{'--k': 1}}></span>
                            
                            
                            <img src={LogoT} alt="" className='w-20 h-[72px] z-10 logoo' />

                        </div>

                    
                        
                </div>




                    <div className='w-full max-h-16 rounded-lg flex justify-center items-center mt-12'>
                        <p className='text-black text-2xl text-justify p-32'><span className='text-[60px]'>"</span>
                        Les dynamiques complexes du monde des applications de rencontres exposent les hommes à diverses tensions, 
                        les poussant à naviguer dans un paysage où les attentes sociales en matière de masculinité sont omniprésentes.
                        <span className='text-[60px]'>"</span></p>
                    </div>


                        <div className='flex justify-center items-center w-full h-32 mt-8 '>
                            <div className='flex gap-12'>

                                <span className='rounded-lg floatt' style={{'--i': 0}}>
                                    <img src={tinderimg} alt="" className='w-20 h-20 rounded-2xl shadow-lg floatt' />
                                </span>
                                <span style={{'--i':1}} className='floatt'>
                                    <img src={BadooImg} alt="" className='w-20 h-20 rounded-2xl shadow-lg ' />
                                </span>
                                <span className='w-20 h-20 bg-[#FE5A84] rounded-2xl shadow-lg p-1 floatt' style={{'--i': 0}}>
                                    <img src={fruitzImg} alt="" />
                                </span>
                                <span style={{'--i': 2}} className='floatt'>
                                    <img src={hapn} alt="" className='w-20 h-20 rounded-2xl shadow-lg' />
                                </span>

                                <span style={{'--i': 3}} className='floatt'>
                                    <img src={meetic} alt="" className='w-20 h-20 rounded-2xl shadow-lg' />
                                </span>

                                <span style={{'--i': 4}} className='floatt'>
                                    <img src={Hinge} alt="" className='w-20 h-20 rounded-2xl shadow-lg' />
                                </span>

                            </div>
                        </div>
                        <div className='w-full max-h-16  rounded-lg flex justify-center items-center'>
                            <p className='text-black text-sm'>
                            Les hommes peuvent alors rencontrer des problèmes d'ordre psycho-sociologique 
                            qui peuvent être caractérisés sous formes de :
                            </p>
                        </div>
                        <div className='w-full max-h-16 rounded-lg flex justify-center items-center mt-8'>
                            <span className='textgr font-bold text-3xl flex text-center justify-center items-center gap-2'>Pression
                                <span className='text-sm '>
                             [ pour Correspondre à des Normes de Masculinité ]
                                </span>
                            </span>
                        </div>
                        
                        <div className='w-full  h-96 flex justify-center items-center gap-[240px] mt-16'>

                            <div className='flex  cardDrag11' ref={cardDrag}> 
                                    <div className='w-52 h-[350px]  shadow-2xl rounded-lg border-2 border-[#b35574] relative '>
                                        <img src={pp1after} alt="" className='absolute w-full h-full rounded' draggable={false}/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag ="x"
                                        dragConstraints={{ left: -200, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle}
                                        onDragEnd={handleOpacity}
                                        >

                                        <img src={pp1before} alt="" className='absolute w-full h-full img11 cursor-pointer' draggable={false}/>
                                        <button className=' bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 '>
                                            <span className='flex justify-around items-center'>
                                                <span className='text-xl'>
                                                        Drag
                                                </span>
                                                <span className='relative'>
                                                    <div className='pulse'>
                                                    <div className='w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]'>
                                                    <span style={{'--j': 0}}></span>
                                                    <span style={{'--j': 1}}></span>
                                                    </div>
                                                    </div>
                                                    <FaRegHandPointLeft size={25} className=''/>

                                                </span>
                                            </span>
                                        </button>
                                    </motion.div>
                                    </div>
                                    
                                </div>





                                

                                <div className='flex cardDrag21' ref={cardDrag2}> 
                                    <div className='w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative '>
                                        <img src={pp2after} alt="" className='absolute w-full h-full rounded' draggable={false}/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag ="x"
                                        dragConstraints={{ left: -200, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle2}
                                        onDragEnd={handleOpacity2}
                                        >

                                        <img src={pp2before} alt="" className='absolute w-full h-full img22 cursor-pointer' draggable={false}/>
                                        <button className=' bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 '>
                                            <span className='flex justify-around items-center'>
                                                <span className='text-xl'>
                                                        Drag
                                                </span>
                                                <span className='relative'>
                                                    <div className='pulse'>
                                                    <div className='w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]'>
                                                    <span style={{'--j': 0}}></span>
                                                    <span style={{'--j': 1}}></span>
                                                    </div>
                                                    </div>
                                                    <FaRegHandPointLeft size={25} className=''/>

                                                </span>
                                            </span>
                                        </button>
                                    </motion.div>
                                    </div>
                                    
                                </div>






                                <div className='flex cardDrag31' ref={cardDrag3}> 
                                    <div className='w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative '>
                                        <img src={pp3after} alt="" className='absolute w-full h-full rounded' draggable={false}/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag ="x"
                                        dragConstraints={{ left: -200, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle3}
                                        onDragEnd={handleOpacity3}
                                        >

                                        <img src={pp3before} alt="" className='absolute w-full h-full img33 cursor-pointer' draggable={false}/>
                                        <button className=' bg-white text-[#E0861B] absolute py-2 px-6 bottom-0 left-0 right-0 '>
                                            <span className='flex justify-around items-center'>
                                                <span className='text-xl'>
                                                        Drag
                                                </span>
                                                <span className='relative'>
                                                    <div className='pulse'>
                                                    <div className='w-4 h-4 bg-[#ff0055] absolute opacity-40 rounded-full right-5 top-[2px]'>
                                                    <span style={{'--j': 0}}></span>
                                                    <span style={{'--j': 1}}></span>
                                                    </div>
                                                    </div>
                                                    <FaRegHandPointLeft size={25} className=''/>

                                                </span>
                                            </span>
                                        </button>
                                    </motion.div>
                                    </div>
                                    
                                </div>

                        </div>




                        <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center mt-20'>
                            <p className='text-black text-sm text-justify'>
                            Les hommes sur les applications de rencontres peuvent ressentir une pression intense pour correspondre à des normes culturelles préconçues de la masculinité. 
                            Les attentes traditionnelles, telles que la confiance en soi, l'indépendance émotionnelle et même des caractéristiques physiques spécifiques, peuvent créer une 
                            pression constante. Cela peut conduire à une
                             altération de l'authenticité, les hommes cherchant à projeter une image conforme aux attentes plutôt que de montrer leur véritable identité.
                            </p>
                        </div>





                        <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center flex-col mt-12'>
                            <p className='text-black text-sm'>
                            Certains comportements aparaissent pour apaiser cette pression comme <span className='font-bold text-base'>" la façace sociale "</span> ou <span className='font-bold text-base'>" le conformisme social "</span>
                            </p>
                            <p className='text-black text-sm'>
                            Découvrez comment ils apparaissent en glissant les cartes !
                            </p>
                        </div>
                        <div className='w-full justify-center flex mt-12'>
                            <table ref={tablee}>
                                <thead>
                                    <tr>
                                        <th>
                                            Comportement 1
                                        </th>
                                        <th>
                                            Comportement 2
                                        </th>
                                        <th>
                                            Comportement 3
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                            {
                                                showTitlteCard1 ? (
                                                    <>
                                                      <span className='spantableau'>  Les retouches photos ( faible ) </span>
                                                    </>
                                                ) : (
                                                    <>
                                                     <span className='spantableau2'>  Vous avez oublié de draguer la première carte ;) </span> 
                                                    </>
                                                )
                                            }
                                        </td>

                                        <td>
                                        {
                                                showTitlteCard2 ? (
                                                    <>
                                                      <span className='spantableau'> Changement de style vestimentaire drastique</span>
                                                    </>
                                                ) : (
                                                    <>
                                                     <span className='spantableau2'>  Vous avez oublié de draguer la première carte ;) </span> 
                                                    </>
                                                )
                                            }
                                        </td>
                                        <td>
                                        {
                                                showTitlteCard3 ? (
                                                    <>
                                                      <span className='spantableau'> Les retouches photos ( fort ) </span>
                                                    </>
                                                ) : (
                                                    <>
                                                     <span className='spantableau2'>  Vous avez oublié de draguer la première carte ;) </span> 
                                                    </>
                                                )
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                       
                    <div>
                        

                    <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center mt-12'>
                            <span className='textgr font-bold text-3xl flex text-center justify-center items-center gap-2'>Comparaison sociale et concurrence
                                <span className='text-sm '>
                             
                                </span>
                            </span>
                        </div>

                        <div className='w-full max-h-64  rounded-lg flex justify-around items-center mt-20'>
                            <div className='h-48 w-full border-gradient2 p-4 rounded-lg z-10'>
                                <div className='bg-white w-full h-full flex justify-center items-center '>
                                        <p className='text-sm text-black text-justify'>
                                        La compétition dans les applications de rencontres crée une atmosphère où les hommes se comparent constamment les uns aux autres. On évalue non seulement l'apparence, 
mais aussi le succès professionnel, l'intelligence, et d'autres critères sociaux. Cette comparaison constante peut rendre certains hommes anxieux et moins sûrs d'eux, ce qui rend 
la recherche d'un partenaire plus stressante. En d'autres termes, l'environnement compétitif de ces applications peut susciter des sentiments d'insécurité et d'infériorité chez certains 
hommes, compliquant ainsi leur quête de relations amoureuses.
                                        </p>
                                </div>
                            </div>

                            <motion.div className='h-48 w-full border-gradient p-4 cardtextedroite z-9 ' ref={suiteTexte} drag = "x" dragConstraints={{ left: -715, right: 0 }} initial={{ x: -715 }} >
                                <div className='bg-white w-full h-full flex justify-center items-center gap-8 '>
                                        <div className='w-[90%] flex justify-center items-center  h-full'>
                                        <p className='text-sm text-black text-justify '>
                                        Cette pression permanente de se mesurer aux autres peut également créer un climat anxiogène, où les individus se sentent 
                                        constamment jugés par des critères parfois idéalisés. En résumé, la compétition et la comparaison sociale dans ces applications peuvent avoir des conséquences significatives sur le 
                                        bien-être émotionnel des hommes qui y participent, soulignant la nécessité d'une réflexion sur les dynamiques induites par ces plateformes de rencontres.
                                        </p>
                                        </div>
                                        <div className='w-[10%] border-2 border-[#ff0055] text-[#ff0055] rounded-lg  h-full flex justify-center items-center flex-col'>
                                        <button className='w-full h-full'>
                                            <p>
                                                suite
                                            </p>
                                            <span className='relative flex justify-center items-center'>
                                                    <div className='pulse2'>
                                                    <div className='w-4 h-4 bg-[#E0861B] absolute opacity-40 rounded-full top-[-6px] right-0'>
                                                    <span style={{'--j': 0}}></span>
                                                    <span style={{'--j': 1}}></span>
                                                    </div>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <FaRegHandPointRight size={25}/>
                                                    <FaArrowsAltH  size={25}/>
                                                    </div>
                                                    


                                                </span>
                                        </button>
                                        </div>

                                </div>
                            </motion.div>
                        </div>



                       

                        
                        <div className='w-full max-h-[350px] bg-white rounded-lg flex justify-around items-center mt-20 relative'>
                        <div className='text-black'>
                        <div className='svgg' ref={svgg}>                                         
                                            <img src={svg} alt=""  />
                                             </div>
                        </div>
                        <div>
                        <iframe className='rounded-lg shadow-xl border-4 border-[#E0861B]' width="560" height="315" src="https://www.youtube.com/embed/tiDNAr9lFuc?si=a_yoIZBgvx802qkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                        </div>
                    </div>
                    <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center mt-12'>
                            <span className='textgr font-bold text-3xl flex text-center justify-center items-center gap-2'>Peur du Rejet ou de l'Échec sur la Santé Mentale Masculine
                                <span className='text-sm '>
                                            
                                </span>
                            </span>
                        </div>
                                    
                        <div className='w-full max-h-32  bg-white rounded-lg  mt-8 '>
                            <div className='w-[70%] h-full bg-white border-[#ff0055] rounded-lg shadow-lg border-4 mx-auto'>
                                <p className='p-4 text-black text-sm text-justify'>
                                
                                La nature impitoyable des rencontres en ligne peut entraîner des expériences fréquentes de rejet ou d'échec. Les hommes peuvent réagir différemment 
                                à ces situations, mais pour beaucoup, cela peut avoir un impact significatif sur leur santé mentale. La répétition des rejets peut créer des sentiments de désespoir, 
                                d'anxiété sociale et de dévalorisation personnelle. 
                                Certains hommes peuvent internaliser ces expériences négatives, compromettant ainsi leur estime de soi et leur bien-être émotionnel.
                                </p>
                            </div>
                        </div>

                        <div className='w-full h-96  bg-white rounded-lg  mt-8 '>
                            <div className='w-[100%] h-full bg-white  rounded-lg shadow-xl mx-auto flex justify-around items-center'>
                                
                                <div className='h-full w-full flex justify-center items-center'>
                                <iframe className='iframeetu rounded-lg shadow-xl border-4 border-[#E0861B]' width="560" height="315" src="https://www.youtube.com/embed/KR4o1i6uyjk?si=ocmoMT2Dz77fO99n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                </div>
                                <div className=' h-full w-full flex justify-center items-center relative'>
                                <p className='text-black text-2xl absolute top-0 left-0 p-4'>
                                            Témoignage de Karime Baudouin : <br />
                                            <i className='text-base'>Etudiant en BUT GEII</i> 

                                        </p>
                                        <div className='flex max-h-32 w-[80%] border-[#ff0055]'>                                       
                                            <p className='italic text-black citafre textgr' ref={citafre}>
                                            Tu peux être affecté par certaines choses sur l'application, comme le fait de ne pas avoir de likes.
                                            Le fait de catégoriser ou de se faire catégoriser peut baisser le morale où le monter.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>





                        <div className='w-full max-h-32  bg-white rounded-lg  mt-8 '>
                            <div className='w-[85%] h-full gradient bg-cover  rounded-lg shadow-lg border-4 mx-auto'>
                                <p className='p-4 text-white text-xl text-justify'>
                                
                                En somme, les tensions masculines dans le monde des applications de rencontres sont profondément ancrées dans les normes culturelles et les dynamiques sociales. 
                                Comprendre ces pressions est essentiel 
                                pour favoriser des interactions plus saines et promouvoir la santé mentale des hommes engagés dans ces espaces virtuels de recherche d'amour.
                                </p>
                            </div>
                        </div>

                        <div className='w-full h-16 flex justify-center items-center rounded-lg  mt-8 '>
                            <div className='flex gap-8'>
                            <button className='rounded-lg px-8 py-3 text-white bg-blue-500 shadow-lg opacity-80 hover:opacity-100 ease-out duration-200' onClick={openModal}>
                                    Sources
                            </button>
                            <button
                                    className='rounded-lg px-8 py-3 text-white bg-purple-400 shadow-lg opacity-80 hover:opacity-100 ease-out duration-200'
                                    onClick={() => window.location.href = '/Part2'}
                                    >
                                    Partie 2
                            </button>
                            </div>

                        </div>



                        


                </div>
                        







                </div>
                

         </div>


                                               
            
        </div>
        
    </div>
</div>


           <Modal isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
    </div>
  )
}

export default Mainlayoutpart1