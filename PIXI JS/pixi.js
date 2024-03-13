PIXI.utils.sayHello();

var render = PIXI.autoDectectRenderer(512,512, {
    transparent : true,
    resolution:1
});

document.getElementById("display").appendChild(render.view);

var stage = new PIXI.container();

PIXI.loader
    .add("./image/charater.png");
    load(setup);

var rat;

function setup()  {
    rat = new PIXI.Sprite(
        PIXI.loader.resources["images/rat.png"].texture
    );
    stage.addChill(rat);

}
render.render(stage);