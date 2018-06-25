class Github {
  constructor() {
    this.client_id = '71fea831716c7d2773a5';
    this.client_secret = '51a4225298ba32bf2015e25ec8febb736e5884c7';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }


}