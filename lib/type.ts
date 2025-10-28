


export interface CLICommandProps {
  command: string
  description?: string
  className?: string
}

export interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}


export interface NavLink {
  label: string
  href: string
  icon?: React.ReactNode
  badge?: string | number
  isExternal?: boolean
}

export interface NavBarItems {
  logo: string // URL to the logo image
  logoAlt?: string // Alt text for logo
  links: NavLink[]
  cta?: {
    label: string
    href: string
    variant?: "default" | "outline" | "ghost"
  }
  mobileMenuLabel?: string
  showSearch?: boolean
  showTheme?: boolean
}
