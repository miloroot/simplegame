$(function() {

    console.log("jQuery loaded.");

    var gameScreen = $('#gamescreen');
    
    var circle = gameScreen.drawArc({
        name: 'blueCircle',
        layer: true,
        fillStyle: 'lightblue',
        strokeStyle: 'darkblue',
        strokeWidth: 3,
        x: 200, y: 200,
        radius: 50
    });

    circle.on('click', function() {
        console.log('Has been clicked: circle.');
    });

});