<template>
  <i class="ui-icon material-icons">{{ icon }}</i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
