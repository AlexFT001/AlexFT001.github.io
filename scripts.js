const repoList = document.getElementById('repo-list');
const username = "alexft001";
const portgolioLink = `${username}.github.io`;


fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repositories => {
        repositories.forEach(repo => {
            if(repo.has_pages && (repo.name).toLowerCase() != portgolioLink.toLowerCase()) {
                const repoDiv = document.createElement('div')
                repoDiv.className = 'repo';
            
                const link = document.createElement('a');
                link.textContent = repo.name;
                link.href = `https://${portgolioLink}/${repo.name}/`;
                link.target = '_blank';
            
                repoDiv.appendChild(link);
                repoList.appendChild(repoDiv);    
            };
        });
    })
    .catch(error => {
        console.error('Error a buscar os Repositorios', error);
        repoList.innerHTML = '<p>Failed to load repositories.<p>'
    });
