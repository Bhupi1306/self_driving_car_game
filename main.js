const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// const networkCanvas = document.getElementById("networkCanvas");
// networkCanvas.width = 300;

const ctx = canvas.getContext("2d");
// const networkCtx = networkCanvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const N = 500
const cars = generateCars(N)

let bestCar = cars[0];

if(localStorage.getItem("bestBrain")){
    for(let i=0;i<cars.length;i++){
        cars[i].brain = JSON.parse(
            localStorage.getItem("bestBrain")
        )
        if(i!=0){
            NeuralNetwork.mutate(cars[i].brain,0.1)
        }
    }
}
const trafficNumber = 20;
const trafficLane = []
const traffic = []

if(localStorage.getItem("trafficLane")){
    trafficLane.push(...JSON.parse(localStorage.getItem("trafficLane")))
}else{
    for(let i=0;i<trafficNumber;i++){
        trafficLane.push(Math.floor(Math.random()*3))
    }
}


for(let i=0;  i<trafficNumber/2; i++){
    traffic.push(new Car(road.getLaneCenter(trafficLane[i]), -(i*200 + 100), 30,50, "DUMMY",2)),
    traffic.push(new Car(road.getLaneCenter(trafficLane[i+1]), -(i*200 + 100), 30,50, "DUMMY",2))
}


animate();

function save(){
    localStorage.setItem("bestBrain",
        JSON.stringify(bestCar.brain)
    )
    localStorage.setItem("trafficLane", 
        JSON.stringify(trafficLane)
    )
}

function discard(){
    localStorage.removeItem("bestBrain")
    localStorage.removeItem("trafficLane")
}

function generateCars(N){
    const cars =[]
    for(let i=1; i<=N; i++){
        cars.push(new Car(road.getLaneCenter(1), 100,30,50,"AI"))
    }
    return cars;
}

function animate(){
    for(let i=0; i<traffic.length; i++){
        traffic[i].update(road.borders,[]);
    }

    for (let i=0;i<cars.length;i++){
        cars[i].update(road.borders, traffic);
    }

    bestCar = cars.find(c=>c.y==Math.min(
        ...cars.map(c=>c.y)
    ))

    canvas.height = window.innerHeight;
    // networkCanvas.height = window.innerHeight;

    ctx.save();
    ctx.translate(0, -bestCar.y+canvas.height*0.7)

    road.draw(ctx);

    for(let i=0; i<traffic.length; i++){
        traffic[i].draw(ctx, "red");
    }

    ctx.globalAlpha=0.2;

    for (let i=0;i<cars.length;i++){
        cars[i].draw(ctx, "black");
    }
    ctx.globalAlpha=1;
    bestCar.draw(ctx, "black",true);

    ctx.restore()

    // Visualizer.drawNetwork(networkCtx,car.brain);
    requestAnimationFrame(animate);
}


