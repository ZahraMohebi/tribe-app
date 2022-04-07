import FollowerDetail from "../follower-detail";

const FollowerCard = () => {
  return (
    <div className="px-6 py-4 flex flex-col space-y-4 overflow-hidden shadow-lg rounded-2xl bg-primary">
      <p className="font-bold text-lg text-gray mb-4">Who is to follow you</p>
      <FollowerDetail
        role={"admin"}
        name={"Nill"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&usqp=CAU"
        }
      />
      <FollowerDetail
        role={"Member"}
        name={"John"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&usqp=CAU"
        }
      />
      <FollowerDetail
        role={"Manager"}
        name={"David"}
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1cDnT1Q5ZrkfLfxiSgFvC2ZsjpngynJGvg&usqp=CAU"
        }
      />
    </div>
  );
};

export default FollowerCard;
