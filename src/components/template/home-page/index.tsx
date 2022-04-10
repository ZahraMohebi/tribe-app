import { Post } from "@tribeplatform/gql-client/types";
import { useAuthMember, usePosts } from "@tribeplatform/react-sdk/hooks";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import FollowerCard from "../../molecule/follower-card";
import PostCard from "../../molecule/post-card";
import TrendsCard from "../../molecule/trends-card";
import UserInfoCard from "../../molecule/user-card";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "../../molecule/loading";

const HomePage = () => {
  const { data: user, status } = useAuthMember();
  const {
    data: posts,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts({
    fields: {
      owner: { member: "all" },
      reactions: { variables: { limit: 5 }, fields: "basic" },
    },
    variables: { limit: 3 },
  });

  // Convert pages of notes into a flat list of nodes
  const { nodes: latestPosts } = simplifyPaginatedResult<Post>(posts);

  return (
    <>
      {isLoading && status ? (
        <Loading />
      ) : (
        <div className="container  py-8 max-w-8xl  mx-auto sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-5 overflow-hidden ">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-3 pt-5 space-y-3">
            <UserInfoCard user={user} />
            <FollowerCard />
          </div>
          <main className="col-span-12 lg:col-span-9 xl:col-span-9 pt-5">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-8 space-y-3">
                <InfiniteScroll
                  pageStart={0}
                  loadMore={() => fetchNextPage()}
                  hasMore={true || false}
                  loader={
                    hasNextPage && (
                      <p className="text-gray" key={0}>
                        {isFetchingNextPage ? `Loading more...` : `Load more`}
                      </p>
                    )
                  }
                >
                  {latestPosts?.map((post, index) => {
                    return <PostCard post={post} key={index} />;
                  })}
                </InfiniteScroll>
              </div>

              <div className="hidden lg:block lg:col-span-4">
                <TrendsCard />
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
