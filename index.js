function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  const nested = document.getElementById('nested');
  return nested.querySelector('.target');
}

function increaseRankBy(n) {

  const ranked = document.querySelectorAll('.ranked-list');
  const list1 = ranked[0].children;
  const list2 = ranked[1].children;

  const start1 = 1;
  for(let i = 0; i < list1.length; i = i + 1){
    list1[i].innerHTML = parseInt(start1) + parseInt(n) + parseInt(i);
  }
  const start2 = 12;
  for(let j = 0; j < list2.length; j = j + 1){
    list2[j].innerHTML = parseInt(start2) + parseInt(n) - parseInt(j);
  }
  // for(let i = 0; i < ranked.length; i++){
  //   ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + parseInt(n);
  // }
  // return console.log(ranked);
}

function deepestChild() {
  const grandNode = document.querySelectorAll('div#grand-node');

  return grandNode[0].children[0].children[0].children[0].children[0];


}

getFirstSelector('div');
// increaseRankBy(1);
