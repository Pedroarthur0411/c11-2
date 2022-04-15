var runner,sprite;

function preload(){
  //imagens pré-carregadas
  sprite = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  running.addAnition("running",sprite);
}

function draw() {
  background(0);

}
