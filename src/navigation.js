import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
      
    },
    {
      text: 'Curriculium Vitea',
      href: getPermalink('/cv'),
      
    }
  ]
};

export const footerData = {
  links: [
    {
      title: 'Legal',
      links: [
        { text: 'Impressum', href: '/impressum' },
        { text: 'Datenschutzerklärung', href: '/dse' },
        { text: 'Kontakt', href: '/contact' },
      ],
    },
    {
      title: 'Kontakt',
      links: [
        { text: 'Impressum', href: '/impressum' },
        { text: 'Datenschutzerklärung', href: '/dse' },
        { text: 'Kontakt', href: '/contact' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Xing', icon: 'tabler:brand-xing', href: 'https://xing.com/pfahler.georg' },
  ],
};
