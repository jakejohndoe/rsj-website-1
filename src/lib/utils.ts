// this is a neat little utility function that’s super common in projects using Tailwind CSS.
// It's doing some smart class name merging for you. Here's the breakdown with inline comments:


// Importing `clsx` — a utility to intelligently combine class names (handles conditionals, falsy values, arrays, etc.)
import { type ClassValue, clsx } from "clsx";

// Importing `twMerge` — a utility from `tailwind-merge` that resolves conflicts between Tailwind classes
import { twMerge } from "tailwind-merge";

// Exporting a helper function called `cn` (short for "class names")
export function cn(...inputs: ClassValue[]) {
  // First, combine all the class values using `clsx`
  // Then, resolve Tailwind class conflicts using `twMerge`
  return twMerge(clsx(inputs));
}