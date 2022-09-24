import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../database/user.json';
import data from '../database/statistics.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </div>
  );
};
