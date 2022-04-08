import { FC } from "react";
import { ProfilePropsTypes } from "./types";



const Profile: FC<ProfilePropsTypes> = (props: ProfilePropsTypes) => {
  const { image, width, height, className } = props;
  return (
    <div className={`rounded-full ${width} ${height} ${className}`}>
      <img className={`rounded-full w-full h-full`} src={image} alt='profile'/>
    </div>
  );
};

export default Profile;
