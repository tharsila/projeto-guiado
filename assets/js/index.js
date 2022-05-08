/* let people = [
  {name: 'Fernando Henrique Caversan Santos Duro', tel:'+55 (14) 99999-9999', xp: true},
  {name: 'Anderson Arcenio Matos da Costa', tel:'+55 (14) 99999-9999', xp: true},
  {name: 'Karina do Amaral', tel:'+55 (14) 99999-9999', xp: false},
  {name: 'Cauê Sanches', tel:'+55 (14) 99999-9999', xp: true},
]; */

const peopleRaw = localStorage.getItem('people');
  if (peopleRaw !== null) {
   var people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

function drawTable () {
  currentLine = [...document.querySelectorAll('.lista tbody .dynamic-content')];
  currentLine.forEach((element) => {
    element.remove()
  })

  for(person in people) {
    document.querySelector('.lista tbody').innerHTML +=
    `<tr class="dynamic-content" style="background: ${((person % 2 === 0) ? '#fff' : '#eee')}">
      <td>${people[person].name}</td>
      <td>${people[person].tel}</td>
      <td>${(people[person].xp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}</td>
      <td>
        <button onClick="deleteUser(${person})">Excluir</button>
        <a href="./src/form.html?person=${person}">Editar</a>
      </td>
    </tr>
    `
  }
}

function deleteUser (person) {
  people.splice(person, 1); 
  drawTable();
  localStorage.setItem('people', JSON.stringify(people));
}

drawTable();