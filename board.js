document.addEventListener('DOMContentLoaded', () => {
    let board = document.getElementById('board');
    let squareSize = 50;    //size in pixel
    let width = 8;
    let height = 8;
    let squares = [];

    let w = (width * squareSize) + width;
    let h = (height *squareSize) + height;
    board.style.width = w + "px";
    board.style.height = h + "px";
    for(let i = 0; i < width*height; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        if ((Math.floor(i/width))%2 == 0) {
            if (i%2 == 0)
                square.setAttribute('class', 'black')
        }
        else {
            if (i%2 != 0)
                square.setAttribute('class', 'black')
        }
        board.appendChild(square)
        squares.push(square);     
    }

});