import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> =[
    {
        icon: <HomeModernIcon className="h-6 -w6"/>,
        title: "State of the Art Facilities",
        description: "Innovative dental technology meets luxury in a tranquil, modern setting."
    },
    {
        icon: <UserGroupIcon className="h-6 -w6"/>,
        title: "100's of Diverse Cases",
        description: "From young professionals seeking advanced cosmetic dentistry, to seniors maintaining their oral health, to families prioritizing dental care for all ages."
    },
    {
        icon: <AcademicCapIcon className="h-6 -w6"/>,
        title: "Highest Standards of Hygiene and Cleanliness",
        description: "Exemplary cleanliness with top-tier sterilization practices for ultimate patient safety."
    }
];

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ( {setSelectedPage} : Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}    
        >
            {/* HEADER */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>Smile Sanctuary</HText>
                <p className="my-5 text-sm">
                Redefining dental care, blending advanced dentistry with a spa-like atmosphere. 
                From routine check-ups to cosmetic transformations, patients enjoy a tranquil, nurturing environment where their comfort and health are the top priority.
                </p>
            </motion.div>

            {/* Benefits */}
            <motion.div 
                className="mt-5 items-center justify-between gap-8 md:flex"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount:0.5}}
                variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                />
            ))}
            </motion.div>

            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap20 md:mt-28 md:flex">
                {/* Graphic */}
                <img 
                    src={BenefitsPageGraphic} 
                    alt="benefits-page-graphic" 
                    className="mx-auto"
                />
                {/* Description */}
                <div>
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}                                
                            >
                                <HText>
                                    MANY OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="my-5">
                        Many find more than dental care; they discover a haven of well-being. 
                        With expert dentistry, state-of-the-art facilities, and a serene, spa-like environment, patients experience transformative dental treatments. 
                        It's a unique blend of healthcare and relaxation, where every visit contributes to their overall health and happiness.
                        </p>

                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits