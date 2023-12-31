
const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export async function fetchPosts(token) {
    try {
      const response = await fetch(`${POSTS_ENDPOINT}`,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
      })
      
      const result = await response.json();
      console.log(result.data.posts);
      return result.data.posts
    } catch (err) {
      console.error(err);
    }
}

export async function fetchMyPosts() {
    try {
        const response = await fetch(`${API_URL}/users/me`)
        const result = await response.json();
        console.log(result.data.posts);
        return result.data.posts
      } catch (err) {
        console.error(err);
      }
}

export async function createNewPost(newPost, token) {
    console.log(newPost)
    try {
        const response = await fetch(POSTS_ENDPOINT, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(newPost)
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
}

export async function deletePost(_id, token) {
    try {
      const response = await fetch(`${POSTS_ENDPOINT}/${_id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  
export async function updatePost(updatedPost, _id, token) {
    try {
      const response = await fetch(`${POSTS_ENDPOINT}/${_id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedPost)
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}
export async function postMessage(_id, token, newMessage) {
    try {
      const response = await fetch(`${POSTS_ENDPOINT}/${_id}/messages`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newMessage)
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}  