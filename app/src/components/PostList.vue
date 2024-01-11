<template>
    <div v-if="posts.length > 0">
<h3>Список пользователей</h3>       
    <post-item 
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove',post)"
        />
    </div>
    <h2 v-else style="color:red">Список пользователей пуст</h2>
</template>

<script>
    import PostItem from './PostItem.vue';
export default{
    components:{PostItem},
    props :{
        posts : {
            type : Array,
            required : true
        }
    }
}

</script>

<style scoped>

.post{
  padding: 10px;
  border: 2px solid teal;
  margin-top: 10px;
}

.list-item {
    display: flex;
    margin-right: 30px;
}

.list-enter-active,
.list-leave-active{
    transition: all is ease;
}

.list-enter-from,
.list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}


</style>