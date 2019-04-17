
let button1 = document.getElementById('button1');
let input1 = document.getElementById('input1');
let list1 = document.getElementById('list1');

button1.addEventListener('click' , () => {
      let newItem = document.createElement('li');
      newItem.textContent = input1.value;
      list1.appendChild(newItem);
      input1.value = '';


});
