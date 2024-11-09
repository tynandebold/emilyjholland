export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
  researchPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Emily J. Holland',
  subtitle: 'Emily J. Holland',
  description:
    'Assistant Professor in the Russia Maritime Studies Institute at the United States Naval War College and Deputy Political Advisor for Critical Undersea Infrastructure at NATO.',
  image: {
    src: '/emily.jpg',
    alt: 'Emily J. Holland'
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'Research',
      href: '/research'
    },
    {
      text: 'Media',
      href: '/media'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    }
  ],
  socialLinks: [
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/emilyjholland'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emily-holland-00842b4/'
    }
  ],
  hero: {
    title: 'Emily J. Holland',
    subtitle: 'Deputy POLAD for CUI at NATO',
    text: "I am an Assistant Professor in the Russia Maritime Studies Institute at the United States Naval War College. I am also currently the Deputy Political Advisor for Critical Undersea Infrastructure at NATO Maritime Command (MARCOM). I received my Ph.D. in political science from Columbia University in May 2017 and was a post-doctoral fellow at Harvard's Davis Center for Russian and Eurasian Studies during the 2017-2018 academic year. Along with co-authors Josh Busby (UT Austin) and Morgan Bazilian (Colorado School of Mines), I am the recipient of a 2023 MINERVA DECUR award to investigate Critical Minerals, Battery Technology, and Reducing Dependence on Hostile Suppliers in Clean Energy Supply Chains.<br/><br/>I research energy politics, Russian foreign policy, US-Russia relations, nuclear geopolitics, populism and European Foreign Policy. My work has appeared in Foreign Affairs, Foreign Policy, The Washington Post, Newsweek, War on the Rocks, Lawfare, the Journal of International Affairs, The Christian Science Monitor, Inkstick Media, Defense Post, Duck of Minerva, The London School of Economics United States Politics Media, the Georgetown Journal of International Affairs and others. Media appearances include CNN, Government Matters, The Energy Show, and the WarCast. My scholarship has also been featured in The Washington Post and Vox. I media at Commenting Together.",
    image: {
      src: '/emily.jpg',
      alt: 'Emily J. Holland'
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  subscribe: {
    title: 'Subscribe to Dante Newsletter',
    text: 'One update per week. All the latest posts directly in your inbox.',
    formUrl: '#'
  },
  postsPerPage: 8,
  researchPerPage: 8
};

export default siteConfig;
