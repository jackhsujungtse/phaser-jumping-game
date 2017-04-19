
var MainState={  
  preload:function() {
    this.load.image('einstein', 'http://examples.phaser.io/assets/sprites/diamond.png');
       
  },
  create:function() {
    this.score = 0;
    this.timeKeeper = 1000;
    this.loopCall = 0;
    
    this.stars = this.game.add.group();
    this.stars.enableBody = true;
    this.starTimer = this.time.create(false);
    //how to increase loop speed when score increase?
    //how to keep score each time loop is called?
    this.starTimer.loop(this.timeKeeper, this.addStar, this);
    this.addStar();
    this.starTimer.start();
    
    this.scoreText = this.add.text(
      this.world.centerX,
      this.world.height / 5,
      "", {
        size: "32px",
        fill: "#FFF",
        align: "center"
      }

    );
  },
  addStar: function() {

    var star = this.stars.create(this.world.randomX, this.world.randomY, 'einstein');
    star.anchor.setTo(0.5, 0.5);

  },
  update:function(){
    this.scoreText.setText("SCORE " + this.score + "\nLoopCall "+ this.loopCall);
    this.scoreText.anchor.setTo(0.5, 0.5);
    this.score++;
    
    //this doesnt work
    if (this.score == 500){
      this.starTimer.loop(100, this.addStar, this);
    }
  }
};


var game = new Phaser.Game(400, 300, Phaser.CANVAS, 'phaser-example', MainState);
