import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Link } from "@tanstack/react-router";

export function Menu() {
  return (
    <Menubar className="flex items-center justify-center">
      <MenubarMenu>
        <MenubarTrigger>
          <Link to="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Mini Projects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem asChild>
            <div>
              <Link to="/mini-projects/todolist">To Do List</Link>
              <MenubarShortcut>:)</MenubarShortcut>
            </div>
          </MenubarItem>
          <MenubarItem>
            QR Code Generator <MenubarShortcut>QR</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
