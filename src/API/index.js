
const COHORT_NAME='2302-acc-et-web-pt-a'
const API_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POSTS_ENDPOINT=`${API_URL}/posts`

export async function fetchPosts() {
    try {
      const response = await fetch(`${POSTS_ENDPOINT}`)
      const result = await response.json();
      console.log(result.data.posts);
    //   setPosts(result.data.posts);
      return result.data.posts
    } catch (err) {
      console.error(err);
    }
}