const startBtnEl = document.getElementById("start-btn")
// create Board
const gridBoard = document.createElement("div")
const gameEl = document.getElementById("game")
        gridBoard.id = "board"
        console.log(gameEl)
        document.body.appendChild(gridBoard)
const counterEL = document.getElementById("counter")
const gameOverEl = document.getElementById("game-over")
const winnerEl = document.getElementById("winner")
const gameOverBtn = document.getElementById("game-over-btn")
const winnerBtn = document.getElementById("winner-btn")
const level1Btn = document.getElementById("lvl-btn")
const level2Btn = document.getElementById("lvl2-btn")

const path1 = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9]]
const path2 = [[0,0], [1,0], [1,1], [1,2], [2,2], [2,3], [3,3], [3,4], [3,5], [3,6],[3,7], [4,7], [4,8], [4,9]]
const path3 = []
let chosenPath = [] // gets filled depending on clicked level

function showPath (){
    for (i = 0; i < chosenPath.length; i++) {
        for (j = 0; j < chosenPath.length; j++ ) {
            this.tiles[chosenPath[i][j]].style.backgroundColor = "tomato"
        }
    }    
 }

level1Btn.addEventListener("click", () => {
    chosenPath = path1
    console.log(chosenPath)
} )
level2Btn.addEventListener("click", () => {
    chosenPath = path2
    console.log(chosenPath)
} )


class Game {
    constructor (){
        console.log("constructor active")
        this.tiles = []
        this.player = null  
        
    }
    onLoad(){
        // this.player = new Player()
        // this.player.createPlayer()
        this.createBoard()
    }
    onReload(){
       
        this.player = new Player()
        this.player.createPlayer()
    }
    movePlayer(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft") {
                this.player.moveLeft()
                let count = 0;
                for (let i = 0; i < chosenPath.length; i++){
                    if (chosenPath[i].join("").includes(this.player.playerPos.join(""))) {
                        count++
                    }
                }
                if (count < 1) {
                    gameOverEl.style.display = "flex"  
                }
                else if (chosenPath[chosenPath.length-1].join("").includes(this.player.playerPos.join(""))) //pick last Index
                winnerEl.style.display = "flex"
            }
            else if (event.key === "ArrowRight") {
                this.player.moveRight()
                let count = 0;
                for (let i = 0; i < chosenPath.length; i++){
                    if (chosenPath[i].join("").includes(this.player.playerPos.join(""))) {
                        count++
                    }
                }
                if (count < 1) {
                    gameOverEl.style.display = "flex"  
                }
                else if (chosenPath[chosenPath.length-1].join("").includes(this.player.playerPos.join(""))) //pick last Index
                winnerEl.style.display = "flex"
            }
            else if (event.key === "ArrowDown") {
                this.player.moveDown()
                let count = 0;
                for (let i = 0; i < chosenPath.length; i++){
                    if (chosenPath[i].join("").includes(this.player.playerPos.join(""))) {
                        count++
                    }
                }
                if (count < 1) {
                    gameOverEl.style.display = "flex"  
                }
                else if (chosenPath[chosenPath.length-1].join("").includes(this.player.playerPos.join(""))) //pick last Index
                winnerEl.style.display = "flex"
            }
            else if ( event.key === "ArrowUp") {
                this.player.moveUp()
                let count = 0;
                for (let i = 0; i < chosenPath.length; i++){
                    if (chosenPath[i].join("").includes(this.player.playerPos.join(""))) {
                        count++
                    }
                }
                if (count < 1) {
                    gameOverEl.style.display = "flex"  
                }
                else if (chosenPath[chosenPath.length-1].join("").includes(this.player.playerPos.join(""))) //pick last Index
                winnerEl.style.display = "flex"
            } 
        })
    }

    createBoard(){
        for (let i = 0; i < 8; i++){
            this.tiles[i]=[] 
            for (let j = 0; j < 10; j++)
                {
                    const newTile = document.createElement("div")
                    newTile.className = "newTiles" 
                    gridBoard.appendChild(newTile)
                    this.tiles[i].push(newTile)
            }
        }console.log(this.tiles)
    }
    start(){
    startBtnEl.addEventListener("click", ()=>{
        game.onReload()
        counterEL.innerHTML="6";
        const intId= setInterval(callback, 1000)
        function callback(){
            if (counterEL.innerHTML > 0){
                counterEL.innerHTML--
            }
            else {
                clearInterval(intId)
                game.movePlayer()
                counterEL.innerHTML = "Good Luck!"
                const pathTiles= document.getElementsByClassName("tomato")
                for (let i = 0; i < pathTiles.length; i++){
                    pathTiles[i].style.backgroundColor ="white"
                }
            }
        }
            for (let i = 0; i < chosenPath.length; i++) {
                for (let j = 0; j < chosenPath[i].length-1; j++ ) {  // just one iteration
                    this.tiles[chosenPath[i][j]][chosenPath[i][j+1]].classList.add("tomato")
                }
            }            
       })
    }
}
class Player {
    constructor (){
        this.playerPos = [0,0]
        this.positionX = 16;
        this.positionY = 16;
        this.player = this.createPlayer()
         
       
    }
    moveUp(){
        if (this.positionY > 16){
        this.positionY -= 29
        this.player.style.top = this.positionY +"px"
        this.playerPos[0] -= 1
        console.log(this.playerPos)
        }
    }
    moveDown(){
        if (this.positionY < 218) {
        this.positionY += 29
        this.player.style.top = this.positionY + "px"
        this.playerPos[0]+=1
        
        console.log(this.playerPos)
        }
    }
    moveRight(){
        
        if (this.positionX < 412){
        this.positionX += 44
        this.player.style.left = this.positionX + "px"
        this.playerPos[1]+=1
        //console.log(this.playerPos)
        }
    } 
    moveLeft(){
        if (this.positionX > 16) {
        this.positionX -= 44
        this.player.style.left = this.positionX + "px"
        this.playerPos[1]-=1
       // console.log(this.playerPos)
        }
    }
    createPlayer(){
        const playerTile = document.createElement("div")
        playerTile.id = "player"
        gridBoard.appendChild(playerTile)
        return playerTile
    }
}

const game = new Game()

game.onLoad()
game.start()


