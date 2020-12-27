var canvas=document.getElementById("mycanvas")
var ctx= canvas.getContext("2d")


ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=5
ctx.arc(200,200,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=5
ctx.arc(400,200,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=5
ctx.arc(600,200,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=5
ctx.arc(300,300,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=5
ctx.arc(500,300,80,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=10
ctx.rect(50,50,700,400)
ctx.stroke()


