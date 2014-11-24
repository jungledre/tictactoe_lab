document.addEventListener('DOMContentLoaded',function(){
    var gridArray = document.querySelectorAll('.cell')
    var occupied = document.querySelectorAll('.occupied')
    var turn = document.querySelector('#turn')
    var button = document.querySelector('#button')
    var gridLength = gridArray.length
    var winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    var count = 0

    var reset = function() {
        for (var i=0; i < gridArray.length; i++) {
            gridArray[i].innerText = "";
            gridArray[i].classList.remove('occupied')
            gridArray[i].style.color = "black"
            turn.innerText = "X"
        }
        count = 0
    }

    var winning = function() {
        for (var j=0; j < gridArray.length; j++) {
            if  (gridArray[winners[j][0]].innerText!=""
                && gridArray[winners[j][1]].innerText===gridArray[winners[j][0]].innerText
                && gridArray[winners[j][2]].innerText===gridArray[winners[j][0]].innerText) {
                turn.innerText = gridArray[winners[j][0]].innerText + " WINS"
        };
        return;
    }
}

for (var i=0; i < gridArray.length; i++) {
    gridArray[i].addEventListener('click',function(){
        if (this.classList.contains('occupied') === false) {
            count ++
            this.innerText = (count%2 == 1) ? "X":"O";
            this.classList.add('occupied')
            this.style.color = (count%2 == 1) ? "#FFAA01":"#FF5500";
            turn.innerText = (count%2 == 1) ? "O":"X"
            turn.style.fontSize = "3em"
        }
        winning()
    });
}
button.addEventListener("click", function(){
    reset()
});
});
