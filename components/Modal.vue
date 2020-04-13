<template>
    <transition name="modal">
        <div @click="$emit('close')" class="modal-mask">
            <div class="modal-wrapper">
                <div @click.stop class="modal-container">
                    <img
                        @click="$emit('close')"
                        class="modal-close"
                        src="icons/close.svg"
                    />
                    <div class="modal-header">
                        {{ title }}
                    </div>

                    <div class="modal-body">
                        <slot name="body">
                            {{ message }}
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="default-footer">
                                <button
                                    @click="$emit('confirm')"
                                    class="modal-default-button"
                                >
                                    Подтвердить
                                </button>
                                <button
                                    @click="$emit('close')"
                                    class="modal-default-button"
                                >
                                    Отмена
                                </button>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type: String,
            default: 'Заголовок окна'
        },
        message: {
            type: String,
            default: 'Текст окна'
        }
    }
}
</script>

<style lang="sass" scoped>
.modal-close
    position: absolute
    right: 17.5px
    top: 17.5px
    width: 17.5px
    height: 17.5px
    z-index: 9999
    cursor: pointer

.modal-wrapper
    display: flex
    align-items: center
    flex-direction: column
    min-height: 100vh
    @media (max-width: 768px)
      justify-content: flex-start

.modal-mask
    position: fixed
    overflow: auto
    top: 0
    left: 0
    z-index: 2000
    min-width: 100vw
    min-height: 100vh
    bottom: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.5)
    transition: opacity 0.3s ease-in-out
    display: inline-flex
    justify-content: center
    @media (max-width: 768px)
      align-items: flex-start
.modal-container
    cursor: default
    width: calc(100vw - 20px)
    max-width: 420px
    margin: 5px auto
    padding: 20px
    background-color: #fff
    border-radius: 10px
    transition: all 0.3s ease
    position: relative
    display: flex
    flex-direction: column

.modal-header
    font-size: 20px
    font-weight: bold
    position: relative

.modal-body
    margin: 24px 0 32px
    flex: 1
    position: relative
    overflow-y: auto

.default-footer
    display: flex
    justify-content: flex-end
    > *
        margin-left: 10px

.modal-enter-active, .modal-leave-to
    opacity: 0

.modal-enter-active .modal-container, .modal-leave-active .modal-container
    -webkit-transform: scale(1.1)
    transform: scale(1.1)
</style>
