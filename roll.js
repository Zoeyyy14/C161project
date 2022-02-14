AFRAME .registerComponent("roll",{
    init:function(){
        this.shootBowlingBall()
    },
    shootBowlingBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="z"){
                var ball=document.createElement("a-entity")
                ball.setAttribute("geometry",{primitive:"sphere",radius:0.1})
                ball.setAttribute("material","color","red")
                var cam=document.querySelector("#camera")
                pos=cam.getAttribute("position")
                ball.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                // bullet.setAttribute("velocity",{x:0,y:0,z:-1})

                var camera=document.querySelector("#camera").object3D
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var scene=document.querySelector("#scene")    
                scene.appendChild(ball)


            }
        })
    },
})