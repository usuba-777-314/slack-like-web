<template>
  <button class="ui-button" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style lang="scss">
.ui-button {
  user-select: none;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  align-items: center;
  position: relative;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  background: none;

  font-size: 13px;
  color: rgba(29, 28, 29, 0.7);

  width: 32px;
  height: 32px;

  transition: opacity 0.2s, background-color 0.2s, color 0.2s;

  &:hover {
    background: rgba(29, 28, 29, 0.04);
    color: rgba(29, 28, 29, 1);
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
}
</style>
