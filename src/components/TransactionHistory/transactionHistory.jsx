import s from "./transactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr className={s.tr} key={id}>
              <td className={s.td}>{type}</td>
              <td className={s.td}>{amount}</td>
              <td className={s.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
