// script.js

// To-Do List Functions
function addTodo() {
    const input = document.getElementById('todoInput');
    const itemText = input.value.trim();
    if (itemText) {
      const todoList = document.getElementById('todoList');
      const li = document.createElement('li');
      li.textContent = itemText;
  
      const doneButton = document.createElement('button');
      doneButton.textContent = 'Selesai';
      doneButton.onclick = () => {
        li.style.textDecoration = 'line-through';
        saveTodos();
      };
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Hapus';
      deleteButton.onclick = () => {
        li.remove();
        saveTodos();
      };
  
      li.appendChild(doneButton);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
      input.value = '';
      saveTodos();
    }
  }
  
  function saveTodos() {
    const items = [];
    document.querySelectorAll('#todoList li').forEach(li => {
      items.push({
        text: li.childNodes[0].nodeValue.trim(),
        done: li.style.textDecoration === 'line-through'
      });
    });
    localStorage.setItem('todos', JSON.stringify(items));
  }
  
  function loadTodos() {
    const items = JSON.parse(localStorage.getItem('todos')) || [];
    items.forEach(item => {
      const input = document.getElementById('todoInput');
      input.value = item.text;
      addTodo();
      if (item.done) {
        const lastItem = document.querySelector('#todoList li:last-child');
        lastItem.style.textDecoration = 'line-through';
      }
    });
    document.getElementById('todoInput').value = '';
  }
  
  window.onload = loadTodos;
  
  // Calculator Functions
  function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = '';
  
    switch (operation) {
      case 'power':
        result = Math.pow(num1, num2);
        break;
      case 'sqrt':
        result = `√${num1} = ${Math.sqrt(num1)}, √${num2} = ${Math.sqrt(num2)}`;
        break;
      case 'mod':
        result = num1 % num2;
        break;
    }
  
    document.getElementById('calcResult').textContent = result;
  }
  
  // Form Validation
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let message = '';
  
    if (name.length < 4) {
      message += 'Nama harus lebih dari 3 karakter. ';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message += 'Email tidak valid. ';
    }
  
    if (password.length < 8) {
      message += 'Password minimal 8 karakter.';
    }
  
    document.getElementById('formMessage').textContent = message || 'Semua input valid!';
  }