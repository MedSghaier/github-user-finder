//Inti GitHub
const github = new GitHub();
//Init UI
const ui = new UI();

//Search Input
const searUser = document.getElementById('searchUser');
//Search Input event listener
searUser.addEventListener('keyup', e=>{
  //Get input text
  const userText = e.target.value;
  if(userText!= ''){
      //Make http call
      github.getUser(userText)
        .then(data => {
          if(data.profile.message==='Not Found'){
            //Show Alert
            ui.showAlert('User not found', 'alert alert-danger');
          }else{
            //Show Profile
            ui.showProfile(data.profile)
            console.log(data.repos);
            
            ui.showRepos(data.repos);
          }
        })
  }else{
    //Clear profile
    ui.clearProfile();
  }
});
