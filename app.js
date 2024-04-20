fetch('data.yaml')
    .then(response => response.text())
    .then(yamlData => {
        var teamData = jsyaml.load(yamlData);
        displayTeamData(teamData); // Display initial team data
        
        // Add event listener to position filter
        var positionFilter = document.getElementById('position-filter');
        positionFilter.addEventListener('change', function() {
            filterTeamData(teamData);
        });
    })
    .catch(error => console.log('Error fetching YAML data:', error));


// Function to display team data
function displayTeamData(teamData) {
    var container = document.getElementById('team-members-container');
    container.innerHTML = ''; // Clear previous content

    teamData.forEach(member => {
        var memberElement = document.createElement('div');
        memberElement.textContent = member.name + ' - ' + member.position;
        container.appendChild(memberElement);
    });
}

// Function to filter team data based on selected position
function filterTeamData(teamData) {
    var selectedPosition = document.getElementById('position-filter').value;
    var container = document.getElementById('team-members-container');
    container.innerHTML = ''; // Clear previous content

    teamData.forEach(member => {
        if (selectedPosition === 'all' || member.position === selectedPosition) {
            var memberElement = document.createElement('div');
            memberElement.textContent = member.name + ' - ' + member.position;
            container.appendChild(memberElement);
        }
    });
}
