export interface Link {
  id: string;
  label: string;
  href: string;
  subtitle?: string;
  icon: string;
  disabled?: boolean;
}

export const links: Link[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/cchia.cl/",
    subtitle: "Actualizaciones y comunidad",
    icon: "instagram"
  },
  {
    id: "site",
    label: "Sitio oficial",
    href: "https://www.cchia.cl/",
    subtitle: "Información institucional",
    icon: "globe"
  },
  {
    id: "request",
    label: "Solicitar información",
    href: "https://www.cchia.cl/request-info",
    subtitle: "Únete o colabora",
    icon: "mail"
  },
  {
    id: "game",
    label: "Juego",
    href: "#",
    subtitle: "Próximamente",
    icon: "gamepad2",
    disabled: true
  }
];
