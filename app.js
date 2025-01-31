document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll('.delete-btn');
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', function () {
        const eventId = this.getAttribute('data-id');
        const eventElement = document.getElementById(`event-${eventId}`);
        
        
        fetch(`/delete/${eventId}`, {
          method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
          if (data.message === 'Event deleted') {
            
            eventElement.remove();
          } else {
            alert('Error deleting event');
          }
        })
        .catch(err => {
          console.log(err);
          alert('Error deleting event');
        });
      });
    });
  });
  