import React, { useEffect } from 'react';
import ReactPortal from '@/hooks/reactPortal';
import { motion } from "framer-motion";

interface BlogModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
    imageUrl: string;
}

const BlogModal = ({ children, isOpen, handleClose, imageUrl } : BlogModalProps) => {

    const modalVariants = {
        hidden: { opacity: 0, y: "-100vh" },
        visible: { opacity: 1, y: 0 }
    };
      
      const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    useEffect(() => {
        const closeonEscapeKey = (e: KeyboardEvent) => 
            e.key === 'Escape' ? handleClose() : null;
            document.body.addEventListener('keydown', closeonEscapeKey);
            return () => {
                document.body.removeEventListener('keydown', closeonEscapeKey);
            };
    }, [handleClose]);

    useEffect(() => {
        if(isOpen){
        document.body.style.overflow = 'hidden';
        }
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen){
        console.log("Closing article.")
        return null;
    } 
    
    return(
    <ReactPortal wrapperId="react-portal-modal-container">
        <>
        {/* Overlay */}
            <motion.div 
                className="fixed inset-0 z-40 bg-black/30"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                transition={{ duration: 0.5 }}
            >

                {/* Modal */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-4">
                    <motion.div 
                        className="relative bg-white rounded-lg shadow max-w-full h-full w-full p-6 overflow-auto max-w-prose mx-auto"
                        onClick={(e) => e.stopPropagation()}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={modalVariants}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Close Button */}
                        <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                                onClick={handleClose}>
                            Close
                        </button>
                        <img src={imageUrl} alt="Class image" className="mb-4 w-full h-auto rounded" />
                        {children}
                    </motion.div>
                </div>
            </motion.div>
        </>
    </ReactPortal>
    )
}

export default BlogModal;