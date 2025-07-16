import { Fragment } from "react";
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

export default function NavDesktop() {
    return (
        <nav
            id="nav"
            data-type="desktop"
            className="bg-background sticky top-0 flex w-full items-center p-6"
        >
            <a href="/" className="flex items-center">
                <img src="/logo.png" alt="logo" className="h-8 w-8" />
            </a>

            <div className="absolute left-1/2 -translate-x-1/2">
                <NavMiddle />
            </div>

            <div className="ml-auto flex items-center space-x-4">
                <Button asChild>
                    <a href="/login">Join</a>
                </Button>
                <Button asChild>
                    <a href="/signup">Sign Up</a>
                </Button>
            </div>
        </nav>
    );
}

function NavMiddle() {
    const middleMenuItems = [
        { title: "About", path: "/about" },
        {
            title: "Community",
            path: "/community",
            content: (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Section
                        heading="Connect & Engage"
                        text="Connect with fellow quizbowl enthusiasts."
                        links={[
                            { label: "Discord", href: "https://discord.gg/" },
                            { label: "Events", href: "/community/events" },
                        ]}
                    />
                    <Section
                        heading="Tournaments"
                        text="Find and participate in quizbowl tournaments."
                        links={[
                            {
                                label: "Upcoming",
                                href: "/tournaments/upcoming",
                            },
                            {
                                label: "Past Results",
                                href: "/tournaments/results",
                            },
                        ]}
                    />
                    <Section
                        heading="Resources"
                        text="Access materials to enhance your quizbowl experience."
                        links={[
                            {
                                label: "Sample Questions",
                                href: "/resources/questions",
                            },
                            {
                                label: "Study Guides",
                                href: "/resources/study-guides",
                            },
                        ]}
                        fullWidth
                    />
                </div>
            ),
        },
        {
            title: "News",
            path: "/news",
            content: (
                <>
                    <p className="text-muted-foreground mb-3 text-sm">
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

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex justify-center space-x-2">
                {middleMenuItems.map((item) =>
                    item.content ? (
                        <NavigationMenuItem key={item.path}>
                            <NavigationMenuTrigger>
                                {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="left-1/2 w-[400px] -translate-x-1/2 lg:w-[560px]">
                                <div className="p-4">{item.content}</div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={item.path}>
                            <NavigationMenuLink
                                href={item.path}
                                className={navigationMenuTriggerStyle()}
                            >
                                {item.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ),
                )}
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    );
}

function Section({
    heading,
    text,
    links,
    fullWidth = false,
}: {
    heading: string;
    text: string;
    links: { label: string; href: string }[];
    fullWidth?: boolean;
}) {
    return (
        <div className={fullWidth ? "md:col-span-2" : ""}>
            <h3 className="text-lg font-bold">{heading}</h3>
            <p className="text-muted-foreground mb-2 text-sm">{text}</p>
            <div className="flex items-center justify-start gap-1">
                {links.map((link, i) => (
                    <Fragment key={link.href}>
                        <Button variant="link" className="h-auto p-0">
                            <a href={link.href}>{link.label}</a>
                        </Button>
                        {i < links.length - 1 && (
                            <span className="text-muted-foreground">
                                &middot;
                            </span>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
