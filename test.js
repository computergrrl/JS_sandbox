let newItem = document.createElement('li');
let button1 = document.getElementById('button1');
let input1 = document.getElementById('input1');
let list1 = document.querySelector('list1');

button1.addEventListener('click' , () => {

      list1.appendChild(newItem);
      

});
