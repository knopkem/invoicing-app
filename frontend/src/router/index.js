import Vue from "vue";
import Router from "vue-router";
import SignUp from "@/components/SignUp";
import Dashboard from "@/components/Dashboard";
import CreateInvoice from "@/components/CreateInvoice"
import ViewInvoices from "@/components/ViewInvoices"
import SingleInvoice from "@/components/SingleInvoice";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/create",
      name: "CreateInvoice",
      component: CreateInvoice
    },
    {
      path: "/view",
      name: "ViewInvoices",
      component: ViewInvoices
    },
    {
      path: "/invoices",
      name: "SingleInvoice",
      component: SingleInvoice
    }
  ]
});
