'use client';
import Logo from '@/components/shared/logo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Bell } from 'lucide-react';
import React from 'react';

const AdminLayoutHeader = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="p-4 pr-6 flex items-center justify-between">
        <Logo></Logo>
        <NavMenu></NavMenu>
        <div className="avatar-section flex items-center gap-6">
          <Button size={'icon'} variant={'ghost'}>
            <Bell></Bell>
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Nimesh Maharjan</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminLayoutHeader;

const NavMenu = () => {
  const customHeaderClassName =
    'bg-primary cursor-pointer hover:bg-[#1D5073] hover:text-primary-foreground focus:bg-[#1D5073] focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#1D5073] data-[state=open]:bg-[#1D5073]';
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            Home
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={customHeaderClassName}>
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            Procurement
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            People
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            Reports
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            Manage
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            Settings
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* <Link href="/docs" legacyBehavior passHref> */}
          <NavigationMenuLink
            className={navigationMenuTriggerStyle({
              className: customHeaderClassName,
            })}
          >
            More
          </NavigationMenuLink>
          {/* </Link> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
