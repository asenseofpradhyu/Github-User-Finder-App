// Init
const github = new Github;
const ui = new UI;

// Search Input
const searchinput = document.getElementById("searchuser");

// Event Listner
searchinput.addEventListener('keyup', (e) => {
    const usertext = e.target.value;

    // Show Profile List
    if(usertext !== ''){
        github.getUser(usertext)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert Message
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show User Profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
            }
        })
    } else {
        // Clear Profile List
        clearAlert();
    }
});