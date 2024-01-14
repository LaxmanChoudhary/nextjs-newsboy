import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function relativeDate(from: string) {
  const fromDate = new Date(from)
  return formatDistanceToNowStrict(fromDate, { addSuffix: true });
}