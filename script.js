var yourEnergy = 50;
var friendEnergy = 50;


$(document).ready(function() {
    $(".start-game-button").on("click", function() {
        $(".game-title-screen").remove();
    });

    $("body").keydown(function(e) {
        if (!(yourEnergy == 0) || !(friendEnergy == 0)) {
            if (e.keyCode == 87) { // w
                $("#friend-ball").css("width", $("#friend-ball").width() + 3 + "");
                $("#friend-ball").css("height", $("#friend-ball").width() + 3 + "");
                yourEnergy--;
                friendEnergy++;
                $("#you-energy").text(yourEnergy + "");
                $("#friend-energy").text(friendEnergy + "");
            } else if (e.keyCode == 83) { // s
                $("#friend-ball").css("width", $("#friend-ball").width() - 3 + "");
                $("#friend-ball").css("height", $("#friend-ball").width() - 3 + "");
                yourEnergy++;
                friendEnergy--;
                $("#you-energy").text(yourEnergy + "");
                $("#friend-energy").text(friendEnergy + "");
            }
        }
    });
});