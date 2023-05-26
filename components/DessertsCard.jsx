const DessertsCard = ({ imgUrl }) => {
  return (
    <div className="mx-auto relative group overflow-hidden rounded-xl h-[180px] w-[220px] lg:h-[200px] lg:w-[300px]">
      <div className="transform transition-transform ease-out duration-500 group-hover:scale-125 object-cover">
        <img src={imgUrl} layout="fill" />
      </div>
    </div>
  );
};

export default DessertsCard;
