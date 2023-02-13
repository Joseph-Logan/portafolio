type Link = {
  title: string
  href: string
  className: string
}

export const Link = ({ title, href, className }: Link) => {
  return (
    <a
      href={href}
      className={className}
    >
      {title}
    </a>
  )
}