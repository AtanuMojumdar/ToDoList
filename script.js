let form = document.getElementById("formdiv")
let indiv = document.getElementById("indiv")
let listdiv = document.getElementById("listdiv")
let alertt = document.createElement('div');
let showl = document.getElementById('btn-showl')
let show2 = document.getElementById('btn-show')
let sl = document.getElementById('sl')
let del = document.getElementById('btn-del');
let upd = document.getElementById('btn-upd');
let indexup = document.getElementsByClassName('indexup')[0];
let inkey = document.getElementById('inkey');
let inkey_btn = document.getElementById('inkey-btn');
let textup = document.getElementsByClassName('textup')[0];
let distext = document.getElementById('distext');
let upbtn = document.getElementById('up-btn');
let upmsg1 = document.getElementById('upmsg1');
let upmsg2 = document.getElementById('upmsg2');
let k = 0;
let update = 0;
let cc1 = "";
show2.style.display = "none";
upd.style.display = "none";
del.style.display = "none";
sl.style.display = "none";
alertt.innerHTML = `<div class="alert alert-danger mt-3" role="alert">Empty Input!
</div>"`;
let success = document.createElement('div')
success.innerHTML = `<div class="alert alert-success mt-3" role="alert">
  Success!
</div>`
alertt.style.display = "none";
indiv.appendChild(alertt);

success.style.display = "none";
indiv.appendChild(success);
// localStorage.value = null
let j = localStorage.length;
let i = String(j)
// console.log(i)
function insert() {
  let c = `${form.value}`
  // console.log(c)
  // console.log(typeof c)
  if (c.trim().length === 0) {
    alertt.style.display = "block";
    setTimeout(() => {
      alertt.style.display = "none";
    }, 2000)

  }
  else {
    alertt.style.display = "none";
    localStorage.setItem(`${i}`, `${form.value}`)
    // console.log(localStorage.length)
    success.style.display = "block";
    form.value = "";
    setTimeout(() => {
      success.style.display = "none";
    }, 2000)
    i++;
    k = 0;
    update = 1;
    up();
  }
}

function show() {
  indiv.style.display = "none";
  listdiv.style.display = "block";
  showl.style.display = "none";
  show2.style.display = "block";
  del.style.display = "none";
upd.style.display = "block";
  sl.style.display = "block";
  if (update == 0) {
    showList()
  }
  if (update == 1) {
    up();
  }
}
function add() {
  indiv.style.display = "block";
  listdiv.style.display = "none";
  showl.style.display = "block";
  show2.style.display = "none";
  sl.style.display = "none";
  del.style.display = "none";
upd.style.display = "none";
indexup.style.display="none";
textup.style.display = "none";
}

function showList() {
  if (k == 0) {
    for (let x = 0; x < localStorage.length; x++) {
      listdiv.innerHTML += `<div class="gg">
        <div class="index" style="border: 1px solid black;">${x}</div>
        <div class="todo">${localStorage.getItem(x)}</div>
      </div>`
    }
  }
  k++;
}

function up() {
  let l = localStorage.length - 1;
  listdiv.innerHTML += `<div class="gg">
        <div class="index" style="border: 1px solid black;">${l}</div>
        <div class="todo">${localStorage.getItem(l)}</div>
      </div>`
  update = 2;
}

function cl() {
  console.log("OK")
  let b = confirm("Are you sure!, Do you want clear your list?");
  if (b) {
    localStorage.clear();
    // k = 0;
    // update = 0;
    location.reload()
  }
}
function myLoad() {
  if (k == 0) {
    for (let x = 0; x < localStorage.length; x++) {
      listdiv.innerHTML += `<div class="gg">
        <div class="index" style="border: 1px solid black;">${x}</div>
        <div class="todo">${localStorage.getItem(x)}</div>
      </div>`
    }
    k++;
  }
}

function updat(){
  indexup.style.display="block";
}
function updat_btn(){
  let num = Number(inkey.value);
  if(inkey.value.trim().length != 0 && num<localStorage.length){
  let textv = inkey.value;
  indexup.style.display="none";
  textupup(textv);
  }
  else{
    upmsg2.style.display= "block";
    setTimeout(()=>{
      upmsg2.style.display= "none";
    },2000)
  }
}

function textupup(textv){
  textup.style.display = "block";
  let xer = localStorage.getItem(`${textv}`);
  console.log(xer, typeof xer)
  distext.value= xer.trim();
  cc1 = textv;
}
function upon(){
    let cc = distext.value;
  // console.log(cc, typeof cc)
  let c2 = confirm("Are you Sure, you want to update?");
  if(c2){
    localStorage.setItem(`${cc1}`,`${cc}`);
    upmsg1.style.display="block";
    setTimeout(()=>{
      upmsg1.style.display="none";
      location.reload();
    },2000)
  }
  else{
    console.log("Update Cancelled!");
  }}
