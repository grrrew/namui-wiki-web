import { ReactNode } from 'react'

type Period = 'SIX_MONTHS' | 'ONE_YEAR' | 'FOUR_YEARS' | 'INFINITE'
type Relation =
  | 'ELEMENTARY_SCHOOL'
  | 'MIDDLE_AND_HIGH_SCHOOL'
  | 'UNIVERSITY'
  | 'WORK'
  | 'SOCIAL'
  | 'ETC'

type TreeAssetKey = `${Period}_${Relation}`

class TreeType {
  constructor(private readonly icon: Record<TreeAssetKey, ReactNode>) {}

  render(period: Period, relation: Relation) {
    const treeAssetKey = `${period}_${relation}` as TreeAssetKey
    const treeSvg = this.icon[treeAssetKey]

    return <div>{treeSvg}</div>
  }
}

const treeCardAsset: Record<TreeAssetKey, ReactNode> = {
  SIX_MONTHS_ELEMENTARY_SCHOOL: (
    <svg
      width="61"
      height="77"
      viewBox="0 0 61 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2227 74.5989L18.9664 59.4609H36.444L35.7002 75.7065C27.073 76.0019 20.4538 75.0912 18.2227 74.5989Z"
        fill="#8F602C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5087 58.9805H36.9447L36.1578 76.1696L35.7154 76.1848C27.0533 76.4814 20.3934 75.5682 18.1181 75.0662L17.7227 74.9789L18.5087 58.9805ZM19.4217 59.9395L18.7205 74.212C21.1881 74.6985 27.3288 75.4756 35.2403 75.2405L35.9408 59.9395H19.4217Z"
        fill="black"
      />
      <path
        d="M27.2269 0.732286C18.8801 3.92009 19.3898 15.8065 14.9522 27.3995C12.2927 34.3474 2.59342 47.0715 0.529412 56.8257C-1.69164 67.322 69.5745 65.7145 58.8342 53.4537C48.0938 41.1929 37.6603 -3.25247 27.2269 0.732286Z"
        fill="#00BC68"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.8788 1.75069C29.666 0.953256 28.5236 0.750506 27.4002 1.17955C23.4492 2.68851 21.5478 6.25804 20.0845 11.0532C19.5392 12.8399 19.0625 14.7686 18.5606 16.7996C18.3897 17.4908 18.216 18.1938 18.0356 18.9071C17.3276 21.7066 16.522 24.6451 15.4023 27.5703C14.3681 30.272 12.2864 33.8319 10.0209 37.7062C9.33477 38.8796 8.63177 40.0818 7.93592 41.2977C4.91769 46.5717 2.01517 52.1305 1.0008 56.9242C0.793496 57.9039 1.3962 58.8619 3.06962 59.7757C4.71724 60.6755 7.21708 61.4148 10.3014 61.9787C16.457 63.1042 24.784 63.5042 32.8604 63.1938C40.9428 62.8832 48.7215 61.863 53.7935 60.1735C56.3487 59.3224 58.1203 58.3316 58.943 57.2571C59.3411 56.7373 59.5044 56.2151 59.4501 55.6747C59.3947 55.123 59.1061 54.4885 58.4758 53.769C55.7388 50.6446 53.0481 45.5077 50.3975 39.681C48.7553 36.0712 47.1148 32.1643 45.482 28.2755C44.4772 25.8825 43.4753 23.4964 42.4776 21.1906C39.8491 15.1155 37.2474 9.59059 34.664 5.83588C33.3709 3.95654 32.1074 2.55849 30.8788 1.75069ZM51.2704 39.2839C53.9228 45.1145 56.5639 50.131 59.1971 53.1371C59.9094 53.9502 60.3226 54.765 60.4043 55.5788C60.4872 56.4039 60.2228 57.1631 59.7044 57.8402C58.6942 59.1594 56.6776 60.2237 54.0966 61.0834C48.8963 62.8156 41.0111 63.8403 32.8972 64.1521C24.7772 64.4641 16.3754 64.0642 10.1289 62.9221C7.01218 62.3523 4.39265 61.5909 2.60998 60.6174C0.853109 59.658 -0.285403 58.3701 0.0625577 56.7257C1.1122 51.7653 4.0913 46.085 7.10357 40.8214C7.81837 39.5723 8.53411 38.3481 9.22786 37.1615C11.4817 33.3064 13.5033 29.8485 14.5066 27.2274C15.6057 24.3561 16.4004 21.4614 17.1058 18.672C17.2829 17.9718 17.4546 17.277 17.6243 16.5905C18.1281 14.552 18.6137 12.587 19.1672 10.7733C20.6452 5.93006 22.6622 1.9625 27.058 0.283651C28.543 -0.283494 30.009 0.031008 31.4057 0.949367C32.7867 1.85737 34.134 3.37365 35.4541 5.29228C38.097 9.13352 40.7312 14.7391 43.3578 20.8098C44.3647 23.1372 45.3702 25.5319 46.3761 27.9277C48.0037 31.804 49.6324 35.6831 51.2704 39.2839Z"
        fill="#111111"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.8738 35.5188C25.6703 35.6903 26.1725 36.4552 25.9955 37.2272C25.9361 37.4862 25.9841 37.7856 26.1306 37.9627C26.2248 38.0765 26.6366 38.4735 28.124 38.3534C31.118 38.1115 31.5657 36.7736 31.585 36.7159C31.5855 36.7144 31.5857 36.7138 31.5857 36.714C31.7011 35.9312 32.4494 35.3872 33.2572 35.4991C34.0649 35.6109 34.6261 36.3362 34.5107 37.1191C34.2629 38.8004 32.3888 40.8826 28.3694 41.2072C26.3112 41.3734 24.7532 40.8755 23.8255 39.7543C22.9502 38.6964 22.9243 37.4208 23.1111 36.6059C23.2881 35.834 24.0773 35.3472 24.8738 35.5188Z"
        fill="black"
      />
      <path
        d="M27.7914 23.2723C27.7142 25.9841 26.4949 28.1495 25.0682 28.1089C23.6414 28.0682 22.5475 25.8369 22.6247 23.1251C22.702 20.4132 23.9213 18.2478 25.348 18.2885C26.7747 18.3291 27.8687 20.5604 27.7914 23.2723Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.7692 27.1948C27.2104 28.1874 26.2851 29.1046 25.0386 29.0691C23.792 29.0335 22.9205 28.0651 22.4191 27.0424C21.8956 25.9747 21.6217 24.5788 21.6638 23.0993C21.706 21.6198 22.0589 20.2418 22.6424 19.2056C23.2012 18.2131 24.1265 17.2959 25.373 17.3314C26.6196 17.3669 27.4911 18.3354 27.9925 19.3581C28.516 20.4258 28.7899 21.8217 28.7478 23.3012C28.7056 24.7806 28.3527 26.1586 27.7692 27.1948ZM25.0659 28.1104C26.4926 28.1511 27.7119 25.9857 27.7892 23.2738C27.8664 20.562 26.7725 18.3307 25.3457 18.29C23.919 18.2494 22.6997 20.4148 22.6225 23.1266C22.5452 25.8385 23.6391 28.0698 25.0659 28.1104Z"
        fill="black"
      />
      <path
        d="M33.2875 22.9363C33.2103 25.6482 31.991 27.8136 30.5643 27.7729C29.1375 27.7323 28.0436 25.5009 28.1208 22.7891C28.1981 20.0773 29.4173 17.9119 30.8441 17.9525C32.2708 17.9932 33.3648 20.2245 33.2875 22.9363Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.2634 26.855C32.7045 27.8475 31.7793 28.7647 30.5327 28.7292C29.2862 28.6937 28.4146 27.7253 27.9132 26.7026C27.3897 25.6348 27.1158 24.2389 27.158 22.7595C27.2001 21.28 27.5531 19.902 28.1365 18.8658C28.6953 17.8733 29.6206 16.956 30.8672 16.9916C32.1137 17.0271 32.9853 17.9955 33.4867 19.0182C34.0102 20.086 34.2841 21.4819 34.2419 22.9613C34.1998 24.4408 33.8468 25.8188 33.2634 26.855ZM30.56 27.7706C31.9868 27.8113 33.206 25.6458 33.2833 22.934C33.3606 20.2222 32.2666 17.9908 30.8399 17.9502C29.4131 17.9095 28.1939 20.0749 28.1166 22.7868C28.0393 25.4986 29.1333 27.7299 30.56 27.7706Z"
        fill="black"
      />
      <path
        d="M33.3589 24.7416C33.5016 26.6113 32.4396 28.2169 30.9869 28.3277C29.5342 28.4386 28.2409 27.0128 28.0982 25.1432C27.9555 23.2735 29.0175 21.6679 30.4702 21.5571C31.9228 21.4462 33.2162 22.872 33.3589 24.7416Z"
        fill="black"
      />
      <path
        d="M27.5619 24.9067C27.7077 26.7614 26.6735 28.3554 25.2521 28.4672C23.8306 28.5789 22.5601 27.166 22.4144 25.3113C22.2686 23.4566 23.3027 21.8626 24.7242 21.7508C26.1456 21.6391 27.4161 23.052 27.5619 24.9067Z"
        fill="black"
      />
    </svg>
  ),
  FOUR_YEARS_ELEMENTARY_SCHOOL: undefined,
  FOUR_YEARS_ETC: undefined,
  SIX_MONTHS_MIDDLE_AND_HIGH_SCHOOL: undefined,
  SIX_MONTHS_UNIVERSITY: undefined,
  SIX_MONTHS_WORK: undefined,
  SIX_MONTHS_SOCIAL: undefined,
  SIX_MONTHS_ETC: undefined,
  ONE_YEAR_ELEMENTARY_SCHOOL: undefined,
  ONE_YEAR_MIDDLE_AND_HIGH_SCHOOL: undefined,
  ONE_YEAR_UNIVERSITY: undefined,
  ONE_YEAR_WORK: undefined,
  ONE_YEAR_SOCIAL: undefined,
  ONE_YEAR_ETC: undefined,
  FOUR_YEARS_MIDDLE_AND_HIGH_SCHOOL: undefined,
  FOUR_YEARS_UNIVERSITY: undefined,
  FOUR_YEARS_WORK: undefined,
  FOUR_YEARS_SOCIAL: undefined,
  INFINITE_ELEMENTARY_SCHOOL: undefined,
  INFINITE_MIDDLE_AND_HIGH_SCHOOL: undefined,
  INFINITE_UNIVERSITY: undefined,
  INFINITE_WORK: undefined,
  INFINITE_SOCIAL: undefined,
  INFINITE_ETC: undefined,
}
