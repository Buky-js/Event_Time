const signupFormHandler = async (e) => {
    e.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('api/users', { // change to post route that creates a user account
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
        console.log(name, email, password); //exchange with what should be done when successful
      } else {
        alert(response.statusText);
      }
    }
  };

  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);