const cart = () => {
  const openCartBtn = document.querySelector('.button-cart');
  const cart =document.getElementById('modal-cart');
  const closeCartBtn = cart.querySelector('.modal-close');

  openCartBtn.addEventListener('click', () => {
    cart.style.display = 'flex';
  });

  closeCartBtn.addEventListener('click', () => {

    cart.style.display = 'none';

  });
};

cart();