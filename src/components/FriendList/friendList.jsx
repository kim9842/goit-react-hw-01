import FriendListItem from "../FriendListItem/friendListItem";
import s from "./friendList.module.css";
const FriendList = ({ friendData }) => {
  return (
    <ul className={s.friendsList}>
      {friendData.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
