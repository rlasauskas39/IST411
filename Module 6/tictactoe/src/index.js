import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component{
  renderSquare(i){
    return (
    <Square 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)} 
    />
    );
  }

  render(){
    return(
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      rIsNext: true,
      stepNumber: 0,
      info: 0,
    };
  }
 
  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();

    if(calculateWinner(squares)){
      this.setState({info: 1});
      return;
    } else if(squares[i]){
      this.setState({info: 2});
      return;
    }

    squares[i] = this.state.rIsNext ? 'R' : 'J';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      rIsNext: !this.state.rIsNext,
      info: 0,
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      rIsNext: (step % 2) === 0,
      info: 0,
    });
  }

  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const currentInfo = this.state.info;


    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to Game start';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else{
      status = 'Next Player: ' + (this.state.rIsNext ? 'R' : 'J');
    }

    let moreInfo;
    if(currentInfo === 1){
      moreInfo = "--Game is Already Over--";
    } else if(currentInfo === 2){
      moreInfo = "--Space is Already Taken--"
    } else{
      moreInfo = "";
    }

    return(
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>{moreInfo}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ===========================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 2, 8],
    [2, 8, 6],
    [8, 6, 0],
    [6, 0, 2],
  ];
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}