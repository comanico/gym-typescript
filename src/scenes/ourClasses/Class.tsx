import BlogModal from "./BlogModal";
import { useState } from "react";

type Props = {
    name: string;
    description?: string;
    image: string;
    content: string;
}

const Class = ({ name, description, image, content }: Props) => {
  
  const [isModalOpen,setIsModalOpen] = useState<boolean|undefined>();
  
  const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-100 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
          <button onClick={() => setIsModalOpen(true)}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
          </button>
        </div>
        <img src={`${image}`} alt={image} />

        {isModalOpen && (
          <BlogModal 
            isOpen={isModalOpen}
            handleClose={() => setIsModalOpen(!isModalOpen)}
            imageUrl={image}
            >
            <div className="flex flex-col justify-between h-full w-full p-6 space-y-4">
                <p className="text-2xl border-b pb-2">{name}</p>
                {content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mt-5 border p-4">{paragraph}</p>
                ))}
            </div>
          </BlogModal>
        )}
    </li>
  )
}

export default Class