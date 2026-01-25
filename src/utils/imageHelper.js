/**
 * Helper function to get image path for Next.js Image component
 * Returns the path as-is since Next.js handles public folder paths correctly
 * With unoptimized: true in next.config, special characters should work
 */
export function encodeImagePath(path) {
  if (!path) return "/Images/laptop.jpg";
  
  // Ensure path starts with / and return as-is
  // Next.js with unoptimized: true should handle special characters correctly
  return path.startsWith('/') ? path : '/' + path;
}
