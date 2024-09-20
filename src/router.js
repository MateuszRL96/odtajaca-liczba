import { createRouter, createWebHistory } from "vue-router";
import InputForm from "./components/InputForm.vue";
import ResultView from "./components/ResultView.vue";

const routes = [
  {
    path: "/",
    name: "InputForm",
    component: InputForm,
  },
  {
    path: "/result/:outlier",
    name: "ResultView",
    component: ResultView,
    props: (route) => ({
      outlier: route.params.outlier,
      message: route.params.message,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
