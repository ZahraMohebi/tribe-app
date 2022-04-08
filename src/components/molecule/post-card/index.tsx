import { FC } from "react";
import Button from "../../atom/button";
import Profile from "../../atom/profile";
import { PostCardPropsTypes } from "./types";


const PostCard: FC<PostCardPropsTypes> = (props: PostCardPropsTypes) => {
  const { post } = props;
  // console.log(post?.owner?.member?.profilePicture?.url)

  return (
    <div className="flex-1 px-4 py-5 sm:p-6 overflow-hidden shadow-lg rounded-2xl bg-primary mb-3">
      <div className="flex flex-row justify-between  items-center mb-4">
        <div className="flex flex-row  gap-5 items-center">
          <Profile
            image={
              "https://tribe-s3-production.imgix.net/W3MaFQVPD8tEBmK2n41g9?w=1000&auto=compress,format&dl"
            }
            
            width="w-14"
            height="h-14"
          />
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row gap-2">
              <p className="text-base text-gray ">{post?.owner?.member?.name}</p>
              <p className="text-base text-gray ">
                @{post?.owner?.member?.username}
              </p>
            </div>
            <p className="text-base text-gray ">Last seen</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#949FA5"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </div>
      <div className="pl-20 ">
        <p className="font-bold text-xl text-gray mb-3">{post?.title}</p>
        <p
          className="text-base text-gray mb-3"
          dangerouslySetInnerHTML={{ __html: `${post?.shortContent}` }}
        />

        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row items-center gap-2 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Eo_circle_pink_heart.svg"
              className="w-8 h-8"
              alt='like'
            />
            <span className="text-sm text-gray">{post?.reactionsCount}</span>
          </div>
          <p className="text-base text-gray">{post?.repliesCount} comments</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 ">
          <Button className="hover:bg-slate-700">like</Button>
          <Button className="hover:bg-slate-700">Comment</Button>
          <Button className="hover:bg-slate-700">Share</Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
