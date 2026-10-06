
export const Text = ({ variant = 'body', children }) => {
  const variants = {
    body: "font-['Inter'] font-normal text-base text-gray-200 leading-relaxed",
  };

  return (
    <p className={variants[variant] || variants.body}>
      {children}
    </p>
  );
};