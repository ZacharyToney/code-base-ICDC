//Start canvas up and setup main stage
// let's think our stage virtual size will be 1000x1000px
// but the real size will be different to fit user's page
// so the stage will be 100% visible on any device

//This is set to the size of the roomlayout image
var stageWidth = 1913;
var stageHeight = 3073;

var stage = new Konva.Stage({
    container: 'container',
    width: stageWidth,
    height: stageHeight
});

var layer = new Konva.Layer();
stage.add(layer);


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

var classRoomLayout = new Image();
classRoomLayout.onload = function() {

  var layout = new Konva.Image({
    x: 50,
    y: 50,
    image: classRoomLayout,
    //room layout image size
    width: 1913,
    height: 3073,
    draggable:false
  });

  // add the shape to the layer
  layer.add(layout);

  // add the layer to the stage
  stage.add(layer);
};

classRoomLayout.src = '../konvaTest/assets/classroomLayouts/EmptyTC412.png';

function addNodeChair(){

	var nodeChair = new Image();
	nodeChair.onload = function() {

	  var newNodeChair = new Konva.Image({
	    x: 50,
	    y: 50,
	    image: nodeChair,
	    //node chair image size
	    width: 145,
	    height: 142,
	    draggable:true
	  });

	  // add the shape to the layer
	  layer.add(newNodeChair);

	  // add the layer to the stage
	  stage.add(layer);
	};

	nodeChair.src = '../konvaTest/assets/chairs/NodeChair.png';

}

function addTableWith4Chairs(){

	var tableWith4Chairs = new Image();
	tableWith4Chairs.onload = function() {

	  var newtableWith4Chairs = new Konva.Image({
	    x: 50,
	    y: 50,
	    image: tableWith4Chairs,
	    //table with 4 chairs image size
	    width: 337,
	    height: 296,
	    draggable:true
	  });

	  // add the shape to the layer
	  layer.add(newtableWith4Chairs);

	  // add the layer to the stage
	  stage.add(layer);
	};

	tableWith4Chairs.src = '../konvaTest/assets/tables/Table4Chairs.png';

}

function addPerson(){

	var person = new Image();
	person.onload = function() {

	  var newPerson = new Konva.Image({
	    x: 50,
	    y: 50,
	    image: person,
	    //table with 4 chairs image size
	    width: 150,
	    height: 150,
	    draggable:true
	  });

	  // add the shape to the layer
	  layer.add(newPerson);

	  // add the layer to the stage
	  stage.add(layer);
	};

	person.src = '../konvaTest/assets/people/people.png';

}

function convertCanvasToJson(){

	  var json = stage.toJSON();

    console.log(json);
}