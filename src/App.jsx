import React from 'react'
import WalletConnect from './components/WalletConnect'
import NFTGallery from './components/NFTGallery'
import useWallet from './hooks/usewallet'
import useMetaMask from './hooks/useMetamask'

function App() {
  const {
    account,
    error,
    connectWallet,
    isLoading: walletLoading,
  } = useWallet()
  const { nfts, loading, error: nftError, setNfts } = useMetaMask(account)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NFT Gallery</h1>
        {!walletLoading && !error && account ? (
          <div className="max-w-md mx-auto">
            <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg">
              Wallet Connected : {account}
            </button>
          </div>
        ) : !account ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center bg-blue-600/20 border border-blue-500 text-blue-300 p-4 rounded-lg shadow-md">
              <p className="text-lg text-blue-200 font-semibold">
                ℹ Connect your wallet to view your NFTs
              </p>
            </div>
          </div>
        ) : null}
      </header>

      {/* Main Content */}
      {!walletLoading && !error && account ? (
        <main className="container mx-auto px-4 py-8 flex-1">
          <div className="max-w-7xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            ) : nftError ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-400 mb-4">
                    {nftError}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Refresh
                  </button>
                </div>
              </div>
            ) : (
              <NFTGallery
                nfts={nfts}
                loading={loading}
                error={error}
                setNfts={setNfts}
              />
            )}
          </div>
        </main>
      ) : null}

      {/* Error Message */}
      {error && (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 text-center">
          <p>{error}</p>
        </div>
      )}

      {/* Floating Connect Button */}
      {!account && !error && (
        <div className="fixed bottom-8 right-8">
          <WalletConnect
            connectWallet={connectWallet}
            error={error}
            isLoading={walletLoading}
          />
        </div>
      )}
    </div>
  )
}

export default App
