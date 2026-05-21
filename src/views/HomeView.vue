<script setup lang="ts">
import { BaseButton, DecorativeBean } from '@/components'

const benefits = [
  {
    number: '01',
    title: 'Torra de baixa luz',
    image: '/images/coffee-beans.jpg',
    description: 'Graos em torra media-escura, com corpo de cacau e final de melaco.',
  },
  {
    number: '02',
    title: 'Baristas de balcao',
    image: '/images/espresso-machine.jpg',
    description: 'Extracao calibrada turno a turno, curta, densa e sem teatro vazio.',
  },
  {
    number: '03',
    title: 'Ritual noturno',
    image: '/images/night-cafe.jpg',
    description: 'Luz baixa, musica seca e mesas para conversas depois da cidade.',
  },
]

const nightMenu = [
  {
    name: 'Noir Caramelo',
    description: 'Espresso duplo, calda seca de rapadura e final de cacau 70%.',
    price: 'R$ 18',
  },
  {
    name: 'Cold Brew Subsolo',
    description: 'Infusao de 18 horas, gelo mineral, casca de laranja e tonica artesanal.',
    price: 'R$ 24',
  },
  {
    name: 'Latte Grafite',
    description: 'Leite vaporizado, blend da casa e borda de acucar mascavo tostado.',
    price: 'R$ 22',
  },
]
</script>

