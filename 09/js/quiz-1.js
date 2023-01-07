class Pet {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name} is running`);
  }
}
const cheez = new Pet("치즈","yellow");
cheez.run();