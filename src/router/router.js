import Vue from "vue";
import VueRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import RoomSelector from "@/pages/RoomSelector";
import ChatRoom from "@/pages/ChatRoom";
import MainPage from "@/pages/MainPage";


const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
      path: '/chat',
      component: RoomSelector,
  },
  {
      path: '/chat/:roomName',
      name: "chat",
      component: ChatRoom
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;