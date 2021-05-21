let fetch = require("node-fetch");
module.exports = {
    getGithubInfoOfAUser: async function(name) {
        const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json())
		}
		catch (e) {
			console.error(e);
		}
        let title = `${response.login}(${response.id})`;
		let githubUrl = response.html_url;
		let pfp = response.avatar_url;
		let bio = response.bio ? response.bio : 'No Bio';
		let publicRepositories = response.public_repos.toLocaleString();
		let followers = response.followers.toLocaleString();
		let following = response.following.toLocaleString();
		let email = response.email ? response.email : 'No Email';
		let company = response.company ? response.commands : 'No Company';
		let location = response.location ? response.location : 'No Location';
		console.log("Name: " + title);
		console.log("Github Link: " + githubUrl);
		console.log("Profile picture: " + pfp);
		console.log("Biography: " + bio);
		console.log("Public Repositories: " + publicRepositories);
		console.log("Followers: " + followers);
		console.log("Following: " + following);
		console.log("Email: " + email);
		console.log("Company: " + company);
		console.log("Location: " + location);
    }
}