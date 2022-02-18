function newElement(){
  let li=document.createElement("li");
  let inputValue=document.getElementById("newtask").value;
  let t=document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputValue===''){
      alert("You didn't write anything");
  }
  else{
      document.getElementById("myUl").appendChild(li);
  }
  document.getElementById("newtask").value="";
  let remove_btn=document.createElement("button");
  let remove_text=document.createTextNode("\u00D7");
  remove_btn.className="close";
  remove_btn.appendChild(remove_text);
  li.appendChild(remove_btn);

  for(let i=0;i<close.length;i++){
      close[i].onclick=function(){
          let div=this.parentElement;
          div.style.display="none";
      }
  }


  for(let i=0;i<close.length;i++){
      close[i].onclick=function(){
          let div=this.parentElement;
          div.style.display="none";
      }
  }
}
let To_do_list=document.getElementsByTagName("li");
for (let i=0;i<To_do_list.length;i++){
  let remove_btn=document.createElement("button");
  let remove_text=document.createTextNode("\u00D7");
  remove_btn.className="close";
  remove_btn.appendChild(remove_text);
  To_do_list[i].appendChild(remove_btn);
}
let close=document.getElementsByClassName("close");
for (let i=0;i<close.length;i++) {
  close[i].onclick=function() {
      let div=this.parentElement;
      div.style.display="none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
}
}, false);