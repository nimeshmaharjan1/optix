import * as icons from 'lucide-react';

type navlistKey = 'procumnet';
export type navListType = {
  title: string;
  subTitle: string;
  list: {
    title: string;
    add?: string;
    path: string;
    icon: keyof typeof icons;
  }[];
};
export const navList: Record<navlistKey, navListType[]> = {
  procumnet: [
    {
      title: 'General',
      subTitle: 'This is Procument nav',
      list: [
        {
          title: 'Overview',
          path: '/',
          icon: 'BarChart',
        },
        {
          title: 'Material requests',
          path: '/material-request',
          icon: 'ClipboardList',
        },
        {
          title: 'Quotation requests',
          path: '/quotetion=request',
          icon: 'ArrowRightCircle',
        },
        {
          title: 'Purchased orders',
          path: '/purchase-order',
          icon: 'Archive',
        },
        {
          title: 'Delivered',
          path: '/delivery',
          icon: 'Box',
        },
      ],
    },
    {
      title: 'Vendors',
      subTitle: '',
      list: [
        {
          title: 'Overview',
          add: '/add-overview',
          path: '/vendors/overview',
          icon: 'Boxes',
        },
      ],
    },
  ],
};
