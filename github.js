class Github {
    constructor(){
        // Your Client ID here
        this.client_id = '*******************';
        // Your Client Secret ID here
        this.client_secret = '*************************';
        // You can add any respository count here
        this.repo_count = 5;
        // Repository Sort
        this.repo_sort = 'created: arc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profieData = await profileResponse.json();
        const repoData = await repoResponse.json();


        return{
            profile: profieData,
            repo: repoData
        }
    }
}