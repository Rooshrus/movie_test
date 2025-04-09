document.addEventListener('DOMContentLoaded', function () {
    const moviesContainer = document.querySelector('.movies');
    const seatMap = document.querySelector('.seat-map');
    const buyButton = document.getElementById('buyButton');
    let selectedMovie = null;
  
    moviesContainer.addEventListener('click', function (event) {
      const movie = event.target.closest('.movie');
      if (movie) {
        selectMovie(movie.dataset.movie);
      }
    });
  
    function selectMovie(movie) {
      selectedMovie = movie;
      console.log(`Ви вибрали фільм: ${selectedMovie}`);
  
      seatMap.style.display = 'flex';
      resetSelectedSeats();
      buyButton.disabled = false;
    }
  
    seatMap.addEventListener('click', function (event) {
      const seat = event.target;
  
      if (seat.classList.contains('seat')) {
        seat.classList.toggle('selected');
      }
    });
  
    buyButton.addEventListener('click', function () {
      const selectedSeatElements = document.querySelectorAll('.seat.selected');
      const selectedSeatsArray = Array.from(selectedSeatElements).map(seat => {
        return {
          row: seat.parentNode.dataset.row,
          seat: seat.dataset.seat
        };
      });
  
      if (selectedSeatsArray.length > 0) {
        showConfirmationDialog(selectedSeatsArray);
      } else {
        alert('Будь ласка, виберіть місця перед тим, як продовжити.');
      }
    });
  
    function showConfirmationDialog(selectedSeatsArray) {
      const confirmationMessage = `Ви обрали наступні місця для фільму "${selectedMovie}":\n\n${formatSelectedSeats(selectedSeatsArray)}\n\nБажаєте продовжити?`;
  
      const isConfirmed = confirm(confirmationMessage);
  
      if (isConfirmed) {
        console.log('Selected seats:', selectedSeatsArray);
        resetSelectedSeats();
      }
    }
  
    function formatSelectedSeats(selectedSeatsArray) {
      return selectedSeatsArray.map(seat => `Ряд ${seat.row}, Місце ${seat.seat}`).join('\n');
    }
  
    function resetSelectedSeats() {
      const selectedSeatElements = document.querySelectorAll('.seat.selected');
      selectedSeatElements.forEach(seat => seat.classList.remove('selected'));
    }
  });
  