
const saveButtonHandler = async (event) => {
  
  const event_id = event.target.getAttribute('data-id');  
  const notes = event.target.getAttribute('data-title')
  console.log(event_id)
  if (event.target.hasAttribute('data-id')) {
   

    const response = await fetch(`/api/savevents`, {
      method: 'POST',
      body: JSON.stringify({event_id,notes}),
      headers: {
        'Content-Type':'application/json',
      }
    });

    if (response.ok) {
      // document.location.replace('/profile');
      console.log('you saved event.')
    } else {
      alert(response.statusText);
    }
  }
};

const ticketButtonHandler = async (event) => {
  const event_id = event.target.getAttribute('data-id');
  if (event.target.hasAttribute('data-id')) {
    const response = await fetch(`/api/orders`, {
      method: 'POST',
      body: JSON.stringify({event_id,event_title}),
      headers: {
        'Content-Type':'application/json',
      }
    });

    if (response.ok) {
      console.log('you got 1 ticket.')
    } else {
      alert(response.statusText);
    }
  }
};




document
  .querySelector('.save_event')
  .addEventListener('click', saveButtonHandler);

document
  .querySelector('.get_ticket')
  .addEventListener('click', ticketButtonHandler);
