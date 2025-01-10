type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};
export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={
        "px-7 ml-2 font-thin bg-slate-400 text-white cursor-pointer py-4 hover:bg-slate-500 active:bg-slate-600 disabled:bg-slate-200"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
