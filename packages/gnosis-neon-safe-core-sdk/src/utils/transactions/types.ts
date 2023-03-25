import { SafeTransactionDataPartial } from 'gnosis-neon-safe-core-sdk-types'

export type SafeTransactionOptionalProps = Pick<
  SafeTransactionDataPartial,
  'safeTxGas' | 'baseGas' | 'gasPrice' | 'gasToken' | 'refundReceiver' | 'nonce'
>
