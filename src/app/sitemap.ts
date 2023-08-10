import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://nthieu-portfolio.vercel.app'
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/resume`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
    },
  ]
}