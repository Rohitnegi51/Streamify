import { Link } from "react-router";

const NoFriendsFound = () => {
  return (
    <div className="card bg-base-200 p-8 text-center">
      <h3 className="font-semibold text-xl mb-3">
        🧑‍🤝‍🧑 No friends yet!
      </h3>
      <p className="text-base-content opacity-70 mb-4">
        Connect with language partners and start practicing together. ✨
      </p>
      <Link to="/" className="inline-block">
        <button className="btn btn-accent">
          🤝 Let’s Connect!
        </button>
      </Link>
    </div>
  );
};

export default NoFriendsFound;
