//Start canvas up
$( document ).ready(function() {
// let's think our stage virtual size will be 1000x1000px
// but the real size will be different to fit user's page
// so the stage will be 100% visible on any device


var stageWidth = 1000;
var stageHeight = 1000;

var stage = new Konva.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

var layer = new Konva.Layer();
stage.add(layer);

// add circle into center
var circle = new Konva.Circle({
    radius: 50,
    fill: 'red',
    x: stage.width() / 2,
    y: stage.height() / 2,
    draggable: true
});

layer.add(circle);

// rectangle in bottom right of the stage
var rect = new Konva.Rect({
    fill: 'green',
    x: stage.width() - 100,
    y: stage.height() - 100,
    width: 100,
    height: 100,
    draggable: true
});
layer.add(rect);


function fitStageIntoParentContainer() {
    var container = document.querySelector('#stage-parent');

    // now we need to fit stage into parent
    var containerWidth = container.offsetWidth;
    // to do this we need to scale the stage
    var scale = containerWidth / stageWidth;


    stage.width(stageWidth * scale);
    stage.height(stageHeight * scale);
    stage.scale({ x: scale, y: scale });
    stage.draw();
}

fitStageIntoParentContainer();
// adapt the stage on any window resize
window.addEventListener('resize', fitStageIntoParentContainer);

});

// write out drag and drop events
box.on('dragstart', function() {
    writeMessage('dragstart');
});
box.on('dragend', function() {
    writeMessage('dragend');
});

layer.add(text);
layer.add(box);

// add the layer to the stage
stage.add(layer);