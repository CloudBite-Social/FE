import { Link, useNavigate } from "react-router-dom";

import { useTheme } from "@/utils/contexts/theme-provider";
import { useToken } from "@/utils/contexts/token";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { changeToken, user, token } = useToken();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }
  return (
    <header className="w-full sticky top-0">
      <nav className="flex py-4 px-6 xl:px-32 items-center justify-between border mx-auto">
        <Link to="/">
          <h1 className="text-3xl tracking-tight">
            <span className="font-bold">Cloud</span>
            <span className="text-[#6224C3] font-black">bite</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3 border rounded-full py-1 px-2 shadow shadow-border">
          <Avatar>
            <AvatarImage src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-medium leading-none mb-1">
              {user.name || "Guest"}
            </h1>
            <p className="text-xs font-light leading-none">
              {user.email || ""}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-full p-3 cursor-pointer">
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2" align="end">
              {token && (
                <>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/edit-profile")}>
                    Edit profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/history-post")}>
                    My post
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleTheme()}>
                Change theme
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {!token && (
                <DropdownMenuItem onClick={() => navigate("/login")}>
                  Login
                </DropdownMenuItem>
              )}
              {token && (
                <DropdownMenuItem onClick={() => handleLogout()}>
                  Logout
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
