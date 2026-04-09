import clsx from 'clsx';
import css from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img
        className={css.friendsItemAvatar}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendsItemName}>{name}</p>
      <p
        className={clsx(
          css.friendsItemStats,
          isOnline && css.online,
          !isOnline && css.offline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
