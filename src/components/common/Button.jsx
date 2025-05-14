const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  type = 'button',
  fullWidth = false,
  onClick,
  disabled = false,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#5D0018] text-white hover:bg-[#3D0010] disabled:bg-opacity-50',
    secondary: 'bg-[#166335] text-white hover:bg-[#0E4020] disabled:bg-opacity-50',
    outline: 'border-2 border-[#5D0018] text-[#5D0018] hover:bg-[#5D0018] hover:text-white disabled:opacity-50',
    ghost: 'text-[#5D0018] hover:bg-[#5D0018] hover:bg-opacity-10 disabled:opacity-50'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
