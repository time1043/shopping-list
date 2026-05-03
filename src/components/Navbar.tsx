import type { MenuItem, MenuItemOptions } from 'primereact/menuitem';

import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';

import ThemeToggle from './ThemeToggle';

interface CustomMenuItem extends MenuItem {
  badge?: number;
  shortcut?: string;
}

// https://primereact.org/menubar/#template
export default function Navbar() {
  const itemRenderer = (item: MenuItem, _options: MenuItemOptions) => {
    const custom = item as CustomMenuItem;
    return (
      <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {custom.badge && <Badge className="ml-auto" value={custom.badge} />}
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
      badge: 3,
      template: itemRenderer,
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
      <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
      <ThemeToggle />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} {...{ start, end }} />
    </div>
  );
}
