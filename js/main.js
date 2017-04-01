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
        radius: 50,
        click: function(layer) {
            console.log('circle has been clicked.');
        }
    });

});