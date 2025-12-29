export default function ButtonReflexo({
  link,
  icon,
  label,
  colorMode,
  reflexAnimation = true,
  padding,
  className,
}) {
  const themes = {
    light: 'bg-lighter text-primary border border-primary/20 ',
    dark: 'bg-primary text-fontLighterFooter',
  }

  const shineThemes = {
    light: 'bg-primary/20',
    dark: 'bg-white/10',
  }

  const colors = themes[colorMode] || themes.light
  const shineColor = shineThemes[colorMode] || shineThemes.light

  const spacing = padding || 'px-6 py-3'

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      aria-label="Botão de contato"
      className={`${className}
          relative
          overflow-hidden
          inline-flex
          items-center
          justify-center
          ${colors} 
          ${spacing}
          font-normal font-secondFont rounded-full text-lg 
          transition-all hover:scale-105 shadow-lg shadow-primary/20 gap-3
          min-w-[10px] text-sm
          text-center
        `}
    >
      {reflexAnimation && (
        <span
          className={`
              absolute top-0 left-0 w-full h-full 
              ${shineColor} shine-loop
              z-0
              pointer-events-none
            `}
        />
      )}

      <span className="relative z-10 flex items-center gap-3 capitalize ">
        {icon}
        {label}
      </span>
    </a>
  )
}