<template>
  <main class="relative isolate bg-espresso-950">
    <div class="pointer-events-none fixed inset-0 -z-10 opacity-80">
      <div class="absolute inset-0 bg-noise" />
      <div class="absolute inset-0 bg-grid" />
      <div
        class="absolute left-[-12rem] top-28 h-96 w-96 rounded-full bg-caramel-500/15 blur-3xl"
      />
      <div
        class="absolute bottom-32 right-[-10rem] h-[32rem] w-[32rem] bg-graphite-800/70 blur-3xl"
      />
    </div>

    <header
      class="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8"
    >
      <RouterLink
        to="/"
        class="border border-cream-50/15 px-3 py-2 font-display text-lg font-black uppercase tracking-[0.28em]"
      >
        Subsolo
      </RouterLink>

      <nav
        class="hidden items-center gap-8 text-[0.68rem] font-black uppercase tracking-[0.22em] text-cream-200 md:flex"
      >
        <a href="#beneficios" class="transition hover:text-caramel-400">Beneficios</a>
        <a href="#experiencia" class="transition hover:text-caramel-400">Experiencia</a>
        <a href="#menu" class="transition hover:text-caramel-400">Menu</a>
        <a href="#reserva" class="transition hover:text-caramel-400">Reservas</a>
      </nav>

      <span
        class="hidden text-[0.68rem] font-black uppercase tracking-[0.22em] text-caramel-400 sm:block"
      >
        Aberto ate 01h
      </span>
    </header>

    <section
      class="relative mx-auto grid min-h-[calc(100vh-76px)] w-full max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:pb-24"
    >
      <div
        class="pointer-events-none absolute left-5 top-16 hidden h-[76%] border-l border-cream-50/10 lg:block"
      >
        <p
          class="absolute left-[-0.46rem] top-10 origin-left rotate-90 whitespace-nowrap text-[0.62rem] font-black uppercase tracking-[0.38em] text-cream-200/50"
        >
          torra urbana / lote 04 / centro velho
        </p>
      </div>

      <DecorativeBean
        class="absolute bottom-3 left-4 z-20 hidden w-11 -rotate-45 opacity-45 sm:block lg:bottom-8 lg:left-8"
      />
      <DecorativeBean
        class="absolute bottom-0 left-24 z-20 hidden w-8 rotate-12 opacity-35 sm:block lg:bottom-3 lg:left-28"
      />
      <DecorativeBean
        class="absolute bottom-20 left-10 z-20 hidden w-7 rotate-[28deg] opacity-40 md:block lg:bottom-24 lg:left-16"
      />

      <div class="relative z-10 pt-8 lg:pl-12">
        <div class="mb-7 flex flex-wrap items-center gap-3">
          <span
            class="border border-caramel-400/50 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-caramel-400"
          >
            cafeteria underground premium
          </span>
          <span class="text-[0.65rem] font-black uppercase tracking-[0.28em] text-cream-200/60">
            Sao Paulo, subnivel -1
          </span>
        </div>

        <h1
          class="max-w-5xl text-balance font-display text-6xl font-black uppercase leading-[0.82] tracking-tight text-cream-50 sm:text-7xl lg:text-[7.6rem]"
        >
          Cafe de subsolo para noites acesas.
        </h1>

        <div class="mt-8 grid gap-6 lg:grid-cols-[1fr_12rem]">
          <p class="max-w-2xl text-lg leading-8 text-cream-200">
            Uma cafeteria de luz baixa, torra autoral e espresso com textura de madrugada. Para quem
            prefere o cafe quando a cidade ja virou ruido.
          </p>
          <div class="hidden border-l border-caramel-400/50 pl-5 lg:block">
            <p class="font-display text-5xl font-black text-caramel-400">04</p>
            <p class="mt-2 text-[0.65rem] font-black uppercase tracking-[0.24em] text-cream-200">
              microlotes no balcao esta noite
            </p>
          </div>
        </div>

        <div class="mt-10 flex flex-col gap-4 sm:flex-row">
          <BaseButton href="#reserva">Reservar mesa</BaseButton>
          <BaseButton href="#menu" variant="secondary">Menu noturno</BaseButton>
        </div>
      </div>

      <aside class="relative min-h-[45rem] lg:min-h-[44rem]">
        <div class="absolute inset-x-4 top-5 h-[35rem] bg-caramel-400/20 blur-3xl lg:inset-x-10" />

        <figure
          class="absolute right-0 top-6 h-[31rem] w-[94%] overflow-hidden border border-cream-50/12 bg-graphite-900 shadow-2xl shadow-black/60 sm:h-[35rem] lg:h-[38rem]"
        >
          <img
            src="/images/coffee-cup-dark.jpg"
            alt="Xicara de cafe em ambiente escuro"
            class="h-full w-full object-cover object-center opacity-95"
          />
          <div
            class="absolute inset-0 bg-gradient-to-l from-transparent via-espresso-950/10 to-espresso-950/70"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-espresso-950/75 via-transparent to-black/25"
          />
        </figure>

        <DecorativeBean class="absolute right-6 top-12 z-30 w-10 rotate-12 opacity-75" />
        <DecorativeBean class="absolute right-36 top-28 z-30 w-8 -rotate-[28deg] opacity-55" />
        <DecorativeBean class="absolute right-14 top-52 z-30 w-12 rotate-[42deg] opacity-65" />

        <div
          class="absolute -bottom-8 left-1/2 z-20 w-[min(86%,17.5rem)] -translate-x-1/2 rotate-[-2deg] border border-cream-50/20 bg-cream-50 p-3 text-espresso-950 shadow-2xl shadow-black/70 sm:-bottom-10 sm:left-8 sm:w-[18.5rem] sm:translate-x-0 sm:p-4 lg:-left-2 lg:w-[19rem]"
        >
          <div class="flex items-start justify-between gap-3 border-b border-espresso-950/25 pb-3">
            <div>
              <p class="text-[0.55rem] font-black uppercase tracking-[0.24em] text-caramel-500">
                Blend 01 / etiqueta de torra
              </p>
              <h2 class="mt-3 font-display text-3xl font-black uppercase leading-none sm:text-4xl">
                Noir Caramelo
              </h2>
            </div>
            <p class="font-display text-4xl font-black leading-none text-caramel-500 sm:text-5xl">
              01
            </p>
          </div>

          <div class="grid grid-cols-3 border-b border-espresso-950/25 text-center">
            <div class="border-r border-espresso-950/20 py-3">
              <p class="font-display text-xl font-black sm:text-2xl">18g</p>
              <p class="text-[0.6rem] font-black uppercase tracking-[0.2em]">dose</p>
            </div>
            <div class="border-r border-espresso-950/20 py-3">
              <p class="font-display text-xl font-black sm:text-2xl">92</p>
              <p class="text-[0.6rem] font-black uppercase tracking-[0.2em]">graus</p>
            </div>
            <div class="py-3">
              <p class="font-display text-xl font-black sm:text-2xl">28s</p>
              <p class="text-[0.6rem] font-black uppercase tracking-[0.2em]">queda</p>
            </div>
          </div>

          <div class="grid gap-3 py-4 sm:grid-cols-[1fr_4.75rem]">
            <p class="text-[0.72rem] font-bold leading-5">
              Cacau amargo, melaco, ameixa seca e fumaca doce. Torra media-escura, corpo denso,
              final longo.
            </p>
            <div class="flex items-center justify-center border border-espresso-950/25 p-3">
              <span class="font-display text-3xl font-black uppercase leading-none">B1</span>
            </div>
          </div>

          <div
            class="flex items-center justify-between border-t border-dashed border-espresso-950/35 pt-4"
          >
            <p class="text-[0.55rem] font-black uppercase tracking-[0.22em]">lote 04 / 250g</p>
            <p class="font-display text-2xl font-black">R$ 46</p>
          </div>
        </div>
      </aside>
    </section>

    <section id="beneficios" class="relative border-y border-cream-50/10 px-5 py-20 sm:px-8">
      <div class="absolute inset-x-0 top-0 h-px bg-caramel-400/40" />
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p class="text-[0.68rem] font-black uppercase tracking-[0.32em] text-caramel-400">
            manifesto sensorial
          </p>
          <h2 class="mt-5 font-display text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
            O cafe antes da cidade dormir.
          </h2>
          <p class="mt-6 max-w-md leading-8 text-cream-200">
            A experiencia aparece por camadas: aroma, mesa, textura, sombra e um pouco de barulho
            bom.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="(benefit, index) in benefits"
            :key="benefit.number"
            class="group relative overflow-hidden border border-cream-50/10 bg-graphite-900/55 backdrop-blur"
            :class="index === 1 ? 'md:translate-y-10' : index === 2 ? 'md:-translate-y-4' : ''"
          >
            <div class="relative h-48 overflow-hidden border-b border-cream-50/10 bg-espresso-900">
              <img
                :src="benefit.image"
                :alt="benefit.title"
                class="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-black/30"
              />
              <p
                class="absolute bottom-3 left-4 font-display text-7xl font-black leading-none text-cream-50/15"
              >
                {{ benefit.number }}
              </p>
            </div>
            <div class="p-6">
              <p class="text-[0.62rem] font-black uppercase tracking-[0.28em] text-caramel-400">
                {{ benefit.number }} / camada
              </p>
              <h3 class="mt-5 font-display text-3xl font-black uppercase leading-none">
                {{ benefit.title }}
              </h3>
              <p class="mt-5 leading-7 text-cream-200">{{ benefit.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      id="experiencia"
      class="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center"
    >
      <div class="relative min-h-[28rem] overflow-hidden border border-cream-50/10 bg-graphite-900">
        <img
          src="/images/cafe-interior.jpg"
          alt="Interior escuro da cafeteria Subsolo"
          class="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-espresso-950/20 via-transparent to-espresso-950/70"
        />
        <div
          class="absolute -bottom-16 left-[-12%] h-36 w-[130%] -rotate-6 bg-caramel-500/85 shadow-2xl shadow-black/50"
        />
        <div class="absolute bottom-8 left-6 max-w-xs border-l border-cream-50/50 pl-5">
          <p class="text-[0.65rem] font-black uppercase tracking-[0.28em] text-cream-50">
            sala de torra / luz baixa
          </p>
        </div>
      </div>

      <div class="relative">
        <img
          src="/images/coffee-branch.jpg"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute -right-14 -top-20 hidden h-72 w-56 object-cover opacity-20 mix-blend-screen grayscale lg:block"
        />
        <p class="text-[0.68rem] font-black uppercase tracking-[0.32em] text-caramel-400">
          Experiencia
        </p>
        <h2 class="mt-4 font-display text-5xl font-black uppercase leading-[0.9] sm:text-6xl">
          Espresso, concreto e silencio bom.
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-cream-200">
          Um espaco de permanencia: poucas mesas, balcao iluminado por recortes, cafe servido como
          ritual e nao como pressa.
        </p>
        <a
          href="#reserva"
          class="mt-8 inline-flex text-sm font-black uppercase tracking-[0.22em] text-caramel-400 transition hover:text-cream-50"
        >
          Conhecer o espaco &rarr;
        </a>
      </div>
    </section>

    <section id="menu" class="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div class="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-[0.68rem] font-black uppercase tracking-[0.32em] text-caramel-400">
            ritual da casa
          </p>
          <h2 class="mt-4 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            Menu noturno
          </h2>
        </div>
        <p
          class="max-w-sm text-sm font-bold uppercase leading-6 tracking-[0.16em] text-cream-200/70"
        >
          Tres pedidos para depois das 20h. Poucos ingredientes, extracao precisa, final longo.
        </p>
      </div>

      <div class="grid gap-4 lg:grid-cols-3">
        <article
          v-for="(item, index) in nightMenu"
          :key="item.name"
          class="relative min-h-72 border border-cream-50/12 bg-espresso-900/70 p-6"
          :class="index === 1 ? 'lg:mt-10 lg:bg-caramel-500 lg:text-espresso-950' : ''"
        >
          <p class="font-display text-6xl font-black opacity-20">0{{ index + 1 }}</p>
          <div class="mt-10 border-t border-current/20 pt-6">
            <h3 class="font-display text-3xl font-black uppercase leading-none">{{ item.name }}</h3>
            <p class="mt-4 min-h-20 leading-7" :class="index === 1 ? '' : 'text-cream-200'">
              {{ item.description }}
            </p>
          </div>
          <p class="absolute bottom-6 right-6 font-display text-4xl font-black">{{ item.price }}</p>
        </article>
      </div>
    </section>

    <section id="reserva" class="px-5 pb-20 sm:px-8">
      <div
        class="relative mx-auto grid max-w-7xl overflow-hidden border border-caramel-400/50 bg-cream-50 text-espresso-950 shadow-2xl shadow-black/60 lg:grid-cols-[1fr_18rem]"
      >
        <DecorativeBean class="absolute -left-5 top-4 w-14 rotate-45 opacity-45 sm:top-8" />
        <DecorativeBean
          class="absolute -right-8 top-1/2 w-16 -translate-y-1/2 -rotate-12 opacity-35 sm:w-20"
        />
        <DecorativeBean
          class="absolute right-10 top-6 hidden w-8 rotate-[22deg] opacity-30 sm:block lg:right-40"
        />

        <div
          class="absolute inset-y-0 left-8 hidden border-l border-dashed border-espresso-950/20 lg:block"
        />
        <div class="p-8 sm:p-12 lg:pl-20">
          <p class="text-[0.68rem] font-black uppercase tracking-[0.32em] text-caramel-500">
            ingresso de balcao
          </p>
          <h2
            class="mt-5 max-w-3xl font-display text-5xl font-black uppercase leading-[0.9] sm:text-7xl"
          >
            Reserve a mesa do canto.
          </h2>
          <div
            class="mt-8 grid gap-4 text-sm font-black uppercase tracking-[0.18em] sm:grid-cols-2"
          >
            <p>Quarta a domingo / 19h - 01h</p>
            <p>Rua Aurora, 404 / Subnivel -1</p>
          </div>
        </div>

        <div
          class="flex flex-col justify-between border-t border-dashed border-espresso-950/25 p-8 sm:p-12 lg:border-l lg:border-t-0"
        >
          <p class="font-display text-8xl font-black leading-none text-caramel-500">21</p>
          <div class="mt-8">
            <p class="mb-5 text-xs font-black uppercase tracking-[0.24em]">
              capacidade reduzida, cafe forte
            </p>
            <BaseButton>Reservar agora</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <footer class="border-t border-cream-50/10 px-5 py-8 text-sm text-cream-200 sm:px-8">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>Subsolo Coffee &copy; 2026</p>
        <div class="flex items-center gap-3">
          <a
            href="#"
            aria-label="Instagram"
            class="grid h-9 w-9 place-items-center border border-cream-50/15 transition hover:border-caramel-400 hover:text-caramel-400"
          >
            IG
          </a>
          <a
            href="#"
            aria-label="TikTok"
            class="grid h-9 w-9 place-items-center border border-cream-50/15 transition hover:border-caramel-400 hover:text-caramel-400"
          >
            TK
          </a>
          <a
            href="#"
            aria-label="Spotify"
            class="grid h-9 w-9 place-items-center border border-cream-50/15 transition hover:border-caramel-400 hover:text-caramel-400"
          >
            SP
          </a>
        </div>
        <p class="font-black uppercase tracking-[0.18em]">Preto, grafite, off-white e caramelo.</p>
      </div>
    </footer>
  </main>
</template>
