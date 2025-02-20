import axios from 'axios'

const API_KEY = '5P-6WZizigR0Ps8zRg94cOiOvzbrTXQj'
const BASE_URL = `https://eth-mainnet.g.alchemy.com/nft/v2/${API_KEY}/getNFTs/`

export const fetchNFTs = async (address) => {
  try {
    const fetchURL = `${BASE_URL}?owner=${address}`
    const response = await axios.get(fetchURL)

    return response.data.ownedNfts || []
  } catch (error) {
    throw new Error('Failed to fetch NFTs')
  }
}
