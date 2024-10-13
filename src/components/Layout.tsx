import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const navigation = [
  { href: '/about', label: 'Om oss' },
  { href: '/articles', label: 'Artikler' },
  { href: '/course', label: 'Banen' },
  { href: '/membership', label: 'Bli medlem' },
  { href: '/tournaments', label: 'Turneringer' },
]
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="bg-background w-full ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
