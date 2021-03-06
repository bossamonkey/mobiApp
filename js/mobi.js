var socket;
var paper;
var mobi;

var server = "128.237.120.197:8181"

// Add function to invert Y-axis in elements
// Raphael.el.invert = function() {
//     this.transform('s1,-1');
// };

// Set up main drawing in window
// $(document).ready(function () {
    
//     // Creates canvas 320 × 200 at 10, 50
//     paper = Raphael("paper", 640, 480);
//     paper.setViewBox(-4.0, -4.0, 8.0, 8.0, true);
    
//     // Invert the Y-axis
//     $('div#paper').find('svg').css(
//     {
//             '-webkit-transform': 'scaleY(-1)',
//             '-moz-transform': 'scaleY(-1)',
//             '-ms-transform': 'scaleY(-1)',
//             '-o-transform': 'scaleY(-1)',
//             'transform': 'scaleY(-1)',
//             'filter': 'flipv'
//     });
    
//     // Draw some axes
//     var xAxis = paper.path("M0,0L1,0");
//     xAxis.attr("stroke-width", "1");
//     xAxis.attr("stroke", "#f00");
//     var xAxisLabel = paper.text(1,0,"+x");
//     xAxisLabel.invert();
//     xAxisLabel.transform("s0.02...");
    
//     var yAxis = paper.path("M0,0L0,1");
//     yAxis.attr("stroke-width", "1");
//     yAxis.attr("stroke", "#0f0");
//     var yAxisLabel = paper.text(0,1,"+y");
//     yAxisLabel.invert();
//     yAxisLabel.transform("s0.02...");
    
//     // Create the local frame for the robot
//     mobi = paper.set();
// });

// Connect to obstacle ring
// $(document).ready(function () {
//     var host = "ws://" + server + "/ring";
//     var obsRing = [];
    
//     try {
//         socket = new WebSocket(host);
//         socket.onopen = function () {
//             for (var i = 0; i < obsRing.length; ++i) {
//                 obsRing[i].show();
//             }
//         };
//         socket.onmessage = function (msg) {
//             var data = JSON.parse(msg.data);
//             if (!data) return;
            
//             for (var i = 0; i < data.obstacles.length; i+=20) {
//                 if (!obsRing[i]) {
//                     obsRing[i] = paper.circle(0,0,0.01);
//                     obsRing[i].attr("stroke-width", "1");
//                     mobi.push(obsRing);
//                 }
//                 obsRing[i].transform("T" + data.obstacles[i]);
//             }
//         };
//         socket.onclose = function () {
//             for (var i = 0; i < obsRing.length; ++i) {
//                 obsRing[i].hide();
//             }
//         };
//     } catch (exception) {
//         alert('Error 1: ' + exception);
//     }
// });

// Connect to motion state
// $(document).ready(function () {
//     var host = "ws://" + server + "/motion";
    
//     var text = paper.text(0, -0.75, "Pose: {,}\nVel: {,}");
//     text.invert();
//     text.transform("s0.02...");
//     text.hide();

//     // Creates mObi base outline
//     var circle = paper.circle(0, 0, 0.40);
//     circle.attr("fill", "#ccc");
//     circle.attr("stroke-width", "1");    
        
//     var line = paper.path("M0,0L0.40, 0");
//     line.attr("stroke-width", "1");
    
//     mobi.push(line, circle);
    
//     try {
//         socket = new WebSocket(host);
//         socket.onopen = function () {
//             text.show();
//         };
//         socket.onmessage = function (msg) {
//             var data = JSON.parse(msg.data);
//             if (!data) return;
//             text.attr("text", 
//                       "Pose: {" + data.x.toFixed(3) + ",\t" + data.y.toFixed(3) + "}\n" + 
//                       "Vel: {" + data.x_vel.toFixed(3) + ",\t" + data.y_vel.toFixed(3) + "}");
//             mobi.transform("R" + Raphael.deg(data.yaw) + ",0,0" + "T" + data.x + "," + data.y);
//         };
//         socket.onclose = function () {
//             text.hide();
//             mobi.transform("R0,0,0T0,0");
//         };
//     } catch (exception) {
//         alert('Error 2: ' + exception);
//     }
// });

// function MotionState(x, y, x_vel, y_vel, x_acc, y_acc, roll, pitch, yaw){
//     this.x = x;
//     this.y = y;
//     this.x_vel = x_vel;
//     this.y_vel = y_vel;
//     this.x_acc = x_acc;
//     this.y_acc = y_acc;
//     this.roll = roll;
//     this.pitch = pitch;
//     this.yaw = yaw;
// }


// // Connect to motion state
// $(document).ready(function () {
//     var host = "ws://" + server + "/control-command";
    
//     try {
//         socket = new WebSocket(host);

//         socket.onopen = function () {
//             keyListeners(this);
//             console.log("Opened connection");
//         };

//         socket.onmessage = function (msg) {
//             var data = JSON.parse(msg.data);
//             console.log(data);
//             if (!data) return;
//         };
//         socket.onclose = function () {
//             console.log("Closed connection");
//         };
//     } catch (exception) {
//         alert('Error 3: ' + exception);
//     }
// });

// // Connect to raw velocity vector
// $(document).ready(function () {
//     var host = "ws://" + server + "/desired";
    
