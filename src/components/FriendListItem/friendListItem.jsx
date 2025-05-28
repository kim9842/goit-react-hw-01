import s from "./friendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.listItem}>
      <img src={avatar} alt="Avatar" width="60" />
      <p>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
