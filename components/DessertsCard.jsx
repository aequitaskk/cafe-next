import Image from "next/image";

const DessertsCard = ({ imgUrl }) => {
  return (
    <div className="mx-auto">
      <Image src={imgUrl} width={1000} height={1000} className="rounded-xl h-[180] w-[220px] lg:h-[200px] lg:w-[300px] object-cover"/>
    </div>
  );
};

export default DessertsCard;
