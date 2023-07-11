// Fetch animal data
fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(data => {
    // Present list of animal names
    const animalList = document.getElementById('animal-List');

    // Create a function to display animal details
    const displayAnimalDetails = (id) => {
      // Fetch the animal details
      fetch(`http://localhost:3000/characters/${id}`)
        .then(response => response.json())
        .then(animal => {
          // Render the details of the selected animal
          const animalImage = document.getElementById('animal-image');
          const voteCount = document.getElementById('vote-count');
          const voteButton = document.getElementById('vote-button');
          const resetButton = document.getElementById('reset-button');

          animalImage.src = animal.image;
          voteCount.textContent = `Votes: ${animal.votes}`;

          voteButton.addEventListener('click', () => {
            animal.votes++;
              // Update the vote count
              voteCount.textContent = `Votes: ${animal.votes}`;
          });

          resetButton.addEventListener('click', () => {
            animal.votes = 0;
                // Update the vote count
                voteCount.textContent = `Votes: ${animal.votes}`;
              })
          });
    };

    // Render the list of animal names
    data.forEach(animal => {
      const animalListItem = document.createElement('li');
      animalListItem.textContent = animal.name;
      animalListItem.addEventListener('click', () => {
        // Fetch the selected animal's details
        displayAnimalDetails(animal.id);
      });
      animalList.appendChild(animalListItem);
    });
  })
  .catch(err => console.log(err));