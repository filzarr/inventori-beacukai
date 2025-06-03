'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

export default function DynamicBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean) 

  const breadcrumbSegments = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
 
    if (index === segments.length - 1) {
      return (
        <BreadcrumbItem key={href}>
          <BreadcrumbPage>{decodeURIComponent(formatSegment(segment))}</BreadcrumbPage>
        </BreadcrumbItem>
      )
    }

    return (
      <BreadcrumbItem key={href}>
        <BreadcrumbLink asChild>
          <Link href={href}>{decodeURIComponent(formatSegment(segment))}</Link>
        </BreadcrumbLink>
        <BreadcrumbSeparator />
      </BreadcrumbItem>
    )
  })

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {segments.length > 0 && <BreadcrumbSeparator />}
        {breadcrumbSegments}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

// Fungsi bantu untuk mengubah slug menjadi judul yang lebih enak dibaca
function formatSegment(segment: string) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase()) // Kapitalisasi setiap kata
}
