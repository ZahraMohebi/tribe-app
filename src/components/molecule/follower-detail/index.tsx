import { FC } from "react";
import Button from "../../atom/button";
import Profile from "../../atom/profile";
import { followerDetailPropsTypes } from "./types";

const FollowerDetail: FC<followerDetailPropsTypes> = (
  props: followerDetailPropsTypes
) => {
  const { image, name, role } = props;
  return (
    <div className="flex flex-row justify-between items-center ">
      <div className="flex flex-row gap-4">
        <Profile image={image} width="w-12" height="h-12" />
        <div className="flex flex-col gap-1">
          <p className="text-base text-gray">{name}</p>
          <p className="text-sm text-gray">@ {role}</p>
        </div>
      </div>

      <Button bg="bg-white" color="text-primary" className="p-1 w-20 h-8 ">
        Follow
      </Button>
    </div>
  );
};

export default FollowerDetail;
