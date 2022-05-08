function testForm (event) {
  event.preventDefault();

  const peopleRaw = localStorage.getItem('people');
  if (peopleRaw !== null) {
   var people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  if (id !== null) {
    people[id] =  {
      name: event.target.elements['name'].value, 
      tel: event.target.elements['phone'].value, 
      xp: (event.target.elements['xp'].value === 'true'),
    }
  } else {
    people.push(
      {
        name: event.target.elements['name'].value, 
        tel: event.target.elements['phone'].value, 
        xp: (event.target.elements['xp'].value === 'true'),
      }
    )
  }

  localStorage.setItem('people', JSON.stringify(people));
  document.getElementById('goHome').click();
}

const mainUrl = new URL(window.location.href);
const id = mainUrl.searchParams.get('person');

if (id !== null) {
  const peopleRaw = localStorage.getItem('people');
  if (peopleRaw !== null) {
   var people = JSON.parse(peopleRaw);
  } else {
    people = [];
  }

  console.log(people[id]);

  document.getElementById('name').value = people[id].name;
  document.getElementById('phone').value = people[id].tel;
  if (people[id].xp) {
    document.getElementById('xp-yes').checked = true
  } else {
    document.getElementById('xp-no').checked = true
  }
}
