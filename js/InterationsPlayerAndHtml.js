const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i}`;
        createColum.classList.add("sectionColuns")
        createColum.addEventListener('click', createDisk);

        for(let j = 0; j < 6; j++){
        
            
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`)
            createColum.appendChild(createCell)
            createColum.addEventListener('click', createDisk);
        }
      
        document.querySelector("main").appendChild(createColum)
    }
}

const pontuar = ()=>{
    if(conditionWin(board)){
        if(player === 0){
            pontosPreto++
            placarPreto.innerHTML = `${pontosPreto}`
            limparMapa()
        }else{
            pontosVermelho++
            placarVermelho.innerText = `${pontosVermelho}`
            limparMapa()
        }
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
        featuredPlayer()
    }else{
        player = 0;
        featuredPlayer()
    }
}

const selectNamePlayer = () => {
    let playerName1 = document.getElementById("user1").value;
    let playerName2 = document.getElementById("user2").value;

    if(playerName1 == ""){
        playerName1 = "Player1";
    }

    if(playerName2 ==  ""){
        playerName2 = "Player2";
    }

    locationForName[0].innerHTML = playerName1;
    locationForName[1].innerHTML = playerName2;

    document.getElementById("user1").value = "";
    document.getElementById("user2").value = "";

}

const featuredPlayer = () => {
    if(player === 0){
        boxPlayer[0].style.backgroundColor = "#353b48";
        boxPlayer[1].style.backgroundColor = "";
    }else{
        boxPlayer[1].style.backgroundColor = "#353b48";
        boxPlayer[0].style.backgroundColor = "";
    }
}

const resetar = () => {
    limparMapa()
    pontosVermelho =0
    pontosPreto = 0
    
    placarPreto.innerHTML = `${pontosPreto}`
    placarVermelho.innerHTML = `${pontosVermelho}`
}

const showModalNamePlayer = () => modalNames.classList.toggle("hidden");