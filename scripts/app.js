//Get the name of the form


document.getElementById('createLeaderboardForm').addEventListener('submit', function(e) { //gets the form element by its ID, createLeaderboardForm, from the HTML. Adds an event listener that triggers on the submit event 
    e.preventDefault(); //e is the event object passed to the function. e.preventDefault(); stops the form from submitting in the traditional way, which would reload the page. This is crucial in a single-page application (SPA) to avoid reloading the entire page and losing the current state.
    

    const name = document.getElementById('leaderboardName').value; //fetches the value entered in the input field with the ID leaderboardName, and stores it in variable name.
    createLeaderboard(leaderboardname); //calls the createLeaderboard function and passes it the name obtained from the form input.

});

function createLeaderboard(leaderboardname) {
    // Assume API call here to create the leaderboard
    console.log('Creating leaderboard:', leaderboardname);
    // Show the leaderboard section and update the display
    document.getElementById('createLeaderboardSection').classList.add('hidden');
    document.getElementById('leaderboardDisplaySection').classList.remove('hidden');
    // Further functions to update the display can be added here
}

// Function to show/hide sections based on user status or actions
function showSection(sectionId) {
    const sections = document.querySelectorAll('#app section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}



//Routing: For an SPA, consider using a simple client-side routing solution to manage which section is visible based on the URL. This can be done with libraries like page.js or even a simple custom solution using window.location.hash.






// document.addEventListener('DOMContentLoaded', () => {
//     /*This line adds an event listener to the document. It waits for the DOM (Document Object Model) to be fully loaded before executing the function.
// */


//     // Mock data for the leaderboard
//     const leaderboardData = [
//         { rank: 1, name: 'Alice', steps: 10500 },
//         { rank: 2, name: 'Bob', steps: 9800 },
//         { rank: 3, name: 'Charlie', steps: 9200 }
//     ];
// //This creates an array leaderboardData containing objects. 
// //Each object represents a person's rank, name, and step count.


//     // Function to update the leaderboard that takes a data parameter.
//     function updateLeaderboard(data) {
//         const leaderboardRows = document.getElementById('leaderboard-rows'); //This line gets the HTML element with the id 'leaderboard-rows' and assigns it to the variable leaderboardRows.
//         leaderboardRows.innerHTML = ''; // Clear data from existing rows

// //        This starts a loop that iterates over each entry in the data array
//         data.forEach(entry => {
//             const row = document.createElement('tr');
//             const rankCell = document.createElement('td');
//             rankCell.textContent = entry.rank;

//             const nameCell = document.createElement('td');
//             nameCell.textContent = entry.name;

//             const stepsCell = document.createElement('td');
//             stepsCell.textContent = entry.steps;

//             row.appendChild(rankCell);
//             row.appendChild(nameCell);
//             row.appendChild(stepsCell);

//             leaderboardRows.appendChild(row);
//         });
//     }

//     // Function to update sync info
//     function updateSyncInfo() {
//         const syncInfo = document.getElementById('sync-info');
//         const currentDate = new Date().toLocaleString();
//         syncInfo.textContent = `Last Synced On: ${currentDate}`;
//     }

//     // Initialize the app
//     updateLeaderboard(leaderboardData);
//     updateSyncInfo();
// });
