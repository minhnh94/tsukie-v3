import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import dayjs from "dayjs"

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY })
const PAGE_SIZE = 10

export const getPagesFromDB = async (pageSize = null, startCursor = null, tag = null) => {
  let queryArgs = {
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: "ready",
      checkbox: {
        equals: true,
      },
    },
  }

  if (pageSize) {
    queryArgs.page_size = pageSize
  }

  if (startCursor) {
    queryArgs.start_cursor = startCursor
  }

  if (tag) {
    queryArgs.filter = {
      and: [
        queryArgs.filter,
        {
          property: "tags",
          multi_select: {
            contains: tag,
          },
        },
      ],
    }
  }

  const pagesRaw = await notion.databases.query(queryArgs)

  return {
    pages: pagesRaw.results.map((page) => {
      return convertPagePropertiesToConsumable(page.id, page.properties)
    }).sort((a, b) => {
      const dateA = dayjs(a.date, "MMM DD, YYYY")
      const dateB = dayjs(b.date, "MMM DD, YYYY")
      return dateB - dateA
    }),
    hasMore: pagesRaw.has_more,
    nextCursor: pagesRaw.next_cursor,
  }
}

export const getPagesForSidebar = async (pageSize = 3, chronologically = false) => {
  const pagesRaw = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: "ready",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: chronologically ? "date" : "readCount",
        direction: "descending",
      },
    ],
    page_size: pageSize,
  })

  return pagesRaw.results.map((page) => {
    return convertPagePropertiesToConsumable(page.id, page.properties)
  })
}

export const getPagesForFirstIndexPage = async () => {
  const { pages, hasMore, nextCursor } = await getPagesFromDB(PAGE_SIZE)
  return { pages, hasMore, nextCursor }
}

export const getPagesForIndexPage = async (pageNum) => {
  let currentPage = 0
  let startCursor, pages, hasMore, nextCursor
  while (currentPage < pageNum) {
    ({ pages, hasMore, nextCursor } = await getPagesFromDB(PAGE_SIZE, startCursor))
    startCursor = nextCursor
    currentPage++
  }

  return { pages, hasMore, nextCursor }
}

export const getPagesForTag = async (tag, pageNum) => {
  let currentPage = 0
  let startCursor, pages, hasMore, nextCursor
  while (currentPage < pageNum) {
    ({ pages, hasMore, nextCursor } = await getPagesFromDB(PAGE_SIZE, startCursor, tag))
    startCursor = nextCursor
    currentPage++
  }

  return { pages, hasMore, nextCursor }
}

export const getAllPagedIndexPageNums = async () => {
  let pageNums = []
  let startCursor = undefined
  let currentPage = 1

  do {
    let { nextCursor } = await getPagesFromDB(PAGE_SIZE, startCursor)
    startCursor = nextCursor
    pageNums.push(currentPage++)
  } while (startCursor !== null)

  pageNums.shift()
  return pageNums
}

export const getPageNumListForTagPages = async () => {
  let pageNums = []
  let startCursor = undefined
  let currentPage = 1

  do {
    let { nextCursor } = await getPagesFromDB(PAGE_SIZE, startCursor)
    startCursor = nextCursor
    pageNums.push(currentPage++)
  } while (startCursor !== null)

  return pageNums
}

export const getPageIdBySlug = async (slug) => {
  const pagesRaw = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  if (pagesRaw.results.length === 0) {
    return null
  }

  return pagesRaw.results[0].id
}

// Get two articles with the same tag and with the most views, for now
export const getSuggestedArticlesForPage = async (pageProperties) => {
  const { pages } = await getPagesFromDB(null, null, pageProperties.tag)
  pages.sort((page1, page2) => page1.readCount - page2.readCount)
  return pages.slice(0, 2)
}

export const getPagePropertiesById = async (pageId) => {
  const page = await notion.pages.retrieve({
    page_id: pageId,
  })

  return convertPagePropertiesToConsumable(page.id, page.properties)
}

export const getPageContentAsMarkdownById = async (pageId) => {
  const n2m = new NotionToMarkdown({ notionClient: notion })
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const mdResult = n2m.toMarkdownString(mdBlocks)
  return typeof mdResult === 'string' ? mdResult : mdResult.parent
}

const convertPagePropertiesToConsumable = (id, pageProperties) => {
  return {
    id,
    title: pageProperties.name.title[0].plain_text,
    thumbnail: pageProperties.thumbnail.files[0].external.url,
    ready: pageProperties.ready.checkbox,
    tag: pageProperties.tags.multi_select.map((tag) => ({
      name: tag.name,
      color: tag.color,
    }))[0].name,
    slug: pageProperties.slug.formula.string,
    summary: pageProperties.summary.rich_text[0].plain_text,
    date: dayjs(pageProperties.date.date.start).format("MMM DD, YYYY"),
    readCount: pageProperties.readCount.number,
  }
}
