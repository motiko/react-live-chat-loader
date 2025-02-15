import { useContext } from 'react'
import { Provider } from 'types'
import { LiveChatLoaderContext } from 'context'

const useProvider = (): {
  provider: Provider
  providerKey: string
} => {
  const { provider, providerKey } = useContext(LiveChatLoaderContext)

  return { provider, providerKey }
}

export default useProvider
