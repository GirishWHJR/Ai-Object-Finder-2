status="";
found="";
video="";


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log('Model Loaded!');
    status=true;

}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
}

function draw(){
    image(video,0,0,600,500);
}