document.addEventListener('DOMContentLoaded',function(){
    console.log("hello")
    var gridArray = document.querySelectorAll('.cell')
    var grid = document.querySelector('.cell')
    var count = 0
    var count2 = 0
    var button = document.querySelector('#button')
    var gridLength = gridArray.length


    for (var i=0; i < gridArray.length; i++) {
        gridArray[i].addEventListener('click',function(){
            if (this.classList.contains('occupied') === false) {
                count ++
                this.innerText = (count%2 == 1) ? "X":"O";
                this.classList.add('occupied')
                console.log("hi")
                this.style.color = (count%2 == 1) ? "navy":"fuchsia";
            }
        });
    }
    for (var j=0; j < 9; j++) {
        button.addEventListener("click", function(){
            console.log(j)
            gridArray[j].innerText = "M";
            gridArray[j].classList.remove('occupied')
            })
        }
});


// var array = [[0,1,2],[0,1,2],[0,1,2]]
// if(array[0][0]===x, array[0][0]===x, array[0][0]===x)
//     (array[0][0]===x, array[0][0]===x, array[0][0]===x)
//     (array[0][0]===x, array[0][0]===x, array[0][0]===x){
//     return "You win!"
// }
