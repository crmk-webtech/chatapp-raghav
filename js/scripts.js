let div=document.getElementById("div1");
function updateScroll(){

div.scrollTop = div.scrollHeight;
div.scrollTop=div.scrollHeight;
//console.log(div.scrollHeight);

//console.log(div.scrollTop);
}
const chat=document.getElementById("chat1");
const chat2=document.getElementById("chat2");
let chatk=1,chatr=1,refr=1,refk=1;
var clicked;
//console.log(chat);
//console.log(document.getElementById("div1").innerHTML); 
const raghav=document.getElementById("raghav");
const kartik=document.getElementById("kartik");
chat2.addEventListener("click",function(){
   //console.log("executedfirst")
   clicked="raghav";
   const div2=document.getElementById("div2");
   //raghav.innerHTML="";
   //div2.innerHTML=""; 
   div.innerHTML="";
   div2.style.position="fixed";
   div.style.margin="1%";
   div.style.marginTop="11vh";
   div.style.paddingTop="20px";
   div.style.overflowY="scroll";
   div.style.overflowX="hidden";
   div.style.height="70vh";
   div.className="raghav";
   document.getElementById("chat-user").innerHTML="<span><span style='font-size:2rem'>Raghav</span><br>last seen 1 min ago</span>"
   console.log(div.className);
   document.getElementById("ellipsis").style.display="block";
   document.getElementById("inner-search").style.display="block";
   if(chatr===1){
     // console.log("inner-chat");
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hellooo</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hiiii</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>kya hal chal</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>m bdia tu bta</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kya krra h ajkl</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>kuch  nhi yr time pass</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>lockdown se preshan hogye yr</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>han yr bot jada ab  to mn krta h bhag jao bs</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hnn</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kuch kam krra h??</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>khan mn e n krta kuch krne ka</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>pda rhta hu pura din mobile pr</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>tune kia kuch</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs same e halat h</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or bta sb bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hnn sb bdia</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>baad mein krte ha baat</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>Bye</label><br><br>")
raghav.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bye</label><br><br>")
   }
   chatr++;
   div.innerHTML=raghav.innerHTML
   //console.log("*"+chatr);
updateScroll();
})
//console.log("******"+clicked);
chat.addEventListener("click",function(){

//if(div.innerHTML==="<b>Tap a contact to start chatting</b>"){
   //console.log(true);
   const div2=document.getElementById("div2");
   div.innerHTML="";
   
   div2.style.position="fixed";
   div.style.margin="1%";
   div.className="kartik";
   div.style.marginTop="11vh";
   div.style.paddingTop="20px";
   div.style.overflowY="scroll";
div.style.overflowX="hidden";
div.style.height="70vh";
clicked="kartik";
console.log(div.className);
document.getElementById("ellipsis").style.display="block";
   document.getElementById("inner-search").style.display="block";
  // console.log("execute before"+clicked);
// ​
document.getElementById("chat-user").innerHTML="<span><span style='font-size:2rem'>Kartik</span><br>online</span>"
if(chatk==1){
   kartik.innerHTML="";

kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hellooo</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hiiii</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>kya hal chal</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>m bdia tu bta</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kya krra h ajkl</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>kuch  nhi yr time pass</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>lockdown se preshan hogye yr</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>han yr bot jada ab  to mn krta h bhag jao bs</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hnn</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kuch kam krra h??</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>khan mn e n krta kuch krne ka</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>pda rhta hu pura din mobile pr</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>tune kia kuch</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs same e halat h</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or bta sb bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hnn sb bdia</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>baad mein krte ha baat</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>Bye</label><br><br>")
kartik.insertAdjacentHTML("beforeend","<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bye</label><br><br>")
}
chatk++;
div.innerHTML=kartik.innerHTML;
updateScroll();
// //}
// //else{
//    console.log(false);
// }
});

