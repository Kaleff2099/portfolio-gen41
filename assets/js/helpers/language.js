const languageToggle = document.getElementById('language-toggle');

function toggleLanguage(){
  languageToggle.addEventListener('change', () => {
    languageToggle.checked ? window.location.href = '/index-en.html' : window.location.href = '/index.html';
  });
}  

export default toggleLanguage;

