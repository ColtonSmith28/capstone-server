/* Exporting a mongoose message from the txModel file. 
Later on we will be able to run commands like 'Find', 'Create', 'Delete', and 'Update' */
import mongoose from 'mongoose';

const txSchema = mongoose.Schema({
  type: String,
  date: {
    type: Date,
    default: 0
  },
  received: {
    wallet: String,
    coin: String,
    amount: Number
  },
  sent: {
    wallet: String,
    coin: String,
    amount: Number
  }
  taxable: Boolean,
  description: String,
  txHash: String,
  fee: Number
})

// Tx Model = mongoose message
const TxModel = mongoose.model('txModel', txSchema);

export default TxModel;