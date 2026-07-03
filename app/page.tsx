import Link from "next/link";
import { FileText } from "lucide-react";
import {
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  Truck,
  Utensils,
  CreditCard,
  ShieldCheck,
  ChefHat,
  CalendarCheck,
  ArrowRight,
  Heart,
} from "lucide-react";

const heroImages = {
  main: "/images/hero-burger2.jpg",
  small1: "/images/pizza.jpg",
  small2: "/images/tacos-xl.png",
};

const categories = [
  { name: "Pizzas", image: "/images/pizza-closeup.jpg" },
  { name: "Burgers", image: "/images/hero-burger3.jpg" },
  { name: "Tacos", image: "/images/tacos-xl.png" },
  { name: "Sandwichs", image: "/images/category-sandwich.jpg" },
  { name: "Plats", image: "/images/category-plat.jpg" },
  { name: "Desserts", image: "/images/category-dessert.jpg" },
];

const products = [
  { name: "Pizza Orientale", desc: "Sauce tomate, fromage, merguez, olives", price: "6,50€", tag: "Pizza", image: "/images/pizza-orientale.jpg" },
  { name: "Chicken Burger", desc: "Poulet pané, fromage, sauce barbecue", price: "8,00€", tag: "Burger", image: "/images/hero-burger2.jpg" },
  { name: "Tacos XL", desc: "3 viandes au choix, frites, sauce fromagère", price: "9,90€", tag: "Tacos", image: "/images/tacos-xl.png" },
  { name: "Poulet Biryani", desc: "Spécialité maison — ven, sam, dim", price: "9,00€", tag: "Plat maison", image: "/images/poulet-biryani.png" },
  { name: "Menu Enfant", desc: "Cheese burger ou nuggets + frites + surprise", price: "5,00€", tag: "Menu", image: "/images/menu-enfant.png" },
  { name: "Tiramisu", desc: "Dessert gourmand maison", price: "3,00€", tag: "Dessert", image: "/images/tiramisu.png" },
];

const reviews = [
  { name: "Sarah M.", text: "Très bon, généreux et rapide. Le tacos XL est vraiment excellent." },
  { name: "Yanis B.", text: "Super accueil, burgers bien garnis et frites maison au top." },
  { name: "Aïcha D.", text: "Le biryani du week-end est incroyable. Je recommande !" },
];

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8D8B0] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8EA] text-[#12343B]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#F2E6C9] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-black md:text-3xl">
              Jerix <span className="text-[#18A7AD]">Fusion Bites</span>
            </h1>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D89A00]">
              Pizza • Burger • Tacos • Sandwich indien
            </p>
          </div>

          <div className="hidden items-center gap-7 text-sm font-black text-[#12343B] md:flex">
            <a href="#accueil" className="hover:text-[#18A7AD]">Accueil</a>
            <a href="#menu" className="hover:text-[#18A7AD]">Menu</a>
            <a href="#offres" className="hover:text-[#18A7AD]">Offres</a>
            <a href="#avis" className="hover:text-[#18A7AD]">Avis</a>
            <a href="#infos" className="hover:text-[#18A7AD]">Infos</a>
          </div>

