let people = [
  {name: 'Fernando Henrique Caversan Santos Duro', tel:'+55 (14) 99999-9999', xp: true},
  {name: 'Anderson Arcenio Matos da Costa', tel:'+55 (14) 99999-9999', xp: true},
  {name: 'Karina do Amaral', tel:'+55 (14) 99999-9999', xp: false},
  {name: 'Cauê Sanches', tel:'+55 (14) 99999-9999', xp: true},
]

console.log( document.querySelector('.lista tbody'))
for(person in people) {
  document.querySelector('.lista tbody').innerHTML +=
  `<tr style="background: ${((person % 2 === 0) ? '#fff' : '#eee')}">
    <td>${people[person].name}</td>
    <td>${people[person].tel}</td>
    <td>${(people[person].xp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}</td>
    <td><button>Alterar</button></td>
  </tr>
  `
}