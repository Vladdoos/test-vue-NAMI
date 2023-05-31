export default {
    state: {
        posts: []
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        fetchPosts({commit }) {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=6',{
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Credentials': true
                    }
                }
            )
                .then(response => response.json())
                .then(data => {
                    commit('updatePosts', data);
                    localStorage.setItem('NAME_TEST_DATA', JSON.stringify(data));
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                });
        },
    },
}
