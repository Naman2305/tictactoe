import React, { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner ? `Winner is ${winner}` : `Play`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : '0';
        }
        return Square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}></Board>
    </div>
  );
};

export default App;
