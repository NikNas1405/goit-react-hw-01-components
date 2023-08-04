import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendCard.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <Status isOnline={isOnline} className="status"></Status>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
