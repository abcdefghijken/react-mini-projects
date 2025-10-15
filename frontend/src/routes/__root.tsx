// src/routes/__root.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Menu } from "@/components/ui/Menu";
import AppLayout from "@/layout/AppLayout";

const RootLayout = () => (
  <>
    <Menu />
    <AppLayout>
      <Outlet />
      <TanStackRouterDevtools />
    </AppLayout>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
