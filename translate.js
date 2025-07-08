document.addEventListener("DOMContentLoaded", ()=>{
  const page = document.body.dataset.page;      // “main”, “login”, “register” veya “reset”
  const langBtns = document.querySelectorAll(".lang-selector button");

  function applyTranslations(lang){
    fetch("lang.json")
      .then(r=>r.json())
      .then(dict=>{
        const section = dict[lang] && dict[lang][page];
        if(!section) return;
        Object.keys(section).forEach(key=>{
          // main sayfa butonları
          const mainBtn = document.querySelector(`[data-i18n="${key}"]`);
          if(mainBtn){
            if(mainBtn.tagName==="BUTTON") mainBtn.textContent = section[key];
            return;
          }
          // diğer elementler
          const el = document.getElementById(key);
          if(!el) return;
          if(el.tagName==="INPUT") el.placeholder = section[key];
          else el.textContent = section[key];
        });
      });
  }

  // butonlara tıkla → çevir
  langBtns.forEach(btn=>{
    const lang = btn.dataset.lang;
    btn.addEventListener("click", ()=> applyTranslations(lang));
  });

  // varsayılanı da uygula (TR)
  applyTranslations("tr");
});
