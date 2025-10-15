import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mini-projects/todolist")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/todolist"!</div>;
}
