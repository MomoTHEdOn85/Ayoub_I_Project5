(() => {

  const butn = document.getElementById('navhp');
  const navList = document.getElementById('mainNavh');

  butn.addEventListener('click', () => {
    navList.classList.toggle('active');
  })

}) ();
