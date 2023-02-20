
const delButtonHandler = async (event) => {
    // console.log('it is clicked')
    if (event.target.hasAttribute('data-id')) {
      // Send a DELETE request to the API endpoint
      const event_id = event.target.getAttribute('data-id');
        console.log(event_id)
      const response = await fetch(`/api/savevents/${event_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
           // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

document
  .querySelector('.del_event')
  .addEventListener('click', delButtonHandler);

  async function editNoteHandler(event) {
    event.preventDefault();
    console.log('clicked')
    if (event.target.hasAttribute('data-note')) {
    
    
    console.log(event)
    
    const savedevent_id = event.target.getAttribute('data-note');
    const notes = document.getElementById(`note${savedevent_id}`).value;
    console.log("NOtes",notes)
    console.log("Saved event ID",savedevent_id)

    const response = await fetch(`/api/savevents/${savedevent_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        notes,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  console.log(response)

    if (response.ok) {
      // document.location.replace(`/profile`);
    } else {
      alert('Failed to update note');
    }
  }
  }
  
  document.querySelector('.del_event').addEventListener('submit', editNoteHandler);