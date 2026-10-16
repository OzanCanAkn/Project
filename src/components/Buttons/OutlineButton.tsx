interface OutlineButtonProps {
  children: React.ReactNode;
}

const OutlineButton = ({ children }: OutlineButtonProps) => {
  return (
    <button className="border border-gray-300 px-4 py-2">{children}</button>
  );
};

export default OutlineButton;
