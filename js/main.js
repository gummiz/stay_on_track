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
const levelList = document.getElementById("levels-select")


const path1 = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9]]
const path2 = [[0,0], [1,0], [1,1], [1,2], [2,2], [2,3], [3,3], [3,4], [3,5], [3,6],[3,7], [4,7], [4,8], [4,9]]
const path3 = []
let chosenPath = [] // gets filled depending on clicked level


// level2Btn.addEventListener("click", () => {
//     chosenPath = path2
//     console.log(chosenPath)
// } )


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
    chooseLevel() {levelList.addEventListener("change", () => {
        console.log("you selected", levelList.value)
        if (levelList.value === "Level 1"){
            chosenPath = path1
        }
        else  if (levelList.value === "Level 2"){
            chosenPath = path2
        }
        else  if (levelList.value === "Level 3"){
            chosenPath = path3
        }
        else  if (levelList.value === "Level 4"){
            chosenPath = path4
        }
        else  if (levelList.value === "Level 5"){
            chosenPath = path5
        }
        else  if (levelList.value === "Level 6"){
            chosenPath = path6
        }
        else  if (levelList.value === "Level 7"){
            chosenPath = path7
        }
        else  if (levelList.value === "Level 8"){
            chosenPath = path8
        }
        else  if (levelList.value === "Level 9"){
            chosenPath = path9
        }
        else  if (levelList.value === "Level 10"){
            chosenPath = path10
        }
    })
    }
    start(){
        this.chooseLevel()
        startBtnEl.addEventListener("click", ()=>{
        if (chosenPath.length > 0 && levelList.value !== "Level 0"){
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
    } else alert("You need to pick a level first!")
})
    }
}
class Player {
    constructor (){
        this.playerPos = [0,0]
        this.positionX = 1;
        this.positionY = 1;
        this.player = this.createPlayer()
         
    }
    moveUp(){
        if (this.positionY > 1){
        this.positionY -= 2.75
        this.player.style.top = this.positionY +"rem"
        this.playerPos[0] -= 1
        console.log(this.positionY)
        }
    }
    moveDown(){
        if (this.positionY < 20) {
        this.positionY += 2.75
        this.player.style.top = this.positionY + "rem"
        this.playerPos[0]+=1
        
        console.log(this.positionY)
        }
    }
    moveRight(){
        console.log(this.positionX)
        if (this.positionX < 28){
        this.positionX += 3.35
        this.player.style.left = this.positionX + "rem"
        this.playerPos[1]+=1
        //console.log(this.playerPos)
        }
    } 
    moveLeft(){
        console.log(this.positionX)
        if (this.positionX > 2) {
        this.positionX -= 3.35
        this.player.style.left = this.positionX + "rem"
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


