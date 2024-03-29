import { ReactNode, useEffect, useState } from 'react'
import BaseLayout from '@/layout/base-layout'
import withAuth from '@/layout/HOC/with-auth'
import Button from '@/components/button'
import Link from 'next/link'
import TreeCard from '@/components/compositions/tree-card'
import { useSession } from '@/provider/session-provider'
import { useInfiniteQuery } from '@tanstack/react-query'
import { NamuiApi } from '@/lib/namui-api'
import { GetSurveyResponse } from '@/model/survey.entity'
import { useIntersectionObserver } from '@/hooks/use-observer'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { fadeInProps } from '@/variants'
import ShareModal from '@/components/share-modal'
const Pages = () => {
  const { data } = useSession()
  const {
    data: surveys,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<GetSurveyResponse>({
    initialPageParam: 0,
    getNextPageParam: (page) => {
      return page.data.totalPage <= page.data.page
        ? undefined
        : page.data.page + 1
    },
    queryKey: ['survey'],
    queryFn: ({ pageParam = 0, ...rest }) => {
      return NamuiApi.getSurveys(pageParam as number)
    },
  })

  const { ref } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    hasNextPage,
    fetchNextPage,
  })

  const [showScrollButton, setShowScrollButton] = useState(false)
  const [flippedCardIndex, setFlippedCardIndex] = useState(-1)
  useEffect(() => {
    function handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrolledToBottom = scrollTop + windowHeight >= documentHeight
      setShowScrollButton(scrolledToBottom)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleCardClick = (index: number) => {
    if (flippedCardIndex === index) {
      setFlippedCardIndex(-1)
    } else {
      setFlippedCardIndex(index)
    }
  }

  return (
    <BaseLayout
      className="bg-gray-gray50"
      header={{
        className: 'bg-gray-gray50',
        leftIcon: null,
        rightIcon: false,
        center: (
          <p className="text-body1-bold text-text-main-black11">내 정원</p>
        ),
      }}
    >
      <div className="flex px-[30px] pt-8 pb-6 space-x-6 justify-between items-center">
        <div className="flex flex-col space-y-2 flex-1">
          <p className="text-body1-medium text-text-sub-gray4f">
            내 정원에 심어진 나무는
          </p>
          <h3 className="text-mainTitle1-bold text-black">
            총 {data?.user?.totalSurveyCnt ?? 0}그루
          </h3>
        </div>
        <Link href="/dashboard">
          <button className="!w-fit px-4 py-3 rounded-md text-body3-medium  text-main-green-green800 bg-main-green-green50 ">내 결과 보기</button>
        </Link>
      </div>
      <section className="bg-white">
        <div className=" w-full px-[30px] py-6">
          <p className=" text-subTitle2-bold text-text-sub-gray4f text-left">
            받은 친구
          </p>
        </div>
        <div className="w-full justify-center items-center flex flex-col space-y-2 pb-10">
          <AnimatePresence mode="wait">
            {!isLoading && surveys ? (
              <motion.div
                {...fadeInProps}
                transition={{ staggerChildren: 0.03 }}
                className="grid grid-cols-3 gap-2 "
              >
                {surveys?.pages.map((page, pageNo) =>
                  pageNo === 0 && page.data.content.length < 21 ? (
                    [
                      ...page.data.content,
                      ...Array.from(
                        { length: 21 - page.data.content.length },
                        (v) => null,
                      ),
                    ].map((item, index) =>
                      item ? (
                        <TreeCard
                          senderName={item.senderName}
                          key={`${item.surveyId}-${(pageNo + 1) * (index + 1)}`}
                          id={item.surveyId}
                          period={item.period}
                          relation={item.relation}
                          isFlipped={index === flippedCardIndex}
                          onClick={() => handleCardClick(index)}
                        />
                      ) : (
                        <motion.div
                          variants={fadeInProps.variants}
                          key={`empty-${(pageNo + 1) * (index + 1)}`}
                        >
                          <div className="flex justify-center items-center rounded w-[104px] h-[110px] bg-gray-gray50 border-dashed border ">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.36523 17.5469C8.55024 19.222 9.87772 22.8973 13.7077 24.1978C17.5376 25.4983 20.8343 24.6076 22.0039 23.9997"
                                stroke="#D9D9D9"
                                strokeLinecap="round"
                              />
                              <circle
                                cx="17"
                                cy="17"
                                r="16.5"
                                stroke="#D9D9D9"
                              />
                              <circle
                                cx="14.8053"
                                cy="12.6139"
                                r="1.64516"
                                fill="#D9D9D9"
                              />
                              <circle
                                cx="21.3893"
                                cy="14.8053"
                                r="1.64516"
                                fill="#D9D9D9"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      ),
                    )
                  ) : (
                    <motion.div
                      key={`empty-${pageNo + 1}-container`}
                      {...fadeInProps}
                      transition={{ staggerChildren: 0.08 }}
                      className="grid grid-cols-3 gap-2 "
                    >
                      {page.data.content.map((item, index) => (
                        <TreeCard
                          senderName={item.senderName}
                          key={`${item.surveyId}-${(pageNo + 1) * (index + 1)}`}
                          id={item.surveyId}
                          period={item.period}
                          relation={item.relation}
                          isFlipped={index === flippedCardIndex}
                          onClick={() => handleCardClick(index)}
                        />
                      ))}
                    </motion.div>
                  ),
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`empty-container`}
                {...fadeInProps}
                className="grid grid-cols-3 gap-2 "
              >
                {Array.from({ length: 40 }, (_, v) => v + 1).map((i) => (
                  <motion.div
                    variants={fadeInProps.variants}
                    key={`loading-${i}`}
                    className="skeleton"
                  >
                    <div className="flex justify-center items-center rounded w-[104px] h-[110px]"></div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={ref} className="h-2 w-2" />
        </div>

        {showScrollButton && (
          <button
            className="fixed z-[20] bottom-4 bg-white shadow-sm right-4 p-3 border rounded"
            onClick={scrollToTop}
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.38462L7 1M7 1L13 6.38462M7 1V15"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <div className="sticky bottom-0 py-2 px-5 pt-5 bg-gradient-to-t from-white from-85% to-transparent to-100%">
          <ShareModal>
            <Button>친구에게 소개서 부탁하기</Button>
          </ShareModal>
        </div>
      </section>
    </BaseLayout>
  )
}
const Garden = withAuth(Pages)
Garden.getLayout = (page: ReactNode) => page

export default Garden
