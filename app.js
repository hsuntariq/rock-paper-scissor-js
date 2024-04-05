let btns = document.querySelectorAll('.btn');
let p1 = document.querySelector('.player-1')
let p2 = document.querySelector('.player-2')
let check = document.querySelector('.check')

let images = ['paper.jpg', 'rock.jpg', 'scissor.png']

let p1_ne_khela = false;
let p2_ne_khela = false


const getRandomImage = () => {
    const randNum = Math.random() * images.length;
    const floorNum = Math.floor(randNum);
    const getImg = images[floorNum]
    return getImg
}


// disable the first button by default

btns[1].disabled = true


// check what image does p1 have
let player1Image;
// check what image does p2 have
let player2Image;




// make a loop to handle click on each button
btns.forEach((item) => {
    item.addEventListener('click', () => {
        // check if player 1 has not played
        if (!p1_ne_khela) {

            player1Image = getRandomImage()


            p1_ne_khela = true
            p2_ne_khela = false
            // if player one has took its turn, disable kr do button player 1 ka
            btns[0].disabled = true;
            // if player one has took its turn, enable kr do button player 2 ka
            btns[1].disabled = false
            // change the image source for player 1
            p1.src = `./images/${player1Image}`
        }
        // check if player 2 has not played

        else if (!p2_ne_khela) {

            player2Image = getRandomImage()
            p2_ne_khela = true
            p1_ne_khela = false
            btns[1].disabled = true;
            btns[0].disabled = false

            p2.src = `./images/${player2Image}`

        }


        // check who wins
        if (player1Image == 'paper.jpg' && player2Image == 'rock.jpg') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'rock.jpg' && player2Image == 'rock.jpg') {
            check.innerHTML = 'match Tied'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'scissor.png' && player2Image == 'rock.jpg') {
            check.innerHTML = 'Player 2 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'paper.jpg' && player2Image == 'paper.jpg') {
            check.innerHTML = 'Match Tied'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'rock.jpg' && player2Image == 'scissor.png') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'scissor.png' && player2Image == 'paper.jpg') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player1Image == 'scissor.png' && player2Image == 'scissor.png') {
            check.innerHTML = 'match tied'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'paper.jpg' && player1Image == 'rock.jpg') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'rock.jpg' && player1Image == 'rock.jpg') {
            check.innerHTML = 'match Tied'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'scissor.png' && player1Image == 'rock.jpg') {
            check.innerHTML = 'Player 2 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'paper.jpg' && player1Image == 'paper.jpg') {
            check.innerHTML = 'Match Tied'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'rock.jpg' && player1Image == 'scissor.png') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'scissor.png' && player1Image == 'paper.jpg') {
            check.innerHTML = 'Player 1 wins'
            player1Image = ''
            player2Image = ''
        }
        else if (player2Image == 'scissor.png' && player1Image == 'scissor.png') {
            check.innerHTML = 'match tied'
            player1Image = ''
            player2Image = ''
        }





    })
})

