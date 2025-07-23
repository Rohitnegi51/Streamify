import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserFriends } from "../lib/api";
import NoFriendsFound2 from "../components/NoFriendsFound2";
import AllFriendCard from "../components/AllFriendCard";
import { RefreshCwIcon } from "lucide-react";

const FriendsPage = () => {
  let {
    data: allfriends = [],
    isLoading: loadingFriends,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["allfriends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wider ">
            Your Friends
          </h1>
          <div>
            <button onClick={() => refetch()} disabled={isFetching}>
              <RefreshCwIcon
                className={`size-5 hidden sm:inline ${
                  isFetching ? `animate-spin` : `animate-none`
                } `}
              />
            </button>
          </div>
        </div>
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : allfriends.length === 0 ? (
          <div>
            <NoFriendsFound2 />
            <button>
            
            </button>
          </div>
          
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allfriends.map((friend) => (
              <AllFriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;
