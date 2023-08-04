import { FriendsList } from './FriendList.styled';
import { FriendListItem } from '../FriendCard/FriendCard';
import PropTypes from 'prop-types';

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendsList className="friend-list">
//       {friends.map(({ id, avatar, name, isOnline }) => {
//         return (
//           <FriendListItem key={id} id={id} className="item">
//             <Status isOnline={isOnline} className="status"></Status>
//             <Avatar
//               className="avatar"
//               src={avatar}
//               alt="User avatar"
//               width="48"
//             />
//             <Name className="name">{name}</Name>
//           </FriendListItem>
//         );
//       })}
//     </FriendsList>
//   );
// };

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

// Объект с определённой структурой
// optionalObjectWithShape: PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
// }),
