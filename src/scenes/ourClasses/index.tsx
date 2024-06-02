import { SelectedPage, ClassType } from "@/shared/types"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import classes from "./constants";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {

  return (
    <section id="articles" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Articles)}
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
            <HText>Smiles Unveiled</HText>
            <p className="py-5">
              Insights and Innovations from a Dentist's Perspective
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
                content={item.content}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses