import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";
import { getLanguageFlag } from "./FriendCard";
import { motion as Motion} from 'framer-motion';
const AllFriendCard = ({ friend }) => {
    return (
        <Motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-xl overflow-hidden shadow hover:shadow-md transition-shadow bg-base-200"
        >
          <div className="flex flex-col items-center text-center p-6">
    
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 overflow-hidden mb-3">
              <img
                src={friend.profilePic}
                alt={friend.fullName}
                className="object-cover w-full h-full"
              />
            </div>
    
            {/* Name */}
            <h3 className="font-semibold text-primary mb-1 truncate">{friend.fullName}</h3>
    
            {/* Languages */}
            <div className="flex flex-col gap-0.5 mb-4 text-xs text-gray-500">
              <span className="flex items-center justify-center gap-1">
                {getLanguageFlag(friend.nativeLanguage)}
                <span>Native:</span>
                <span className="text-primary">{friend.nativeLanguage}</span>
              </span>
              <span className="flex items-center justify-center gap-1">
                {getLanguageFlag(friend.learningLanguage)}
                <span>Learning:</span>
                <span className="text-primary">{friend.learningLanguage}</span>
              </span>
            </div>
    
            {/* Action */}
            <Link
              to={`/chat/${friend._id}`}
              className="btn btn-outline btn-primary btn-sm w-full"
            >
              Message
            </Link>
          </div>
        </Motion.div>
      );
  };
  
export default AllFriendCard;
