function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function() {
    this.done === false ? str = "읽는 중" : str = "완독";
    return str;
  }
}

const book1 = new Book("웹 표준의 정석", 648, false);
const book2 = new Book("점프 투 파이썬", 360, true);
