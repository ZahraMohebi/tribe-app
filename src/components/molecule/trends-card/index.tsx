const TrendsCard = () => {
  return (
    <div className="px-6 py-4 flex flex-col  overflow-hidden shadow-lg rounded-2xl bg-primary">
      <p className="font-bold text-lg text-gray mb-4">Trends for you</p>
      <div className="flex flex-col gap-4 py-3 border-b-2 border-gray">
          <span className="text-xs text-gray font-light">Space name</span>
          <div className="flex flex-row justify-between">
          <p className="font-bold text-base text-gray ">#New stuff</p>
          <p className="font-bold text-base text-gray ">Show</p>
          </div>
      </div>
      <div className="flex flex-col gap-4 py-3 border-b-2 border-gray">
          <span className="text-xs text-gray font-light">Space name</span>
          <div className="flex flex-row justify-between">
          <p className="font-bold text-base text-gray ">#New stuff</p>
          <p className="font-bold text-base text-gray ">Show</p>
          </div>
      </div>
      <div className="flex flex-col gap-4 py-3 border-b-2 border-gray">
          <span className="text-xs text-gray font-light">Space name</span>
          <div className="flex flex-row justify-between">
          <p className="font-bold text-base text-gray ">#New stuff</p>
          <p className="font-bold text-base text-gray ">Show</p>
          </div>
      </div>
      <div className="flex flex-col gap-4 py-3 border-b-2 border-gray">
          <span className="text-xs text-gray font-light">Space name</span>
          <div className="flex flex-row justify-between">
          <p className="font-bold text-base text-gray ">#New stuff</p>
          <p className="font-bold text-base text-gray ">Show</p>
          </div>
      </div>
      <div className="flex flex-col gap-4 py-3 ">
          <span className="text-xs text-gray font-light">Space name</span>
          <div className="flex flex-row justify-between">
          <p className="font-bold text-base text-gray ">#New stuff</p>
          <p className="font-bold text-base text-gray ">Show</p>
          </div>
      </div>

      <a className="text-dark-blue font-bold mt-4">Show More</a>
      
    </div>
  );
};

export default TrendsCard;