const arr1=["hi","how are you","fyn","need ur help","need your assignment for reference","okay thanks a lot","hey","whatsup","nice<br>well we are planning for get together<br>will u join us","okay<br>Try informing earlier","ttyl"];
const arr2=["hi","fyn<br/> what about you","gd","ya sure  just tell","no issues I'll send u in sometime","welcome","hlo","All well","I am bit busy<br>I will tell u soon","sure","okay"];
const button = document.getElementById("btn");
const input=document.getElementById("input");
const add=(i,arr2,clicked)=>{
   //console.log("''''"+clicked);
   //console.log(document.getElementById(clicked).innerHTML);
   document.getElementById(div.className).insertAdjacentHTML(
       "beforeend", "<label style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>"+arr2[i]+"</label><br><br>");
       div.innerHTML=document.getElementById(div.className).innerHTML;
       console.log(arr2[i]);
       console.log(i);
       updateScroll()
}
const chats=(e)=>{
   let chat=input.value;
   //console.log(input.value);
   document.getElementById(div.className).insertAdjacentHTML(
   "beforeend", "<label style='float:right;border:1px solid black; background-color:lightgrey;font-size:1.5rem;padding:5px;border-radius:20px;'>"+input.value+"</label><br/><br/>"
   )
   div.innerHTML=document.getElementById(div.className).innerHTML;
   updateScroll();
   for(let i=0;i<arr1.length;i++){
       if(arr1[i]===input.value){
           setTimeout(function(){
               //console.log(arr2);
           add(i,arr2);
       },1000*((i+2)-i)
   )
   input.value="";
       return;    
          
       }
   }
   
   
 
}
button.addEventListener('click',function(){
   //console.log("executedlater");
   
   //console.log(clicked);
   chats()
});
input.addEventListener('keyup',function(e){
   if(e.keyCode===13)
   {
      
      chats();
   }
});

var sidebar = document.querySelector(".sidebar");
const setting=document.getElementById("preview-settings");
const settingMenu=document.getElementById("settings");
const invite=document.getElementById("preview-invite");
const invitefriends=document.getElementById("invitefriends");
const contact=document.getElementById("preview-contacts");
const contactMenu=document.getElementById("contacts");
function animationDisplaysidebar(){sidebar.style.display="none";console.log("remove")}
function animationDisplaysettings(){settingMenu.style.display="none";console.log("remove")}
function animationDisplayinvite(){invitefriends.style.display="none";console.log("remove")}
function animationDisplaycontact(){contactMenu.style.display="none";}
let ct=1;

document.getElementById("bars").addEventListener("click",function(){
   sidebar.removeEventListener("webkitAnimationEnd",animationDisplaysidebar);
   sidebar.style.display="block";
   sidebar.style.position="absolute";
   sidebar.style.animationName="sidebar-in"; 
   sidebar.style.zIndex="10";
  ct++;
}
)

// Detect all clicks on the document
document.addEventListener("click", function(event) {
   // If user clicks inside the element, do nothing
   if(ct>2){
      //console.log("entered");
	if (event.target.closest(".sidebar")){ 
      //console.log("In sidebar");
      return}
      else{
   // If user clicks outside the element, hide it!
   sidebar.style.animationName="sidebar-out"
 
  sidebar.addEventListener("webkitAnimationEnd",animationDisplaysidebar)
  
 ct=1;
      }
}
else if(sidebar.style.display==="block")
ct++;

});

setting.addEventListener("click",function(){
   settingMenu.removeEventListener("webkitAnimationEnd",animationDisplaysettings);
   settingMenu.style.display="block";
   settingMenu.style.zIndex="10";
   settingMenu.style.animationName="sidebar-in"; 
});

invite.addEventListener("click",function(){
   invitefriends.removeEventListener("webkitAnimationEnd",animationDisplayinvite);
   invitefriends.style.display="block";
   invitefriends.style.zIndex="10";
   invitefriends.style.animationName="sidebar-in"; 
});
contact.addEventListener("click",function(){
   contactMenu.removeEventListener("webkitAnimationEnd",animationDisplaycontact);
   contactMenu.style.display="block";
   contactMenu.style.zIndex="10";
   contactMenu.style.animationName="sidebar-in"; 
})
function backcontact(){
   contactMenu.style.animationName="sidebar-out"
 
   contactMenu.addEventListener("webkitAnimationEnd",animationDisplaycontact)
}
function backinvite(){
   invitefriends.style.animationName="sidebar-out"
 
   invitefriends.addEventListener("webkitAnimationEnd",animationDisplayinvite)
}
function back(){
   settingMenu.style.animationName="sidebar-out"
 
   settingMenu.addEventListener("webkitAnimationEnd",animationDisplaysettings)
}
const chatDiv=document.querySelector(".chat-div")

var ctr1=1;
function chatMenu(){
   chatDiv.style.display="block";
   ctr1++;
 }
 document.addEventListener("click",function(event){
   if(ctr1>2){
   if(event.target.closest(".chat-div")) return;
   chatDiv.style.display="none";
   ctr1=1;
   }
  else if(chatDiv.style.display==="block"){
     ctr1++;
  }
})
//console.log(div.className);
function clearchat(){
   div.innerHTML="";
   document.getElementById(div.className).innerHTML="";
   chatDiv.style.display="none";
}
