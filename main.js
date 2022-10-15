function setup(){
    video=createCapture(VIDEO);
    video.size(550,400);

    canvas=createCanvas(550,400);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#E590F1');
}

function modelLoaded(){
    console.log('Good to  Go!!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}