import {
  Target,
  BookOpen,
  Mic,
  Briefcase,
  Users,
  Award,
  Sparkles,
  HeartHandshake,
  TrendingUp,
  RefreshCw,
  Heart,
  MessageSquare,
  Globe,
  Compass,
  Layers,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Target,
  BookOpen,
  Mic,
  Briefcase,
  Users,
  Award,
  Sparkles,
  HeartHandshake,
  TrendingUp,
  RefreshCw,
  Heart,
  MessageSquare,
  Globe,
  Compass,
  Layers,
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size = 24 }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback if icon name is incorrect or not found
    return null;
  }
  return <IconComponent className={className} size={size} />;
}
