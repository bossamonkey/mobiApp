window.onload = run();

function run(){

    // REQUIRED DOM MANIPULATIONS

    // fix for content div not stretching to children's height
    var objHeight = 0;
    $.each($('#content').children(), function(){
           objHeight += $(this).height();
    });
    $('#content').height(objHeight);

    // build menu


    // IMPORTANT VARIABLES
    var animationTime = 200;    // 300ms animation for all animations

    // BIND PATHS PANEL ACTIONS
    var pathsPanelOpen = false;
    $("#pathsPanel .tab").bind("click", function(){
        togglePathsPanel();
    });
    $("#navBtn.menu").live("touch", function(){
        togglePathsPanel();
    });

    // BIND MENU ACTIONS
    var menuOpen = false;
    $("#navBtn.menu").bind("click", function(){
        toggleMenu();
    });
    $("#navBtn.menu").live("touch", function(){
        toggleMenu();
    });

    // BIND CURR LOC ACTIONS (navigate page)
    var navigateCurrBoxOpen = false;
    $(".navigate .selector").bind("click", function(){
        toggleNavigateCurrSelection();
    });
    $(".navigate .selector").live("touch", function(){
        toggleNavigateCurrSelection();
    });
    $("#navigateCurrSelectionBox .item").bind("click", function(){
        hideNavigateCurrSelection();
    });
    $("#navigateCurrSelectionBox .item").live("touch", function(){
        hideNavigateCurrSelection();
    });


    function togglePathsPanel(){
        pathsPanelOpen = !pathsPanelOpen;
        if (pathsPanelOpen){
            $("#pathsPanel").removeClass('collapsed').addClass('expanded');
        }
        else{
            $("#pathsPanel").removeClass('expanded').addClass('collapsed');
            $("#diningBtn").show();
            // if (localStorage.showDining == true){
            //     console.log("show dining room");
            // }
        }
    }

    function toggleNavigateCurrSelection(){
        navigateCurrBoxOpen = !navigateCurrBoxOpen;
        if (navigateCurrBoxOpen){
            $("#navigateCurrSelectionBox").slideDown(animationTime);
        }
        else{
            $("#navigateCurrSelectionBox").slideUp(animationTime);
        } 
    }

    function hideNavigateCurrSelection(){
        $("#navigateCurrSelectionBox").slideUp(animationTime);
    }

    function toggleMenu(){
        menuOpen = !menuOpen;
        if (menuOpen){
            $("#menu").animate({left:0});
        }
        else{
            $("#menu").animate({left:-230});
        }
    }

    // localStorage.showKitchen = true;

    $("#diningBtn").hide();
    // $("#finishRecordBtn").bind("click", function(){
    //     $("#diningBtn").show();
    // });


    // timer for recording
    // $("#recordBtn").bind("click", function(){
    //     startRecording();
    // });
    // $("#recordBtn").live("touch", function(){
    //     startRecording();
    // });

    // function startRecording(){
    //     var timer = 0;
    //     console.log("start record");
    //     // window.setInterval(function(){console.log("laskd")},1000);
    //     // var countdownInt = window.setInterval(function(){
    //     //         toggleMenu()
    //     //     },1000);
        
    //     console.log($("#timer"));
    //     $("#timer").html("hello");
        
        

        

    // }
}
