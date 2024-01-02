let emails = ["buluswise@gmail.com", "web.dev.team321@gmail.com"]
let passwords = ["bulus4,4", "web.dev321"]
let notifi = [1, 1]
let pre = notifi.length
let code = null
let adress = null
let fname = null
let lname = null
let signedin = "false"
let password = null
document.getElementById("next").addEventListener("click", ()=>{ 
    adress = document.getElementById("adress").value
fname = document.getElementById("fname").value
lname = document.getElementById("lname").value
password = document.getElementById("password").value
    if(adress!=="" && fname!=="" && lname!=="" && password!==""){
        if(adress.match(/^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/) && fname.length>2 && lname.length>2 && password.length>6){
document.getElementById('signupbox').style.display='none'
        document.getElementById('signupbox2').style.display='flex'}
    
else if(fname.length<=2 ){document.getElementById('fname').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("too short")}
else if(lname.length<=2 ){document.getElementById('lname').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("too short")}
else if(password.length<=6 ){document.getElementById('password').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("too short needs to be greater than 6 characters")}
else{document.getElementById('adress').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("invalid email")}}
else if(fname==""){document.getElementById('fname').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("required")}
else if(lname==""){document.getElementById('lname').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("required")}
else if(adress==""){document.getElementById('adress').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("required")}
else if(password==""){document.getElementById('password').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("required")}
})
document.getElementById("open").addEventListener("click", codev)
function codev(){
    document.getElementById('signupbox2').style.display='none'
    document.getElementById('signupbox3').style.display='flex';
    let random = Math.floor(Math.random()*10)
    let random2= Math.floor(Math.random()*10)
    let random3 = Math.floor(Math.random()*10)
    let random4 = Math.floor(Math.random()*10)
    let random5 = Math.floor(Math.random()*10)
    let num1 = 0
    let alpha1 = 0
    let num2 = 0
    let alpha2 = 0
    let alpha3 = 0
if(random==0){num1=0; }
else if(random==1){num1=1;}
else if(random==2){num1=2;}
else if(random==3){num1=3; }
else if(random==4){num1=4; }
else if(random==5){num1=5;}
else if(random==6){num1=6;}
else if(random==7){num1=7;}
else if(random==8){num1=8;}
else if(random==9){num1=9;}
else if(random==0){num1=0; }

if(random2==0){ num2=9; }
else if(random2==1){num2=8; }
else if(random2==2){num2=7; }
else if(random2==3){num2=6; }
else if(random2==4){num2=5; }
else if(random2==5){num2=4;}
else if(random2==6){ num2=3;}
else if(random2==7){ num2=2; }
else if(random2==8){ num2=1; }
else if(random2==9){num2=0;}
else if(random2==0){num2=0; }

if(random3==0){alpha1="a"; }
else if(random3==1){alpha1="b"; }
else if(random3==2){ alpha1="c"; }
else if(random3==3){ alpha1="d"; }
else if(random3==4){alpha1="e"; }
else if(random3==5){alpha1="f"; }
else if(random3==6){ alpha1="g";}
else if(random3==7){ alpha1="h"; }
else if(random3==8){ alpha1="i";}
else if(random3==9){alpha1="j";}
else if(random3==0){ alpha1="k"; }

if(random4==0){ alpha2="k"; }
else if(random4==1){ alpha2="l"; }
else if(random4==2){ alpha2="m"; }
else if(random4==3){ alpha2="n"; }
else if(random4==4){ alpha2="o";}
else if(random4==5){ alpha2="p"; }
else if(random4==6){ alpha2="q";}
else if(random4==7){ alpha2="r"; }
else if(random4==8){ alpha2="s";}
else if(random4==9){ alpha2="t";}
else if(random4==0){ alpha2="m"; }

if(random5==0){ alpha3="t";}
else if(random5==1){ alpha3="u";}
else if(random5==2){ alpha3="v";}
else if(random5==3){ alpha3="w";}
else if(random5==4){ alpha3="x";}
else if(random5==5){ alpha3="y";}
else if(random5==6){ alpha3="z";}
else if(random5==7){ alpha3="a";}
else if(random5==8){alpha3="b";}
else if(random5==9){ alpha3="c";}
else if(random5==0){alpha3="d";}
code = num1+alpha1+num2+alpha2+alpha3


location.href="mailto:web.dev.team321@gmail.com?subject=astro build signup verification&body=name: "+fname+" "+lname+". email address: "+adress+". password: "+password+". status: awaiting verification. verification code: "+code+". Info: write the code in your web browser and tap send to complete the verify "
}
document.getElementById("next2").addEventListener("click", verify)
document.getElementById("snext").addEventListener("click", verify2)
function verify (){

    if(document.getElementById("verifyinput").value.padEnd().padStart().replace(".", "" )==code){console.log("verified")
document.getElementById("activitybox").style.display="flex"; document.getElementById("morebox").style.display="flex";  document.getElementById("signupbox3").style.display="none";  
signedin="true"; localStorage.setItem("adress", adress); localStorage.setItem("fname", fname)
localStorage.setItem("lname", lname); localStorage.setItem("password", password); localStorage.setItem("notifi", notifi)
localStorage.setItem("signedin", signedin)}}

