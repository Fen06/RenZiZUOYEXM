<template>
  <div class="btn" :class="[color, fonstClolr]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'default'
    },
    fonstClolr: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {}
  },

  created() {},

  methods: {}
}
</script>

<style scoped>
.btn {
  width: 90px;
  height: 40px;
  border-radius: 5px;
  background-color: #ccc;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  /*  */
}
.orange {
  background-image: linear-gradient(to right, #f66c33, #ff6826);
}

.white {
  color: #fff;
}

/*  */
</style>
