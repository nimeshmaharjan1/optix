'use client';

import { Icon } from '@/components/shared/icon';
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const NavSearch = ({
  isCollapsed,
  placeholder,
  onIconClick,
}: {
  isCollapsed: boolean;

  placeholder?: string;
  onIconClick: () => void;
}) =>
  isCollapsed ? (
    <Tooltip key="search" delayDuration={0}>
      <TooltipTrigger asChild onClick={onIconClick}>
        <Icon className="cursor-pointer" onClick={onIconClick} icon="Search" />
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        Search
      </TooltipContent>
    </Tooltip>
  ) : (
    <Input
      autoFocus
      placeholder={placeholder}
      startContent={<Icon icon="Search" />}
    />
  );
