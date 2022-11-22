function calcular(){
    var mu = document.querySelector("#multi")
    var m = Number(mu.value)

    var t = document.querySelector("#tabuada")
    t.innerHTML = ''

    if(m !== null){
        for(var i = 0; i <= 10; i++){
            num = m * i
        var res = document.createElement("option")
        tabuada.appendChild(res)
        res.innerHTML = `${m} x ${i} = ${num}`
        }
    }
}