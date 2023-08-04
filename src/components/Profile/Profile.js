import {
  Wrapper,
  Images,
  Text,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper className="profile">
      <div className="description">
        <Images src={avatar} alt="User avatar" className="avatar" style={{}} />
        <Text className="name">{username}</Text>
        <Text className="tag">@{tag}</Text>
        <Text className="location">{location}</Text>
      </div>

      <Stats className="stats">
        <StatsList>
          <Label className="label">Followers </Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label className="label">Views </Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label className="label">Likes </Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// Объект с определённой структурой
// optionalObjectWithShape: PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
// }),
