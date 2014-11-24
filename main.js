document.addEventListener('DOMContentLoaded',function(){
    console.log("hello")
    var gridArray = document.querySelectorAll('.cell')
    var grid = document.querySelector('.cell')
    var occupied = document.querySelectorAll('.occupied')
    var count = 0
    var button = document.querySelector('#button')
    var gridLength = gridArray.length
    var i = 0
    var j = 0
    var reset = function() {
        for (var j=0; j < gridArray.length; j++) {
            console.log(j)
            gridArray[j].innerText = "?";
            gridArray[j].classList.remove('occupied')
            gridArray[j].style.color = "black"
        }
        i = 0
        count = 0
    }

    for (var i=0; i < gridArray.length; i++) {
        gridArray[i].addEventListener('click',function(){
            if (this.classList.contains('occupied') === false) {
                count ++
                this.innerText = (count%2 == 1) ? "M":"O";
                this.classList.add('occupied')
                console.log("hi")
                this.style.color = (count%2 == 1) ? "navy":"fuchsia";
            }
        });
    }
    button.addEventListener("click", function(){
        reset()
    });
});


// var array = [[0,1,2],[0,1,2],[0,1,2]]
// if(array[0][0]===x, array[0][0]===x, array[0][0]===x)
//     (array[0][0]===x, array[0][0]===x, array[0][0]===x)
//     (array[0][0]===x, array[0][0]===x, array[0][0]===x){
//     return "You win!"
// }
