import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Type,
  Smile,
  Store,
  Bell,
  MessageSquare,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "داشبورد", icon: LayoutDashboard, path: "/" },
  { title: "فونت‌ها", icon: Type, path: "/fonts" },
  { title: "اموجی و استیکر", icon: Smile, path: "/emojis" },
  { title: "فروشگاه", icon: Store, path: "/store" },
  { title: "اعلان کاربران", icon: Bell, path: "/notifications" },
  { title: "پشتیبانی", icon: MessageSquare, path: "/support" },
  { title: "پیکربندی", icon: Settings, path: "/settings" },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex">
      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full glass-strong transition-all duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                Font Store
              </h1>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-primary/10"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      isActive
                        ? "gradient-primary text-white glow"
                        : "hover:bg-primary/10"
                    } ${!sidebarOpen && "justify-center"}`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    {sidebarOpen && <span>{item.title}</span>}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          {sidebarOpen && (
            <div className="mt-auto pt-4 border-t border-border text-center text-sm text-muted-foreground">
              توسعه با ❤️ توسط زمرد تیم
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "mr-64" : "mr-20"
        }`}
      >
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
