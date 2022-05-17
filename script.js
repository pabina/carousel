flag = 2;

function controler(x) {
  flag = flag + x;
  slide(flag);
}
slide(flag);

function slide(num) {
  let myslide = document.getElementsByClassName("slide");
  for (let y of myslide) {
    y.style.display = "none";
  }
  if (num == myslide.length) {
    flag = 0;
    num = flag;
  }
  if (num < 0) {
    flag = myslide.length - 1;
    num = flag;
  }
  myslide[num].style.display = "block";
}
