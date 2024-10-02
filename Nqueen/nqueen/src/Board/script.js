
    //List<List<String>> ans = new ArrayList<>();
    let rdir = [0,-1,-1,-1,0,1,1,1];
    let cdir = [-1,-1,0,1,1,1,0,-1];

    let ans = [];
    let arr = [];
     function fillDummyArray(n){
        let arr = [];
        let cnt = 1;
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                arr[i][j] = cnt;
                cnt++;
            }
        }
     }
     function canPlaceQueen( board,row,col){
        if(board[row][col] === "Q")return false;
        let n = board.length;
        let ans = true;
        
        for(let i=0;i<rdir.length;i++){
            let rr = row+rdir[i];
            let cc = col+cdir[i];
            while(rr>=0 && cc>=0 && rr<n && cc<n){
                if(board[rr][cc] === "Q"){
                    return false;
                }
                rr+=rdir[i];
                cc+=cdir[i];
            }
        }
        return ans;
    }
     function storeResult(board){
        
        var fillboard = [];
        
        for(let i=0;i<board.length;i++){
            fillboard[i] = [];
            let ans = "";
            for(let j=0;j<board.length;j++){
                fillboard[i][j] = board[i][j]
                ans+=fillboard[i][j]+" ";
            }
            console.log(ans);
        }
        return fillboard;
    }
     
     function solveNQueensHelper(n,col,board) {
        if(col==board.length){
            //System.out.prletln(n+"-----------------");
            if(n==0){
                ans.push(storeResult(board));
            }
            return;
        }
        for(let row=0;row<board.length;row++){
            if(canPlaceQueen(board,row,col)){
                board[row][col] = "Q";
                //prletBoard(board);
                solveNQueensHelper(n-1,col+1,board);
                board[row][col] = ".";
            }
        }
    }
     function solveNQueens(n) {
        let board = new Array(n);
    
        for (let i = 0; i < n; i++) {
        // Initialize each row with the specified value (".")
            board[i] = new Array(n).fill(".");
        }
        solveNQueensHelper(n,0,board);
        return ans;
     }

    //solveNQueens(4);