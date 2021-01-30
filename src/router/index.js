import Vue from "vue";
import VueRouter from "vue-router";
import ClientView from "@/views/client/ClientView";
import ChannelView from "@/views/client/channels/ChannelView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/client",
    component: ClientView,

    children: [
      {
        path: "channels/:channelId(\\d+)",
        name: "ChannelView",
        component: ChannelView,
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
