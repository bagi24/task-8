const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const postContainer = document.getElementById('post-container');
    let postsHTML = '';

    data.forEach(post => {
      postsHTML += `
        <div class="post">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </div>
      `;
    });

    postContainer.innerHTML = postsHTML;
  })
  .catch(error => {
    console.error('Error:', error);
  });