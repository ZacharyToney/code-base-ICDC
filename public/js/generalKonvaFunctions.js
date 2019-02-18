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

classRoomLayout.src = '../assets/classroomLayouts/EmptyTC412.png';

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
	  newNodeChair.setAttr('src',"../assets/classroomObjects/chair.png");

	  // add the shape to the layer
	  layer.add(newNodeChair);

	  // add the layer to the stage
	  stage.add(layer);

	  // add transform box around newNodeChair and able to rotate
	  var tr = new Konva.Transformer();
      layer.add(tr);
      tr.attachTo(newNodeChair);
	  layer.draw();
	};

	nodeChair.src = '../assets/classroomObjects/chair.png';

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
	  newtableWith4Chairs.setAttr('src',"../assets/classroomObjects/table.png");
	  // add the shape to the layer
	  layer.add(newtableWith4Chairs);

	  // add the layer to the stage
	  stage.add(layer);

      // add transform box around newNodeChair and able to rotate
      var tr = new Konva.Transformer();
	  layer.add(tr);
	  tr.attachTo(newtableWith4Chairs);
	  layer.draw();
	};

	tableWith4Chairs.src = '../assets/classroomObjects/table.png';

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
	  newPerson.setAttr('src',"../assets/classroomObjects/person.png");
	  // add the shape to the layer
	  layer.add(newPerson);

	  // add the layer to the stage
	  stage.add(layer);

      // add transform box around newNodeChair and able to rotate
	  var tr = new Konva.Transformer();
	  layer.add(tr);
	  tr.attachTo(newPerson);
	  layer.draw();
	};

	person.src = '../assets/classroomObjects/person.png';

}
stage.on('click tap', function (e) {
	// if click on empty area - remove all transformers
	if (e.target === stage) {
		stage.find('Transformer').destroy();
		layer.draw();
		return;
	}
	stage.find('Transformer').destroy();
});

function convertCanvasToJson(){

	  var json = stage.toJSON();

    console.log(json);
} 

function loadJsonString(){
	  var json = '{"attrs":{"width":290,"height":465.84945112388914,"scaleX":0.15159435441714583,"scaleY":0.15159435441714583},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":50,"y":50,"width":1913,"height":3073},"className":"Image"},{"attrs":{"x":505.1620689655173,"y":1791.489655172414,"width":145,"height":142,"draggable":true,"src":"../assets/classroomObjects/chair.png","scaleY":2.4203819523163377},"className":"Image"},{"attrs":{"x":683.2689655172414,"y":1916.8241379310346,"width":337,"height":296,"draggable":true,"src":"../assets/classroomObjects/table.png"},"className":"Image"},{"attrs":{"x":1257.6249075547632,"y":1880.8441480868232,"width":150,"height":150,"draggable":true,"src":"../assets/classroomObjects/person.png","rotation":82.10247852562145},"className":"Image"}]}]}';

    // create node using json string
    stage = Konva.Node.create(json, 'container');

    
    
		stage.find('Image').forEach((imageNode) => {
		    const src = imageNode.getAttr('src');
		    const image = new Image();
		    image.onload = () => {
		        imageNode.image(image);
		        imageNode.getLayer().batchDraw();
		    }
		    image.src = src;
		});

		var json = stage.toJSON();
		console.log(json);
}