function verify2 (){
adress = document.getElementById("adress2").value
fname = document.getElementById("fname2").value
lname = document.getElementById("lname2").value
password = document.getElementById("password2").value
let place = emails.indexOf(adress)
console.log(place)
console.log(password)
console.log(adress)
    if(emails.includes(adress) && passwords[place]==password){console.log("verified")
document.getElementById("activitybox").style.display="flex"; document.getElementById("morebox").style.display="flex";  document.getElementById("signinbox").style.display="none";  
signedin="true"; localStorage.setItem("adress", adress); localStorage.setItem("fname", fname)
localStorage.setItem("lname", lname); localStorage.setItem("password", password); localStorage.setItem("notifi", notifi)
localStorage.setItem("signedin", signedin)
let create = document.createElement("div")
let createtxt = document.createElement("txt")
let createimg = document.createElement("img")
create.id = "notifytxtbox"
createtxt.id = "notifytxt"
createimg.id = "notifyboximg"
createimg.src="download (14).png"
createtxt.innerHTML="we detected a new login using your account"
document.getElementById("notifybox").appendChild(create)
create.append(createtxt)
create.appendChild(createimg); notifi[4]=1; localStorage.setItem("notifi", notifi)
location.reload()
}
else if(emails.includes(adress)==false){document.getElementById('adress2').style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("invalid email")}
else{document.getElementById("password2").style.backgroundColor="rgba(255, 35, 35, 0.653)"; window.alert("invalid password")}

}
//load
window.addEventListener("load", loaded)
function loaded (){
fname = localStorage.getItem("fname")
lname = localStorage.getItem("lname")
password = localStorage.getItem("password")
signedin = localStorage.getItem("signedin")
adress = localStorage.getItem("adress")
notifi = localStorage.getItem("notifi").split(",")
console.log(notifi)
console.log(signedin)

if(signedin=="true"){
    document.getElementById("activitybox").style.display="flex";
    document.getElementById("morebox").style.display="flex";  
    document.getElementById("mainbox").style.display="none";  
   // document.getElementById("loginhref").innerHTML="you"
}
//welcome
   if(notifi[0]==1){
    let create = document.createElement("div")
   let createtxt = document.createElement("txt")
   let createimg = document.createElement("img")
   create.id = "notifytxtbox"
   create.name = "createaccount"
   console.log(create.name)
   createtxt.id = "notifytxt"
   createimg.id = "notifyboximg"
   createimg.src="login-concept-illustration_114360-739.avif"
   createtxt.innerHTML="thank you for creating an account with us"
   document.getElementById("notifybox").appendChild(create)
   create.append(createtxt)
   create.appendChild(createimg)
   create.addEventListener("click", ()=>{create.style.display="none"
notifi[0]=0; localStorage.setItem("notifi", notifi)})}


//user
if(notifi[1]==1){
if(adress=="buluswise@gmail.com"){
    let create = document.createElement("div")
   let createtxt = document.createElement("txt")
   let createimg = document.createElement("img")
   create.id = "notifytxtbox"
   createtxt.id = "notifytxt"
   createimg.id = "notifyboximg"
   createimg.src="img5-removebg-preview.png"
   createtxt.innerHTML="get the most out of astro this year"
   document.getElementById("notifybox").appendChild(create)
   create.append(createtxt)
   create.appendChild(createimg);
create.addEventListener("click", ()=>{create.style.display="none";
notifi[1]=0; localStorage.setItem("notifi", notifi)})}}


//request
if(notifi[2]==1){
    let create = document.createElement("div")
   let createtxt = document.createElement("txt")
   let createimg = document.createElement("img")
   create.id = "notifytxtbox"
   create.name = "createaccount"
   console.log(create.name)
   createtxt.id = "notifytxt"
   createimg.id = "notifyboximg"
   createimg.src="istockphoto-1415598585-612x612.jpg"
   createtxt.innerHTML="your resquest has been sent you will get a reply in a short while"
   document.getElementById("notifybox").appendChild(create)
   create.append(createtxt)
   create.appendChild(createimg)
   create.addEventListener("click", ()=>{create.style.display="none"
   notifi[2]=0; localStorage.setItem("notifi", notifi)})}
//signout
if(notifi[3]==1){
let date = new Date
date = date.toLocaleDateString()
    let create = document.createElement("div")
   let createtxt = document.createElement("txt")
   let createimg = document.createElement("img")
   create.id = "notifytxtbox"
   createtxt.id = "notifytxt"
   createimg.id = "notifyboximg"
   createimg.src="download (14).png"
   createtxt.innerHTML="you signed out on "+date
   document.getElementById("notifybox").appendChild(create)
   create.append(createtxt)
   create.appendChild(createimg)
   create.addEventListener("click", ()=>{create.style.display="none"
   notifi[3]=0; localStorage.setItem("notifi", notifi)})}
//account
if(notifi[4]==1){
let date = new Date
date = date.toLocaleDateString()
let create = document.createElement("div")
let createtxt = document.createElement("txt")
let createimg = document.createElement("img")
create.id = "notifytxtbox"
createtxt.id = "notifytxt"
createimg.id = "notifyboximg"
createimg.src="download (14).png"
createtxt.innerHTML="we detected a new login using your account on "+date
document.getElementById("notifybox").appendChild(create)
create.append(createtxt)
create.appendChild(createimg)
create.addEventListener("click", ()=>{create.style.display="none"
   notifi[4]=0; localStorage.setItem("notifi", notifi)})}
//activity
if(notifi[5]==1){
let create = document.createElement("div")
let createtxt = document.createElement("txt")
let createimg = document.createElement("img")
create.id = "notifytxtbox"
createtxt.id = "notifytxt"
createimg.id = "notifyboximg"
createimg.src="download (14).png"
createtxt.innerHTML="there are new activity going on"
document.getElementById("notifybox").appendChild(create)
create.append(createtxt)
create.appendChild(createimg)
create.addEventListener("click", ()=>{create.style.display="none"
   notifi[5]=0; localStorage.setItem("notifi", notifi)})}
//extra
if(notifi[6]==1){
let create = document.createElement("div")
let createtxt = document.createElement("txt")
let createimg = document.createElement("img")
create.id = "notifytxtbox"
createtxt.id = "notifytxt"
createimg.id = "notifyboximg"
createimg.src="download (14).png"
createtxt.innerHTML="anything"
document.getElementById("notifybox").appendChild(create)
create.append(createtxt)
create.appendChild(createimg)
create.addEventListener("click", ()=>{create.style.display="none"
   notifi[6]=0; localStorage.setItem("notifi", notifi)})}
}


