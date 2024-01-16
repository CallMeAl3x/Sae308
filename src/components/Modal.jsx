import * as React from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInfo } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";

export const Modal = ({ isOpen, setIsOpen, openModal,etatModal2,setEtatModal2,etatModal1,setEtatModal1,etatModal3,setEtatModal3 }) => {
  return (
    <AnimatePresence>
      {isOpen && etatModal1 && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
          <div className="flex flex-col py-8 px-4 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">
                &#8203;
              </span>

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                <div className={` px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-white `}>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-red-200 sm:mx-0 sm:h-10 sm:w-10">
                      <FaInfo size={25} color="#ff0055" />
                    </div>
                    <div
                      className={`mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left`}>
                      <Dialog.Title
                        as="h3"
                        className={`text-lg leading-6 font-bold  text-[#000]`}
                        id="modal-headline">
                        Sources
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description
                          as="p"
                          className={`text-sm text-blue-500`}>
                          <a href="https://bmcpsychology.biomedcentral.com/articles/10.1186/s40359-020-0373-1?fd=5317710456904024%7C5456507360795513&lp=/dating-apps-mental-health#Sec20">
                            Comportements des utilisateurs sur les applications
                            de rencontres
                          </a>
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={` px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse  "bg-gray-50" `}>
                  <button
                    type="button"
                    tabIndex={0}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#ff0055e8] text-base font-medium text-white hover:bg-[#ff0055] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0055] sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}>
                    Continuer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
      {isOpen && etatModal2 && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
          <div className="flex flex-col py-8 px-4 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">
                &#8203;
              </span>

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                <div className={` px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-white `}>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-red-200 sm:mx-0 sm:h-10 sm:w-10">
                      <CgDanger size={30} color="#ff0055" />
                    </div>
                    <div
                      className={`mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left`}>
                      <Dialog.Title
                        as="h3"
                        className={`text-lg leading-6 font-bold  text-[#000]`}
                        id="modal-headline">
                        Tu n'es plus en bonne santé !
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description
                          as="p"
                          className={`text-sm text-gray-400`}>
                          <p>
                          "Tu l'as vu, tes barres sont toutes proches de 0, mais pourquoi ? <br />
                            Les applications de rencontres ont du <span className=" text-emerald-400 ">positif</span> comme du <span className=" text-red-400 ">négatif</span>. 
                            Parmi le <span className=" text-emerald-400 font-bold">positif</span>, on peut compter le fait d'être heureux lorsque l'on matche ou que l'on parle à une 
                            personne. <span className=" text-red-400 font-bold">Cependant</span>, ces applications sont vite addictives et l'on commence vite à ne plus faire attention 
                            à ce qui nous entoure. Dans la simulation, tu te laissais consumer en continuant de swiper. C'est quelque chose qu'il faut à tout prix éviter !"
                          </p>
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={` px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse  "bg-gray-50" `}>
                  <button
                    type="button"
                    tabIndex={0}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#ff0055e8] text-base font-medium text-white hover:bg-[#ff0055] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0055] sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}>
                    Continuer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
      {isOpen && etatModal3 && (
        <Dialog
          open={isOpen}
          onClose={setIsOpen}
          as="div"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto">
          <div className="flex flex-col py-8 px-4 text-center">
            <Dialog.Overlay />
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <motion.div
              className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.15,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                  ease: "easeIn",
                  duration: 0.15,
                },
              }}>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">
                &#8203;
              </span>

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                <div className={` px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-white `}>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-red-200 sm:mx-0 sm:h-10 sm:w-10">
                      <CgDanger size={30} color="#ff0055" />
                    </div>
                    <div
                      className={`mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left`}>
                      <Dialog.Title
                        as="h3"
                        className={`text-lg leading-6 font-bold  text-[#000]`}
                        id="modal-headline">
                        Tu n'es plus en bonne santé !
                      </Dialog.Title>
                      <div className="mt-2">
                        <Dialog.Description
                          as="p"
                          className={`text-sm text-gray-400`}>
                          <p>
                          "Tu l'as vu, tes barres sont toutes proches de 0, mais pourquoi ? <br />
                            Les applications de rencontres ont du <span className=" text-emerald-400 ">positif</span> comme du <span className=" text-red-400 ">négatif</span>. 
                            Parmi le <span className=" text-emerald-400 font-bold">positif</span>, on peut compter le fait d'être heureux lorsque l'on matche ou que l'on parle à une 
                            personne. <span className=" text-red-400 font-bold">Cependant</span>, ces applications sont vite addictives et l'on commence vite à ne plus faire attention 
                            à ce qui nous entoure. Dans la simulation, tu te laissais consumer en continuant de swiper. C'est quelque chose qu'il faut à tout prix éviter !"
                          </p>
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={` px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse  "bg-gray-50" `}>
                  <button
                    type="button"
                    tabIndex={0}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#ff0055e8] text-base font-medium text-white hover:bg-[#ff0055] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0055] sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setIsOpen(false)}>
                    Continuer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
