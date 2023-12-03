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

const Navbar = () => {
  // const { setTheme, theme } = useTheme();

  // function handleTheme() {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // }

  const navigate = useNavigate();
  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="flex py-4 px-6 xl:px-32 items-center justify-between border sticky z-50 mx-auto">
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-tight">Cloudbite</h1>
        </Link>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 border rounded-full py-1 pl-2 pr-5 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>
              <span>John Doe</span>
              <br />
              <span>johndoe@mail.com</span>
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-full border rounded-full p-3">
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
                My list post
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleTheme()}>
                Change theme
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
