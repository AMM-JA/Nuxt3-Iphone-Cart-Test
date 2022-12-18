<template>
  <div>
    <button @click="addToList">Add to List</button>
    <div v-if="pending">pending</div>
    <ul v-if="products && products.length > 0">
      <li v-for="(product, i) in products" :key="i">
        <!-- <span>
                    {{ product.title }}
                </span> -->
        <span>
          {{ product.name }}
        </span>
      </li>
    </ul>
    <button @click="fetchNew">Refresh Data</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
})
const { todoList, addTodo } = useTodo()

function addToList() {
  addTodo({ id: 1, text: 'first Test' })
  console.log('add', todoList.value)
}

// data Fetching
// const runtimeConfig = useRuntimeConfig();
const testJson = 'https://jsonplaceholder.typicode.com'
// headers : {
//     Authorization : `Bear ${runtimeConfig.public.appSecret}`,
// }

// ? normal Fetch
// const products = ref([])
// onMounted(()=>{
//     fetch(`${testJson}/todos`,{})
//     .then(res => res.json())
//     .then(data => products.value = data);
// })

// ? useFetch
const page = ref(1)

function fetchNew() {
  page.value++
  refresh()
}
// const {
//     data:products,
//     error,
//     refresh,
//     pending,
// } = await useFetch(`/comments?postId=${page.value}&page=${page.value}`,{
//     headers : {
//     //     Authorization : `Bear ${runtimeConfig.public.appSecret}`,
//     },
//     baseURL: testJson
// });

// ? SSR useAsyncData
const {
  pending,
  data: products,
  refresh,
} = await useLazyAsyncData('products', () => {
  return $fetch(`${testJson}/comments`, {
    // method : "get",
    method: 'post',
    body: {
      size: 3,
      page: page.value,
    },
  })
})
</script>