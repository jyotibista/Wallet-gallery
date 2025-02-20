import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import { MOCK_NFTS } from '../utils/constant'

const NFTGallery = ({ nfts, loading, error, setNfts }) => {
  const loadDummyData = () => {
    setNfts(MOCK_NFTS)
  }

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />
  if (!nfts.length)
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center bg-yellow-600/20 border border-yellow-500 text-yellow-300 p-6 rounded-lg shadow-md">
          <p className="text-2xl font-bold mb-2">⚠ No NFTs Found</p>
          <p className="text-yellow-200">
            Your wallet must have NFTs to display in here.
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 rounded"
            onClick={loadDummyData}
          >
            Load Dummy
          </button>
        </div>
      </div>
    )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {nfts.map((nft) => (
        <div
          key={nft?.id}
          className="border border-white/20 overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur-md text-white"
        >
          {nft?.image && (
            <img
              src={nft?.image}
              alt={nft?.name || 'NFT'}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="font-bold">{nft.name || 'Unnamed NFT'}</h3>
            <p className="text-sm text-white-900">
              Contract: {nft?.address || ''}
            </p>
            <p className="text-sm text-gray-800">
              Token ID: {nft?.tokenId || ''}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NFTGallery
