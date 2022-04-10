import { Image } from "@tribeplatform/gql-client/types";
import { FC } from "react";
import Profile from "../../atom/profile";
import { UserInfoCardType } from "./types";


const UserInfoCard: FC<UserInfoCardType> = (props: UserInfoCardType) => {
  const { user } = props;

  return (
    <div className="overflow-hidden shadow-lg rounded-2xl bg-primary">
      <div className="h-16 w-full lg:h-48 bg-blue flex justify-center">
        <Profile
          image={(user?.profilePicture as Image)?.url}
          width="w-28"
          height="h-28"
          className=" absolute top-40"
        />
      </div>
      <div className="px-6 py-4 flex flex-col text-center items-center relative">
        <div className="font-bold text-xl mb-2 mt-8 text-gray ">
          {user?.name}
        </div>
        {user?.fields?.map((item, index) => {
          return item.key === "bio" ? (
            <p
              className="text-gray text-base"
              key={index}
              dangerouslySetInnerHTML={{ __html: `${item.value}` }}
            />
          ) : (
            <p className="text-gray text-base" key={index}>
              Welcome to this community
            </p>
          );
        })}
      </div>
      <div className="px-6 py-4 ">
        <span className="inline-block bg-blue rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
          {user?.tagline}
        </span>
        <span className="inline-block bg-blue rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
          {user?.role?.name}
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
