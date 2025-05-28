import s from "./profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={s.box}>
      <div className={s.card}>
        <img className={s.img} src={avatar} alt={username} />
        <div className={s.userInfo}>
          <p className={s.name}>{username}</p>
          <p className={s.link}>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className={s.statsList}>
        <li className={s.statItem}>
          <span className={s.itemLabel}>Followers</span>
          <span className={s.itemValue}>{followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.itemLabel}>Views</span>
          <span className={s.itemValue}>{views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.itemLabel}>Likes</span>
          <span className={s.itemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
