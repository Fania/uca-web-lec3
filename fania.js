const demo1 = document.getElementById("demo_1");
const demo1f = () => { alert("You clicked me!"); }
demo1.addEventListener("click", demo1f);

//////////////////////////////////////////////////////////////////////////////

document.getElementById("demo2b").addEventListener("click", demo2showDate);
const demo2p = document.getElementById("demo2p");

function demo2showDate() {
  let d = new Date();
  demo2p.innerHTML = `Oh, it’s: ${d.toDateString()}!`;
}

//////////////////////////////////////////////////////////////////////////////

function Demo3PerformGreeting(ev) {
  if(demo3userName.value){
    demo3myName.innerHTML = `<strong>${demo3userName.value}</strong>!`;
  } else {
    demo3myName.innerHTML = `<strong>person with no name</strong>!`;
  }
  ev.preventDefault(); // disables default form submission
}

demo3getName.addEventListener("submit", Demo3PerformGreeting);

//////////////////////////////////////////////////////////////////////////////

const demo4thelinks = document.getElementsByClassName('demo4thelinks');

const demo4addClass = () => {
  for(i in demo4thelinks){
    demo4thelinks[i].classList.toggle("demo4changeMe");
  }
}
demo4changeLinks.addEventListener("click", demo4addClass);





