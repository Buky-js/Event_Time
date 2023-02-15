
const saveButtonHandler = async (event) => {
  
  const event_id = event.target.getAttribute('data-id');  
  const title = event.target.getAttribute('data-title')
  console.log(event_id)
  if (event.target.hasAttribute('data-id')) {
   

    const response = await fetch(`/api/savevents`, {
      method: 'POST',
      body: JSON.stringify({event_id,title}),
      headers: {
        'Content-Type':'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const ticketButtonHandler = async (event) => {
  const event_id = event.target.getAttribute('data-id');
  const event_title = event.target.getAttribute('data-title')
  if (event.target.hasAttribute('data-id')) {
    const response = await fetch(`/api/orders`, {
      method: 'POST',
      body: JSON.stringify({event_id,event_title}),
      headers: {
        'Content-Type':'application/json',
      }
    });

    if (response.ok) {
      document.location.replace('/profile');
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
