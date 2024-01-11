<template>
<form @submit.prevent ='submitForm'>
      <h4>Creat Post</h4>
      <my-input id="title" v-model="post.title" class="input" type="text" placeholder = "Название" ></my-input>
      <my-input  id="body" v-model="post.body"  class="input" type="text" placeholder = "Описание" ></my-input>
      <my-button class="btn" @click="createPost">Create</my-button>
    </form>
</template>

<script>
export default{
   data(){
    return {
        post : {
            title : '',
            body : '',
        },
    };
   } ,
   methods : {
    createPost(){
        this.post.id = Date.now();
        this.$emit('create',this.post)
        this.post ={
            title:'',
            body:'',
        }
    }
   },
}


</script>

<style scoped>

form{
 display: flex;
 flex-direction: column;
}





</style>