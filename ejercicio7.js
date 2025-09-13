
const obtenerUsuarios = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => mostrarUsuarios(data))
    .catch(error => console.log('Error:', error));
};


const mostrarUsuarios = (users) => {
  const usersUl = document.getElementById('users');
  usersUl.innerHTML = ''; 

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    usersUl.appendChild(li);
  });
};

obtenerUsuarios();