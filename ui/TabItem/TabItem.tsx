import { MaterialSymbol } from "react-material-symbols";

interface TabItemProps {
  children: React.ReactNode;
  icon?: string;
}

const TabItem = ({ icon, children }: TabItemProps) => {
  return (
    <div className="flex gap-2 px-3.5 py-3.5 text-gray-400 border-b-2 border-white group-rdx-state-active:border-b-2 group-rdx-state-active:border-violet-600 group-rdx-state-active:text-violet-600">
      <MaterialSymbol icon={icon} size={20} />
      {children}
    </div>
  );
};

export default TabItem;
