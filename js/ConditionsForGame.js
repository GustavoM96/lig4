const conditionWinHorizontal = (status, edgeX, edgeY) => {
    for(let i=0;i < board.length;i++){
        for(let j=0;j < edgeX;j++){
            let cell = board[i][j];
            if(cell !== 0){
                if(cell === board[i][j+1] && cell === board[i][j+2] && cell === board[i][j+3]){
                    status= true;
                    document.getElementsByClassName(`cel${i}`)[j].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i}`)[j+1].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i}`)[j+2].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i}`)[j+3].classList.add("cellWin");
                    
                } 
            }
        }
    }
    return status;
}

const conditionWinVertical = (status, edgeX, edgeY) => {
    for(let i = 0; i < edgeY; i++){
        for(let j = 0; j < board[0].length; j++) {
            cell = board[i][j];
            if(cell !== 0) {
                if(cell === board[i+1][j] && cell === board[i+2][j] && cell === board[i+3][j]){
                    status = true;
                    document.getElementsByClassName(`cel${i}`)[j].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i+1}`)[j].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i+2}`)[j].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i+3}`)[j].classList.add("cellWin");
                    
                } 
            
            }
        }
    }
    return status;
}

const conditionWinDiagonalRigth = (status, edgeX, edgeY) => {
    for (let i = 0; i < edgeY; i++) {
        for(let j = 0; j < edgeX; j++) {
            cell = board[i][j];
                  if(cell !== 0){
                        if (cell === board[i+1][j+1] && cell === board[i+2][j+2] && cell === board[i+3][j+3]){
                            status = true;
                            document.getElementsByClassName(`cel${i}`)[j].classList.add("cellWin");
                            document.getElementsByClassName(`cel${i+1}`)[j+1].classList.add("cellWin");
                            document.getElementsByClassName(`cel${i+2}`)[j+2].classList.add("cellWin");
                            document.getElementsByClassName(`cel${i+3}`)[j+3].classList.add("cellWin");
                            
                        } 
                }
        }
    }
    return status;
}

const conditionWinDiagonalLeft = (status, edgeX, edgeY) => {
    for (let i = 3; i < board.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            cell = board[i][j];        
            if (cell !== 0) {    
                if(cell === board[i-1][j+1] && cell === board[i-2][j+2] && cell === board[i-3][j+3]){
                    status = true;
                    document.getElementsByClassName(`cel${i}`)[j].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i-1}`)[j+1].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i-2}`)[j+2].classList.add("cellWin");
                    document.getElementsByClassName(`cel${i-3}`)[j+3].classList.add("cellWin");
                            
                    
                    

                }
            }
        }
    }
    return status; 
}

const conditionWin = (board) => {
    let status=false;    
    const edgeY=board.length -3;
    const edgeX=board[0].length -3;

    if(conditionWinHorizontal(status, edgeX, edgeY))status = true;
    
    if(conditionWinVertical(status, edgeX, edgeY))status = true;
    
    if(conditionWinDiagonalRigth(status, edgeX, edgeY))status = true;
    
    if(conditionWinDiagonalLeft(status, edgeX, edgeY))status = true;

    if(status) containerPlayer = [];
    
    return status;
}

const empate = () => {
    if(!conditionWin(board)){
        for(let i = 0 ; i < board[0].length;i++){
            if(board[0][i] === 0){
                return false
            }
        }
        return true
    }
    return false
}