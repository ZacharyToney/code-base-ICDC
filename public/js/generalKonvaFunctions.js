//Start canvas up and setup main stage
// let's think our stage virtual size will be 1000x1000px
// but the real size will be different to fit user's page
// so the stage will be 100% visible on any device

/**
 * This is set to the size of the roomlayout image
 */
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
	stage.scale({
		x: scale,
		y: scale
	});
	stage.draw();
}

fitStageIntoParentContainer();
// adapt the stage on any window resize
window.addEventListener('resize', fitStageIntoParentContainer);

var classRoomLayout = new Image();
classRoomLayout.onload = function () {

	var layout = new Konva.Image({
		x: 50,
		y: 50,
		image: classRoomLayout,
		//room layout image size
		width: 1913,
		height: 3073,
		draggable: false
	});


	layout.setAttr('src', "../assets/classroomLayouts/EmptyTC412.png");

	// add the shape to the layer
	layer.add(layout);

	// add the layer to the stage
	stage.add(layer);
};

/**
 * File path to Empty classrooom of TC 412
 */
classRoomLayout.src = '../assets/classroomLayouts/EmptyTC412.png';

/**
 * addNodeChair function adds object to canvas
 */

function addNodeChair() {

	var nodeChair = new Image();
	nodeChair.onload = function () {

		var newNodeChair = new Konva.Image({
			x: 50,
			y: 50,
			image: nodeChair,
			/**
			 * addNodeChair size is set below
			 */
			width: 145,
			height: 142,
			draggable: true
		});
		newNodeChair.setAttr('src', "../assets/classroomObjects/chair.png");
		newNodeChair.setAttr('classRoomObjectType', "chair");

		/**
		 * Adds the object to the layer
		 */
		layer.add(newNodeChair);

		/**
		 * Adds the layer to the stage
		 */
		stage.add(layer);

		/**
		 * Adds transform box around addNewChair so the object is able to be resized and rotated.
		 */
		var tr = new Konva.Transformer();
		layer.add(tr);
		tr.attachTo(newNodeChair);
		layer.draw();
	};
	/**
	 * File path to nodeChair
	 */
	nodeChair.src = '../assets/classroomObjects/chair.png';

}

/**
 * addTableWith4Chairs adds table object to canvas.
 */

function addTableWith4Chairs() {

	var tableWith4Chairs = new Image();
	tableWith4Chairs.onload = function () {

		var newtableWith4Chairs = new Konva.Image({
			x: 50,
			y: 50,
			image: tableWith4Chairs,
			/**
			 * Image size is set below
			 */
			width: 337,
			height: 296,
			draggable: true
		});
		newtableWith4Chairs.setAttr('src', "../assets/classroomObjects/table.png");
		newtableWith4Chairs.setAttr('classRoomObjectType', "table");
		/**
		 * Adds the object to the layer
		 */
		layer.add(newtableWith4Chairs);

		/**
		 * Adds the layer to the stage
		 */
		stage.add(layer);

		/**
		 * Adds transform box around addTableWith4Chairs so the object is able to be resized and rotated.
		 */
		var tr = new Konva.Transformer();
		layer.add(tr);
		tr.attachTo(newtableWith4Chairs);
		layer.draw();
	};
	/**
	 * File path to tableWith4Chairs
	 */
	tableWith4Chairs.src = '../assets/classroomObjects/table.png';

}
/**
 * addPerson function adds new male object to the canvas
 */
function addPerson() {

	var person = new Image();
	person.onload = function () {

		var newPerson = new Konva.Image({
			x: 50,
			y: 50,
			image: person,
			/**
			 * addPerson size is set below
			 */
			width: 150,
			height: 150,
			draggable: true
		});
		newPerson.setAttr('src', "../assets/classroomObjects/person.png");
		newPerson.setAttr('classRoomObjectType', "person");
		/**
		 * Adds the object to the layer
		 */
		layer.add(newPerson);

		/**
		 * Adds the layer to the stage
		 */
		stage.add(layer);

		/**
		 * Adds transform box around addPerson so the object is able to be resized and rotated.
		 */
		var tr = new Konva.Transformer();
		layer.add(tr);
		tr.attachTo(newPerson);
		layer.draw();
	};
	/**
	 * File path to person
	 */
	person.src = '../assets/classroomObjects/person.png';

}
/**
 * addPerson Female adds new female object to the canvas
 */
