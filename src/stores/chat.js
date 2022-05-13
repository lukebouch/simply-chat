import { defineStore } from 'pinia'


export const useChatStore = defineStore('chat', {
    state: () => {
        return {
            code: undefined,
        }
    },
    actions: {
        setCode(code) {
            this.code = code
        }
    }
})