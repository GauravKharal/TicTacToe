import "../App.css";

const Square = ({ val, chooseSquare, state }) => {
  return (
    <button className="Square" onClick={chooseSquare} disabled={val!="" || state != "none"}>
      {val}
    </button>
  );
};

export default Square;
