import { getPagesForSidebar } from "@/lib/contentFetcher"

export async function GET(request) {
  // get parameters from query string
  const chronologically = request.nextUrl.searchParams.get('chronologically') === 'true'
  // return value fetched from getPagesForSidebar
  const suggestedPage = await getPagesForSidebar(3, chronologically)
  return Response.json(suggestedPage, {
    headers: {
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
