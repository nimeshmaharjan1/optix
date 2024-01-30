'use client';

import * as React from 'react';

import { NavSearch } from './search';

import { Icon } from '@/components/shared/icon';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Navbar } from './sidebar-nav';
import { navList, navListType } from './sidebar-nav-list';

interface MailProps {
  list: navListType[];
}

export const Sidebar = ({ list }: MailProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          'py-6 px-4 flex flex-col gap-6 border-r border-border-layout h-[calc(100vh-75px)] overflow-hidden relative',
          isCollapsed &&
            'min-w-[50px] max-w-[50px] transition-all duration-300 ease-in-out gap-0',
          !isCollapsed &&
            'min-w-[307px] max-w-[307px] transition-all duration-300 ease-in-out '
        )}
      >
        <div
          className={cn(
            'flex items-center justify-center',
            isCollapsed ? 'h-14' : ''
          )}
        >
          <NavSearch
            onIconClick={() => setIsCollapsed(false)}
            placeholder="search..."
            isCollapsed={isCollapsed}
          />
        </div>
        <div>
          {list?.map((e, i) => (
            <div key={i}>
              {!isCollapsed && e.title && (
                <p className="text-text-ternary text-paragraph-5-base">
                  {e.title}{' '}
                </p>
              )}
              <Navbar isCollapsed={isCollapsed} links={e.list} />
              {i !== navList['procumnet'].length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </div>
        <HandleDrawer
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
    </TooltipProvider>
  );
};

const HandleDrawer = ({
  isCollapsed,
  setIsCollapsed,
}: {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div
    data-collapsed={isCollapsed}
    className={cn(
      ['group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 '],
      {
        'absolute bottom-0 right-4': !isCollapsed,
        'absolute bottom-0 left-0 ': isCollapsed,
      }
    )}
  >
    <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
      <Tooltip key="toggle" delayDuration={0}>
        <TooltipTrigger
          asChild
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          <span
            className={cn(
              'h-10 cursor-pointer',
              buttonVariants({ variant: 'ghost', size: 'sm' })
            )}
          >
            <Icon
              icon={isCollapsed ? 'ChevronRight' : 'ChevronLeft'}
              className="h-4 w-4"
            />
          </span>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {isCollapsed ? 'Open' : 'Close'}
        </TooltipContent>
      </Tooltip>
    </nav>
  </div>
);
