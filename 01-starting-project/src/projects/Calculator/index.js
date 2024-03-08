var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");

//Add
    document.getElementById("add").addEventListener("click", function() {
      res.value = parseFloat(n1.value)+parseFloat(n2.value)
    })

//Sub
    document.getElementById("sub").addEventListener("click", function() {
        res.value = parseFloat(n1.value)-parseFloat(n2.value)
    })

//Mul
    document.getElementById("mul").addEventListener("click", function() {
        res.value = parseFloat(n1.value)*parseFloat(n2.value)
    })
    
//Div
    document.getElementById("div").addEventListener("click", function() {
        res.value = parseFloat(n1.value)/parseFloat(n2.value)
    })

    