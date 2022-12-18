<template>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <nuxt-link
      v-for="iphone in iphones"
      :key="iphone"
      :to="`/iphone/${iphone}`"
      class="shadow-lg border rounded-lg text-center"
    >
      <h1>{{ iphone }}</h1>
      <div class="flex justify-center">
        <img width="200" :src="`/images/${iphone}.webp`" alt="" />
      </div>
    </nuxt-link>
  </div>

  <!-- //! HEAD -->
  <!-- <Head>
    <Title> Custom Title </Title>
  </Head> -->

  <div>
    <button :disabled="pending" @click="refresh">Get Refresh</button>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt3 - Iphones",
});
// ?SEO
useHead({
  titleTemplate: 'My App - %s',
  viewport: 'width=device-width, height=device-height','initial-scale=1','maximum-scale=1',
  charset: 'utf-8',
  meta:[
    {name: 'description',content:'My description'}
  ],
  bodyAttrs: {
    class: "test",
  },
});
useMeta({
  bodyAttrs: {
    class: "test",
  },
});

const iphones = ["iphone-12", "iphone-12-pro", "iphone-13", "iphone-13-pro"];

// const { data } = useFetch("/iphones");
// *** pick only
// const { data } = useFetch("/iphones",{pick : ["Ross"]});

// *** Trasform
// const { data } = useFetch("/iphones", {
//   transform: (response) => {
//     const res = [];
//     for (var person in response) {
//       if (response.hasOwnProperty(person)) {
//         res.push({ name: person, message: response[person] });
//       }
//     }
//     return res;
//   },
// });

// *** FETCH
const { data, pending, error, refresh } = await useFetch("/api/animal/cat");
// const iphones = data;
</script>
