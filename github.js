 class GitHub{
    constructor(){
        this.client_id = '9e0b91aa6a18cf4b6fbb';
        this.client_secret = 'ea5a477a63e60b13de3a3b39663ecadfcba5257b';
        this.repos_count = 5;
        this.repos_short = 'created: asc';
    }
     async getUser(user){
         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id =${this.client_id}&client_secret=${this.client_secret}`);
          const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&short=${this.repos_short}&client_id =${this.client_id}&client_secret=${this.client_secret}`);
         const profile = await profileResponse.json();
         const repos = await repoResponse.json();
         return {
             profile,
             repos
         }
     }
}