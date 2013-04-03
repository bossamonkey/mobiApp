window.onload = run();

function run(){
    var timer = 21;
    var percentage1 = 0;
    // var percentage2 = 0;
    var progressInterval=setInterval(function(){
        if (percentage1<101){
            percentage1+=0.5;
            $(".pathLabel .progress1").width(percentage1+'%');
        }
        // else if (percentage2<101){
        //     percentage2+=0.5;
        //     $(".pathLabel .progress2").width(percentage2+'%');
        // }
    },100);

    var progressInterval=setInterval(function(){
        if (timer>0){
            timer--;
        
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
            $(".navigateActions.unfinished").hide();
            $(".navigateActions.finished").show();
        }
        

    },1000);
}
