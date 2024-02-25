let userData;
async function getData() {
    try {
        const username = document.getElementById('usernameInput').value;
        if (!username) {
            console.log("Please enter a username");
            return;
        }
        
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user data for ${username}`);
        }
        
        userData = await response.json();
        console.log(userData);
        displayUserData(userData);
    } catch (error) {
        console.error(error);
    }
}
function displayUserData(userData){
    const element = document.createElement('div');
element.innerHTML = `
    <div class="fetchContainer">
        <img src='${userData.avatar_url}' alt="">
        <div class="fetchInnerConatiner">
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <div class="fetchGrid">
                <h6 id="item1">Followers: <span>${userData.followers}</span></h6>
                <h6 id="item2">Following: <span>${userData.following}</span></h6>
                <h6 id="item3">Repos: <span>${userData.public_repos}</span></h6>
                <h6 id="item4">Twitter: <span>${userData.twitter_username}</span></h6>
                <h6 id="item5">Location: <span>${userData.location}</span></h6>
            </div>
        </div>
    </div>
`;

const rootElement = document.getElementById('root');
rootElement.innerHTML = '';
rootElement.appendChild(element);
}



