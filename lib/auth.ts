import { NamuiError } from '@/error'
import * as z from 'zod'

export const Provider = z.enum(['kakao'])
export type ProviderType = z.infer<typeof Provider>

export const getNewToken = async () => new NamuiError.NotImplimentError()

export interface SignInOptions {
  callbackUrl?: string
  redirect?: boolean
}

export async function signIn(
  provider: ProviderType,
  options?: SignInOptions,
): Promise<void> {
  const result = Provider.safeParse(provider)
  if (!result.success) {
    throw new NamuiError.BadRequestError()
  }

  const { callbackUrl = window.location.href, redirect = true } = options ?? {}
  console.log(callbackUrl)

  const url = Oauth.getAuthorizationURL(provider)
  if (!url) {
    throw new NamuiError.BadRequestError()
  }
  if (redirect) {
    window.location.href = url.toString()
    if (url.toString().includes('#')) window.location.reload()
    return
  }
}

export class Oauth {
  static getAuthorizationURL(provider: ProviderType | string) {
    let url = ''
    let clientId = ''
    let redirectUri = ''
    switch (provider) {
      case 'kakao':
        url = 'https://kauth.kakao.com/oauth/authorize'
        clientId = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
        redirectUri = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL
        break
      default:
        return null
    }
    const authURL = new URL(url)
    authURL.searchParams.set('response_type', 'code')
    authURL.searchParams.set('client_id', clientId)
    authURL.searchParams.set('redirect_uri', redirectUri)
    return authURL
  }
}