//     var desired = paper.circle(0, 0, 0.10);
//     desired.attr("fill", "#0f0");
//     desired.attr("stroke-width", "1");
//     desired.hide();
    
//     try {
//         socket = new WebSocket(host);
//         socket.onopen = function () {
//             desired.show();
//         };
//         socket.onmessage = function (msg) {
//             var data = JSON.parse(msg.data);
//             if (!data) return;
//             desired.transform("T" + 10*data.x_vel + ", " + 10*data.y_vel);
//         };
//         socket.onclose = function () {
//             desired.hide();
//         };
//     } catch (exception) {
//         alert('Error 4: ' + exception);
//     }
// });

// $(document).ready(function () {
//     var host = "ws://" + server + "/actual";
    
//     var actual = paper.circle(0, 0, 0.10);
//     actual.attr("fill", "#00f");
//     actual.attr("stroke-width", "1");
//     actual.hide();
    
//     try {
//         socket = new WebSocket(host);
//         socket.onopen = function () {
//             actual.show();
//         };
//         socket.onmessage = function (msg) {
//             var data = JSON.parse(msg.data);
//             if (!data) return;
//             actual.transform("T" + 10*data.x_vel + ", " + 10*data.y_vel);   
//         };
//         socket.onclose = function () {
//             actual.hide();
//         };
//     } catch (exception) {
//         alert('Error 5: ' + exception);
//     }
// });

// $(document).ready(function () {
//     try {
//         liveimage = document.getElementById("liveimage");
        
//         socket = new WebSocket("ws://" + server + "/image");  
//         socket.onopen = function() {    
//             //alert('Got images');
//         } 
//         socket.onmessage = function(msg) {
//             // Parse the return JSON data
//             data = JSON.parse(msg.data);
//             liveimage.src = "data:image/jpeg;base64," + data.rgb;
//         }; 
//         socket.onclose = function() {    
//             //alert('Lost images');
//         }
//     } catch (exception) {
//         alert('Error 6: ' + exception);
//     }
// });

function toJSONObject(obj){
    return JSON.parse(JSON.stringify(obj));
}





$(document).ready(function () {

    var host = "ws://" + server + "/motion-command";
    
    try {
        socket = new WebSocket(host);

        socket.onopen = function () {
            keyListeners(this);
            console.log("Opened connection");
        };

        socket.onmessage = function (msg) {
            var data = JSON.parse(msg.data);
            console.log(data);
            if (!data) return;
        };
        socket.onclose = function () {
            console.log("Closed connection");
        };
    } catch (exception) {
        alert('Error 3: ' + exception);
    }
});

var motions = {
            "forward" : false, 
            "right" : false, 
            "back" : false, 
            "left" : false,
            "yaw" : 0
        };

function keyListeners(socket){
    $(".arrow_key").mousedown(function(){
        var direction = $(this).attr("id");
        motions[direction] = true;
        sendMotionCommand(socket);
    });


    $(".arrow_key").mouseup(function(){
        var direction = $(this).attr("id");
        motions[direction] = false;
    });

    var wheel_clicked = false;
    $("#wheel").mousedown(function(e){
        wheel_clicked = true;
        $("#wheel").mousemove(function(e){
            if(wheel_clicked){
                var radians = calculateAngle(e.offsetX, 60, e.offsetY, 60) * 0.0174532925;
                motions["yaw"] = radians;
                sendMotionCommand(socket);
            }
        });
    });

    $("#wheel").mouseup(function(e){
        wheel_clicked = false;
        console.log("released");
        motions["yaw"] = 0;
        sendMotionCommand(socket);
    });
}

function calculateAngle(x1, x2, y1, y2){
        calcAngle = Math.atan2(x1-x2,y1-y2)*(180/Math.PI);  
        if(calcAngle < 0)   
        calcAngle = Math.abs(calcAngle);
        else
        calcAngle = 360 - calcAngle;        
        return calcAngle;
}

function sendMotionCommand(socket){
    var data = {
        "x":0.0,
        "y":0.0,
        "x_vel":0.0,
        "y_vel":0.0,
        "x_acc":0.0,
        "y_acc":0.0,
        "roll":0.0,
        "pitch":0.0,
        "yaw":0.0
    };

    var socketCommand = setInterval(function(){
        moving = false;
        for(direction in motions){
            if(motions[direction]){
                moving = true;
            }
        }
        for(direction in motions){
            if(motions[direction]){
                if(direction == "back"){
                    data["x_vel"] = -1;
                }

                if(direction == "right"){
                    data["y_vel"] = 1;
                }

                if(direction == "forward"){
                    data["x_vel"] = 1;
                }

                if(direction == "left"){
                    data["y_vel"] = -1;
                }
                if(direction == "yaw"){
                    data[direction] = motions[direction];
                }
            }
        }

        console.log(moving);
        if(moving){

            socket.send(JSON.stringify(data));
            console.log(data);
        }
        else{
            data = {
                    "x":0.0,
                    "y":0.0,
                    "x_vel":0.0,
                    "y_vel":0.0,
                    "x_acc":0.0,
                    "y_acc":0.0,
                    "roll":0.0,
                    "pitch":0.0,
                    "yaw":0.0
                };
            console.log(data);
            socket.send(JSON.stringify(data));
            clearInterval(socketCommand);
        }
    }, 50);


}