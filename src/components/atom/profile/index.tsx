import { FC } from "react";

export type ProfilePropsTypes = {
  /**
   * User image address
   */
  image?: string;

  /**
   * Width of icon
   */
  width?: string;

  /**
   * Height of icon
   */
  height?: string;

  /**
   * Extra className
   */
  className?: string;
};

const Profile: FC<ProfilePropsTypes> = (props: ProfilePropsTypes) => {
  const { image, width, height, className } = props;
  return (
    <div className={`rounded-full ${width} ${height} ${className}`}>
      <img className={`rounded-full w-full h-full`} src={image} />
    </div>
  );
};

export default Profile;
