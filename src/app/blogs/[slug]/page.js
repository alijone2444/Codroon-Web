import BlogDetailPage from '@/components/blogs/BlogDetailPage';

// Default blog post - all blog detail pages will show this content
const defaultBlogPost = {
  title: 'IT Consulting',
  date: 'January 10, 2025',
  author: 'Codroon',
  heroImage: '/Images/blogs/blog-hero-1.png',
  content: [
    {
      type: 'paragraph',
      text: "IT consulting involves evaluating a company's existing technology infrastructure, identifying inefficiencies, and recommending solutions to enhance productivity, security, and scalability. Whether an organization is looking to migrate to the cloud, automate workflows, improve cybersecurity, or integrate AI-driven solutions, an experienced IT consultant provides strategic guidance, implementation support, and ongoing optimization."
    },
    {
      type: 'paragraph',
      text: "At Codroon, our IT consulting services go beyond just recommendations. We work closely with businesses to design, develop, and implement robust technology strategies that align with their long-term goals. With an expert team of IT specialists, we provide customized solutions that improve performance, reduce costs, and enhance operational efficiency. IT consulting plays a crucial role in helping organizations navigate technological challenges, optimize processes, and implement solutions that drive growth."
    },
    {
      type: 'paragraph',
      text: "In the ever-evolving digital landscape, businesses must adopt innovative technologies to remain competitive, efficient, and secure. IT consulting plays a crucial role in helping organizations navigate technological challenges, optimize processes, and implement solutions that drive growth. At Codroon, we offer expert IT consulting services tailored to the unique needs of businesses across various industries. From IT infrastructure planning and cloud computing to cybersecurity and software development, we help businesses embrace digital transformation while ensuring seamless operations. IT consulting involves evaluating a company's existing technology infrastructure, identifying inefficiencies."
    },
    {
      type: 'quote',
      quote: "We develop long-term IT strategies that align with business, ensuring scalability, agility, and future-readiness.",
      author: 'Olivia Bennett',
      role: 'Top Author'
    },
    {
      type: 'image',
      src: '/Images/blogs/blog-hero-2.png',
      alt: 'IT Consulting Partnership'
    },
    {
      type: 'paragraph',
      text: "Based on the findings from the assessment, our IT consultants develop a customized IT roadmap that aligns with business goals. Whether it's migrating to cloud-based solutions, upgrading IT security, or integrating automation tools, we design a solution that improves efficiency and supports long-term growth."
    },
    {
      type: 'paragraph',
      text: "We implement the recommended solutions, ensuring smooth integration with minimal disruption to business operations. From deploying new software and cloud solutions to securing IT networks."
    }
  ]
};

export default function BlogPostPage({ params }) {
  // Always show the default blog post regardless of slug
  return <BlogDetailPage post={defaultBlogPost} />;
}