document.getElementById("hide").addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display="none";
})
document.getElementById("morebox").addEventListener("click", ()=>{
    document.getElementById("sidebar").style.display="flex";
})
document.getElementById("activity").addEventListener("click", ()=>{
    document.getElementById("activitybox").style.display="flex";
    document.getElementById("requestbox").style.display="none";
    document.getElementById("notifybox").style.display="none";
    document.getElementById("accountbox").style.display="none";
})
document.getElementById("request").addEventListener("click", ()=>{
    document.getElementById("activitybox").style.display="none";
    document.getElementById("requestbox").style.display="flex";
    document.getElementById("notifybox").style.display="none";
    document.getElementById("accountbox").style.display="none";
})
document.getElementById("notifi").addEventListener("click", ()=>{
    document.getElementById("activitybox").style.display="none";
    document.getElementById("requestbox").style.display="none";
    document.getElementById("notifybox").style.display="flex";
    document.getElementById("accountbox").style.display="none";
})
document.getElementById("account").addEventListener("click", ()=>{
    document.getElementById("activitybox").style.display="none";
    document.getElementById("requestbox").style.display="none";
    document.getElementById("notifybox").style.display="none";
    document.getElementById("accountbox").style.display="flex";

    document.getElementById("letter").innerHTML=fname.slice(0, 1)
    document.getElementById("fnametxt").innerHTML="first name: "+fname
    document.getElementById("lnametxt").innerHTML="last name: "+lname
    document.getElementById("name").innerHTML=fname
    document.getElementById("emailtxt").innerHTML="email address: "+adress
    if(emails.includes(adress)){ document.getElementById("verifytxt").innerHTML="status: verified ✅"}
  else{ document.getElementById("verifytxt").innerHTML="status: awaiting verification ⛔"}
})
document.getElementById("send").addEventListener("click", ()=>{
location.href="mailto:web.dev.team321@gmail.com?subject=astro build request&body=email: "+adress+". request: "+document.getElementById("textarea").value
    let create = document.createElement("div")
   let createtxt = document.createElement("txt")
   let createimg = document.createElement("img")
   create.id = "notifytxtbox"
   createtxt.id = "notifytxt"
   createimg.id = "notifyboximg"
   createimg.src="istockphoto-1415598585-612x612.jpg"
   createtxt.innerHTML="your resquest has been sent you will get a reply in a short while"
   document.getElementById("notifybox").appendChild(create)
   create.append(createtxt)
   create.appendChild(createimg); notifi[2]=1; localStorage.setItem("notifi", notifi)})

document.getElementById("signout").addEventListener("click", ()=>{
    signedin="false"
    let date = new Date
    date = date.toLocaleDateString()
        let create = document.createElement("div")
       let createtxt = document.createElement("txt")
       let createimg = document.createElement("img")
       create.id = "notifytxtbox"
       createtxt.id = "notifytxt"
       createimg.id = "notifyboximg"
       createimg.src="download (14).png"
       createtxt.innerHTML="you signed out on"+date
       document.getElementById("notifybox").appendChild(create)
       create.append(createtxt)
       create.appendChild(createimg); notifi[3]=1; localStorage.setItem("notifi", notifi)
    localStorage.setItem("signedin", signedin)
    location.reload()
    })
document.getElementById("help").addEventListener("click", ()=>{
    document.getElementById('helpbox').style.display='flex'
})

let on = true;
document.getElementById("menu").addEventListener("click", ()=>{
    if(on==true){document.getElementById("links").style.display="flex";  document.getElementById("menu").src="close_FILL0_wght400_GRAD0_opsz24.png"; on=false}
    else if(on==false){document.getElementById("links").style.display="none";  document.getElementById("menu").src="menu_FILL0_wght400_GRAD0_opsz24.png"; on=true}  
})