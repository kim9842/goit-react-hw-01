import Profile from "./components/Profile/profile.jsx";
import FriendList from "./components/FriendList/friendList.jsx";
import TransactionHistory from "./components/TransactionHistory/transactionHistory.jsx";

import userData from "./data/userData.json";
import friend from "./data/friend.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <>
      <Profile {...userData} />
      <FriendList friendData={friend} />
      <TransactionHistory items={transactions} />
    </>
  );
}
