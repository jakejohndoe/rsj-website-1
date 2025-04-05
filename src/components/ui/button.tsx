// Importing Slot from Radix UI – used for polymorphic components (like replacing a button with a link element)
import { Slot } from "@radix-ui/react-slot";
// Importing utility types and function from class-variance-authority (CVA handles variant-based styling)
import { type VariantProps, cva } from "class-variance-authority";
// Importing all of React – needed for hooks, types, and APIs like forwardRef
import * as React from "react";
// Importing a utility function (short for "classNames") to merge Tailwind class strings intelligently
import { cn } from "../../lib/utils";

// These are base styles applied to all button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "bg-transparent hover:bg-gray-800 hover:text-white active:bg-transparent focus:bg-transparent focus-visible:outline-none",
        link: "ext-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 px-3 py-1",
        sm: "h-7 rounded-md px-2 text-xs",
        lg: "h-9 rounded-md px-6",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);


// Define the props for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Inherits native button attributes
    VariantProps<typeof buttonVariants> { // Adds variant and size props from CVA
  asChild?: boolean; // Optional: render this button as a different element using `Slot`
}


// Creating a Button component that forwards its ref for better interoperability
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>( // Destructuring props and setting `asChild` default to false
  ({ className, variant, size, asChild = false, ...props }, ref) => { // If asChild is true, render a different element using Slot (like <a>, <div>, etc.), otherwise render a <button>
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);


// Setting a display name for the component (useful for debugging in React DevTools)
Button.displayName = "Button";


// Export the Button component and the buttonVariants utility (in case other components need to use the styles)
export { Button, buttonVariants };
