import { getPagesForSidebar } from "@/lib/contentFetcher"

export async function GET() {
  // return value fetched from getPagesForSidebar
  const suggestedPage = await getPagesForSidebar()
  return Response.json(suggestedPage)
}
