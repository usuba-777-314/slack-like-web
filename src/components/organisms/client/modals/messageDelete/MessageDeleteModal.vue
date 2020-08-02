<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">メッセージを削除する</h2>
        <UiButton class="close-button"
          ><i class="material-icons">close</i></UiButton
        >
      </div>

      <div class="modal-body">
        このメッセージを本当に削除しますか？削除後は元に戻すことはできません。
        <div class="message">
          <div class="icon-gutter">
            <i class="icon material-icons">person</i>
          </div>

          <div class="content">
            <span class="sender">{{ message.user.name }}</span>
            &nbsp;&nbsp;
            <span class="timestamp">{{ timestamp }}</span>

            <br />

            <div class="text">{{ message.text }}</div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <div class="modal-footer-buttons">
          <UiButton class="cancel" @click="cancel">キャンセル</UiButton>
          <UiButton class="danger" @click="done">削除する</UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/atoms/UiButton";

import { mapGetters, mapActions } from "vuex";
import moment from "moment";

export default {
  components: {
    UiButton
  },

  computed: {
    ...mapGetters("modals/client/messageDelete", ["isOpen", "message"]),

    timestamp() {
      return moment(this.message.timestamp).format("YYYY/MM/DD HH:mm");
    }
  },

  methods: {
    ...mapActions("modals/client/messageDelete", ["done", "cancel"])
  }
};
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 36px;
  background: rgba(0, 0, 0, 0.6);

  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    flex-direction: column;

    max-width: calc(100% - 32px);
    max-height: 640px;

    width: 32.5rem;

    border-radius: 0.5rem;

    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
  }

  .modal-header {
    flex-shrink: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 16px 24px;

    .modal-title {
      margin: 0;
      width: 100%;
      min-width: 0;

      font-size: 22px;
      line-height: 1.36363636;
      color: rgb(29, 28, 29);
      font-weight: 900;
    }
  }

  .modal-body {
    flex-shrink: 1;

    padding: 0 24px;
    overflow-y: auto;
  }

  .modal-footer {
    flex-shrink: 0;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 20px 24px;

    .modal-footer-buttons {
      display: flex;
      flex-shrink: 0;

      .ui-button {
        width: auto;
        height: 36px;

        padding: 0 12px 1px;

        font-size: 15px;
        color: rgb(29, 28, 29);

        &.cancel {
          border: 1px solid rgba(29, 28, 29, 0.3);
          font-weight: 700;

          &:hover {
            background: rgba(29, 28, 29, 0.04);
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
          }
        }

        &.danger {
          background: #e01e5a;
          color: #fff;
          font-weight: 900;

          &:hover {
            background: #e23067;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
          }
        }
      }

      .ui-button + .ui-button {
        margin-left: 12px;
      }
    }
  }
}

.message {
  display: flex;

  border: 1px solid rgba(29, 28, 29, 0.1);
  border-radius: 4px;
  margin-top: 16px;
  padding: 16px;

  .action-menu {
    position: absolute;
    top: -16px;
    right: 17px;
    z-index: 2;
    visibility: hidden;
  }
}

.icon-gutter {
  margin-right: 8px;
  display: inline-flex;
}

.icon {
  width: 36px;
  height: 36px;

  border-radius: 3px;
  font-size: 36px;
  background-color: #3f0e40;
  color: #cfc3cf;
}

.content {
  padding: 8px;
  padding-left: 16px;
  margin: -12px -8px -16px -16px;
}

.sender {
  font-size: 14px;
  font-weight: 900;
}

.timestamp {
  margin-left: 4px;
  font-size: 12px;
  color: rgb(97, 96, 97);
}

.text {
  line-height: 1.56668;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
