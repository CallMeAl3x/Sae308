const MainLayoutSources = () => {
    return (
        <div className="lg:p-24 p-6 max-w-7xl lg:ml-auto lg:mr-auto lg:mt-32 mt-6 text-almost-black">
            <h2 className="text-center text-3xl">Nos conseils</h2>
            <div className="flex  justify-evenly mt-8 flex-col lg:flex-row lg:items-start items-center gap-6 lg:gap-0">
                <div className="flex flex-col">
                    <p className="text-center text-2xl">Par un utilisateur ( utilisation régulière )</p>
                    <iframe
                className="rounded-lg shadow-xl lg:w-[460px] lg:h-[315px] w-[300px] h-[200px] border-2 border-white mt-6"
                src="https://www.youtube.com/embed/rY20ubOasGI?si=VS5j6UABCUp13TIi"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
                    <div className="relative">
                    <div className="hidden lg:block absolute top-[81%] left-[18%] rotate-90">
                        <audio src=""></audio>
                    </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="text-center  text-2xl">Par un utilisateur : ( utilisation occasionelle )</p>
                    <iframe
                className="rounded-lg shadow-xl lg:w-[460px] lg:h-[315px] w-[300px] h-[200px] border-2 ml-auto mr-auto border-white mt-6"
                src="https://www.youtube.com/embed/P-TLTlX_eZ8?si=3IBsUQDPznvLItpv"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>

                </iframe>
                </div>
            </div>

            <div className="flex w-full justify-center items-center flex-col">
                <h3 className="text-4xl mt-12">Ne Pas Prendre le Rejet Personnellement</h3>
                <p className="max-w-3xl mt-12">
                Il est important de se rappeler que les interactions sur les applications de rencontre ne reflètent pas toujours la réalité. Faites abstraction de ce que pensent les autres et essayer de ne pas s'impliquer émotionnellement trop rapidement. Cela vous aidera à gérer les rejets plus facilement et à rester confiant dans votre quête de relations significatives.
                </p>

                <h3 className="text-4xl mt-12">
                Ne Pas Prendre Trop de Temps
                </h3>

                <p className="max-w-3xl mt-12">
                Les applications de rencontre peuvent être chronophages. Pour éviter de devenir dépendant, limitez le temps peut être une bonne idée. Fixez-vous des limites quotidiennes ou hebdomadaires pour utiliser ces applications. Cela vous aidera à équilibrer votre temps entre la recherche de partenaires potentiels et d'autres activités importantes de votre vie, pour ainsi avoir un mode de vie sain et équilibré.
                </p>

                <h3 className="text-4xl mt-12">
                Rester Prudent avec les Rencontres
                </h3>

                <p className="max-w-3xl mt-12">
                Le conseil suivant serait de connaitre ses limites et d'éviter de partager des informations personnelles sensibles telles que votre adresse . Prenez le temps de connaître la personne avant de planifier une rencontre en personne. Une approche prudente garantit votre sécurité et contribue à une expérience positive.
                </p>

                <h3 className="text-4xl max-w-xl text-center mt-12">
                Envisager de Ne Pas Utiliser les Applications de Rencontre
                </h3>

                <div className="relative">
                    <div className="absolute top-[140%] left-[-100%] w-[249.5%] bg-black h-1"></div>
                    <p className="max-w-3xl mt-12">
                    Pour certains, la meilleure stratégie peut être de ne pas utiliser les applications de rencontre. Les défis et les risques associés à leur utilisation, comme la dépendance, le rejet, ou les mauvaises rencontres, peuvent être évités. L'alternative pourrait être les rencontres par des amis communs, des événements sociaux, ou des hobbies permettant d'offrir des opportunités de rencontre plus naturelles et moins stressantes.
                    </p>

                </div>

                <h3 className="text-4xl mt-32 text-center">
                Pour en savoir plus <br />
                Interviews complètes
                </h3>

                <div className="flex gap-24 mt-8">
                    <iframe
                    className="rounded-lg shadow-xl lg:w-[460px] lg:h-[315px] w-[300px] h-[200px] border-2 ml-auto mr-auto border-white mt-6"
                    src="https://www.youtube.com/embed/WDXosprz90o?si=CN1YoyBurAUaomfX"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

                    </iframe>
                    <iframe
                    className="rounded-lg shadow-xl lg:w-[460px] lg:h-[315px] w-[300px] h-[200px] border-2 ml-auto mr-auto border-white mt-6"
                    src="https://www.youtube.com/embed/fhMV2YGFHvI?si=N55RpZN75nnrHkfy"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>

                    </iframe>
                </div>
            </div>
        </div>
     );
}
 
export default MainLayoutSources;