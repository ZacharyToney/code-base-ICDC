suite('DragAndDrop', function() {
    // ======================================================
    test('test drag and drop properties and methods', function(done) {
      var stage = addStage();
      var layer = new Konva.Layer();
      var circle = new Konva.Circle({
        x: stage.getWidth() / 2,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        name: 'myCircle'
      });
  
      stage.add(layer);
      layer.add(circle);
  
      setTimeout(function() {
        layer.draw();
  
        // test defaults
        assert.equal(circle.draggable(), false);
  
        //change properties
        circle.setDraggable(true);
  
        //circle.on('click', function(){});
  
        layer.draw();
  
        showHit(layer);
  
        // test new properties
        assert.equal(circle.getDraggable(), true);
  
        done();
      }, 50);
    });  
  });