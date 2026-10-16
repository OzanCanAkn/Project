import type { ReactNode } from 'react';

interface OutlineButtonProps {
  children: ReactNode;
}

const OutlineButton = ({ children }: OutlineButtonProps) => {
  return (
    <button className="border border-gray-300 px-4 py-2">{children}</button>
  );
};

export default OutlineButton;
