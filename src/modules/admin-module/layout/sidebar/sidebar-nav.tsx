/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Icon } from '@/components/shared/icon';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

import * as icons from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    add?: string;
    icon: keyof typeof icons;
    path: string;
  }[];
}

export const Navbar = ({ links, isCollapsed }: NavProps) => {
  const pathname = usePathname();
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link) => {
          const isActive = pathname === link.path;
          // const isActive = true;

          return isCollapsed ? (
            <Tooltip key={link.title} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.path}
                  className={cn(
                    'h-10',
                    buttonVariants({ variant: 'ghost', size: 'sm' }),

                    isActive &&
                      'bg-surface-brand-primary-100 dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                  )}
                >
                  <Icon icon={link?.icon} className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                className="flex ml-3 mb-1 items-center gap-4"
              >
                {link.title}
                {link.add && (
                  <span className="ml-auto text-muted-foreground cursor-pointer">
                    <Icon size="sm" icon="Plus" />
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <div className="w-full flex items-center gap-2">
              <Link
                key={link.add}
                href={link.path}
                className={cn(
                  'w-full !px-3',
                  buttonVariants({ variant: 'ghost', size: 'default' }),
                  isActive &&
                    'bg-surface-brand-primary-100 dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start'
                )}
              >
                <Icon icon={link?.icon} className="mr-2 h-4 w-4" />
                {link.title}
              </Link>
              {link.add && (
                <Link key={link.add} href={link.add}>
                  <span
                    className={cn(
                      'cursor-pointer  dark:text-white',
                      buttonVariants({ variant: 'ghost', size: 'default' })
                    )}
                  >
                    <Icon icon="Plus" size="sm" />
                  </span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};
