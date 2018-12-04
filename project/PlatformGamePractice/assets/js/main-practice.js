let simpleLevelPlan = `
......................
..#................#..
..#..............=.#..
..#.........o.o....#..
..#.@......#####...#..
..#####............#..
......#++++++++++++#..
......##############..
......................`;

const levelChars = {
  ".": "empty",
  "#": "wall", 
  "+": "lava",
  "@": Player, 
  "o": Coin,
  "=": Lava, 
  "|": Lava, 
  "v": Lava
};


class level{
  constructor(plan){
    var rows = plan.trim().split("\n").map(l=> [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.starActors = [];

    this.rows = rows.map((row,y) => {
      return row.map((ch, x) => {
        let type = levelChars[ch];
        if(typeof type == "string") return type;
        type.create(new Vec(x,y), ch);
        return "empty";
      });
    });
  }
}

class State{
  constructor(level, actors, status) {
    this.level = level;
    this.actors = actors;
    this.status = status;
  }
  static start(level){
    return new State(level, level.starActors, "playing");
  }
  get Player() {
    return this.actors.find(a => a.type == "Player");
  }
}