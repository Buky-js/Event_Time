
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