// components/LucideIcon.tsx
import * as Icons from 'lucide-react'
import React from 'react'

export type IconName = keyof typeof Icons

export const isValidIcon = (name: string): name is IconName => {
  return name in Icons
}

type LucideIconProps = {
  name: string
  className?: string
} & React.SVGProps<SVGSVGElement>

export function LucideIcon({ name, className = 'w-5 h-5', ...props }: LucideIconProps) {
  const Icon = (Icons[name as IconName] || Icons.AlertTriangle) as React.FC<React.SVGProps<SVGSVGElement>>
  return <Icon className={className} {...props} />
}