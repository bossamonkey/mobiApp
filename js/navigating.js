window.onload = run();

function run(){

    var timer;
    var fullTimer;
    if ($(".progress2").length){
        timer = 41;
        fullTimer = 41;
    }
    else{
        timer = 21;
        fullTimer = 21;
    }

    // BIND NAVIGATE GO
    $("#navigateGo").bind("click", function(){
        navigateGo();
    });
    $("#navigateGo").live("touch", function(){
        navigateGo();
    });
    $("#navigatePause").bind("click", function(){
        navigatePause();
    });
    $("#navigatePause").live("touch", function(){
        navigatePause();
    });

    var loopOn = $("#loop").hasClass("on");
    var reverse = false;

    progressInterval=setInterval(function(){
        if (!reverse){
            if (percentage1<101){
                percentage1+=increaseAmount;
                $(".pathLabel .progress1").width(percentage1+'%');
            }
            else if (percentage2<101){
                percentage2+=increaseAmount;
                $(".pathLabel .progress2").width(percentage2+'%');
            }
        }
        else{
            if ($(".progress2").length){
                if (percentage2<101){
                    percentage2+=increaseAmount;
                    $(".pathLabel .progress2").width(percentage2+'%');
                }
                else if (percentage1<101){
                    percentage1+=increaseAmount;
                    $(".pathLabel .progress1").width(percentage1+'%');
                }  
            }
            else{
                if (percentage1<101){
                    percentage1+=increaseAmount;
                    $(".pathLabel .progress").width(percentage1+'%');
                }
            }
            
        }

    },100);

    var progressInterval=setInterval(function(){
        if (timer>0){
            timer-=timerAmount;
        
            var min = timer/60;
            var minLabel = parseInt(min);
            if (min<10){
                minLabel = "0" + minLabel;
            }
            var sec = timer%60;
            var secLabel = parseInt(sec);
            if (sec<10){
                secLabel = "0" + secLabel;
            }
            timerLabel = minLabel+":"+secLabel;
            $("#timeLeft").html(timerLabel);
        }
        else{
            loopOn = $("#loop").hasClass("on");
            if (loopOn){
                timer = fullTimer;
                reverse = !reverse;
                $(".pathLabel").toggleClass("reverse");
                percentage1=0;
                percentage2=0;
                $(".pathLabel .progress1").width(percentage1+'%');
                $(".pathLabel .progress2").width(percentage2+'%');
            }
            else{
                $(".navigateActions.unfinished").hide();
                $(".navigateActions.finished").show();
            }
        }
    },1000);

    var percentage1 = 0;
    var percentage2 = 0;
    var increaseAmount = 0;
    var timerAmount = 0;
    var progressInterval;

    function navigateGo(){
        $("#navigateGo").hide();
        $("#navigatePause").show();

        increaseAmount = 0.5;
        timerAmount = 1;

        $(".status").removeClass("idle");
        $(".status").addClass("moving");
    }

    function navigatePause(){
        $("#navigatePause").hide();
        $("#navigateGo").show();

        increaseAmount = 0;
        timerAmount = 0;
        
        $(".status").addClass("idle");
        $(".status").removeClass("moving");
    }
}
