import Landing from "./components/Landing.vue"
import Chat from "./components/Chat/Chat.vue"
import ChooseChat from "./components/Chat/ChooseChat.vue"

export default [
    { path: '/', component: Landing },
    { path: '/chat', component: Chat },
    { path: '/chat/choose', component: ChooseChat },
]