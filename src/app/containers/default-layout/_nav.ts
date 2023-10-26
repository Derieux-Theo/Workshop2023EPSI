import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Accueil',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Compte'
  },
  {
    name: 'Classement',
    url: '/theme/colors',
    iconComponent: { name: 'cil-star' }
  },
  {
    name: 'Compte',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-chart-pie' }
  }
];
