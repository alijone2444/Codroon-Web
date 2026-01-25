import BlogDetailPage from '@/components/blogs/BlogDetailPage';
import blogsData from '@/constants/blogs.json';

// Helper function to add quote sections randomly to content
function addQuoteSections(content) {
  const newContent = [];
  const paragraphs = content
    .map((item, index) => ({ item, index, type: item.type }))
    .filter(({ type }) => type === 'paragraph');
  
  // Select 1-2 paragraphs to convert to quotes (prefer longer, meaningful ones)
  const numQuotes = Math.min(Math.floor(Math.random() * 2) + 1, Math.max(1, Math.floor(paragraphs.length / 3)));
  const selectedIndices = new Set();
  
  // Prefer paragraphs that are substantial (at least 100 chars) and not headings
  const substantialParagraphs = paragraphs
    .filter(({ item }) => item.text && item.text.length > 100 && !item.text.endsWith(':'))
    .map(({ index }) => index);
  
  const candidates = substantialParagraphs.length > 0 ? substantialParagraphs : paragraphs.map(({ index }) => index);
  
  while (selectedIndices.size < numQuotes && selectedIndices.size < candidates.length) {
    const randomIndex = candidates[Math.floor(Math.random() * candidates.length)];
    selectedIndices.add(randomIndex);
  }
  
  content.forEach((item, index) => {
    if (item.type === 'paragraph' && selectedIndices.has(index)) {
      // Convert paragraph to quote - use first sentence or first 120-180 chars
      const text = item.text;
      let quoteText = text;
      
      // Try to find a good sentence break
      const sentenceEnd = text.match(/[.!?]\s/);
      if (sentenceEnd && sentenceEnd.index && sentenceEnd.index < 200) {
        quoteText = text.substring(0, sentenceEnd.index + 1);
      } else if (text.length > 180) {
        // Find last space before 180 chars
        const cutPoint = text.lastIndexOf(' ', 180);
        quoteText = text.substring(0, cutPoint > 120 ? cutPoint : 180) + '...';
      }
      
      newContent.push({
        type: 'quote',
        quote: quoteText,
        author: 'By Codroon',
        role: 'Top Author'
      });
    } else {
      newContent.push(item);
    }
  });
  
  return newContent;
}

export default async function BlogPostPage({ params }) {
  // In Next.js 16+, params is async and needs to be awaited
  const { slug } = await params;
  
  // Find blog by slug
  const blog = blogsData.find(b => b.slug === slug);
  
  if (!blog) {
    // Fallback to first blog if not found
    const fallbackBlog = blogsData[0];
    const contentWithQuotes = addQuoteSections(fallbackBlog.content);
    return <BlogDetailPage post={{ ...fallbackBlog, content: contentWithQuotes }} />;
  }
  
  // Add quote sections to content
  const contentWithQuotes = addQuoteSections(blog.content);
  
  return <BlogDetailPage post={{ ...blog, content: contentWithQuotes }} />;
}
