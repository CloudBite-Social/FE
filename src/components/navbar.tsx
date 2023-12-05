import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ChevronDown } from "lucide-react";
import { useTheme } from "@/utils/contexts/theme-provider";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  const navigate = useNavigate();
  return (
    <header className="w-full sticky top-0 bg-white dark:bg-black/90 z-50">
      <nav className="flex py-4 px-6 xl:px-32 items-center justify-between border sticky z-50 mx-auto">
        <Link to="/">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Cloud<span className="text-teal-600 font-black">bite</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3 border rounded-full py-1 px-2 shadow shadow-border">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-medium leading-none mb-1">John Doe</h1>
            <p className="text-xs font-light leading-none">johndoe@mail.com</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-full p-3 cursor-pointer">
                {/* <Triangle className="rotate-180" /> */}
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/edit-profile")}>
                Edit profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/list-post")}>
                My post
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleTheme()}>
                Change theme
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/login")}>
                Login
              </DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
