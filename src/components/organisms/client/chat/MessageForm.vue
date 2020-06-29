<template>
  <div class="message-form">
    <textarea
      ref="textarea"
      v-model="text"
      class="textarea"
      :placeholder="placeholder"
      rows="1"
      @keypress.enter.exact.prevent="send"
    ></textarea>

    <UiButton
      :class="{ 'can-send': canSend }"
      :disabled="!canSend"
      @click="send"
      ><i class="material-icons">send</i></UiButton
    >
  </div>
</template>

<script>
import UiButton from "@/components/atoms/UiButton";

export default {
  components: {
    UiButton
  },

  props: {
    form: {
      type: Object,
      required: true
    },

    placeholder: {
      type: String,
      required: false
    }
  },

  computed: {
    text: {
      get() {
        return this.form.text;
      },

      set(text) {
        this.$emit("updateText", text);
      }
    },

    canSend() {
      return this.text.trim().length > 0;
    }
  },

  watch: {
    text() {
      this.adjustTextareaHeight();
    }
  },

  methods: {
    send() {
      if (!this.canSend) return;

      this.$emit("send");
    },

    async adjustTextareaHeight() {
      const { textarea } = this.$refs;

      await this.$nextTick();
      textarea.style.height = "auto";

      await this.$nextTick();
      textarea.style.height = textarea.scrollHeight + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.message-form {
  margin: 0 20px 24px;
  padding: 4px 5px;
  border-radius: 4px;
  border: rgba(29, 28, 29, 1) solid 1px;

  display: flex;
  align-items: flex-end;

  .textarea {
    flex: 1 1 0;
  }
}

.textarea {
  margin: 5px -32px 4px 0;
  padding: 0 32px 0 0;

  max-height: calc(60vh - 80px);

  border: none;
  border-radius: 0;
  outline: none;
  background: none;
  resize: none;
  box-sizing: content-box;

  font-size: 14px;
  line-height: 22px;
}

.ui-button {
  &.can-send {
    background: #007a5a;
    color: #fff;
  }

  .material-icons {
    font-size: 16px;
  }
}
</style>
