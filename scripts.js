var car = document.querySelector('#products-in-bag')
var carClick = document.querySelector('#to-cart')
var score = Number(document.querySelector('#score').value)
var less = document.querySelector('#less')
var more = document.querySelector('#more')


//carClick.addEventListener('click', change)
less.addEventListener('click', dim)
more.addEventListener('click', som)

function dim(){
    if(score > 0){
        score--
        var novoVal = score
        document.querySelector('#score').value = novoVal
    }

    carClick.addEventListener('click', novo)

    function novo(){
        car.innerHTML = novoVal
    }
}

function som(){
    if(score >= 0){
        score++
        var novoVal = score
        document.querySelector('#score').value = novoVal
    }

    carClick.addEventListener('click', novo)

    function novo(){
        car.innerHTML = novoVal
    }
}

    carClick.addEventListener('click', novo)

    function novo(){
        car.innerHTML = document.querySelector('#score').value
    }
    







//-----------------------------------