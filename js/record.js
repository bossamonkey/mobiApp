window.onload = run();

function run(){
    var timer = 0;
    var recordTimer=setInterval(function(){
        timer++;
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
        $("#timer").html(timerLabel);
        },1000);

    // $("#finishRecordBtn").bind("click", function(){
    //     // console.log("finishRecord");
    //     // localStorage.showDining = true;
    //     // $("#diningBtn").show();
    // });
}
