const main=document.querySelector(".main")
let chance="X"
let game = ["","","","","","","","",""];

main.addEventListener("click",(e) => {
  let currIndex=parseInt(e.target.dataset.index);
  if(e.target.innerText==""){
    // console.log(e.target)
  e.target.innerText=chance;
  game[currIndex]=chance;
  if(checkwin()){
    setTimeout(() => {
      alert(`${chance} win`)
      resetGame();
    }, 200);

  }
  else if(istie()){
    setTimeout(() => {
     alert("Its a Tie") ;
    },
    150)
  }
  else{
  chance= (chance=="X"?"O":"X");
  // console.log(main.children)
  }
}
}
)



function checkwin(){
  if(chekEqual(chance,0,1,2) || chekEqual(chance,3,4,5) || chekEqual(chance,6,7,8)){
         return true
  }
  else if (chekEqual(chance,0,3,6) || chekEqual(chance,1,4,7) || chekEqual(chance,2,5,8)){
    return true
  }
  else if (chekEqual(chance,2,4,6) || chekEqual(chance,0,4,8)){
    return true
  }
  return false;
}


function chekEqual(target,...element){
 for(let i=0;i<element.length;i++){
     if(game[element[i]]!=target){
      return false
     }
 }
 return true;
}

function resetGame(){
   let allDiv = main.children;
   for(let i=0; i<allDiv.length;i++){
    allDiv[i].innerText="";
    game = ["X","O","","","","","","",""];
    chance ="X"
   }
}

function istie(){
  for(let i=0;i<game.length;i++){
    if(game[i]==""){
      return false
    }
  }
  return true
}


// let wincondition =[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,6],[2,5,8]]