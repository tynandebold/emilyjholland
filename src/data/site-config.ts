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
  subtitleLine1?: string;
  subtitleLine2?: string;
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

const navigationLinks = [
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
  },
  {
    text: 'Consulting',
    href: '/consulting'
  },
  {
    text: 'CV',
    href: '/emily-j-holland-cv.pdf'
  },
  {
    text: 'Contact',
    href: '/contact'
  }
];

const siteConfig: SiteConfig = {
  title: 'Emily J. Holland',
  subtitle: 'Emily J. Holland',
  description:
    'Assistant Professor in the Russia Maritime Studies Institute at the United States Naval War College and Deputy Political Advisor for Critical Undersea Infrastructure at NATO.',
  image: {
    src: '/emily.jpg',
    alt: 'Emily J. Holland'
  },
  headerNavLinks: navigationLinks,
  footerNavLinks: navigationLinks,
  socialLinks: [
    {
      text: 'X/Twitter',
      href: 'https://twitter.com/emilyjholland'
    },
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emily-j-holland/'
    }
  ],
  hero: {
    title: 'Emily J. Holland',
    subtitleLine1: 'Strategic Advisor, Holland Advisory',
    subtitleLine2:
      'Research Director & Assistant Professor, U.S. Naval War College',
    text: "I am an Assistant Professor in the Russia Maritime Studies Institute at the United States Naval War College. I am also currently the Deputy Political Advisor for Critical Undersea Infrastructure at NATO Maritime Command (MARCOM). I received my Ph.D. in political science from Columbia University in May 2017 and was a post-doctoral fellow at Harvard's Davis Center for Russian and Eurasian Studies during the 2017-2018 academic year. Along with co-authors Josh Busby (UT Austin) and Morgan Bazilian (Colorado School of Mines), I am the recipient of a <a href='https://www.defense.gov/News/Releases/Release/Article/3323125/department-of-defense-awards-2-million-for-social-science-research-under-the-de/' target='_blank'>2023 MINERVA DECUR award to investigate Critical Minerals, Battery Technology, and Reducing Dependence on Hostile Suppliers in Clean Energy Supply Chains.</a><br/><br/>I research energy politics, Russian foreign policy, US-Russia relations, nuclear geopolitics, populism and European Foreign Policy. My work has appeared in <i>Foreign Affairs</i>, <i>Foreign Policy</i>, <i>The Washington Post</i>, <i>Newsweek</i>, <i>War on the Rocks</i>, <i>Lawfare</i>, the <i>Journal of International Affairs</i>, <i>The Christian Science Monitor</i>, <i>Inkstick Media</i>, <i>Defense Post</i>, <i>Duck of Minerva</i>, <i>The London School of Economics United States Politics Blog</i>, the <i>Georgetown Journal of International Affairs</i> and others. Media appearances include CNN, Government Matters, The Energy Show, and the WarCast. My scholarship has also been featured in <i>The Washington Post</i> and <i>Vox</i>. I blog at Commenting Together.<br/><br/>My book project, <i>Poisoned By Gas</i>, explains variation in energy security policy across Europe. Based on interviews, archival work and statistical evidence, I show why some states fail to reduce energy dependence on Russia even when they have the opportunity to do so. Using an original dataset of bi-lateral natural gas contracts, I create a new index of energy dependence that facilitates the comparison of energy security both within case across time and cross-nationally. Using new data, I offer an novel conception of measuring and evaluating energy security on a dominant supplier.<br/><br/>I have conducted fieldwork in Russia, Ukraine, Germany, Hungary, Lithuania and Poland, interviewing government officials, corporate actors, policymakers and local actors. I have also held research appointments at NYU's Jordan Center for the Advanced Study  of Russia,  the European Council on Foreign Relations (Berlin) and the German Institute for Economic Research (DIW).",
    image: {
      src: '/emily.jpg',
      alt: 'Emily J. Holland'
    },
    actions: [
      {
        text: 'Get in touch',
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
