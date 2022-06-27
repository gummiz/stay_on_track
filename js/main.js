const startBtnEl = document.getElementById("start-btn")
// create Board
const gridBoard = document.createElement("div")
        gridBoard.id = "board"
        document.body.appendChild(gridBoard)


class Game {
    constructor (){
        console.log("constructor active")
        this.tiles = []
        this.player = null  
    }
    onLoad(){
        this.player = new Player()
        this.movePlayer()
        this.player.createPlayer()
        this.createBoard()
    }
    start (){
        this.createPathX1()
    }
    movePlayer(){
        document.addEventListener("keydown", (event) => {
            if(event.key === "ArrowLeft") {
                this.player.moveLeft()
            }
            else if (event.key === "ArrowRight") {
                this.player.moveRight()
            }
            else if (event.key === "ArrowDown") {
                this.player.moveDown()
            }
            else if ( event.key === "ArrowUp") {
                this.player.moveUp()
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
    createPathX1(){
        if (this.tiles[0][0].style.backgroundColor == "tomato") { console.log("yeah")}
        console.log(this.tiles[0][0].getAttribute("style"))
        this.tiles[0][0].style.backgroundColor="tomato"
        this.tiles[1][0].style.backgroundColor="tomato"
        this.tiles[1][1].style.backgroundColor="tomato"
        this.tiles[1][2].style.backgroundColor="tomato"
        this.tiles[2][2].style.backgroundColor="tomato"
        this.tiles[3][2].style.backgroundColor="tomato"
        this.tiles[3][3].style.backgroundColor="tomato"
        this.tiles[3][4].style.backgroundColor="tomato"
        this.tiles[3][5].style.backgroundColor="tomato"
        this.tiles[4][5].style.backgroundColor="tomato"
        this.tiles[4][6].style.backgroundColor="tomato"
        this.tiles[5][6].style.backgroundColor="tomato"
        this.tiles[5][7].style.backgroundColor="tomato"
        this.tiles[5][8].style.backgroundColor="tomato"
        this.tiles[6][8].style.backgroundColor="tomato"
        this.tiles[6][9].style.backgroundColor="tomato"
    }
}



class Player {
    constructor (){
        this.position = this.tiles
        this.positionY = 16;
        this.player = this.createPlayer()
       
    }
    moveUp(){
        if (this.positionY > 16){
        this.positionY -= 29
        console.log(this.positionY)
        this.player.style.top = this.positionY +"px"
        }
    }
    moveDown(){
        if (this.positionY < 219) 
        this.positionY += 29
        console.log(this.positionY)
        this.player.style.top = this.positionY + "px"
    }
    moveRight(){
        
        if (this.positionX < 412){
        this.positionX += 44
        this.player.style.left = this.positionX + "px"
        console.log(this.positionX)
        }
    } 
    moveLeft(){
        if (this.positionX > 16) {
        this.positionX -= 44
        this.player.style.left = this.positionX + "px"
        console.log(this.positionX)
        }
    }
    createPlayer(){
        const playerTile = document.createElement("div")
        playerTile.id = "player"
        gridBoard.appendChild(playerTile)
        console.log("wuff") 
        return playerTile
    }
}

const game = new Game()

game.onLoad()
game.start()





