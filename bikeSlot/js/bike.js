
var table=document.createElement("table")
document.body.append(table)

var head=document.createElement("thead")
table.appendChild(head)

var tr=document.createElement("tr")
head.appendChild(tr)

var th1=document.createElement("th")
th1.textContent="Sno"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Customer Name"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Bike Number"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Check In"
tr.appendChild(th1)

var th1=document.createElement("th")
th1.textContent="Check Out"
tr.appendChild(th1)

var count=0

var btn=document.getElementById("btn")
btn.addEventListener("click",function(){

var name=document.getElementById("name").value
var number=document.getElementById("number").value
var cin=document.getElementById("cin").value
var cout=document.getElementById("cout").value
count++

var tbod=document.createElement("tbody")
table.appendChild(tbod)

var tr1=document.createElement("tr")
tbod.appendChild(tr1)

var th1=document.createElement("td")
th1.textContent=count
tr1.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=name
tr1.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=number
tr1.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=cin
tr1.appendChild(th1)

var th1=document.createElement("td")
th1.textContent=cout
tr1.appendChild(th1)

})

