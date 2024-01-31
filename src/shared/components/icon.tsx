'use client';

import { cn } from '@/shared/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as icons from 'lucide-react';
import * as React from 'react';

const IconsVariants = cva('', {
  variants: {
    size: {
      xs: 'h-2 w-2',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
  },
});

export interface IconProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof IconsVariants> {
  /**
   * The icon component to render. Pass a string belonging to lucide react.
   */
  icon?: keyof typeof icons;

  /**
   * Custom SVG Icon. Pass a svg as children
   */
  children?: React.ReactNode;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', className, icon, children, ...props }, ref) => {
    // If children is defined, svg element is only passed here.
    if (children) {
      return (
        <div className={cn(IconsVariants({ className, size }))}>{children}</div>
      );
    }

    // if icon is defined as string then render it.
    if (icon) {
      const LucideIcon = icons[icon] as icons.LucideIcon;

      return (
        <LucideIcon
          ref={ref}
          className={cn(IconsVariants({ className, size }))}
          {...props}
        />
      );
    }

    // If nothing works render a fallback svg
    return (
      <icons.HelpCircleIcon
        ref={ref}
        className={cn(IconsVariants({ className, size }))}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
