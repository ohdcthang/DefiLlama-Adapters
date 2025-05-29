const { PublicKey } = require("@solana/web3.js")
/** Address of the SPL Token program */
const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')

/** Address of the SPL Associated Token Account program */
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL')

function getAssociatedTokenAddress(mint, owner,  programId = TOKEN_PROGRAM_ID,  associatedTokenProgramId = ASSOCIATED_TOKEN_PROGRAM_ID) {
    if (typeof mint === 'string') mint = new PublicKey(mint)
    if (typeof owner === 'string') owner = new PublicKey(owner)
    const [associatedTokenAddress] = PublicKey.findProgramAddressSync([owner.toBuffer(), programId.toBuffer(), mint.toBuffer()], associatedTokenProgramId);
    return associatedTokenAddress.toString()
}
  

module.exports = {
  getAssociatedTokenAddress
}