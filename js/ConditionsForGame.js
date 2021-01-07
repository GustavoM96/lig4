const conditionWinHorizontal = (status, edgeX, edgeY) => {
    for(let i=0;i < board.length;i++){
        for(let j=0;j < edgeX;j++){
            let cell = board[i][j];
            if(cell !== 0){
                if(cell === board[i][j+1] && cell === board[i][j+2] && cell === board[i][j+3]) status= true;
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
                if(cell === board[i+1][j] && cell === board[i+2][j] && cell === board[i+3][j]) status = true;
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
                        if (cell === board[i+1][j+1] && cell === board[i+2][j+2] && cell === board[i+3][j+3]) status = true;
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
                if(cell === board[i-1][j+1] && cell === board[i-2][j+2] && cell === board[i-3][j+3]) status = true;
            }
        }
    }
    return status; 
}

const conditionWin=(board)=>{
    let status=false;    
    const edgeY=board.length -3;
    const edgeX=board[0].length -3;

    if(conditionWinHorizontal(status, edgeX, edgeY))status = true;
    
    if(conditionWinVertical(status, edgeX, edgeY))status = true;
    
    if(conditionWinDiagonalRigth(status, edgeX, edgeY))status = true;
    
    if(conditionWinDiagonalLeft(status, edgeX, edgeY))status = true;
    
    return status;

}