<div className="flex items-center gap-2">
  <Link
    href="/devis"
    className="flex items-center gap-2 rounded-full border-2 border-[#12343B] bg-white px-4 py-3 text-xs font-black text-[#12343B] shadow-lg transition hover:scale-105 sm:px-5 sm:text-sm"
  >
    <FileText size={17} />
    Devis
  </Link>

  <button
    aria-label="Open cart"
    className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#12343B] text-white shadow-lg transition hover:scale-105 sm:h-12 sm:w-12"
  >
    <ShoppingBag size={21} />
    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F4B000] text-xs font-black text-[#12343B]">
      0
    </span>
  </button>

  <button className="hidden items-center gap-2 rounded-full bg-[#F4B000] px-5 py-3 text-sm font-black text-[#12343B] shadow-lg transition hover:scale-105 sm:flex">
    <ShoppingBag size={18} />
    Commander
  </button>
</div>
        </nav>
      </header>

      {/* HERO */}
      <section id="accueil" className="relative overflow-hidden">
        <div className="absolute right-[-160px] top-[-160px] h-96 w-96 rounded-full bg-[#18A7AD]/20 blur-3xl" />
        <div className="absolute bottom-[-160px] left-[-160px] h-96 w-96 rounded-full bg-[#F4B000]/30 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#18A7AD] shadow-sm">
              <ShieldCheck size={17} />
              Halal • Pain maison • Frites maison
            </div>

            <h2 className="text-5xl font-black leading-tight md:text-7xl">
              Le goût qui donne envie de commander.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Pizzas, burgers, tacos, sandwichs indiens, plats maison et desserts.
              Commandez en ligne, réservez une table ou récupérez votre repas sur place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-full bg-[#12343B] px-8 py-4 font-black text-white shadow-xl transition hover:scale-105">
                Commander maintenant <ArrowRight size={18} />
              </button>
              <button className="rounded-full border border-[#18A7AD] bg-white px-8 py-4 font-black text-[#12343B]">
                Voir le menu
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-[#18A7AD]">6j/7</p>
                <p className="text-sm font-bold text-slate-500">Ouvert jusqu’à 23h</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-[#18A7AD]">1km</p>
                <p className="text-sm font-bold text-slate-500">Livraison alentour</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-black text-[#18A7AD]">20€</p>
                <p className="text-sm font-bold text-slate-500">Livraison gratuite</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 z-10 rounded-3xl bg-white p-4 shadow-xl">
              <p className="text-xs font-black uppercase text-[#D89A00]">Best-seller</p>
              <p className="text-lg font-black">Chicken Burger</p>
            </div>

            <div className="rounded-[3rem] bg-[#12343B] p-5 shadow-2xl">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F4B000]">
                <img src={heroImages.main} alt="Burger gourmand Jerix Fusion Bites" className="h-[460px] w-full object-cover" />
              </div>
            </div>

            <div className="absolute -bottom-6 right-2 hidden gap-4 md:flex">
              <img src={heroImages.small1} alt="Pizza" className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-xl" />
              <img src={heroImages.small2} alt="Tacos" className="h-24 w-24 rounded-3xl border-4 border-white object-cover shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ACTIONS RAPIDES */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { icon: Truck, title: "Livraison rapide", text: "Autour de Bagneux" },
            { icon: ShoppingBag, title: "Click & Collect", text: "Commande prête à l’heure" },
            { icon: CalendarCheck, title: "Réservation", text: "Réservez une table" },
            { icon: CreditCard, title: "Paiement simple", text: "CB ou sur place" },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <item.icon className="mb-4 text-[#F4B000]" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* CATÉGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">Choisissez votre envie</p>
          <h2 className="mt-2 text-4xl font-black">Catégories populaires</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <button key={cat.name} className="group overflow-hidden rounded-3xl bg-white p-3 text-center font-black shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={cat.image} alt={cat.name} className="h-28 w-full rounded-2xl object-cover" />
              <p className="mt-3">{cat.name}</p>
            </button>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* OFFRE SPÉCIALE */}
      <section id="offres" className="mx-auto max-w-7xl px-5 py-14">
        <div className="overflow-hidden rounded-[3rem] bg-[#12343B] text-white shadow-xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="p-8 md:p-12">
              <p className="font-black uppercase tracking-[0.2em] text-[#F4B000]">Offre spéciale maison</p>
              <h2 className="mt-5 text-4xl font-black md:text-5xl">
                Poulet Biryani disponible vendredi, samedi et dimanche.
              </h2>
              <p className="mt-5 text-lg text-white/75">
                Une spécialité généreuse, parfumée et préparée maison pour vos repas du week-end.
              </p>
              <button className="mt-7 rounded-full bg-[#F4B000] px-8 py-4 font-black text-[#12343B]">
                Ajouter au panier
              </button>
            </div>

            <img src="/images/poulet-biryani.png" alt="Poulet Biryani maison" className="h-full min-h-[360px] w-full object-cover" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">Menu en ligne</p>
            <h2 className="mt-2 text-4xl font-black">Nos spécialités</h2>
          </div>
          <Utensils className="hidden text-[#18A7AD] md:block" size={42} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
                <button
  aria-label="Open cart"
  className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#12343B] text-white shadow-lg transition hover:scale-105"
>
  <ShoppingBag size={22} />
  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F4B000] text-xs font-black text-[#12343B]">
    0
  </span>
</button>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#E9FAF9] px-3 py-1 text-xs font-black text-[#18A7AD]">{product.tag}</span>
                  <div className="flex items-center gap-1 text-sm font-black text-[#F4B000]">
                    <Star size={16} fill="currentColor" />
                    4.8
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-black">{product.name}</h3>
                <p className="mt-2 text-slate-500">{product.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-black text-[#18A7AD]">{product.price}</p>
                  <button className="flex items-center gap-2 rounded-full bg-[#12343B] px-5 py-3 text-sm font-black text-white">
                    <ShoppingBag size={16} />
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* POURQUOI NOUS */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="overflow-hidden rounded-[3rem] bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">Pourquoi nous choisir</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Du fait maison, du goût et une commande simple.
              </h2>
              <p className="mt-5 text-lg text-slate-600">
                Chez Jerix Fusion Bites, on mise sur des recettes généreuses, une cuisine halal,
                des produits préparés avec soin et une expérience simple pour commander rapidement.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-[#FFF4D6] p-5">
                  <ChefHat className="mb-3 text-[#D89A00]" />
                  <h3 className="font-black">Fait maison</h3>
                  <p className="mt-2 text-sm text-slate-600">Pain, frites et recettes maison.</p>
                </div>

                <div className="rounded-3xl bg-[#E9FAF9] p-5">
                  <ShieldCheck className="mb-3 text-[#18A7AD]" />
                  <h3 className="font-black">Cuisine halal</h3>
                  <p className="mt-2 text-sm text-slate-600">Des plats pour toute la famille.</p>
                </div>

                <div className="rounded-3xl bg-[#12343B] p-5 text-white">
                  <Truck className="mb-3 text-[#F4B000]" />
                  <h3 className="font-black">Commande facile</h3>
                  <p className="mt-2 text-sm text-white/70">Sur place, retrait ou livraison.</p>
                </div>
              </div>
            </div>

            <img src="/images/restaurant-cuisine.png" alt="Cuisine Jerix Fusion Bites" className="h-full min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* AVIS */}
      <section id="avis" className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-10 text-center">
          <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">Avis clients</p>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Ce que nos clients pensent de nous
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Des plats généreux, un service rapide et une cuisine qui donne envie de revenir.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="relative rounded-[2rem] bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute -top-5 left-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4B000] text-2xl font-black text-[#12343B] shadow-lg">
                “
              </div>

              <div className="mt-5 flex text-[#F4B000]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-5 text-lg font-bold leading-relaxed text-[#12343B]">
                {review.text}
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9FAF9] font-black text-[#18A7AD]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black">{review.name}</p>
                  <p className="text-sm font-bold text-slate-500">Client vérifié</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-col items-center gap-2 rounded-full bg-white px-8 py-4 shadow-sm sm:flex-row">
            <div className="flex text-[#F4B000]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="font-black text-[#12343B]">4.8/5 — clients satisfaits</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* INFOS */}
      <section id="infos" className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[3rem] bg-white shadow-xl">
            <img src="/images/restaurant-facade.png" alt="Restaurant Jerix Fusion Bites" className="h-72 w-full object-cover" />

            <div className="p-8">
              <p className="font-black uppercase tracking-[0.2em] text-[#D89A00]">Nous trouver</p>
              <h2 className="mt-2 text-4xl font-black">Jerix Fusion Bites</h2>
              <p className="mt-4 text-slate-600">
                Retrouvez-nous à Bagneux pour commander sur place, récupérer votre commande
                ou réserver une table.
              </p>
            </div>
          </div>

          <div className="rounded-[3rem] bg-[#FFF4D6] p-8 shadow-sm">
            <h3 className="text-3xl font-black">Infos pratiques</h3>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <Phone className="mt-1 text-[#18A7AD]" />
                <div>
                  <p className="font-black">Contact</p>
                  <p className="text-slate-600">01 45 46 14 82</p>
                  <p className="text-slate-600">07 88 39 02 64</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 text-[#18A7AD]" />
                <div>
                  <p className="font-black">Adresse</p>
                  <p className="text-slate-600">11 Place des Brugnauts, 92220 Bagneux</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 text-[#18A7AD]" />
                <div>
                  <p className="font-black">Horaires</p>
                  <p className="text-slate-600">Ouvert 6j/7 de 11h30 à 23h00</p>
                  <p className="text-slate-600">Mardi fermé</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full rounded-full bg-[#12343B] py-4 font-black text-white">
              Appeler le restaurant
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-[3rem] bg-[#F4B000] p-8 text-center shadow-xl md:p-12">
          <h2 className="text-4xl font-black md:text-5xl">
            Une faim ? Votre commande est à quelques clics.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-bold text-[#12343B]/75">
            Commandez vos plats préférés, réservez une table ou appelez directement le restaurant.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-[#12343B] px-8 py-4 font-black text-white">
              Commander maintenant
            </button>
            <button className="rounded-full bg-white px-8 py-4 font-black text-[#12343B]">
              Réserver une table
            </button>
          </div>
        </div>
      </section>

      {/* PANIER FLOTTANT */}
      <button className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#F4B000] text-[#12343B] shadow-2xl transition hover:scale-110">
        <ShoppingBag size={28} />
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#12343B] text-xs font-black text-white">
          0
        </span>
      </button>

      {/* FOOTER */}
<footer className="mt-10 bg-[#12343B] px-5 py-8 text-white">
  <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
    <div>
      <h2 className="text-xl font-black md:text-2xl">
        Jerix <span className="text-[#18A7AD]">Fusion Bites</span>
      </h2>
      <p className="mt-2 text-sm text-white/70">
        Pizza • Burger • Tacos • Sandwich indien — Bagneux
      </p>
    </div>

    <div>
      <h3 className="font-black text-[#F4B000]">Navigation</h3>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/70 md:flex md:flex-col">
        <a href="#accueil">Accueil</a>
        <a href="#menu">Menu</a>
        <a href="#offres">Offres</a>
        <a href="#infos">Infos pratiques</a>
      </div>
    </div>

    <div>
      <h3 className="font-black text-[#F4B000]">Contact</h3>
      <div className="mt-3 text-sm text-white/70">
        <p>01 45 46 14 82</p>
        <p>07 88 39 02 64</p>
        <p>11 Place des Brugnauts, Bagneux</p>
      </div>
    </div>

    <div>
      <h3 className="font-black text-[#F4B000]">Horaires</h3>
      <div className="mt-3 text-sm text-white/70">
        <p>11h30 — 23h00</p>
        <p>Fermé le mardi</p>
        <p>Livraison à environ 1 km</p>
      </div>
    </div>
  </div>

  <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-4 text-xs text-white/50">
    © 2026 Jerix Fusion Bites — Site de démonstration.
  </div>
</footer>
    </main>
  );
}