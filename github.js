class GitHub {
  constructor(){
    this.client_id ='ec5fbfb9d5eefe1e562d';
    this.client_secret ='9cf35cc7a3236ade1472eb7e7fe0a9938f9b04ad';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async  getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort={this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return{
      profile,  // Because of Es6 no need for profile:profile  (to return an object)
      repos
    }
  }
}
