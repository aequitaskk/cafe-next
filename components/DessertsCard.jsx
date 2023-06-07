import Image from "next/image";

const DessertsCard = ({ imgUrl }) => {
  return (
    <div className="flex mx-auto relative group  h-[180px] w-[220px] lg:h-[200px] lg:w-[300px]">
      <div className="flex transform transition-transform ease-out duration-500 group-hover:scale-110">
        <Image src={imgUrl} alt="dessert" width={500} height={500} className="object-cover rounded-xl" />
      </div>
    </div>
  );
};

export default DessertsCard;
