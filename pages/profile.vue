<template>
  <p>Welcome Sarthak</p>
</template>

<script>
definePageMeta({
  layout: "sidebar",
  // ? inline middleware
  // middleware: ()=>{
  //   const auth = useAuth();
  //   return auth.value.isAuthenticated;
  // }
  middleware: ["auth"], //? name middleware
});
</script>
