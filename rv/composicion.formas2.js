function setup(){
 
 // Se plantean las geometrias a utilizar
 dia = 0.1;
 mul=1;
 
 var cilindroForma1=new THREE.CylinderGeometry(dia, dia, mul*2);
 var cilindro1 = new THREE.Mesh(cilindroForma1);
 cilindro1.rotateX(1.57);
 cilindro1.position.x=2;
 cilindro1.position.y=2;
 
 var cilindroForma2=new THREE.CylinderGeometry(dia, dia, mul*3);
 var cilindro2 = new THREE.Mesh(cilindroForma2);
 cilindro2.position.x=2;
 cilindro2.position.y=3.5;
 cilindro2.position.z=-1;
 
 var cilindroForma3=new THREE.CylinderGeometry(dia, dia, mul*3);
 var cilindro3 = new THREE.Mesh(cilindroForma3);
 cilindro3.position.x=2;
 cilindro3.position.y=3.5;
 cilindro3.position.z=1;
 
 var cilindroForma4=new THREE.CylinderGeometry(dia, dia, mul*2);
 var cilindro4 = new THREE.Mesh(cilindroForma4);
 cilindro4.rotateX(1.57);
 cilindro4.position.x=2;
 cilindro4.position.y=5;
 
 var cilindroForma5=new THREE.CylinderGeometry(dia, dia, mul*2);
 var cilindro5 = new THREE.Mesh(cilindroForma5);
 cilindro5.position.x=2;
 cilindro5.position.y=6;
 
 var cilindroForma6=new THREE.CylinderGeometry(dia, dia, mul*6);
 var cilindro6 = new THREE.Mesh(cilindroForma6);
 cilindro6.rotateX(1.57);
 cilindro6.position.x=2;
 cilindro6.position.y=7;
 
 var cilindroForma7=new THREE.CylinderGeometry(dia, dia, mul*4);
 var cilindro7 = new THREE.Mesh(cilindroForma7);
 cilindro7.rotateZ(1.57);
 cilindro7.position.x=4;
 cilindro7.position.y=5;
 
 // Se genera una forma  (geometrica) abstracta
 var forma=new THREE.Geometry();
 
 // Se utiliza el paquete GeometryUtils para conjuntar las formas
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 THREE.GeometryUtils.merge(forma, cilindro3);
 THREE.GeometryUtils.merge(forma, cilindro4);
 THREE.GeometryUtils.merge(forma, cilindro5);
 THREE.GeometryUtils.merge(forma, cilindro6);
 THREE.GeometryUtils.merge(forma, cilindro7);
 
 // Se genera la malla a partir de la forma
 malla=new THREE.Mesh(forma);
 wireframe = new THREE.WireframeHelper( malla, 0x00ff00 );
 escena=new THREE.Scene();
 escena.add(malla,wireframe);
 camara=new THREE.PerspectiveCamera();
 camara.position.z=20;
 renderer=new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
//malla.rotation.x+=0.01;
malla.rotation.y+=0.001;
renderer.render(escena,camara);
}

var escena,camara,renderer,malla,wireframe,dia,mul;
setup();
loop();
