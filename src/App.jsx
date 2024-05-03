import "./App.css";
import { useEffect, useState } from "react";
import Square from "./components/Square";
import { Patterns } from "./Patterns";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    checkWin();

    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }, [board]);

  // useEffect(() => {
  //   if (result.state != "none") {
  //     restartGame();
  //   }
  // }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx == square && val == "") {
          return player;
        }
        return val;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      } else {
        checkTie();
      }
    });
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("O");
    setResult({ winner: "none", state: "none" });
  };

  return (
    <>
      <section className="App">
        <h1>Tic Tac Toe</h1>
        <section className="Board">
          <div className="Row">
            <Square
              val={board[0]}
              chooseSquare={() => {
                chooseSquare(0);
              }}
              state={result.state}
            />
            <Square
              val={board[1]}
              chooseSquare={() => {
                chooseSquare(1);
              }}
              state={result.state}
            />
            <Square
              val={board[2]}
              chooseSquare={() => {
                chooseSquare(2);
              }}
              state={result.state}
            />
          </div>
          <div className="Row">
            <Square
              val={board[3]}
              chooseSquare={() => {
                chooseSquare(3);
              }}
              state={result.state}
            />
            <Square
              val={board[4]}
              chooseSquare={() => {
                chooseSquare(4);
              }}
              state={result.state}
            />
            <Square
              val={board[5]}
              chooseSquare={() => {
                chooseSquare(5);
              }}
              state={result.state}
            />
          </div>
          <div className="Row">
            <Square
              val={board[6]}
              chooseSquare={() => {
                chooseSquare(6);
              }}
              state={result.state}
            />
            <Square
              val={board[7]}
              chooseSquare={() => {
                chooseSquare(7);
              }}
              state={result.state}
            />
            <Square
              val={board[8]}
              chooseSquare={() => {
                chooseSquare(8);
              }}
              state={result.state}
            />
          </div>
        </section>
        <h3>
          {result.winner != "none" && (
            <>
              <em>Winner:</em> <strong>{result.winner}</strong> &nbsp;&nbsp;&nbsp; <em>Verdict:</em>{" "}
              <strong>{result.state}</strong>
            </>
          )}
        </h3>
        <button className="Restart" onClick={restartGame}>Restart Game</button>
      </section>
    </>
  );
}

export default App;
