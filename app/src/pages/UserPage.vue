<template>
    <div >
        <h1>Страница с постами</h1>
        <my-input
        v-model="searchQuery"
        placeholder="Поиск">
        </my-input>
        <div class="app_btns">
          <my-button 
          @click="showDialog">
          Создать пользователя
        </my-button>
        <my-select
        v-model="selectedSort"
        :options="sortOptions">
      </my-select>
        </div>
      <my-dialog 
      v-model:show="dialogVisible">
        <post-form 
        @create="createPost"/>
      </my-dialog>
      <post-list 
      :posts="sortedPost"
      @remove="removePost"
      v-if="isPostsLoading"/>
      <div v-else>Идет загрузка...</div>
      <post-item 
      class="post"
     :posts="sortedSearchQuery"
     @remove="removePost"/>
     <div ref="observer" class="observer"></div>
     <!----<div class="page_wrapper">
        <div v-for="pageNumber in totalPage" 
        :key="pageNumber" 
        class="page"
        :class ="{'current_page' :page === pageNumber}"
        @click="changePage(pageNumber)">
        {{pageNumber}} -->
      </div>
  </template>
  
  <script>
  
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import PostItem from "@/components/PostItem.vue";
  import MyDialog from "@/components/UI/MyDialog.vue";
  import MySelect from "@/components/UI/MySelect.vue";
  import axios from 'axios';
  export default {
    components :{
      PostList,PostForm,PostItem, MyDialog, MySelect,
    },
    data(){
      return{
        posts : [],
        dialogVisible :false,
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
      }
  }, 
  methods:{
  
    createPost(post){
     this.posts.push(post);
     this.dialogVisible = false;
    },
  
    inputTitle(event){
      this.title = event.target.value;
    },
  
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    }, 
    showDialog(){
      this.dialogVisible = true
    },
    // changePage(pageNumber){
    //   this.page = pageNumber
    // },
  
    async fethPost(){
      try{
        this.isPostsLoading = false;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page : this.page,
              _limit : this.limit
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch(e){
        alert('Eror')
      }finally{
        this.isPostsLoading = true;
      }
    },
    async loadMorePosts(){
      try{
        this.page +=1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params:{
              _page : this.page,
              _limit : this.limit
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts,...response.data];
      } catch(e){
        alert('Eror')
      }
    }
  },
    mounted(){
    this.fethPost();
    const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback =  (entries) => {
    if (entries[0].isIntersecting && this.page < this.totalPage){
      this.loadMorePosts()
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(this.$refs.observer)
  },
    computed :{
      sortedPost(){
        return [...this.posts].sort((post1,post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
     },
     sortedSearchQuery(){
      return this.sortedPost.filter(post => post.title.includes(this.searchQuery))
     }
    },
    watch : {
      // page(){
      //   this.fethPost()
      // }
    }
  }
  </script>
  
  <style>

  
  .app_btns{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;  
  }
  .page{
    border: 1px solid black;
    padding: 10px;
  }
  .page_wrapper{
    display: flex;
    margin-top: 15px;;
  }
  .current_page{
    border: 2px solid green;
  }
  
  .observer{
    height: 30px;
    background:yellow;
  }
  </style>
  