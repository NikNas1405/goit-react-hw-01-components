import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { StatisticsCard } from './Statistics/Statistics';
import data from './Statistics/data.json';

// import { FriendList } from './Friend/FriendList/FriendList';
// import friends from './Friend/friends.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 100,
        marginTop: 100,
      }}
    >
      {/* <Profile user={user} /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsCard title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} /> */}

      {/* <TransactionHistory transactionsItems={transactions} />  */}
    </div>
  );
};
