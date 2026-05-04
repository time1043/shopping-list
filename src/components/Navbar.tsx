import type { MenuItem, MenuItemOptions } from 'primereact/menuitem';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

import { CartItemsCountAtom } from '@/states/cartAtom';
import { searchTextAtom } from '@/states/searchAtom';
import { visibleAtom } from '@/states/visibleAtom';

import ThemeToggle from './ThemeToggle';

interface CustomMenuItem extends MenuItem {
  badge?: number;
  shortcut?: string;
}

// https://primereact.org/menubar/#template
// https://primereact.org/menubar/#command
export default function Navbar() {
  const [searchText, setSearchText] = useAtom(searchTextAtom);

  // const [visible, setVisible] = useState(false);
  const setVisible = useSetAtom(visibleAtom);
  const cartItemsCount = useAtomValue(CartItemsCountAtom);

  const itemRenderer = (item: MenuItem, _options: MenuItemOptions) => {
    const custom = item as CustomMenuItem;
    return (
      <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {custom.badge > 0 && <Badge className="ml-auto" value={custom.badge} />}
        {custom.shortcut && (
          <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
            {custom.shortcut}
          </span>
        )}
      </a>
    );
  };
  // https://primereact.org/icons/#list
  const items: MenuItem[] = [
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      badge: cartItemsCount,
      template: itemRenderer,
      command: () => setVisible(true),
    } as CustomMenuItem,
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    />
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ThemeToggle />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card navbar">
      <Menubar model={items} {...{ start, end }} />
    </div>
  );
}
