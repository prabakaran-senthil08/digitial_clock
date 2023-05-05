var btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    var num1=document.getElementById("num1").value;
    console.log(typeof num1)
    var num2=document.getElementById("num2").value;
    console.log(typeof num2)

    var sum=Number(num1)+Number(num2);
    console.log(sum)

    var result=document.getElementById("result")
    result.textContent="The Result Is "+sum;
    var div2 = document.getElementById("div2")
    div2.style.display="block"
});

//Sub
var sub=document.getElementById("sub")
sub.addEventListener("click",function(){
    var num1=document.getElementById("num1").value;
    console.log(typeof num1)
    var num2=document.getElementById("num2").value;
    console.log(typeof num2)

    var sub=Number(num1)-Number(num2);
    console.log(sub)

    var result=document.getElementById("result")
    result.textContent="The Result Is "+sub;
    var div2 = document.getElementById("div2")
    div2.style.display="block"
});
//Mul
var mul=document.getElementById("mul")
mul.addEventListener("click",function(){
    var num1=document.getElementById("num1").value;
    console.log(typeof num1)
    var num2=document.getElementById("num2").value;
    console.log(typeof num2)

    var mul=Number(num1)*Number(num2);
    console.log(mul)

    var result=document.getElementById("result")
    result.textContent="The Result Is "+mul;
    var div2 = document.getElementById("div2")
    div2.style.display="block"
});

//Div
var div=document.getElementById("div")
div.addEventListener("click",function(){
    var num1=document.getElementById("num1").value;
    console.log(typeof num1)
    var num2=document.getElementById("num2").value;
    console.log(typeof num2)

    var div=Number(num1)/Number(num2);
    console.log(div)

    var result=document.getElementById("result")
    result.textContent="The Result Is "+div;
    var div2 = document.getElementById("div2")
    div2.style.display="block"
});

