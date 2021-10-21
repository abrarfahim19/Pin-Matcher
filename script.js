                    // Generating 4 Digit random number
// console.log(Math.round(Math.random()*10000))

document.getElementById('generateID').addEventListener('click', function() {
    let display = parseInt(Math.random().toFixed(4)*10000)
    document.getElementById('generateField').value = display
})

for (let i = 0; i < 10; i++) {
    let element = i;
    let elem = 'btn'+element.toString();
    document.getElementById(elem).addEventListener('click', function(){
        document.getElementById('inputField').value = document.getElementById('inputField').value + document.getElementById(elem).innerText;
    })    
}

document.getElementById('btnX').addEventListener('click',function(){
    let current = document.getElementById('inputField').value
    document.getElementById('inputField').value = current.slice(0, -1);
})

document.getElementById('btnC').addEventListener('click',function(){
    document.getElementById('inputField').value = ''
})

document.getElementById('submitID').addEventListener('click',function(){
    if (document.getElementById('inputField').value == document.getElementById('generateField').value) {
        document.getElementById('go').style.display = 'block';
        setTimeout(function(){
            document.getElementById('go').style.display = 'none'
        },2000)
    } else {
        document.getElementById('stop').style.display = 'block';
        setTimeout(function(){
            document.getElementById('stop').style.display = 'none'
        },2000)
    }
})