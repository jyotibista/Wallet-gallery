import { useEffect, useState } from 'react'
import { fetchNFTs } from '../services/nftService'

const useMetaMask = (account) => {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getNFTs = async () => {
      if (!account) return

      setLoading(true)
      try {
        const nfts = await fetchNFTs(account)
        setNfts(nfts)
      } catch (err) {
        setError('Failed to fetch NFTs.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    getNFTs()
  }, [account])

  return { nfts, loading, error, setNfts }
}

export default useMetaMask
