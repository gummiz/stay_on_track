const startBtnEl = document.getElementById("start-btn")
// create Board
const gridBoard = document.createElement("div")
const gameEl = document.getElementById("game")
        gridBoard.id = "board"
        gameEl.appendChild(gridBoard)
        
const counterEL = document.getElementById("counter")
const gameOverEl = document.getElementById("game-over")
const winnerEl = document.getElementById("winner")
const gameOverBtn = document.getElementById("game-over-btn")
const winnerBtn = document.getElementById("winner-btn")
const level1Btn = document.getElementById("lvl-btn")
const level2Btn = document.getElementById("lvl2-btn")
const levelList = document.getElementById("levels-select")
const nextLevel = document.getElementById("next-level-btn")

const path1 = [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [1,8], [2,8], [2,9]]
const path2 = [[0,0], [1,0], [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [3,8], [3,9]]
const path3 = [[0,0], [1,0], [2,0], [3,0], [3,1], [3,2], [3,3], [2,3], [1,3], [1,4], [1,5], [1,6], [1,7],[1,8],[2,8],[2,9]]
const path4 = [[0,0], [1,0], [2,0], [3,0], [3,1], [3,2], [3,3], [2,3], [1,3], [1,4], [1,5], [1,6], [1,7],[1,8],[2,8],[2,9]]
const path5 = [[0,0], [0,1], [1,1], [1,2], [2,2], [2,3], [3,3], [3,4], [4,4], [4,5], [5,5], [5,6], [6,6],[6,7],[7,7],[7,8], [7,9]]
const path6 = [[0,0], [1,0], [1,1], [1,2], [1,3], [2,3], [3,3], [4,3], [5,3], [5,4], [5,5], [5,6], [6,6], [7,6],[7,7], [7,8], [7,9]]
const path7 = [[0,0], [1,0], [1,1], [1,2], [2,2], [2,3], [3,3], [3,4], [3,5], [3,6],[3,7], [4,7], [4,8], [4,9]]
const path8 = [[0,0], [0,1], [0,2], [1,2], [2,2], [3,2], [4,2], [4,3], [5,3], [6,3], [6,4], [6,5], [5,5], [4,5],[3,5], [2,5], [2,6], [2,7], [3,7], [4,7], [5,7], [5,8], [5,9]]
const path9 = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [6,1], [6,2], [6,3], [7,3], [7,4], [7,5], [6,6],[5,6], [4,6], [3,6], [3,7], [3,8], [2,8], [1,8], [1,9]]
const path10 = [[0,0], [0,1], [0,2], [1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [7,3], [7,4], [6,4], [5,4],[4,4], [3,4], [2,4], [1,4], [1,5], [1,6],[2,6], [3,6], [4,6], [4,7], [5,7], [6,7], [6,8], [6,9]]


let chosenPath = [] // gets filled depending on clicked level


const howTo = document.createElement("div")
howTo.id= "how-to"
document.body.appendChild(howTo)
howTo.innerHTML = `<h1>Hey there!</h2>
                    <p>The following game is all about your remembering skills! <br>
                    When you choose a level and click the start button, you have 6 seconds to remember the displayed path. <br>
                    After that, the path will turn invisible. Now you have to remember the path.<br>
                    But please:
                    </p>
                    <h1>Stay On Track!</h3>
                    <button id="hi-btn">Got it!</button>
                    `
gotItBtn = document.getElementById("hi-btn")
gotItBtn.addEventListener("click", () => {
    howTo.style.display = "none"
})

class Game {
    constructor (){
        console.log("constructor active")
        this.tiles = []
        //this.player = null  
        
    }
    onLoad(){
        // this.player = new Player()
        // this.player.createPlayer()
        this.createBoard()
    }
    onReload(){
       
        this.player = new Player()
    }
    movePlayer(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft") {
                this.player.moveLeft()
                let count = 0;
                for (let i = 0; i < chosenPath.length; i++){
                    if (chosenPath[i].join("").includes(this.player.playerPos.join(""))) {
                        count++
                        for (let j = 0; j < chosenPath[i].length-1; j++ ) {  // just one iteration
                            this.tiles[chosenPath[i][j]][chosenPath[i][j+1]].style.backgroundImage = 'url("https://manual.yoyogames.com/assets/Images/Asset_Editors/Editor_Tilesets_Single.png")'
                        }
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
                        for (let j = 0; j < chosenPath[i].length-1; j++ ) {  // just one iteration
                            this.tiles[chosenPath[i][j]][chosenPath[i][j+1]].style.backgroundImage = 'url("https://manual.yoyogames.com/assets/Images/Asset_Editors/Editor_Tilesets_Single.png")'
                        }
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
                        for (let j = 0; j < chosenPath[i].length-1; j++ ) {  // just one iteration
                            this.tiles[chosenPath[i][j]][chosenPath[i][j+1]].style.backgroundImage = 'url("https://manual.yoyogames.com/assets/Images/Asset_Editors/Editor_Tilesets_Single.png")'
                        }
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
                        for (let j = 0; j < chosenPath[i].length-1; j++ ) {  // just one iteration
                            this.tiles[chosenPath[i][j]][chosenPath[i][j+1]].style.backgroundImage = 'url("https://manual.yoyogames.com/assets/Images/Asset_Editors/Editor_Tilesets_Single.png")'
                        }
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
        }
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
                    pathTiles[i].style.backgroundImage = 'url("https://img.itch.zone/aW1hZ2UvNzk4NDcyLzQ0NzEwODQucG5n/original/hbpgZ%2B.png")'
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
        this.positionY = 0;
        this.player = this.createPlayer()
         
    }
    moveUp(){
        if (this.positionY > 1){
        this.positionY -= 2.75
        this.player.style.top = this.positionY +"rem"
        this.playerPos[0] -= 1
        }
    }
    moveDown(){
        if (this.positionY < 20) {
        this.positionY += 2.75
        this.player.style.top = this.positionY + "rem"
        this.playerPos[0]+=1
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
let audio = new Audio('../audio/Down With Your Getup - Mini Vandals.mp3')
audio.play()
const game = new Game()

game.onLoad()
game.start()


