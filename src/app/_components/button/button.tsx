const Button = ({ children, ...props }) => (
  <button {...props} className="p-1 bg-tron-sky-950 border border-tron-sky-1000 hover:bg-tron-dark-green rounded-md">
    {children}
  </button>
)

export default Button