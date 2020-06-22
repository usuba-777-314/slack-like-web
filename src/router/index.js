import Vue from "vue";
import VueRouter from "vue-router";
import ClientPage from "@/pages/client/ClientPage";
import ChannelPage from "@/pages/client/ChannelPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/client",
    component: ClientPage,

    children: [
      {
        path: "channels/:channelId(\\d+)",
        name: "Channel",
        component: ChannelPage,
        props: true
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
