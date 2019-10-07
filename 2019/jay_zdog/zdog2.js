let isSpinning2 = true;

let illo2 = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas2',
    dragRotate: true,
    zoom: 2,
    onDragStart: function() {
        isSpinning2 = false;
    },
});

new Zdog.Ellipse({
    addTo: illo2,
    diameter: 180,
    // position closer
    translate: { z: 40 },
    stroke: 20,
    color: '#000000',
});
  

new Zdog.Rect({
    addTo: illo2,
    width: 80,
    height: 80,
    // position further back
    translate: { z: -40 },
    stroke: 12,
    color: '#ff0000',
    fill: true,
});

function animate2() {
    // rotate
    if ( isSpinning2 ) {
      illo2.rotate.y += 0.03;
    }
    illo2.updateRenderGraph();
    requestAnimationFrame( animate2 );
}
  // start animation
animate2();

illo2.updateRenderGraph();