const posts = [];
let lastActivityTime = null;

function createPost(title) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

// Example usage
createPost("Post One")
    .then(() => updateLastUserActivityTime())
    .then(() => createPost("Post Two"))
    .then(() => updateLastUserActivityTime())
    .then(() => createPost("Post Three"))
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("All promises resolved!");
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);

        // Deleting the last post
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => console.log(error));
