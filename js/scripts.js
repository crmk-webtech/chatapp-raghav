let div=document.getElementById("div1");
function updateScroll(){

div.scrollTop = div.scrollHeight;
div.scrollTop=div.scrollHeight;
console.log(div.scrollHeight);

console.log(div.scrollTop);
}
const raghav=document.getElementById("raghav");
console.log(raghav);
console.log(document.getElementById("div1").innerHTML);
const page=()=>{

} 
raghav.addEventListener("click",function(){

   const div2=document.getElementById("div2");
if(div.innerHTML==="<b>Tap a contact to start chatting</b>"){
   console.log(true);
   div.innerHTML="";
   div2.style.position="fixed";
   div.style.margin="1%";
   div.style.marginTop="11vh";
   div.style.overflowY="scroll";
   div.style.overflowX="hidden";
   div.style.height="70vh";

// ​
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hellooo</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>hiiii</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>kya hal chal</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>m bdia tu bta</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs bdia</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kya krra h ajkl</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>kuch  nhi yr time pass</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>lockdown se preshan hogye yr</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>han yr bot jada ab  to mn krta h bhag jao bs</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>hnn</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or kuch kam krra h??</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>khan mn e n krta uch krne ka</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>pda rhta hu pura din mobile pr</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>tune kia kuch</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>bs same e halat h</span><br><br>")
div.insertAdjacentHTML("beforeend","<span style='border:1px solid black; background-color:lightgrey; font-size:1.5rem;padding:5px;border-radius:20px;'>or bta sb bdia</span><br><br>")

updateScroll();
}
else{
   console.log(false);
}
});



const arr1=["hi"," how are you"," fyn"," need ur help"," need your assignment for reference"," okay thanks a lot","hey"," whatsup"," nice<br>well we are planning for get together<br>will u join us","okay<br>Try informing earlier","ttyl"];
const arr2=["hi","fyn<br><br>what about you","gd","ya sure  just tell","no issues I'll send u in sometime","welcome","hlo","All well","I am bit busy<br>I will tell u soon","sure","okay"];
const button = document.getElementById("btn");
const input=document.getElementById("input");
const add=(i,arr2)=>{
   document.getElementById("div1").insertAdjacentHTML(
       "beforeend", "<div ><span style='border:1px solid black; background-color:lightgrey;font-size:1.5rem;padding:5px;border-radius:20px;'>"+arr2[i]+"</span><br><br></div>")
       console.log(arr2);
       updateScroll()
}
const chats=(e)=>{
   
   let chat=input.value;
   console.log(input.value);
   document.getElementById("div1").insertAdjacentHTML(
   "beforeend", "<div ><span style='text-align:right;border:1px solid black; background-color:lightgrey;font-size:1.5rem;padding:5px;border-radius:20px;float:right;'>"+input.value+"</span><br><br></div>"
   )
   updateScroll();
   for(let i=0;i<arr1.length;i++){
       if(arr1[i]===input.value){
           setTimeout(function(){
               console.log(arr2);
           add(i,arr2);
       },1000*i
   )
           
          
       }
   }
   
   input.value=" ";
 
}
button.addEventListener('click',function(){
   chats()
});
input.addEventListener('keyup',function(e){
   if(e.keyCode===13)
   {
      chats();
   }
});

