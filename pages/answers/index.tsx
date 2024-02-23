import { ReactNode } from 'react'

import withAuth from '@/layout/HOC/with-auth'
import FormLayout from '@/layout/form-layout'
import AnswerDetail from '@/components/compositions/answers/answer-detail'
const Pages = () => {
  return (
    <FormLayout
      header={{
        leftIcon: (
          <svg
            className="w-5 h-5"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.6187 23.6187C18.277 23.9604 17.723 23.9604 17.3813 23.6187L8.38128 14.6187C8.21719 14.4546 8.125 14.2321 8.125 14C8.125 13.7679 8.21719 13.5454 8.38128 13.3813L17.3813 4.38128C17.723 4.03957 18.277 4.03957 18.6187 4.38128C18.9604 4.72299 18.9604 5.27701 18.6187 5.61872L10.2374 14L18.6187 22.3813C18.9604 22.723 18.9604 23.277 18.6187 23.6187Z"
              fill="#111111"
            />
          </svg>
        ),
        rightIcon: <></>,
        center: (
          <p className="text-body1-bold text-text-main-black11">상세보기</p>
        ),
      }}
      content={
        <div className="w-full flex text flex-col space-y-2">
          <section>
            <div className="py-5 flex justify-between space-x-4">
              <div className="aspect-square rounded-full bg-bg-gray1 h-full flex justify-center items-center">
                <svg
                  width="26"
                  height="34"
                  viewBox="0 0 26 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2392 0.551032C11.7053 1.16706 10.8143 7.58402 10.6855 10.7155C10.6253 11.7165 9.83575 11.8706 6.28212 14.2577C3.43922 16.1674 4.84006 18.5442 5.89585 19.4939C3.86152 20.0073 -0.0526207 21.7424 0.565402 24.5762C1.18343 27.4099 4.06753 27.913 5.43233 27.8103C5.32932 27.9643 5.55593 28.8113 7.2864 30.9674C9.01686 33.1235 12.0246 31.8658 13.3121 30.9674C19.1833 36.4501 20.8571 32.6359 20.9602 30.0434C22.222 30.5824 24.9155 30.721 25.5953 26.9633C26.2751 23.2055 22.0159 18.9806 19.8014 17.3378C25.7498 18.8779 21.5009 12.7176 19.3378 10.3305C17.1748 7.94337 17.4065 -0.219003 14.2392 0.551032Z"
                    fill="#00BC68"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1826 0.939166C14.9204 0.80448 14.6197 0.764031 14.2614 0.851397C13.694 0.989753 13.1977 1.46 12.7696 2.17622C12.3434 2.88946 11.9991 3.82322 11.7265 4.84351C11.1814 6.88308 10.9306 9.23647 10.8673 10.7806L10.8671 10.7835C10.8508 11.0547 10.7838 11.2792 10.6278 11.4973C10.4763 11.7093 10.2464 11.9072 9.92262 12.1384C9.61872 12.3553 9.22016 12.6097 8.70634 12.9376C8.67119 12.96 8.6355 12.9828 8.59926 13.0059C8.03184 13.3682 7.32614 13.8204 6.45011 14.4106C5.76492 14.8723 5.34517 15.3555 5.11047 15.8285C4.87624 16.3005 4.82206 16.7707 4.88107 17.2148C4.99997 18.1097 5.58017 18.9031 6.08549 19.359C6.1273 19.3967 6.14493 19.4544 6.13138 19.509C6.11782 19.5636 6.07528 19.6064 6.02069 19.6202C5.02819 19.8714 3.57929 20.4217 2.45859 21.2506C1.33521 22.0815 0.580553 23.1597 0.866652 24.4755C1.16022 25.8256 1.98847 26.6175 2.91124 27.0638C3.83955 27.5127 4.86099 27.6095 5.51385 27.5602C5.57204 27.5558 5.62765 27.585 5.6571 27.6353C5.6846 27.6824 5.68481 27.7402 5.65839 27.7871C5.65794 27.7902 5.65739 27.7956 5.65734 27.804C5.65717 27.8289 5.66153 27.8691 5.67627 27.9281C5.70572 28.0459 5.77197 28.2202 5.89744 28.4624C6.14797 28.9459 6.62458 29.6811 7.47608 30.7452C8.28712 31.7588 9.39588 31.9752 10.4761 31.8243C11.5615 31.6728 12.5998 31.1509 13.2219 30.7155C13.2811 30.6741 13.3611 30.6798 13.4138 30.7292C14.8565 32.0804 16.0305 32.8482 16.9767 33.2078C17.9198 33.5662 18.6269 33.5162 19.1545 33.2472C19.6863 32.9761 20.0639 32.4684 20.3157 31.8575C20.5672 31.2473 20.6872 30.548 20.7121 29.9189C20.7141 29.8688 20.7407 29.8228 20.7832 29.7959C20.8256 29.7691 20.8786 29.7649 20.9248 29.7847C21.5231 30.0411 22.4563 30.1988 23.3127 29.854C24.1573 29.514 24.9644 28.6698 25.2933 26.846C25.6178 25.0471 24.7646 23.1137 23.5303 21.4081C22.2998 19.7077 20.7129 18.2649 19.6288 17.4584C19.5702 17.4148 19.5507 17.3358 19.5823 17.27C19.6138 17.2042 19.6876 17.1699 19.7583 17.1883C20.4847 17.3769 21.0448 17.4446 21.4662 17.4204C21.8876 17.3962 22.1563 17.2812 22.3206 17.1189C22.4835 16.958 22.565 16.7295 22.5682 16.4317C22.5713 16.132 22.4945 15.7738 22.3521 15.3749C21.7805 13.7729 20.2135 11.6737 19.1488 10.4952C18.5899 9.87654 18.1958 8.89825 17.8675 7.81811C17.6631 7.14549 17.48 6.41759 17.2991 5.69845C17.1894 5.26258 17.0806 4.82994 16.9683 4.41478C16.6676 3.30282 16.3412 2.31157 15.9042 1.64646C15.6868 1.31559 15.4486 1.07578 15.1826 0.939166ZM18.1596 7.72938C18.4871 8.80702 18.8658 9.72662 19.3753 10.2906C20.4474 11.4773 22.0474 13.6126 22.6396 15.2723C22.7882 15.6888 22.8771 16.0852 22.8734 16.435C22.8697 16.7866 22.7718 17.1023 22.5352 17.336C22.3 17.5683 21.9493 17.6983 21.4838 17.7251C21.1671 17.7433 20.7908 17.7142 20.3486 17.633C21.3979 18.4877 22.7164 19.7628 23.7776 21.2292C25.0261 22.9544 25.9408 24.9758 25.5937 26.9002C25.2511 28.7997 24.392 29.7485 23.4267 30.1371C22.5666 30.4834 21.652 30.3724 21.0054 30.1436C20.9629 30.7426 20.8377 31.3922 20.5979 31.9738C20.3299 32.6242 19.9125 33.2034 19.2932 33.5191C18.6698 33.8369 17.8696 33.8737 16.8683 33.4931C15.8906 33.1216 14.712 32.3495 13.2947 31.0354C12.6371 31.4748 11.6058 31.9747 10.5184 32.1266C9.36769 32.2873 8.13613 32.0586 7.23771 30.9359C6.37976 29.8637 5.88972 29.111 5.62639 28.6027C5.49494 28.349 5.41745 28.1514 5.38013 28.0021C5.36876 27.9566 5.36068 27.9139 5.35619 27.8743C4.6634 27.8975 3.68247 27.7758 2.77832 27.3385C1.78686 26.8591 0.885307 25.9979 0.56836 24.5403C0.243939 23.0483 1.11733 21.863 2.27704 21.0052C3.34311 20.2167 4.68407 19.6772 5.68364 19.3947C5.19811 18.8927 4.69427 18.1265 4.57847 17.255C4.51219 16.7561 4.57344 16.224 4.83701 15.6928C5.1001 15.1627 5.56051 14.642 6.27952 14.1575C7.15873 13.5651 7.86696 13.1113 8.43498 12.7487C8.46992 12.7264 8.50431 12.7045 8.53816 12.6829C9.05613 12.3523 9.44809 12.1021 9.74522 11.89C10.0627 11.6634 10.2583 11.4893 10.3795 11.3199C10.496 11.1569 10.5487 10.9907 10.5623 10.7667C10.6263 9.20802 10.8791 6.83183 11.4316 4.76473C11.7077 3.73136 12.0608 2.76723 12.5076 2.01969C12.9526 1.27514 13.5049 0.721733 14.1891 0.5549C14.613 0.451523 14.9896 0.496909 15.3221 0.66771C15.6509 0.836586 15.9248 1.12191 16.1593 1.47891C16.6262 2.18953 16.9628 3.22492 17.263 4.33512C17.3785 4.76203 17.4884 5.19947 17.5985 5.63697C17.7776 6.34933 17.9567 7.06186 18.1596 7.72938Z"
                    fill="#111111"
                  />
                  <path
                    d="M13.1814 11.6545C14.1564 11.3698 13.7595 11.8518 13.4391 12.1284C13.4587 12.9031 13.7592 14.6252 14.8045 15.3158C15.8497 16.0064 16.2153 13.5583 16.2675 12.2479C16.1211 12.2047 15.6701 11.9879 15.8418 11.804C15.9582 11.6793 16.4104 11.4947 16.871 11.5512C17.3323 11.6077 16.8129 12.1969 16.5601 12.3344C16.7043 13.0133 16.7788 14.6103 15.9235 15.5668C14.8545 16.7624 14.1494 15.9178 13.707 14.9916C13.3531 14.2507 13.0939 12.8484 13.0085 12.2398C12.6598 12.1634 12.2063 11.9393 13.1814 11.6545Z"
                    fill="#111111"
                  />
                  <path
                    d="M11.594 8.82921C11.6496 9.82598 12.3258 10.5988 13.1042 10.5554C13.8827 10.512 14.4687 9.66879 14.4131 8.67201C14.3576 7.67523 13.6814 6.90238 12.903 6.94579C12.1245 6.98919 11.5385 7.83243 11.594 8.82921Z"
                    fill="#FAFAFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.088 10.2646C12.533 10.2956 11.9354 9.72019 11.8848 8.81299C11.8343 7.90579 12.3641 7.26753 12.9192 7.23658C13.4742 7.20563 14.0718 7.78103 14.1223 8.68822C14.1729 9.59542 13.6431 10.2337 13.088 10.2646ZM13.1042 10.5554C12.3258 10.5988 11.6496 9.82598 11.594 8.82921C11.5385 7.83243 12.1245 6.98919 12.903 6.94579C13.6814 6.90238 14.3576 7.67523 14.4131 8.67201C14.4687 9.66879 13.8827 10.512 13.1042 10.5554Z"
                    fill="black"
                  />
                  <path
                    d="M11.9777 9.29322C12.0111 9.99125 12.5231 10.5339 13.1214 10.5053C13.7198 10.4768 14.1777 9.88771 14.1444 9.18968C14.111 8.49165 13.599 7.94896 13.0006 7.97755C12.4023 8.00615 11.9443 8.59519 11.9777 9.29322Z"
                    fill="#111111"
                  />
                  <path
                    d="M14.7368 8.67708C14.7289 9.67537 15.3159 10.4894 16.048 10.4952C16.7801 10.501 17.38 9.69649 17.3879 8.69819C17.3959 7.6999 16.8089 6.8859 16.0768 6.88007C15.3447 6.87424 14.7448 7.67878 14.7368 8.67708Z"
                    fill="#FAFAFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3511 9.78796C15.1537 9.51423 15.0246 9.12313 15.0281 8.6794C15.0316 8.23567 15.167 7.84667 15.3688 7.57613C15.5706 7.30541 15.8235 7.16931 16.0745 7.17131C16.3254 7.17331 16.5761 7.31342 16.7737 7.58732C16.971 7.86104 17.1002 8.25214 17.0967 8.69587C17.0932 9.13961 16.9578 9.5286 16.756 9.79915C16.5542 10.0699 16.3013 10.206 16.0503 10.204C15.7993 10.202 15.5487 10.0619 15.3511 9.78796ZM16.048 10.4952C15.3159 10.4894 14.7289 9.67537 14.7368 8.67708C14.7448 7.67878 15.3447 6.87424 16.0768 6.88007C16.8089 6.8859 17.3959 7.6999 17.3879 8.69819C17.38 9.69649 16.7801 10.501 16.048 10.4952Z"
                    fill="black"
                  />
                  <path
                    d="M15.0057 8.96693C14.9166 9.66006 15.3261 10.2838 15.9202 10.3601C16.5143 10.4365 17.0681 9.93644 17.1571 9.24331C17.2462 8.55018 16.8367 7.92641 16.2426 7.85009C15.6485 7.77378 15.0947 8.2738 15.0057 8.96693Z"
                    fill="#111111"
                  />
                </svg>
              </div>
              <div className="flex flex-col grow space-y-2">
                <h3 className="text-body1-bold">김미영님</h3>
                <div className="flex space-x-1.5">
                  <div className="text-body3-medium bg-bg-gray1 text-text-sub-gray76 px-2 py-1 rounded-md">
                    1-4년
                  </div>
                  <div className="text-body3-medium bg-bg-blue2 text-main-sub2-blue-blue900 px-2 py-1 rounded-md">
                    직장
                  </div>
                </div>
              </div>
              <div className="self-end  text-body3-medium text-text-sub-gray76">
                2023.01.01
              </div>
            </div>
          </section>
          <section>
            <div className="w-full space-y-4  grid grid-cols-1 divide-y justify-start">
              <AnswerDetail />
              <AnswerDetail />
              <AnswerDetail />
            </div>
          </section>
        </div>
      }
    />
  )
}

const Answers = withAuth(Pages)
Answers.getLayout = (page: ReactNode) => page

export default Answers
