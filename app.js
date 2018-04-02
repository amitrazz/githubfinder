//int github
const github = new GitHub;
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=> {
    const userText = e.target.value;
    if(userText !== ''){
        //make http call
        github.getUser(userText).then(data =>{
            if(data.profile.message == 'Not Found'){
               //show Alert
               ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
               //show profile
               ui.showProfile(data.profile);
               ui.showRepos(data.repos);
               
            }
        });
    }else{
    //clear profile  
        ui.clearProfile();
    }
});