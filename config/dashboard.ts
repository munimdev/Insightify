import { DashboardConfig } from "types"

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: "customers",
    },
    {
      title: "Products",
      href: "/dashboard/products",
      icon: "product",
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
