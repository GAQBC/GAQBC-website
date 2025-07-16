import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { MenuIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export default function NavMobile() {
    return (
        <nav
            id="navbar"
            data-type="mobile"
            className="bg-background flex h-20 w-full items-center px-4"
        >
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-[80vw] overflow-y-auto">
                    <VisuallyHidden asChild>
                        <SheetTitle>Navigation Menu</SheetTitle>
                    </VisuallyHidden>
                    <VisuallyHidden asChild>
                        <SheetDescription>
                            Select a page to navigate
                        </SheetDescription>
                    </VisuallyHidden>

                    <div className="mx-10 mt-10 space-y-4">
                        <a href="/" className="block text-lg font-semibold">
                            Home
                        </a>
                        <a
                            href="/about"
                            className="block text-lg font-semibold"
                        >
                            About
                        </a>
                    </div>

                    <Separator className="my-4" />

                    <div className="mx-10">
                        <h4 className="text-muted-foreground/70 text-xs font-semibold uppercase">
                            Community
                        </h4>
                        <div className="mt-2 space-y-4">
                            <a
                                href="https://discord.com"
                                className="block text-lg font-semibold"
                            >
                                Discord
                            </a>

                            <a
                                href="/community/events"
                                className="block text-lg font-semibold"
                            >
                                Events
                            </a>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="mx-10">
                        <h4 className="text-muted-foreground/70 text-xs font-semibold uppercase">
                            Tournaments
                        </h4>
                        <div className="mt-2 space-y-4">
                            <a
                                href="/tournaments/upcoming"
                                className="block text-lg font-semibold"
                            >
                                Upcoming Tournaments
                            </a>
                            <a
                                href="/tournaments/results"
                                className="block text-lg font-semibold"
                            >
                                Past Results
                            </a>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="mx-10">
                        <h4 className="text-muted-foreground/70 text-xs font-semibold uppercase">
                            Resources
                        </h4>
                        <div className="mt-2 space-y-4">
                            <a
                                href="/resources/questions"
                                className="block text-lg font-semibold"
                            >
                                Sample Questions
                            </a>
                            <a
                                href="/resources/study-guides"
                                className="block text-lg font-semibold"
                            >
                                Study Guides
                            </a>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="mx-10">
                        <h4 className="text-muted-foreground/70 text-xs font-semibold uppercase">
                            News
                        </h4>
                        <div className="mt-2 space-y-4">
                            <a
                                href="/news/articles"
                                className="block text-lg font-semibold"
                            >
                                Articles
                            </a>
                            <a
                                href="/news/announcements"
                                className="block text-lg font-semibold"
                            >
                                Announcements
                            </a>
                        </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="mx-10 mb-10">
                        <Button asChild>
                            <a
                                href="/login"
                                className="block w-full py-2 text-center"
                            >
                                Join
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="secondary"
                            className="mx-auto mt-2 w-[50%]"
                        >
                            <a
                                href="/signup"
                                className="block w-full py-2 text-center"
                            >
                                Sign Up
                            </a>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
