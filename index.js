const buttonNo = document.querySelector('.no');
const buttonYes = document.querySelector('.yes');

const moveButton = (e) => {
  let numberToMoveY = Math.floor(Math.random() * 90) + 1;
  let numberToMoveX = Math.floor(Math.random() * 90) + 1;
  e.target.style.top = numberToMoveY + "vh";
  e.target.style.right = numberToMoveX + "vw";
};

const showMessage = () => {
  let message = document.querySelector('.message');
  let question = document.querySelector('.question');
  const animation = document.querySelector('.anim');
  animation.classList.add('animation-wrapper');
  message.style.display = "block";
  buttonNo.style.display = "none";
  buttonYes.style.display = "none";
  question.style.display = "none";
};

buttonNo.addEventListener('mouseenter', moveButton);
buttonYes.addEventListener('click', showMessage);