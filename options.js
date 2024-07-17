var buttom = document.getElementById('box')
buttom.addEventListener('touchend', ()=>{
    var color = document.getElementById("box").style.backgroundColor
    if(color === 'azure'){
        document.getElementById("box").style.backgroundColor = 'blue'
    }else{
        document.getElementById("box").style.backgroundColor = 'azure'
    }
})
buttom.addEventListener('mousedown', ()=>{
    var color = document.getElementById("box").style.backgroundColor
    console.log(color)
    if(color === 'blue'){
        document.getElementById("box").style.backgroundColor = 'azure'
    }else{
        document.getElementById("box").style.backgroundColor = 'blue'
    }
})

console.log(buttom)
