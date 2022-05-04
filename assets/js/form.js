function testForm (event) {
  event.preventDefault();

  const peopleRaw = localStorage.getItem('people');
  if (peopleRaw !== null) {
   var people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  people.push(
    {
      name: event.target.elements['name'].value, 
      tel: event.target.elements['phone'].value, 
      xp: (event.target.elements['xp'].value === 'true'),
    }
  )

  localStorage.setItem('people', JSON.stringify(people));

  document.getElementById('goHome').click();
}
