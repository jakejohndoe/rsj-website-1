import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

import { cn } from "../../lib/utils";


// Separator – a styled divider that can be horizontal or vertical
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative} // Hides from screen readers if decorative
      orientation={orientation} // "horizontal" or "vertical"
      className={cn(
        "shrink-0 bg-border", // Common base styles
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", // Orientation-specific
        className // Optional custom classes
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
