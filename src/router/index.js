import { createRouter, createWebHistory } from "vue-router";
import TaskManager from "../components/TaskManager.vue";

const routes = [
  {
    path: "/",
    name: "TaskManager",
    component: TaskManager,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
