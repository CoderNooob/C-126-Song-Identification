AHHHHHH = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(470,210)

    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('POSE NET IS AHHHHHHHH')
}
function preload()
{
 AHHHHHH = loadSound("shrek.mp3");
}

function play_song()
{
    AHHHHHH.play();
    AHHHHHH.setVolume(1);
    AHHHHHH.rate(1);
}

function stop_song()
{
    AHHHHHH.stop();
}

function restart_song()
{
    AHHHHHH.stop();
    AHHHHHH.play();
}
function draw()
{
    image(video,0 ,0 ,600, 500);    
    
    fill("#FFF01F");
    stroke("#FFF01F");

   
    circle(leftWristX, leftWristY,40);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    AHHHHHH.setVolume(volume);
    
}


