suite('Stage', function() { 

    test('instantiate stage with id', function() {
        var container = Konva.document.createElement('div');
        container.id = 'container';
    
        konvaContainer.appendChild(container);
    
        var stage = new Konva.Stage({
          container: 'container',
          width: 578,
          height: 200
        });
    
        assert.equal(stage.getContent().className, 'konvajs-content');
        assert.equal(stage.getContent().getAttribute('role'), 'presentation');
      });
});