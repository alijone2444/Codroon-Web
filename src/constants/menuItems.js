export const menuItems = [
    
    { name: 'Industries', href: '/industries' },
    {
      name: 'Products',
      dropdown: [
        { label: 'Technologies', href: '/technologies' },
        { label: 'Integrations', href: '/integrations' },
        { label: 'How We Work', href: '/process' },
      ],
    },
    {
      name: 'Solutions',
       href: '/solutions', // 🆕 Main overview page

      dropdown: [
        { label: 'Web Development', href: '/solutions/web-development' },
        { label: 'Mobile App Development', href: '/solutions/mobile-app-development' },
        { label: 'UI/UX Design', href: '/solutions/ui-ux-design' },
        { label: 'Project Management', href: '/solutions/project-management' },
        { label: 'SEO', href: '/solutions/seo' },
        { label: 'SaaS', href: '/solutions/saas' },
        { label: 'AIaaS', href: '/solutions/aiaas' },
        { label: 'Agentic AI', href: '/solutions/agentic-ai' },
        { label: 'Automation', href: '/solutions/automation' },
        { label: 'Game Development', href: '/solutions/game-development' },
        { label: 'Desktop App Development', href: '/solutions/desktop-app-development' },
      ],
    },
    {
      name: 'Resources',
      dropdown: [
        { label: 'Blog', href: '/blogs' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Who We Are', href: '/who-we-are' },
      ],
    },
  ];
  