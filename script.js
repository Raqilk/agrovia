document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const action = btn.dataset-action;
      if(action==="login")    window.location.href="login.html";
      if(action==="register") window.location.href="register.html";
    });
  });
});
