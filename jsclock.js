$('#circle').circleProgress({
    value: 0,
    size: 400,
    thickness: 100,
    fill: {
        // gradient: ["#f00", "#000"]
        image: "http://i.imgur.com/pT0i89v.png"
    },
    animation: {
        // duration: 1
    },
    startAngle: -Math.PI / 2
});
var colors = [
    {
        gradient: ["#ff0006", "#00ff0b"]
    },
    {
        gradient: ["#f800ff", "#122aff", "#ff12d9"]
    }, {
        gradient: ["#ffb63b", "#ff6664", "#0028ff"]
    }, {
        gradient: ["#ff0003", "#ff2530", "#ff38ec"]
    }, {
        gradient: ["#ff666e", "#2a6322", "#b1ff08"]
    },
    {
        gradient: ["#3aeabb", "#fdd250", "#f6ff06"]
    }
];
setInterval(setTime, 1000, "#clock");

function setTime(cnogh) {
    cnogh = document.querySelector(cnogh);
    var jam = cnogh.querySelector("#jam");
    var rope = cnogh.querySelector("#rope");
    var vayrkyan = cnogh.querySelector("#var");
    var hima = new Date();
    var j = hima.getHours();
    var r = hima.getMinutes();
    var v = hima.getSeconds();
    var mv = hima.getMilliseconds();
    rope.style.transform = "translate(-33%, -96%) rotate(" + (r * 6 + 1) + "deg)";
    jam.style.transform = "translate(-33%, -96%)  rotate(" + (j * 30 + r * 0.5) + "deg)";
    // vayrkyan.style.transform = "translate(-8%, -78%) rotate(" + (v * 6 + mv * 0.006) + "deg)";
    vayrkyan.style.transform = "translate(-8%, -78%) rotate(" + (v * 6) + "deg)";
    $('#circle').circleProgress('value', (v * (100 / 60) / 100));
}

var second2 = 1, btnTopClicked = false;
$("#button-top").on('click', function () {
    if (btnTopClicked) {
        btnTopClicked = false;
        clearInterval(window.second1Int);
        clearInterval(window.second2Int);
    } else {
        btnTopClicked = true;
        window.second1Int = setInterval(function () {
            var hima = new Date();
            var mv = hima.getMilliseconds();
            document.querySelector("#second-1").style.transform = "rotate(" + (mv * 0.36) + "deg)";
        }, 1);
        window.second2Int = setInterval(function () {

            document.querySelector("#second-2").style.transform = "rotate(" + (second2++ * 6) + "deg)";
        }, 1000);
    }
}).on('dblclick', function () {
    second2 = 1;
    btnTopClicked = false;
    clearInterval(window.second1Int);
    clearInterval(window.second2Int);
    document.querySelector("#second-2").style.transform = "rotate(0deg)";
    document.querySelector("#second-1").style.transform = "rotate(0deg)";

});
$("#button-down").on('click', function () {
    var rand = Math.floor(Math.random() * colors.length);
    $('#circle').circleProgress({"fill": colors[rand]});
}).on('dblclick', function () {
    $('#circle').circleProgress({"fill": {image: "http://i.imgur.com/pT0i89v.png"}});
});