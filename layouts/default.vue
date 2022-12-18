<template>
  <div>
    <Navbar />
    <!-- here nuxt will replace page content -->
    <slot name="header"></slot>

    <slot></slot>

    <slot name="footer"></slot>
    <!-- AGENT -->
    Desktop 

  </div>
</template>
