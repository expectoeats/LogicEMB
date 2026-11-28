export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout intentionally has no header/footer/sidebar
  // Just renders the login page standalone
  return <>{children}</>
}
