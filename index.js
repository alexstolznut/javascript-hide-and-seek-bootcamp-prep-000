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
  console.log(ranked);

  for(let i = 0; i < document.getElementsByClassName('ranked-list')[0]; i = i + 1){
    document.getElementsByClassName('ranked-list')[0].children.innerHTML = parseInt(document.getElementsByClassName('ranked-list')[0].children) + parseInt(n);
  }
  for(let j = 0; j < list1.length; j = j + 1){
    list2[j].innerHTML = parseInt(list2[j].innerHTML) + parseInt(n);
  }
  // for(let i = 0; i < ranked.length; i++){
  //   ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + parseInt(n);
  // }
  // return console.log(ranked);
}

function deepestChild() {
  const grandNode = document.querySelectorAll('div#grand-node').length;

  for (let i = 0; i<grandNode; i = i + 1) {
      console.log(grandNode[i].children)
  }


}

getFirstSelector('div');
increaseRankBy(1);
