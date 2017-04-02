$(function() {

    console.log("jQuery loaded.");

    var gameScreen = $('#gamescreen');
    
    var circle = gameScreen.drawArc({
        name: 'blueCircle',
        layer: true,
        fillStyle: 'lightblue',
        strokeStyle: 'darkblue',
        strokeWidth: 3,
        x: 450, y: 250,
        radius: 50,
        draggable: true,
        click: function(layer) {
            console.log('circle has been clicked.');
            $(this).animateLayer(layer, {
                radius: '+=10',
                fillStyle: 'darkred',
                strokeStyle: 'red'
            });
        }
    });

});