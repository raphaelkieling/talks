<template functional>
  <div class="text-center">
      <img src="https://vuejs.org/images/logo.png" :class="{
          sm: props.size === 'sm',
          bg: props.size === 'bg'
      }"/>
  </div>
</template>