let isSpinning3 = true;

let illo3 = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas3',
    dragRotate: true,
    zoom: 12,
    onDragStart: function() {
        isSpinning3 = false;
    },
});
new Zdog.Ellipse({
    addTo: illo3,
    diameter: 180,
    // position closer
    translate: { z: 40 },
    stroke: 20,
    color: '#000000',
});
  

new Zdog.Rect({
    addTo: illo3,
    width: 80,
    height: 80,
    // position further back
    translate: { z: -40 },
    stroke: 12,
    color: '#1100ff',
    fill: true,
});

function animate3() {
    // rotate
    if ( isSpinning3 ) {
      illo3.rotate.y += 0.03;
    }
    illo3.updateRenderGraph();
    requestAnimationFrame( animate3 );
}
  // start animation
animate3();

illo3.updateRenderGraph();