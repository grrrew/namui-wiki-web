import React, { useContext, useMemo } from 'react'
import Drawer from '../ui/drawer'
import { DetailQsContext } from '@/pages/dashboard'
import useFilter, { Filter } from '@/hooks/use-filter'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { NamuiApi } from '@/lib/namui-api'
import { useIntersectionObserver } from '@/hooks/use-observer'
import { useSession } from '@/provider/session-provider'
import { motion } from 'framer-motion'
import { fadeInProps } from '@/variants'
import CircleTree from '../svgs/circle-tree'
import { relations } from '../badge/relation'
import { periods } from '../badge/period'

export interface DetailResponse {
  data: Data
}

export interface Data {
  questionTitle: string
  answers: Pageable
}

export interface Pageable {
  content: Content[]
  page: number
  size: number
  totalPage: number
  totalCount: number
}

export interface Content {
  senderName: string
  period: string
  relation: string
  answer: string
  reason: string
  createdAt: string
}

const DetailDrawer = () => {
  const { handle, id } = useContext(DetailQsContext)

  return (
    <Drawer
      header={{
        center: <p className="text-body1-bold">상세 보기</p>,
        options: {
          onBackClick() {
            handle('')
          },
          showRight: false,
        },
      }}
      open={!!id}
      onChangeOpen={(state) => {
        if (!state) handle('')
      }}
      trigger={<></>}
    >
      <Content />
    </Drawer>
  )
}

export default DetailDrawer
{
  /* <Filter className={cn(shouldShowHeader && 'top-header')} /> */
}

function Content() {
  const { selectedFilter } = useFilter()
  const { data: user } = useSession()
  const { handle, id } = useContext(DetailQsContext)
  const {
    data: qs,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<
    DetailResponse,
    Error,
    InfiniteData<DetailResponse>,
    [string, string, string, string]
  >({
    initialPageParam: 0,
    getNextPageParam: (page) => {
      return page.data?.answers?.totalPage <= page?.data?.answers?.page
        ? undefined
        : page?.data?.answers?.page + 1
    },
    queryKey: [
      'question-detail',
      id,
      selectedFilter?.type ?? 'period',
      selectedFilter?.value ?? 'ALL',
    ],
    queryFn: ({ pageParam = 0, queryKey, ...rest }) => {
      return NamuiApi.getQuestionDetailById(pageParam as number, queryKey[1], [
        queryKey[2],
        queryKey[3],
      ])
    },
    enabled: !!id,
    select(data) {
      data.pages.forEach((item) => {
        item.data.questionTitle = item.data.questionTitle.replace(
          '{{userName}}',
          user?.user?.name ?? '',
        )
      })
      return data
    },
  })

  const parsedData = useMemo(() => {
    qs?.pages.forEach((item) => {
      item.data.questionTitle = item.data.questionTitle.replace(
        '{{userName}}',
        user?.user?.name ?? '',
      )
    })
    return qs
  }, [qs, user])

  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    hasNextPage,
    fetchNextPage,
  })
  return (
    <div className="flex flex-col divide-y-[12px] divide-line-soft">
      <div className="p-5 flex flex-col space-y-4">
        <div className="text-body3-medium px-2 py-1 bg-gray-gray50 rounded-md w-fit text-text-sub-gray76">
          질문
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: parsedData?.pages[0]?.data?.questionTitle ?? '',
          }}
        ></p>
      </div>
      <div className="flex flex-col">
        <Filter />
        <p className="px-5 py-4 text-body3-medium text-text-sub-gray76">
          <b className="text-brand-main-green400">
            {parsedData?.pages[0]?.data?.answers?.totalCount}명
          </b>
          의 친구가 이유를 적었어요
        </p>
        {parsedData?.pages.map((page) => (
          <div key={page.data.answers.page}>
            {page.data.answers.content.map((cardItem, cardIndex) => {
              const parsedCreatedAt = new Date(cardItem.createdAt)
              const createdAt = `${parsedCreatedAt.getFullYear()}.${parsedCreatedAt.getMonth()}.${parsedCreatedAt.getDate()}`
              return (
                <motion.div
                  key={cardItem.senderName + cardItem.answer}
                  variants={fadeInProps.variants}
                  className="p-4 flex justify-between space-x-4"
                >
                  <div className="aspect-square rounded-full bg-bg-gray1 h-full flex justify-center items-center">
                    <CircleTree />
                  </div>
                  <div className="flex flex-col grow space-y-4">
                    <div className="flex flex-col space-y-1">
                      <h3 className="text-body1-bold">
                        {cardItem.senderName}님
                      </h3>
                      <p className="text-body3-medium text-text-sub-gray76">
                        {[
                          periods[cardItem.period],
                          relations[cardItem.relation],
                          createdAt,
                        ].join('·')}
                      </p>
                    </div>
                    {/* <div>{cardItem.answer}</div> 뱃지들어가야함 */}
                    <p className="text-body1-medium text-text-main-black11">
                      {cardItem.answer}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        ))}
        <div ref={ref} className="w-2 h-1" />
      </div>
    </div>
  )
}