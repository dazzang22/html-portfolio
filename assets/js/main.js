function setLang(lang) {
  const all = document.querySelectorAll('.lang');
  all.forEach(el => el.style.display = 'none');

  const selected = document.querySelectorAll('.' + lang);
  selected.forEach(el => el.style.display = 'block');

  const btnEn = document.getElementById('btn-en');
  const btnKr = document.getElementById('btn-kr');

  if (btnEn && btnKr) {
    btnEn.classList.remove('active');
    btnKr.classList.remove('active');
    if (lang === 'en') btnEn.classList.add('active');
    if (lang === 'kr') btnKr.classList.add('active');
  }
}

// 기본 언어
document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
});
