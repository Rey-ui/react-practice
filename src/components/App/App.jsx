import Profile from '../Profile/Profile';
import userData from '../../userData.json';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
function App() {
  return (
    <div className="wrapper">
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
