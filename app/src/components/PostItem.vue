
<template>
     <div class="post" v-for="post in posts" :key="post.id">
        <div>
            <div>{{post.id }}</div>
        <div><strong>Название: </strong>{{ post.title }}</div>
        <div><strong>Описание: </strong>{{ post.body }}</div>
        </div>
        <div class="post_btns">
            <my-button
            @click="$router.push(`/posts/${post.id}`)">
            Открыть
        </my-button>
            <my-button
            @click="$emit('remove',post)">
            Удалить
        </my-button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        posts : {
        type : Object,
        required : true,
        }
    }
}

</script>

<style scoped>

.post{
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_btns{
    display: flex;
    
}

</style>