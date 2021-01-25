const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i}`;
        createColum.classList.add("sectionColuns")
        createColum.addEventListener('click', createDisk);

        for(let j = 0; j < 6; j++){
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`)
            createCell.classList.add("cell")
            createColum.appendChild(createCell)
            createColum.addEventListener('click', createDisk);
        }
      
        document.querySelector("main").appendChild(createColum)
    }
}

const pontuar = () => {
    if(conditionWin(board)){
        if(player === 0){
            pontosPreto++
            placarPreto.innerHTML = `${pontosPreto}`
        }else{
            pontosVermelho++
            placarVermelho.innerText = `${pontosVermelho}`
        }
        showModalResultGame();
    }
}

const backMove = () => {
    let item = containerPlayer[containerPlayer.length - 1];
    item.style.backgroundColor = "";
    let numCol = item.parentNode.id[item.parentNode.id.length -1] 
    let numLinha = item.className[item.className.length -1]
    containerPlayer.pop()
    board[numLinha][numCol] = 0;
    if(player === 0){
        player = 1;
    }else{
        player = 0;
    }
    featuredPlayer()
}

const selectNamePlayer = () => {
    playerName1 = document.getElementById("user1").value;
    playerName2 = document.getElementById("user2").value;

    if(playerName1 == "") playerName1 = "Player1";
    if(playerName2 == "") playerName2 = "Player2";
    
    locationForName[0].innerHTML = playerName1;
    locationForName[1].innerHTML = playerName2;

    document.getElementById("user1").value = "";
    document.getElementById("user2").value = "";

}

const resetar = () => {
    limparMapa()
    pontosVermelho = 0
    pontosPreto = 0
    player = 1;
    featuredPlayer()
    placarPreto.innerHTML = `${pontosPreto}`
    placarVermelho.innerHTML = `${pontosVermelho}`
}

const showModalNamePlayer = () => {
    if(modalNames.classList.contains("hidden")){
        modalNames.classList.remove("hidden");
        modalNames.classList.add("show");
    }else{
        modalNames.classList.remove("show");
        modalNames.classList.add("hidden");
    }
    animationModais(modalAnimadoName);
}

const showModalResultGame = () => {
    if(empate()){
        winnerName.innerText = "Deu empate, vamos jogar novamente";
        
    }else{
        if(player === 0){
            winnerName.innerText = "O vencedor é: " + playerName1;
        }else{
            winnerName.innerText = "O vencedor é: " + playerName2;
        }
    }

    if(modalResult.classList.contains("hidden")){
        modalResult.classList.remove("hidden");
        modalResult.classList.add("show");
    }else{
        modalResult.classList.remove("show");
        modalResult.classList.add("hidden");
    }

    animationModais(modalAnimadoResult)
}
