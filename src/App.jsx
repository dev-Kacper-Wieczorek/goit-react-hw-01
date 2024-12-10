import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionsList from "./components/TransactionsList/TransactionsList";
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactions from './data/transactionsData.json';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionsList items={transactions} />
    </div>
  );
};

export default App;
