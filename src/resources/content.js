import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ludovic",
  lastName: "Domingues",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Blockchain Engineer",
  avatar: "/images/avatar.jpg",
  email: "ludovic.domingues96@gmail.com",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Portuguese", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Krayt78",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ludovicdomingues/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Krayt78",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building Polkadot, One Pallet at a Time</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Ludo, a blockchain engineer currently working in the Polkadot ecosystem.
      I currently working as an educator at the Polkadot Blockchain Academy.
      I am also a core developer of Polkadot.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/ludovicdomingues/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Ex Game Developer, now a blockchain engineer currently working in the Polkadot ecosystem.
        I love to build things and learn new things.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Polkadot Blockchain Academy",
        timeframe: "Jun 2025 - Present",
        role: "PBA-X Technical Program Specialist",
        achievements: [
          <>
            Managed instructor schedules and guest speaker coordination, ensuring timely content delivery.
          </>,
          <>
            Developed student-facing resources like guides and reading lists for self-paced learning.
          </>,
          <>
            Monitored LMS engagement metrics and provided insights to enhance course delivery.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Polkadot",
        timeframe: "Jan 2025 - Present",
        role: "Blockchain Developer",
        achievements: [
          <>Contributed to the Polkadot-SDK using Substrate and Rust.</>,
          <>Worked on backend operations for decentralized systems.</>,
        ],
        images: [],
      },
      {
        company: "LogX Games Studio",
        timeframe: "Mar 2024 - Dec 2024",
        role: "Lead Unity Developer",
        achievements: [
          <>Developed backend systems and gameplay logic using Unity and C#.</>,
          <>Implemented networking and multiplayer functionality.</>,
        ],
        images: [],
      },
      {
        company: "The Sandbox",
        timeframe: "Dec 2023 - Feb 2024",
        role: "Blockchain Developer",
        achievements: [
          <>Built backend and frontend for The Sandbox DAO using JavaScript and Solidity.</>,
          <>Integrated database and updated smart contracts.</>,
        ],
        images: [],
      },
      {
        company: "GiveUs",
        timeframe: "Dec 2022 - Dec 2023",
        role: "Blockchain Developer",
        achievements: [
          <>Developed DAO and donation smart contracts audited by Hacken.</>,
          <>Built dApp using Solidity, React, and Node.js.</>,
        ],
        images: [],
      },
      {
        company: "Alyra, l'école blockchain",
        timeframe: "Oct 2022 - Dec 2023",
        role: "Solidity Instructor",
        achievements: [
          <>Supported students via Discord and graded Solidity assignments.</>,
          <>Delivered lectures and participated in the certification jury.</>,
        ],
        images: [],
      },
      {
        company: "Cometh",
        timeframe: "Oct 2023",
        role: "Blockchain Developer",
        achievements: [
          <>Developed Unity SDK for blockchain account abstraction using C#.</>,
          <>Built a Node.js backend with REST APIs using TypeScript.</>,
        ],
        images: [],
      },
      {
        company: "MetaQuantum",
        timeframe: "Feb 2023 - Jun 2023",
        role: "Blockchain Developer",
        achievements: [
          <>Developed a blockchain metaverse solution in Unity using C# and Solidity.</>,
        ],
        images: [],
      },
      {
        company: "Horme",
        timeframe: "Mar 2023 - May 2023",
        role: "Back-end Developer",
        achievements: [
          <>Created custom APIs and backend infrastructure using Node.js and MongoDB.</>,
          <>Integrated frontend components for fullstack delivery.</>,
        ],
        images: [],
      },
      {
        company: "Lootingg",
        timeframe: "Jul 2022 - Jan 2023",
        role: "Blockchain Developer",
        achievements: [
          <>Developed smart contracts (Marketplace, NFT, ICO) using Solidity.</>,
          <>Built backend systems using Node.js with Web3 integration.</>,
        ],
        images: [],
      },
      {
        company: "Mirage Interactive",
        timeframe: "Sep 2022 - Dec 2022",
        role: "Blockchain Developer",
        achievements: [
          <>Designed SDK/platform for Ankr’s gaming solution with blockchain integration.</>,
          <>Created APIs, microservices, and advanced Solidity smart contracts.</>,
        ],
        images: [],
      },
      {
        company: "Ankr",
        timeframe: "Jan 2022 - Dec 2022",
        role: "Blockchain Developer",
        achievements: [
          <>Developed a game SDK for Unity and integrated blockchain with C#.</>,
          <>Created ERC20, ERC721, and ERC1155 smart contracts in Solidity.</>,
        ],
        images: [],
      },
      {
        company: "Meta Apes",
        timeframe: "Jan 2022 - Aug 2022",
        role: "Blockchain Developer",
        achievements: [
          <>Integrated Ankr's Unity SDK using C# in Unity.</>,
          <>Built backend systems using JavaScript and Node.js.</>,
        ],
        images: [],
      },
      {
        company: "MyMetaverse",
        timeframe: "Nov 2020 - May 2022",
        role: "Game Designer & Developer",
        achievements: [
          <>Led development of MMORPG MyMeta on Unity3D.</>,
          <>Produced and designed blockchain-integrated Minecraft server.</>,
        ],
        images: [],
      },
      {
        company: "Studio XP",
        timeframe: "Sep 2021 - Jan 2022",
        role: "Unity & Programming Teacher",
        achievements: [
          <>Taught C# and Unity game programming to students during weekends.</>,
          <>Created engaging educational activities to teach game dev fundamentals.</>,
        ],
        images: [],
      },
      {
        company: "EDF",
        timeframe: "Sep 2019 - Sep 2021",
        role: "Unity VR Developer Intern",
        achievements: [
          <>Built UCareVR and Discover EDF training and recruitment VR experiences.</>,
          <>Designed immersive simulations in Unity for serious gaming scenarios.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polkadot Blockchain Academy",
        description: <>Blockchain Development Curriculum - 2024</>,
      },
      {
        name: "Alyra, l'école blockchain",
        description: <>Blockchain - Solidity Developper - 2022</>,
      },
      {
        name: "ESIEE-IT",
        description: <>Masters in Computer Science - 2019-2021</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Rust",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Solidity",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "JavaScript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "TypeScript",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Node.js",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "React",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Rust",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Substrate",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
