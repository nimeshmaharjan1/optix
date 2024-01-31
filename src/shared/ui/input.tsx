import { cn } from '@/shared/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'flex  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-10 px-4 py-2',
        md: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  isInvalid?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  classNames?: {
    base?: string;
    input?: string;
    startContent?: string;
    endContent?: string;
  };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      isInvalid,
      startContent,
      endContent,
      size,
      classNames,
      ...props
    },
    ref
  ) => (
    <div className={cn(['flex items-center relative', classNames?.base])}>
      {startContent && (
        <div
          className={cn(['absolute left-0 px-1.5', classNames?.startContent])}
        >
          {startContent}
        </div>
      )}
      <input
        type={type}
        className={cn([
          inputVariants({ size, className }),
          {
            'focus-visible:ring-destructive border-destructive': isInvalid,
            'pl-8': startContent,
            'pr-8': endContent,
          },
          classNames?.input,
        ])}
        ref={ref}
        {...props}
      />
      {endContent && (
        <div
          className={cn(['absolute right-0 px-1.5', classNames?.endContent])}
        >
          {endContent}
        </div>
      )}
    </div>
  )
);
Input.displayName = 'Input';

export { Input };
