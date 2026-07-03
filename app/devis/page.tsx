import {
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  LayoutDashboard,
  MapPin,
  Phone,
  Rocket,
  ShoppingBag,
  Smartphone,
  Star,
  Truck,
  Utensils,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const features = [
  "Custom website design",
  "Professional homepage",
  "Online menu with categories",
  "Product pages with images, prices and descriptions",
  "Shopping cart",
  "Click & Collect",
  "Delivery information",
  "Contact page, address and opening hours",
  "Responsive design for mobile, tablet and desktop",
  "Website deployment",
];

const phases = [
  {
    title: "1. Design",
    text: "Creating the visual identity, layout, colors and overall appearance of your website.",
    icon: LayoutDashboard,
  },
  {
    title: "2. Development",
    text: "Building all pages, menu sections, ordering system and customer experience.",
    icon: Wrench,
  },
  {
    title: "3. Testing",
    text: "Testing the website on desktop, tablet and mobile devices before launch.",
    icon: Smartphone,
  },
  {
    title: "4. Launch",
    text: "Publishing your website online so customers can start ordering immediately.",
    icon: Rocket,
  },
];

const options = [
  "Admin dashboard to manage products",
  "Table reservation system",
  "Online payment integration",
  "WhatsApp integration",
  "Monthly maintenance",
];

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#FFF8EA] text-[#12343B]">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-[#F2E6C9] bg-white/90 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D89A00]">
              Business Proposal
            </p>

            <h1 className="text-2xl font-black md:text-3xl">
              Jerix <span className="text-[#18A7AD]">Fusion Bites</span>
            </h1>

          </div>

          <div className="flex items-center gap-3">

            <Link
              href="/"
              className="hidden items-center gap-2 rounded-full border-2 border-[#12343B] bg-white px-5 py-3 text-sm font-black text-[#12343B] shadow-lg transition hover:scale-105 sm:flex"
            >
              <ArrowRight size={18} className="rotate-180" />
              Home
            </Link>

            <a
              href="#quote"
              className="flex items-center gap-2 rounded-full bg-[#F4B000] px-5 py-3 text-sm font-black text-[#12343B] shadow-lg transition hover:scale-105"
            >
              <CreditCard size={18} />
              View Quote
            </a>

          </div>

        </nav>

      </header>

      {/* HERO */}

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">

        <div>

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#18A7AD] shadow-sm">
            <Utensils size={18} />
            Restaurant Website + Online Ordering
          </div>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Your Future Online Ordering Website
          </h2>

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
            A modern and professional website designed to showcase your restaurant,
            receive online orders, offer Click & Collect and provide customers with
            a fast and seamless ordering experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#12343B] shadow-xl transition hover:scale-105"
            >
              View Website Demo
              <ArrowRight size={18} />
            </Link>

            <a
              href="#quote"
              className="flex items-center justify-center gap-2 rounded-full bg-[#F4B000] px-8 py-4 text-center font-black text-[#12343B] shadow-xl transition hover:scale-105"
            >
              View Quote
              <CreditCard size={18} />
            </a>

          </div>

        </div>

        <div className="rounded-[3rem] bg-[#12343B] p-5 shadow-2xl">

          <div className="rounded-[2.5rem] bg-white p-6">

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D89A00]">
                  Sample Order
                </p>

                <h3 className="text-2xl font-black">
                  Online Order
                </h3>

              </div>

              <ShoppingBag className="text-[#F4B000]" />

            </div>

            {[
              ["Chicken Burger", "€8.00"],
              ["XL Tacos", "€9.90"],
              ["Tiramisu", "€3.00"],
            ].map(([name, price]) => (

              <div
                key={name}
                className="mb-3 rounded-2xl bg-[#F8FAFA] p-4"
              >

                <div className="flex justify-between gap-4">

                  <p className="font-black">{name}</p>

                  <p className="font-black text-[#18A7AD]">
                    {price}
                  </p>

                </div>

              </div>

            ))}

            <div className="mt-5 rounded-2xl bg-[#FFF4D6] p-4">

              <div className="flex justify-between text-xl font-black">

                <span>Total</span>

                <span>€20.90</span>

              </div>

              <button className="mt-4 w-full rounded-full bg-[#F4B000] py-4 font-black">
                Checkout
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* MODELE */}
            {/* WEBSITE PREVIEW */}
      <section id="model" className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-[3rem] bg-white p-8 shadow-xl md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">
            Website Preview
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Here’s what your future website could look like.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#FFF4D6] p-6">
              <ShoppingBag className="mb-4 text-[#D89A00]" />
              <h3 className="text-xl font-black">Online Ordering</h3>
              <p className="mt-2 text-slate-600">
                Customers can browse your menu, add items to their cart and place their orders online.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#E9FAF9] p-6">
              <Truck className="mb-4 text-[#18A7AD]" />
              <h3 className="text-xl font-black">Click & Collect</h3>
              <p className="mt-2 text-slate-600">
                Customers can order online and collect their meals directly at the restaurant.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#12343B] p-6 text-white">
              <MapPin className="mb-4 text-[#F4B000]" />
              <h3 className="text-xl font-black">Clear Restaurant Info</h3>
              <p className="mt-2 text-white/70">
                Address, opening hours, phone number, delivery details and key information are easy to find.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">
              What’s Included
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Everything you need for a professional restaurant website.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 shrink-0 text-[#18A7AD]" />
                <p className="font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT TIMELINE */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 text-center">
          <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">
            Project Timeline
          </p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            How Your Website Will Be Built
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-[2rem] bg-white p-6 shadow-lg">
              <phase.icon className="mb-5 text-[#F4B000]" />
              <h3 className="text-xl font-black">{phase.title}</h3>
              <p className="mt-3 text-slate-600">{phase.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="mx-auto max-w-7xl px-5 py-14">
        <div className="overflow-hidden rounded-[3rem] bg-[#12343B] text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <p className="font-black uppercase tracking-[0.2em] text-[#F4B000]">
                Custom Quote
              </p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Restaurant Website with Online Ordering
              </h2>

              <div className="mt-8 space-y-4">
                {features.slice(0, 8).map((item) => (
                  <p key={item} className="flex items-center gap-3 text-lg">
                    <CheckCircle2 className="shrink-0 text-[#F4B000]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 text-[#12343B] md:p-12">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#18A7AD]">
                Launch Offer
              </p>

              <p className="mt-4 text-6xl font-black">€1,090</p>
              <p className="mt-2 text-slate-500">Instead of €1,590</p>

              <div className="mt-8 space-y-4 text-slate-700">
                <p className="flex items-center gap-3">
                  <Clock size={20} className="text-[#18A7AD]" />
                  Estimated delivery: 3 to 5 weeks
                </p>

                <p className="flex items-center gap-3">
                  <CreditCard size={20} className="text-[#18A7AD]" />
                  Deposit: €300 to start the project
                </p>

                <p className="flex items-center gap-3">
                  <Star size={20} className="text-[#18A7AD]" />
                  Remaining balance upon project completion
                </p>
              </div>

              <a
                href="tel:0788390264"
                className="mt-8 block rounded-full bg-[#F4B000] py-4 text-center font-black text-[#12343B]"
              >
                Start My Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-[3rem] bg-white p-8 shadow-xl md:p-12">
          <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">
            Optional Features
          </p>
          <h2 className="mt-3 text-4xl font-black">
            Additional features available depending on your needs
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {options.map((option) => (
              <div key={option} className="flex gap-3 rounded-2xl bg-[#FFF8EA] p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-[#18A7AD]" />
                <p className="font-bold text-slate-700">{option}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-[3rem] bg-[#F4B000] p-8 text-center shadow-xl md:p-12">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Launch Your Website?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-bold text-[#12343B]/75">
            Your website can be fully customized with your branding, photos, menu and business needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-white px-8 py-4 font-black text-[#12343B] shadow-lg transition hover:scale-105"
            >
              View Website Demo
            </Link>

            <a
              href="tel:0666208094"
              className="rounded-full bg-[#12343B] px-8 py-4 font-black text-white shadow-lg transition hover:scale-105"
            >
              Call Me
            </a>

            <a
              href="#quote"
              className="rounded-full border-2 border-[#12343B] px-8 py-4 font-black text-[#12343B] transition hover:scale-105"
            >
              View Quote Again
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}