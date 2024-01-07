import { SelectedPage, ClassType } from "@/shared/types"
import image1 from "@/assets/smile.jpg";
import image2 from "@/assets/utensils.jpg";
import image3 from "@/assets/hygiene.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Smile Beautification Expert",
    description:       
      "I specialize in transforming smiles. My work combines artistic skill and dental knowledge to enhance teeth and gum appearance. I focus on procedures like teeth whitening, aligning teeth, and applying veneers. My goal is to boost my clients' confidence with a radiant, healthy smile.",
    image: image1,
  },
  {
    name: "Premium Dental Instruments",
    description:       
    "My premium dental instruments represent the pinnacle of quality and precision. Crafted from superior materials, they ensure unmatched performance and durability. Designed for a wide range of procedures, these tools offer exceptional control and comfort, making them indispensable for providing top-tier dental care and achieving optimal patient outcomes.",
    image: image2,
  },
  {
    name: "Essential Oral Care",
    description:
      "Essential oral care is vital for overall health and well-being. It encompasses regular brushing, flossing, and dental check-ups to prevent tooth decay and gum disease. Good oral hygiene habits maintain a healthy mouth, fresh breath, and a beautiful smile, and also contribute to early detection of dental issues.",
    image: image3,
  },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses