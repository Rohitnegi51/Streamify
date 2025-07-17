import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getUserFriends } from '../lib/api';
import NoFriendsFound from '../components/NoFriendsFound';
import AllFriendCard from '../components/AllFriendCard';

const FriendsPage = () => {
    const { data: allfriends = [], isLoading: loadingFriends } = useQuery({
        queryKey: ["allfriends"],
        queryFn: getUserFriends,
      });
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-10">
        {loadingFriends ? (
        <div className="flex justify-center py-12">
          <span className="loading loading-spinner loading-lg" />
        </div>
      ) : allfriends.length === 0 ? (
        <NoFriendsFound />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allfriends.map((friend) => (
            <AllFriendCard key={friend._id} friend={friend} />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default FriendsPage