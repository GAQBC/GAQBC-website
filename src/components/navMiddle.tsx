import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";

const middleMenuItems = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Community",
    path: "/community",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg">Connect & Engage</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Connect with fellow quizbowl enthusiasts.
          </p>
          <div className="flex items-center justify-start gap-1">
            <Button variant="link" className="h-auto p-0">
              Discord
            </Button>
            <span className="text-muted-foreground">&middot;</span>
            <Button variant="link" className="h-auto p-0">
              <a href="/community/events">Events</a>
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg">Tournaments</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Find and participate in quizbowl tournaments.
          </p>
          <div className="flex items-center justify-start gap-1">
            <Button variant="link" className="h-auto p-0">
              <a href="/tournaments/upcoming">Upcoming Tournaments</a>
            </Button>
            <span className="text-muted-foreground">&middot;</span>
            <Button variant="link" className="h-auto p-0">
              <a href="/tournaments/results">Past Results</a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg">Resources</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Access materials to enhance your quizbowl experience.
          </p>
          <div className="flex items-center justify-start gap-1">
            <Button variant="link" className="h-auto p-0">
              <a href="/resources/questions">Sample Questions</a>
            </Button>
            <span className="text-muted-foreground">&middot;</span>
            <Button variant="link" className="h-auto p-0">
              <a href="/resources/study-guides">Study Guides</a>
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "News",
    path: "/news",
    content: (
      <>
        <p className="text-sm text-muted-foreground mb-3">
          Stay updated with the latest quizbowl news.
        </p>
        <div className="flex items-center justify-start gap-1">
          <Button variant="link" className="h-auto p-0">
            <a href="/news/articles">Articles</a>
          </Button>
          <span className="text-muted-foreground">&middot;</span>
          <Button variant="link" className="h-auto p-0">
            <a href="/news/announcements">Announcements</a>
          </Button>
        </div>
      </>
    ),
  },
];

export default function NavMiddle() {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    const updatePath = () => setPathname(window.location.pathname);
    updatePath(); // Set on mount

    // Listen to Astro client-side navigation (if using any)
    window.addEventListener("popstate", updatePath);
    window.addEventListener("pushstate", updatePath); // For SPA-like behavior

    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("pushstate", updatePath);
    };
  }, []);

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-center space-x-2">
        {middleMenuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(item.path + "/");

          return item.content ? (
            <NavigationMenuItem
              key={item.path}
              className={isActive ? 'is-active' : ''}
            >
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[400px] lg:w-[560px] left-1/2 -translate-x-1/2">
                <div className="p-4">{item.content}</div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem
              key={item.path}
              className={`${isActive ? 'is-active' : ''}`}
            >
              <NavigationMenuLink
                href={item.path}
                className={navigationMenuTriggerStyle()}
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

