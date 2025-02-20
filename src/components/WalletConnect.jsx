const WalletConnect = ({ connectWallet, error }) => {
  return (
    <div className="text-center">
      <button
        onClick={connectWallet}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg"
      >
        Connect Wallet
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default WalletConnect
