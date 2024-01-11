export default postModule = {
    state : () => ({
        posts : [],
        modificatorValue : '',
        isPostsLoading : false,
        selectedSort : '',
        searchQuery : '',
        page:1,
        limit:10,
        totalPage : 0,
        sortOptions : [
          {value : 'title', name : 'По названию'},
          {value : 'body', name : 'По описанию'},
        ]
    }),
    getters : {
        sortedPost(state){
            return [state.posts].sort((post1,post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
         },
         sortedSearchQuery(state,getters){
          return getters.sortedPost.filter(post => post.title.includes(state.searchQuery))
         }
    },
    mutations : {
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostsLoading = bool
        },
        setPage(state, page){
            state.page = page
        },
        selectedSort(state, selectedSort){
            state.isPostsLoading = selectedSort
        },
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        },
        setSearcQuery(state, searchQuery){
            state.searchQuery = searchQuery
        }

    }, 
    actions : {
        async fethPost({state,commit}){
            try{
              commit('setLoading',false);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params:{
                    _page : state.page,
                    _limit : state.limit
                  }
                });
                commit('setTotalPage'.Math.ceil(response.headers['x-total-count'] / state.limit))
              commit('setPosts', response.data)
            } catch(e){
              alert('Eror')
            }finally{
              this.isPostsLoading = true;
            }
          },
          async loadMorePosts({state,commit}){
            try{
              commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                  params:{
                    _page : state.page,
                    _limit : state.limit
                  }
                });
                commit('setTotalPage'. Math.ceil(response.headers['x-total-count'] / this.limit))
              commit('setPosts',[...this.posts,...response.data]);
            } catch(e){
              alert('Eror')
            }
          }
    }
}