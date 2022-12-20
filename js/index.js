const openAndCloseWindow = () => {
  const body = document.body;
  const menu = document.querySelector('.menu');
  const modal = document.querySelector('.modal');



  body.addEventListener('click', (e) => {
    if (e.target.closest('.open-menu')) {
      menu.style.visibility = 'visible';
      menu.style.opacity = '1';
    }
    if (e.target.closest('.close-menu')) {
      menu.style.visibility = 'hidden';
      menu.style.opacity = '0';
    }
    if (e.target.closest('.open-modal')) {
      modal.style.visibility = 'visible';
    }
    if (e.target.closest('.close-modal')) {
      modal.style.visibility = 'hidden';
    }

  });

};


openAndCloseWindow();