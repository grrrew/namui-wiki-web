import { shareToCopyLink, shareToKaKaoLink } from '@/lib/client/utils'
import { useSession } from '@/provider/session-provider'
import React, { PropsWithChildren, useCallback, useState } from 'react'
import Modal from '@/components/modal'
import Button from '@/components/button'

import { useRouter } from 'next/router'

const ShareModal = ({ children }: PropsWithChildren) => {
  const { data } = useSession()
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [copyModalOpen, setCopyModalOpen] = useState(false)
  const router = useRouter()

  const handleCopyLink = useCallback(async () => {
    if (data?.user?.wikiId) {
      const url = new URL(window.location.origin)
      url.pathname = '/surveys'
      url.searchParams.set('wikiId', data?.user?.wikiId)
      await shareToCopyLink(url.toString())
    }
    setShareModalOpen(false)
    setCopyModalOpen(true)
  }, [data?.user?.wikiId])

  const handleShareKakao = () => {
    if (data?.user?.wikiId) {
      shareToKaKaoLink(`surveys?wikiId=${data?.user?.wikiId}`)
    }
  }

  const isLoggedIn = !!data?.user?.wikiId
  return (
    <>
      <Modal
        open={shareModalOpen}
        onOpenChange={(state) => {
          setShareModalOpen(state)
        }}
        key="selectShareModal"
        trigger={children}
        title={
          isLoggedIn ? '친구에게 내 소개를 부탁하시겠어요?' : '비회원이시군요!'
        }
        description={
          isLoggedIn ? (
            <span>
              링크 공유하기를 통해
              <br />
              친구에게 내 소개를 부탁할 수 있어요!
            </span>
          ) : (
            <span>내 소개를 부탁하려면 로그인을 해야 해요</span>
          )
        }
        footer={{
          divider: false,
          item: isLoggedIn
            ? [
                <Button
                  onClick={handleCopyLink}
                  variant="default"
                  key="copy-link"
                  className="rounded-none"
                >
                  링크복사
                </Button>,
                <Button
                  key="kakao-share"
                  className="rounded-none"
                  onClick={handleShareKakao}
                >
                  카카오 공유
                </Button>,
              ]
            : [
                <Button
                  onClick={() => setShareModalOpen(false)}
                  variant="default"
                  key="copy-link"
                  className="rounded-none"
                >
                  다음에
                </Button>,

                <Button
                  onClick={() => router.push('/')}
                  key="kakao-share"
                  className="rounded-none"
                >
                  로그인
                </Button>,
              ],
        }}
      />
      <Modal
        open={copyModalOpen}
        onOpenChange={setCopyModalOpen}
        key="copyLinkModal"
        title="링크가 복사되었어요"
        footer={{
          item: [
            <Button
              onClick={() => setCopyModalOpen(false)}
              variant="confirm"
              className="border-t-[1px]"
              key="copy-close"
            >
              확인
            </Button>,
          ],
        }}
        trigger={<></>}
      />
    </>
  )
}

export default ShareModal
