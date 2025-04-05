// Import all of React – this includes types, hooks, and APIs like forwardRef
import * as React from "react";

// Importing a utility function to conditionally merge class names (likely a Tailwind helper)
import { cn } from "../../lib/utils";


// ----------------------------------------------
// Card Component – the main container
// ----------------------------------------------
const Card = React.forwardRef<
  HTMLDivElement, // The type of DOM element the ref will point to
  React.HTMLAttributes<HTMLDivElement> // The allowed props for this element
>(
  // Destructuring className and other props, and passing ref
  ({ className, ...props }, ref) => (
    <div
      ref={ref} // Forwarding the ref to the div element
      className={cn(
        // Merging default card styles with any custom className passed in
        "rounded-xl border bg-card text-card-foreground shadow",
        className,
      )}
      {...props} // Spreading the rest of the HTML props
    />
  )
);
// Setting a name for the component in React DevTools
Card.displayName = "Card";

// ----------------------------------------------
// CardHeader – section for titles or headers
// ----------------------------------------------
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Stack items vertically with spacing and padding
      "flex flex-col space-y-1.5 p-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// ----------------------------------------------
// CardTitle – bold title text inside CardHeader
// ----------------------------------------------
const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Strong typography for titles
      "font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// ----------------------------------------------
// CardDescription – subtler text under the title
// ----------------------------------------------
const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Smaller font with muted color for secondary text
      "text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// ----------------------------------------------
// CardContent – main body of the card
// ----------------------------------------------
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Padding all around, but remove top padding (since header may already pad top)
      "p-6 pt-0",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// ----------------------------------------------
// CardFooter – typically holds actions like buttons
// ----------------------------------------------
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Horizontal layout for items with padding
      "flex items-center p-6 pt-0",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// ----------------------------------------------
// Exporting all card-related components
// ----------------------------------------------
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
