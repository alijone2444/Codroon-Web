import BlogDetailPage from '@/components/blogs/BlogDetailPage';
import blogsData from '@/constants/blogs.json';

// Helper function to add quote sections deterministically to content
// Uses consistent selection based on content position (not random) to ensure same result on every load
function addQuoteSections(content) {
  const newContent = [];
  const paragraphs = content
    .map((item, index) => ({ item, index, type: item.type }))
    .filter(({ type }) => type === 'paragraph');

  // Find the indices of the first 3 paragraphs (to exclude them from quote selection)
  const firstThreeParagraphIndices = paragraphs.slice(0, 3).map(({ index }) => index);

  // Find substantial paragraphs (at least 100 chars and not ending with colon)
  // EXCLUDE the first 3 paragraphs - quotes should only come from later content
  const substantialParagraphs = paragraphs
    .filter(({ item, index }) =>
      item.text &&
      item.text.length > 100 &&
      !item.text.endsWith(':') &&
      !firstThreeParagraphIndices.includes(index) // Skip first 3 paragraphs
    );

  // Deterministically select 1-2 paragraphs to convert to quotes from remaining paragraphs
  const selectedIndices = new Set();

  if (substantialParagraphs.length > 0) {
    // Pick the first available substantial paragraph (after skipping first 3)
    const firstQuotePosition = Math.floor(substantialParagraphs.length * 0.33);
    if (firstQuotePosition < substantialParagraphs.length) {
      selectedIndices.add(substantialParagraphs[firstQuotePosition].index);
    }

    // If there are enough paragraphs, pick a second quote at 66% position
    if (substantialParagraphs.length >= 4) {
      const secondQuotePosition = Math.floor(substantialParagraphs.length * 0.66);
      if (secondQuotePosition < substantialParagraphs.length && secondQuotePosition !== firstQuotePosition) {
        selectedIndices.add(substantialParagraphs[secondQuotePosition].index);
      }
    }
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
