document.querySelector('#contact-form').addEventListener('submit', function (e){
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
