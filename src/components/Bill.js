export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <strong>How much was the bill? </strong>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(+e.target.value)}
      />
    </div>
  );
}
