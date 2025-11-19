import React from 'react';
import { ArrowRight, Instagram, Globe, Mail, Gamepad2, Bell } from 'lucide-react';
import { Link } from '../config/links';
import { brand } from '../config/brand';
import { Tooltip } from './Tooltip';

interface LinkCardProps {
  link: Link;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  globe: Globe,
  mail: Mail,
  gamepad2: Gamepad2,
};

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const IconComponent = iconMap[link.icon] || Globe;
  const isDisabled = link.disabled;

  const handleNotify = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const subject = encodeURIComponent('Aviso juego CCHIA');
    const body = encodeURIComponent('Hola, me gustaría recibir una notificación cuando el juego de CCHIA esté disponible.');
    window.location.href = `mailto:${brand.emailNotify}?subject=${subject}&body=${body}`;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
    }
  };

  const CardContent = (
    <div
      className={`btn-card gradient-border group ${isDisabled ? 'disabled' : ''}`}
      role={isDisabled ? 'button' : undefined}
      aria-disabled={isDisabled}
      aria-label={`${link.label}${link.subtitle ? `: ${link.subtitle}` : ''}`}
      data-link={link.id}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal-1 to-brand-teal-2 flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
            {link.label}
            {isDisabled && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                Próximamente
              </span>
            )}
          </h3>
          {link.subtitle && (
            <p className="text-sm opacity-70" style={{ color: 'var(--brand-text-secondary)' }}>
              {link.subtitle}
            </p>
          )}
          
          {isDisabled && (
            <button
              onClick={handleNotify}
              className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-brand-teal-1/10 hover:bg-brand-teal-1/20 border border-brand-teal-1/30 transition-colors duration-150"
              aria-label="Recibir notificación cuando esté disponible"
            >
              <Bell className="w-4 h-4" aria-hidden="true" />
              Notificarme
            </button>
          )}
        </div>
        
        {!isDisabled && (
          <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );

  if (isDisabled) {
    return (
      <Tooltip content="En desarrollo. ¡Muy pronto!">
        <div>{CardContent}</div>
      </Tooltip>
    );
  }

  return (
    <a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="block focus:outline-none"
      onClick={handleClick}
    >
      {CardContent}
    </a>
  );
};
