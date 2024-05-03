import "../App.css";

const Square = ({ val, chooseSquare }) => {
  return (
    <button className="Square" onClick={chooseSquare} disabled={val!=""}>
      {val}
    </button>
  );
};

export default Square;
