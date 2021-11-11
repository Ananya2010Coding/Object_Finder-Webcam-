function setup(){
    canvas = createCanvas(600 , 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 0 , 0 , 640 , 480)
}

function start(){
    objectDetection = ml5.objectDetector('cocossd',modelLoaded);
    object_name = document.getElementById("input").value;
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model has Loaded!!");
    Status = true;
}
