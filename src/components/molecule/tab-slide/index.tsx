import { PaginatedSpace } from "@tribeplatform/gql-client/types";
import { useSpaces } from "@tribeplatform/react-sdk/hooks";
import { FC, useState } from "react";

export type tabsPropsType = {
 /**
  * List of spaces
  */
  spaces?:PaginatedSpace
};

const Tabs: FC<tabsPropsType> = (props: tabsPropsType) => {
  const {spaces} = props;
  // const { data: spaces, isLoading } = useSpaces({ fields: { image: "basic" } });
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className=" px-4 py-5 sm:p-6  shadow-lg rounded-2xl  bg-primary border-b border-gray-200 flex flex-row justify-between">
      <ul className="flex text-base pb-4 text-center text-gray overflow-x-auto ">
        <li
          className={`px-4 pb-2 cursor-pointer  ${
            activeTab === "all" && "border-b-2"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All
        </li>
        {spaces?.nodes?.map((space, index) => {
          return (
            <li
              className={`mr-2 px-4 pb-2 cursor-pointer ${
                activeTab === space.id && "border-b-2"
              }`}
              key={index}
              onClick={() => setActiveTab(space.id)}
            >
              {space.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
