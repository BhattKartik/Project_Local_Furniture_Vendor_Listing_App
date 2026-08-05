import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Search,
  Share2,
  ShieldCheck,
  Star,
  TreePine,
  X,
} from 'lucide-react'
import { useState } from 'react'

const categories = [
  {
    title: 'Handcrafted Dining',
    description: 'Solid wood heirlooms for generations.',
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Luxury Living',
    description: 'Sophisticated comfort and textile mastery.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Modern Office',
    description: 'Performance engineering for productivity.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85',
  },
]

const artisans = [
  { name: 'Oak & Iron Collective', location: 'Portland, OR', rating: '4.9', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=85' },
  { name: 'The Velvet Studio', location: 'Austin, TX', rating: '4.8', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=85' },
  { name: 'Metalsmith Loft', location: 'Brooklyn, NY', rating: '5.0', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=85' },
  { name: 'Walnut & Wick', location: 'Denver, CO', rating: '4.7', image: 'https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=600&q=85' },
]

const benefits = [
  { icon: ShieldCheck, title: 'Quality Guaranteed', text: 'Multi-point inspection' },
  { icon: TreePine, title: 'Local Sustainability', text: 'Reducing carbon footprints' },
  { icon: BadgeCheck, title: 'Verified Vendors', text: 'Accredited craftsmanship' },
]

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 text-[15px] font-semibold text-blue-700">
      <span className="grid h-7 w-7 place-items-center rounded-sm bg-blue-700 text-sm text-white">F</span>
      FurniMarket
    </Link>
  )
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaff] font-sans text-[#131523]">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#faf9ff]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-7">
          <Brand />
          <div className="hidden max-w-xs flex-1 items-center rounded-lg border border-slate-300 bg-[#f4f5ff] px-3 py-2 md:flex">
            <Search size={14} className="mr-1.5 text-slate-500" />
            <input aria-label="Search vendors and furniture" placeholder="Search for vendors, furniture or styles..." className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400" />
          </div>
          <nav className="hidden items-center gap-7 text-xs font-medium lg:flex">
            <a href="#artisans" className="hover:text-blue-700">Browse Vendors</a>
            <a href="#collections" className="hover:text-blue-700">Categories</a>
            <a href="#how-it-works" className="hover:text-blue-700">How it Works</a>
            <Link to="/login" className="text-blue-700 hover:text-blue-900">Login</Link>
            <Link to="/signup" className="rounded bg-blue-700 px-5 py-2 text-white shadow-sm hover:bg-blue-800">Sign Up</Link>
          </nav>
          <button type="button" aria-label="Toggle menu" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-slate-200 bg-white px-5 py-5 text-sm lg:hidden">
            <a href="#artisans" onClick={() => setMenuOpen(false)}>Browse Vendors</a>
            <a href="#collections" onClick={() => setMenuOpen(false)}>Categories</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a>
            <Link to="/login">Login</Link>
          </nav>
        )}
      </header>

      <section id="how-it-works" className="relative isolate overflow-hidden bg-gradient-to-r from-[#3c4354] via-[#a4a5b0] to-[#f3f2f7]">
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle_at_18%_25%,white_0,transparent_25%),radial-gradient(circle_at_75%_80%,#87612e_0,transparent_22%)]" />
        <div className="mx-auto flex min-h-[485px] max-w-7xl items-center px-5 py-20 lg:px-7">
          <div className="max-w-xl text-white">
            <p className="mb-4 text-[10px] font-bold tracking-[0.22em] text-blue-100">ESTABLISHED EXCELLENCE</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl">
              Discover Exceptional<br />Furniture from <span className="text-[#d9dcef]">Local<br />Artisans.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-100">Connect with the finest local vendors and bring quality craftsmanship into your home through our curated marketplace of regional excellence.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#artisans" className="rounded bg-blue-700 px-10 py-3 text-xs font-semibold shadow-lg shadow-slate-800/20 hover:bg-blue-800">Browse Vendors</a>
              <a href="#collections" className="rounded border border-white/20 bg-white/15 px-10 py-3 text-xs font-semibold hover:bg-white/25">How it Works</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-7">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3 py-5 sm:px-6 first:pl-0 last:pr-0">
              <Icon size={20} strokeWidth={1.8} className="shrink-0 text-blue-700" />
              <div><p className="text-[10px] font-semibold tracking-wide">{title}</p><p className="text-[10px] text-slate-500">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-16 lg:px-7">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div><h2 className="text-2xl font-medium tracking-tight">Curated Collections</h2><p className="mt-1 text-xs text-slate-600">Explore furniture categories tailored to your lifestyle and professional environment.</p></div>
          <a href="#collections" className="hidden items-center gap-1 text-xs font-semibold text-blue-700 sm:flex">All Categories <ArrowRight size={14} /></a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="group relative h-[290px] overflow-hidden rounded-md bg-slate-200 shadow-sm">
              <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#19233b]/90 via-[#1b2538]/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white"><h3 className="text-lg font-medium">{category.title}</h3><p className="mt-1 text-[11px] text-slate-100">{category.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="artisans" className="bg-[#f1f3ff] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-7">
          <div className="mb-8 text-center"><h2 className="text-2xl font-medium">Featured Artisans</h2><p className="mt-1 text-xs text-slate-600">Meet the vendors setting new benchmarks in regional craftsmanship.</p></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artisans.map((artisan) => (
              <article key={artisan.name} className="rounded-md bg-white p-3 shadow-sm">
                <img src={artisan.image} alt={artisan.name} className="h-36 w-full rounded-sm object-cover" />
                <div className="pt-3"><div className="flex items-center justify-between gap-2"><h3 className="text-xs font-semibold">{artisan.name}</h3><span className="flex items-center gap-1 text-[10px] text-blue-700"><Star size={11} fill="currentColor" />{artisan.rating}</span></div><p className="mt-2 flex items-center gap-1 text-[10px] text-slate-500"><MapPin size={10} />{artisan.location}</p></div>
                <button type="button" className="mt-4 w-full rounded border border-slate-300 py-2 text-[10px] font-medium hover:border-blue-700 hover:text-blue-700">View Collection</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-4 border-white bg-blue-700 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 text-white sm:flex-row sm:items-center lg:px-7">
          <div><h2 className="text-2xl font-semibold">Are you a furniture artisan?</h2><p className="mt-2 max-w-xl text-sm leading-5 text-blue-50">Join our network of elite vendors and showcase your craftsmanship to a nationwide audience of discerning buyers.</p></div>
          <Link to="/login" className="flex items-center gap-3 rounded bg-white px-9 py-4 text-xs font-medium text-blue-700 hover:bg-blue-50">Become a Vendor <ExternalLink size={14} /></Link>
        </div>
      </section>

      <footer className="bg-white pt-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1.2fr] lg:px-7">
          <div><Brand /><p className="mt-4 max-w-48 text-[11px] leading-5 text-slate-500">Connecting local furniture artisans with homeowners looking for quality, handcrafted excellence.</p><div className="mt-5 flex gap-4 text-slate-600"><Globe2 size={15} /><Share2 size={15} /><Mail size={15} /></div></div>
          <FooterLinks title="THE COMPANY" links={['About Us', 'Careers', 'Press Kit', 'Support']} />
          <FooterLinks title="MARKETPLACE" links={['Browse Vendors', 'Style Guide', 'Buyer Protection', 'Vendor Login']} />
          <div><p className="text-[10px] font-semibold tracking-wider">STAY INSPIRED</p><p className="mt-4 text-[11px] text-slate-500">Get interior design tips and local artisan highlights.</p><div className="mt-3 flex overflow-hidden rounded border border-slate-300"><input aria-label="Email address" placeholder="Your email" className="min-w-0 flex-1 px-3 py-2 text-[11px] outline-none" /><button type="button" className="bg-blue-700 px-3 text-[10px] font-medium text-white">Join</button></div></div>
        </div>
        <div className="border-t border-slate-200"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[10px] text-slate-400 sm:flex-row sm:justify-between lg:px-7"><span>© 2024 FurniMarket Marketplace. All rights reserved.</span><span className="flex gap-5"><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></span></div></div>
      </footer>
    </main>
    
  )
}

function FooterLinks({ title, links }) {
  return <div><p className="text-[10px] font-semibold tracking-wider">{title}</p><ul className="mt-4 space-y-2 text-[11px] text-slate-500">{links.map((link) => <li key={link}><a href="#footer" className="hover:text-blue-700">{link}</a></li>)}</ul></div>
}

export default HomePage
