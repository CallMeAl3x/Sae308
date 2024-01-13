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



function Mainlayoutpart1() {



        const[showTitlteCard1,setShowTitleCard1] = useState(false);
        const[showTitlteCard2,setShowTitleCard2] = useState(false);
        const[showTitlteCard3,setShowTitleCard3] = useState(false);


        const svgg = useRef();

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
        
          observer.observe(svgg.current);
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



  return (
    <div className='h-[140vh] gradient bg-cover '> <NavBar/>
            <div className='h-screen flex flex-col'>
    <NavBar />
    <div className='h-20 flex justify-center items-center aflouter rounded-br rounded-bl p-2'>
        <h2 className='font-bold text-2xl'>
            Tensions Masculines dans le Monde des Applis de Rencontres
        </h2>
    </div>
    <div className='flex-1 ml-[6vw] px-12 py-6'>
        <div className='w-full h-[800px] bg-white rounded-lg flex-col flex overflow-y-auto scrdiv shadow-2xl'>
            
            <div className='w-full h-full '>
                <div className='p-8 '>
                    <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center'>
                        <p className='text-black text-sm'>
                        Les dynamiques complexes du monde des applications de rencontres exposent les hommes à diverses tensions, 
                        les poussant à naviguer dans un paysage où les attentes sociales en matière de masculinité sont omniprésentes.
                        </p>
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
                        <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center'>
                            <p className='text-black text-sm'>
                            Les hommes peuvent alors rencontrer des problèmes d'ordre psycho-sociologique 
                            qui peuvent être caractérisés sous formes de :
                            </p>
                        </div>
                        <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center mt-8'>
                            <span className='textgr font-bold text-3xl flex text-center justify-center items-center gap-2'>Pression
                                <span className='text-sm '>
                             [ pour Correspondre à des Normes de Masculinité ]
                                </span>
                            </span>
                        </div>
                        
                        <div className='w-full  h-96 flex justify-center items-center gap-[180px] mt-16'>

                            <div className='flex '> 
                                    <div className='w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative '>
                                        <img src={pp1after} alt="" className='absolute w-full h-full rounded'/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag
                                        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle}
                                        >

                                        <img src={pp1before} alt="" className='absolute w-full h-full'/>
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





                                

                                <div className='flex '> 
                                    <div className='w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative '>
                                        <img src={pp2after} alt="" className='absolute w-full h-full rounded'/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag
                                        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle2}
                                        >

                                        <img src={pp2before} alt="" className='absolute w-full h-full'/>
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






                                <div className='flex '> 
                                    <div className='w-52 h-[350px] bg-white shadow-2xl rounded-lg border-2 border-[#ff0055] relative '>
                                        <img src={pp3after} alt="" className='absolute w-full h-full rounded'/>
                                    <motion.div
                                        className='w-52 h-[350px] bg-white rounded-lg border-2 border-[#E0861B] ml-4 absolute overflow-hidden'
                                        drag
                                        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
                                        onDragStart={showTitle3}
                                        >

                                        <img src={pp3before} alt="" className='absolute w-full h-full'/>
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
                            <table>
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

                        <div className='w-full max-h-16 bg-white rounded-lg flex justify-center items-center mt-20'>
                            <p className='text-black text-sm text-justify'>
                            
La compétition dans les applications de rencontres crée une atmosphère où les hommes se comparent constamment les uns aux autres. On évalue non seulement l'apparence, 
mais aussi le succès professionnel, l'intelligence, et d'autres critères sociaux. Cette comparaison constante peut rendre certains hommes anxieux et moins sûrs d'eux, ce qui rend 
la recherche d'un partenaire plus stressante. En d'autres termes, l'environnement compétitif de ces applications peut susciter des sentiments d'insécurité et d'infériorité chez certains 
hommes, compliquant ainsi leur quête de relations amoureuses. Cette pression permanente de se mesurer aux autres peut également créer un climat anxiogène, où les individus se sentent 
constamment jugés par des critères parfois idéalisés. En résumé, la compétition et la comparaison sociale dans ces applications peuvent avoir des conséquences significatives sur le 
bien-être émotionnel des hommes qui y participent, soulignant la nécessité d'une réflexion sur les dynamiques induites par ces plateformes de rencontres.
                            </p>
                        </div>



                       

                        
                        <div className='w-full max-h-[350px] bg-white rounded-lg flex justify-around items-center mt-20 relative'>
                        <div className='text-black'>
                        <div className='svgg' ref={svgg}>                                         
                                            <img src={svg} alt=""  />
                                             </div>
                        </div>
                        <div>
                            <iframe className='rounded-lg shadow-lg iframe1' width="560" height="315" src="https://www.youtube.com/embed/WbhvBbmeKP8?si=4vTMpqjRVr98o-JT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>


                </div>
                        







                </div>
                

         </div>



            
        </div>
    </div>
</div>

           
    </div>
  )
}

export default Mainlayoutpart1