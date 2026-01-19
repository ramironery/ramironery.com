export type TopicRef = {
  slug: string;
  title: string;
  href: string;
  area: string;
  subarea: string;
};

export const TOPICS: Record<string, TopicRef> = {
  // Infra > Fundamentos
  fundamentos: {
    slug: "fundamentos",
    title: "Fundamentos",
    href: "/infra/fundamentos",
    area: "infra",
    subarea: "fundamentos",
  },
  "o-que-e-infraestrutura": {
    slug: "o-que-e-infraestrutura",
    title: "O que é Infraestrutura de TI",
    href: "/infra/fundamentos/o-que-e-infraestrutura",
    area: "infra",
    subarea: "fundamentos",
  },

  // Infra > Sistemas Operacionais
  "sistemas-operacionais": {
    slug: "sistemas-operacionais",
    title: "Sistemas Operacionais",
    href: "/infra/sistemas-operacionais",
    area: "infra",
    subarea: "sistemas-operacionais",
  },
  "o-que-e-sistema-operacional": {
    slug: "o-que-e-sistema-operacional",
    title: "O que é Sistema Operacional",
    href: "/infra/sistemas-operacionais/o-que-e-sistema-operacional",
    area: "infra",
    subarea: "sistemas-operacionais",
  },

  // Infra > Redes
  redes: {
    slug: "redes",
    title: "Redes",
    href: "/infra/redes",
    area: "infra",
    subarea: "redes",
  },
  "o-que-e-redes": {
    slug: "o-que-e-redes",
    title: "O que é Rede de Computadores",
    href: "/infra/redes/o-que-e-redes",
    area: "infra",
    subarea: "redes",
  },

  // Placeholders (você cria depois, mas já “reserva” os slugs)
  hardware: {
    slug: "hardware",
    title: "Hardware",
    href: "/infra/hardware",
    area: "infra",
    subarea: "hardware",
  },
  "tcp-ip": {
    slug: "tcp-ip",
    title: "TCP/IP",
    href: "/infra/redes/tcp-ip",
    area: "infra",
    subarea: "redes",
  },
  dns: {
    slug: "dns",
    title: "DNS",
    href: "/infra/redes/dns",
    area: "infra",
    subarea: "redes",
  },
  dhcp: {
    slug: "dhcp",
    title: "DHCP",
    href: "/infra/redes/dhcp",
    area: "infra",
    subarea: "redes",
  },
};

export function resolveTopic(slug: string): TopicRef | null {
  return TOPICS[slug] ?? null;
}

export function resolveMany(slugs: string[]) {
  return slugs.map((s) => ({ slug: s, ref: resolveTopic(s) }));
}

export function areaTitle(area: string) {
  const map: Record<string, string> = {
    infra: "Infraestrutura",
    dev: "Desenvolvimento",
    cloud: "Cloud",
    ia: "Inteligência Artificial",
  };
  return map[area] ?? area;
}

export function subareaTitle(area: string, subarea: string) {
  // pode ficar simples: primeiro tenta TOPICS[subarea], senão “humaniza”
  const ref = resolveTopic(subarea);
  if (ref?.title) return ref.title;
  return subarea.replace(/-/g, " ");
}
