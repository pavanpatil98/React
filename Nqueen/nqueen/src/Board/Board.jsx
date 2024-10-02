import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import { useState ,useEffect} from "react";
import "./Board.css";
function Board() {
  const { state } = useLocation();
  let gridSize = state.gridSize;
  let [isSelected,setSelected] = useState(); 
  let [buttons,setSelectedButtons] = useState([]); 
  //List<List<String>> ans = new ArrayList<>();
  let rdir = [0, -1, -1, -1, 0, 1, 1, 1];
  let cdir = [-1, -1, 0, 1, 1, 1, 0, -1];

  let ans = [];
  let arr = [];
  var fillboard = [];

  useEffect(() => {
    // Set a timeout to update the message after 2 seconds
    const timer = setTimeout(() => {
       
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
}, []);

  const buttonsArray = Array.from(
    { length: gridSize * gridSize },
    (_, index) => index + 1
  );

  const addButton = (id) => {
    console.log("---"+id);
    setSelectedButtons(prevButtons => [...prevButtons, id]);
};

// Function to remove a button ID from the array
const removeButton = (id) => {
    setSelectedButtons(prevButtons => prevButtons.filter(buttonId => buttonId !== id));
};
  function fillDummyArray(n) {
    let cnt = 1;
    for (let i = 0; i < n; i++) {
        arr[i] = [];
      for (let j = 0; j < n; j++) {
        arr[i][j] = cnt;
        cnt++;
      }
    }
  }
  function canPlaceQueen(board, row, col) {
    if (board[row][col] === "Q") return false;
    let n = board.length;
    let ans = true;

    for (let i = 0; i < rdir.length; i++) {
      let rr = row + rdir[i];
      let cc = col + cdir[i];
      while (rr >= 0 && cc >= 0 && rr < n && cc < n) {
        if (board[rr][cc] === "Q") {
          return false;
        }
        rr += rdir[i];
        cc += cdir[i];
      }
    }
    return ans;
  }
  function storeResult(board) {
    console.log("storeResult");
    for (let i = 0; i < board.length; i++) {
      fillboard[i] = [];
      let ans = "";
      for (let j = 0; j < board.length; j++) {
        fillboard[i][j] = board[i][j];
        ans += fillboard[i][j] + " ";
      }
      console.log(ans);
    }
    return fillboard;
  }

  function solveNQueensHelper(n, col, board) {
    if (col == board.length) {
      //System.out.prletln(n+"-----------------");
      if (n == 0) {
        ans.push(storeResult(board));
      }
      return;
    }
    for (let row = 0; row < board.length; row++) {
      if (canPlaceQueen(board, row, col)) {
        console.log(row,col);
        let buttonid = arr[row][col];
        console.log(row,col,buttonid+"----------------"+arr);
        //setSelectedButtons([...buttons, buttonid]);
        addButton(buttonid);
        console.log("========"+buttons+"=============");

        board[row][col] = "Q";
        //prletBoard(board);
        solveNQueensHelper(n - 1, col + 1, board);
        board[row][col] = ".";

        
        removeButton(buttonid);
      }
    }
  }
  function solveNQueens(n) {
    fillDummyArray(n);
    let board = new Array(n);

    for (let i = 0; i < n; i++) {
      // Initialize each row with the specified value (".")
      board[i] = new Array(n).fill(".");
    }
    solveNQueensHelper(n, 0, board);
    return ans;
  }

  //solveNQueens(4);

  function onClickHandler(){
    solveNQueens(gridSize);
    console.log(fillboard);
  }

  return (
    <>
      <div className="grid-container" style={{ "--grid-size": gridSize }}>
        {buttonsArray.map((button, index) => (
          <Button key={index} id={index+1} text={index + 1}  selectedButtons={buttons} />
        ))}
      </div>
      <button onClick={onClickHandler}>Start</button>
    </>
  );
}
export default Board;
