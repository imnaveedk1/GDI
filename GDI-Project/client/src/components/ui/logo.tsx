import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };

  return (
    <div className={cn(
      "bg-primary rounded-full flex items-center justify-center text-white font-bold",
      sizeClasses[size],
      className
    )}>
      CL
    </div>
  );
}
