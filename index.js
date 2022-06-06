const headerBlock = document.getElementById('js-header-block'),
burger = document.getElementById('js-header-burger');

burger.addEventListener('click',headerBlock)=() => {
  headerBlock.addClassList.toggle('show');
}
console.log(headerBlock);