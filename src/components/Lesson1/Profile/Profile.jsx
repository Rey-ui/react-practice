import css from './Profile.module.css';

const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileContent}>
        <img className={css.profileAvatar} src={avatar} alt="User avatar" />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLoc}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Followers</span>
          <span className={css.profileItemText}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Views</span>
          <span className={css.profileItemText}>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Likes</span>
          <span className={css.profileItemText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
