  let menu=document.querySelector("#menu");
  let content=document.querySelector("#content");
  menu.addEventListener("click",()=>{
    content.style.width="100%";

  });
  let cancel=document.querySelector("#cancel");
  cancel.addEventListener("click",()=>{
    content.style.width="0%";
  })
  const login=document.querySelector("#Login");
  
