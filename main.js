noseX=0;
noseY=0;
difference = 0;
rightwristx = 0;
leftwristx =  0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 125 );

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('poseNet is initialized!');
}




function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = " + noseY);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);

        console.log("leftwristx =" + leftwristx + "rightwristx =" + rightwristx + "differece = " + difference);
    }
}
function draw() {
    background('#8B0000');
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}
