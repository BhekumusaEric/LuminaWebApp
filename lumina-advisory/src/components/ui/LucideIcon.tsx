import * as LucideIcons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size = 24 }: LucideIconProps) {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    // Fallback if icon name is incorrect or not found
    return null;
  }
  return <IconComponent className={className} size={size} />;
}
