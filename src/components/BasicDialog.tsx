import type { PropsWithChildren } from 'react';

import { useAtom } from 'jotai';
import { Dialog } from 'primereact/dialog';

import { visibleAtom } from '@/states/visibleAtom';

type BasicDialogProps = PropsWithChildren & {
  // visible: boolean;
  // setVisible: (visible: boolean) => void;
  header?: string;
};

// https://primereact.org/dialog/#basic
// https://primereact.org/dialog/#responsive
export default function BasicDialog({ header = '', children }: BasicDialogProps) {
  const [visible, setVisible] = useAtom(visibleAtom);

  function hideDialog() {
    if (!visible) return;
    setVisible(false);
  }

  return (
    <Dialog
      {...{ header, visible }}
      style={{ width: '50vw' }}
      breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      onHide={hideDialog}
    >
      {children}
    </Dialog>
  );
}
