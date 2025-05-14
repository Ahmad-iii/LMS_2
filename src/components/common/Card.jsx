const Card = ({ 
  children, 
  className = '', 
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-[#F2EFE6]',
    accent: 'bg-[#E8E4D9]',
    white: 'bg-white'
  };

  return (
    <div className={`
      rounded-lg shadow-md p-4 
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