function addPersonFemale() {

	var personfemale = new Image();
	personfemale.onload = function () {

		var newPersonFemale = new Konva.Image({
			x: 50,
			y: 50,
			image: personfemale,
			/**
			 * addpersonFelmale is set below
			 */
			width: 150,
			height: 150,
			draggable: true
		});
		newPersonFemale.setAttr('src', "../assets/classroomObjects/personfemale.png");
		newPersonFemale.setAttr('classRoomObjectType', "personfemale");
		/**
		 * Adds the object to the layer
		 */
		layer.add(newPersonFemale);

		/**
		 * Adds the layer to the stage
		 */
		stage.add(layer);

		/**
		 * Adds transform box around addPersonFemale so the object is able to be resized and rotated.
		 */
		var tr = new Konva.Transformer();
		layer.add(tr);
		tr.attachTo(newPersonFemale);
		layer.draw();
	};
	/**
	 * File path to personFemale
	 */
	personfemale.src = '../assets/classroomObjects/personfemale.png';

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

function convertCanvasToJson() {

	var json = stage.toJSON();

	console.log(json);

	return json;
}

function loadJsonString(jsonParam) {
	var json = jsonParam;

	/**
	 * Create node usin json string
	 */
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

$('#jsonClassRoomStringsFromDatabase').change(function () {
	var optionSelected = $(this).find("option:selected");
	var valueSelected = optionSelected.val();
	loadJsonString(valueSelected);
});

function downloadURI(uri, name) {
	var link = document.createElement('a');
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}
document.getElementById('save').addEventListener(
	'click',
	function () {
		var dataURL = stage.toDataURL({
			pixelRatio: 3
		});
		downloadURI(dataURL, 'stage.png');
	},
	false
);

function addTextField() {
	var textNode = new Konva.Text({
		text: 'Add comment',
		x: 150,
		y: 180,
		fontSize: 85,
		draggable: true,
		width: 200
	});

	layer.add(textNode);

	var tr = new Konva.Transformer({
		node: textNode,
		enabledAnchors: ['middle-left', 'middle-right'],
		/**
		 * Set min width of text
		 */
		boundBoxFunc: function (oldBox, newBox) {
			newBox.width = Math.max(30, newBox.width);
			return newBox;
		}
	});

	textNode.on('transform', function () {
		/**
		 * Reset scale so only width is changing by transformer
		 */
		textNode.setAttrs({
			width: textNode.width() * textNode.scaleX(),
			scaleX: 1
		});
	});

	layer.add(tr);

	layer.draw();

	textNode.on('dblclick', () => {
		/**
		 * Hide text node and transformer:
		 */
		textNode.show();
		tr.hide();
		layer.draw();



		/**
		 * create textarea over canvas with absolute position
		 * first we need to find position for textarea
		 * how to find it?
		 * 
		 * at first lets find position of text node relative to the stage:
		 * var textPosition = textNode.absolutePosition(textNode);
		 * then lets find position of stage container on the page:
		 */
		var stageBox = stage.container().getBoundingClientRect();

		/**
		 * so position of textarea will be the sum of positions above:
		 * var areaPosition = {
		 * x: stageBox.left + textPosition.x
		 * y: stageBox.top + textPosition.y
		 * };
		 */

		/**
		 * Create textarea 
		 * Adds style
		 */
		var textarea = document.createElement('textarea');
		document.body.appendChild(textarea);

		/**
		 * apply many styles to match text on canvas as close as possible
		 * remember that text rendering on canvas and on the textarea can be different
		 * and sometimes it is hard to make it 100% the same. But we will try...
		 */
		textarea.value = textNode.text();
		textarea.style.position = 'absolute';
		//textarea.style.top = areaPosition.y + 'px';
		//textarea.style.left = areaPosition.x + 'px';
		textarea.style.width = textNode.width() - textNode.padding() + 'px';
		textarea.style.height =
			textNode.height() - textNode.padding() + 'px';
		textarea.style.fontSize = textNode.fontSize() + 'px';
		textarea.style.border = 'none';
		textarea.style.padding = '0px';
		textarea.style.margin = '0px';
		textarea.style.overflow = 'hidden';
		textarea.style.background = 'none';
		textarea.style.outline = 'none';
		textarea.style.resize = 'none';
		textarea.style.lineHeight = textNode.lineHeight();
		textarea.style.fontFamily = textNode.fontFamily();
		textarea.style.transformOrigin = 'left top';
		textarea.style.textAlign = textNode.align();
		textarea.style.color = textNode.fill();
		rotation = textNode.rotation();
		var transform = '';
		if (rotation) {
			transform += 'rotateZ(' + rotation + 'deg)';
		}

		var px = 0;
		// also we need to slightly move textarea on firefox
		// because it jumps a bit
		var isFirefox =
			navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		if (isFirefox) {
			px += 2 + Math.round(fontSize / 20);
		}
		transform += 'translateY(-' + px + 'px)';

		textarea.style.transform = transform;

		// reset height
		textarea.style.height = 'auto';
		// after browsers resized it we can set actual value
		textarea.style.height = textarea.scrollHeight + 3 + 'px';

		textarea.focus();

		function removeTextarea() {
			textarea.parentNode.removeChild(textarea);
			window.removeEventListener('click', handleOutsideClick);
			textNode.show();
			tr.show();
			tr.forceUpdate();
			layer.draw();
		}
		textarea.addEventListener('keydown', function (e) {
			/**
			 * Hides on enter
			 * but doesn't hide on (shift+ENTER)
			 */
			if (e.keyCode === 13 && !e.shiftKey) {
				textNode.text(textarea.value);
				removeTextarea();
			}
			// on esc do not set value back to node
			if (e.keyCode === 27) {
				removeTextarea();
			}
		});

		textarea.addEventListener('keydown', function (e) {
			scale = textNode.getAbsoluteScale().x;
			//setTextareaWidth(textNode.width() * scale);
			textarea.style.height = 'auto';
			textarea.style.height =
				textarea.scrollHeight + textNode.fontSize() + 'px';
		});

		function handleOutsideClick(e) {
			if (e.target !== textarea) {
				removeTextarea();
			}
		}
		setTimeout(() => {
			window.addEventListener('click', handleOutsideClick);
		});
	});
}