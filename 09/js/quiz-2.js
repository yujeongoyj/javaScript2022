class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  run = function () {
    alert(`${this.name} is running.`);    
  }
}

class Cat extends Pet {
  constructor(name, color, bread){
    super(name, color);
    this.bread = bread;
  }
  viewInfo() {
    alert(`이름 : ${this.name}, 품종 : ${this.bread}, 색깔 : ${this.color}`);
  }  
}
const bori = new Cat("보리","흰색","코숏");
bori.viewInfo();