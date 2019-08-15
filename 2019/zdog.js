let isSpinning = true;

let illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    dragRotate: true,
    zoom: 2,
    onDragStart: function() {
        isSpinning = false;
    },
});


const cir01 = new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    // position closer
    translate: { z: 40 },
    stroke: 20,
    color: '#ffe100',
});
  

new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 80,
    // position further back
    translate: { z: -40 },
    stroke: 12,
    color: '#000000',
    fill: true,
});

function animate() {
    // rotate
    if ( isSpinning ) {
      illo.rotate.y += 0.03;
    }

    illo.updateRenderGraph();
    requestAnimationFrame( animate );
}
  // start animation
animate();


illo.updateRenderGraph();