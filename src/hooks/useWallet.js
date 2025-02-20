import { useState } from 'react'
import { ethers } from 'ethers'

const useWallet = () => {
  const [account, setAccount] = useState('')
  const [error, setError] = useState('')

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError('Please install MetaMask to use this app.')
      return
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccount(accounts[0])
    } catch (err) {
      setError('Failed to connect wallet.')
      console.error(err)
    }
  }

  return { account, error, connectWallet }
}

export default useWallet
