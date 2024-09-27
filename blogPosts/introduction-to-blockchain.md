---
title: "Introduction to Blockchain"
date: "2024-09-26"
slug: "introduction-to-blockchain"
image: "intro-to-btc.png"
excerpt: "Blockchain is a decentralized, distributed ledger that records transactions across a network of computers. It is a public, transparent, and secure way to store and transfer data. The blockchain technology is the backbone of cryptocurrencies like Bitcoin and Ethereum."
isFeatured: true
isPublished: true
---

## 👋 Welcome to Blockchain Integration

My name is Abhaya Shankar and I'll be guiding you for this brief introduction to Blockchain.

## 📖 What You will be learning ?

1. What is Blockchain?
2. How does it work?
3. What are Smart Contracts?
4. What is Cryptocurrency?
5. What is a Hash Function?
6. What is Public Key Cryptography?
7. What is Proof of Work?
8. What is Proof of Stake?

## 🤏 Prerequisites

- This will be a beginner level course.
- Basic knowledge of `javascript`. (Beginners also can follow this)
- You need to have [Node](https://nodejs.org/en) installed.
- Make sure you install the dependent packages.
- And a cup of coffee. ☕ ( Trust me you'll need it 😆 )

## 🚀 Starting Off...

### 🔗 Introduction to Blockchain

![Blockchain Connection](/blogs/introduction-to-blockchain//blockchain-network.jpg)

`Blockchain` is a **decentralized**, distributed ledger that records transactions across a network of computers. It is a public, transparent, and secure way to store and transfer data. The blockchain technology is the backbone of cryptocurrencies like Bitcoin and Ethereum.

Protocol connecting the machines or "nodes" in the network to each other. The nodes are the computers that are running the software that makes up the blockchain. It Enforces the rules of the blockchain and ensures that the data is accurate and consistent.

**Hence code written is called as Smart Contract.**

The purpose of a blockchain is to have a network of computers agree upon a common state of data. Plain and simple. Any person or organization should be able to participate in this process. No person or organization should be able to control this process.

> 📖 Generally the term `consensus` is used to describe a network coming to an agreement on the state of the data. You'll hear this word quite often in regards to blockchain!

### 🛂 Smart Contract Blockchains

Smart Contract blockchains provide developers with a way to decentralize where the code runs. In this way, code can truly become a public resource. This means code can run without any direct ownership, making it censorship resistant and transparently verifiable.

### #️⃣ Cryptographic Hash Functions

A hash function is a function which takes an input of any size and turns it into a fixed size output.

![hash Function](/blogs/introduction-to-blockchain//hash-function.png)

Properties of a hash function:

1. **Deterministic**: Given the same input, the hash function will always produce the same output. ( For example :- If I put an iamge of a cat on hash functon, it will always produce the same output even if we try at any given time. )

2. **Pseudorandom**: The output of the hash function is not directly related to the input. ( You cannot predict the output. If 40 - 0xabc..., you cannot predict 41 or 42 or 39.)

3. **One-way**: It is computationally infeasible to reverse the hash function and produce the original input.

4. **Collision-resistant**: It is computationally infeasible to find two different inputs that produce the same output.

5. **Fast-to-compute**: The hash function should be computationally efficient to produce the output.

> [SHA256](https://emn178.github.io/online-tools/sha256) - Cryptographic hash function.

Two Important use cases of hash functions:

1.Commitments ( protocol and Smart Contract ).

2.Proofs ( Proof of Work and Proof of Stake )

### 🔑🔐 Public key cryptography :-

- **Symmetric key cryptography** is a method of encrypting data using a single key. The key is shared between the sender and the receiver of the message. This method is not very secure and is only used for encrypting small amounts of data.

  Example :- Da vinci used this method to encrypt his notes. So there is a key that is shared between him and his friends. He used this key to encrypt his notes and send them to his friends.

  0 1 2 3 4 5

  A b h a y a

  -5 -4 -3 -2 -1 0

  V Y E Y X A

  If someone has the key and wants to decrypt the message, they would need to know the key. Once this is known, this won't be very secure.

  **AES** is a symmetric key cryptography algorithm that is used to encrypt data over the internet.

  **Drawbacks** :- The key is shared between the sender and the receiver of the message. Let's say you want to send a message to someone. If you are interacting for the first time, its very inconvinient to send the message to someone who doesn't know your key. This would make it very challenging to send messages to people who are not in your contact list and keep it secure at the same time.

![Public Key Cryptography](/blogs/introduction-to-blockchain//public-key-crypto.png)

- **Asymmetric key cryptography** is a method of encrypting data using two different keys. ( Splitting your key into 2 - Public and Private) One key is used to encrypt the message and the other key is used to decrypt the message. This method is very secure and is used for encrypting large amounts of data.

  **Use cases** -

  1. Authentication :- One key signs and the other verifies the signature.
  2. Encryption :- One key encrypts and the other decrypts the message.

![Public Key Cryptography](/blogs/introduction-to-blockchain/public-key-cryptography.png)

Let's say there are two people, Abhaya and his Crush, "Gargi". He wants to confess his love to Gargi. How can he do that? It would be very stupid of him to confess his love out in the open and get rejected by Gargi and the entire world knows about it. So he uses **Public Key Cryptography** to encrypt his confession.

Every individual has a public key and a private key. The public key is shared with anyone who wants to send a message to him or him. The private key is kept secret and is only known by the individual.

> i. He uses Gargi's public key to encrypt his confession in a letter.
>
> ii. He then sends the letter to Gargi by signing it with his private key.

But how Gargi now read the letter and knows that it was written by Abhaya ?

> i. Gargi will use Abhaya's public key to ensure whether it was actually signed by Abhaya or not.
>
> ii. Gargi will now use her private key to decrypt the letter and read confess her feelings back to Abhaya using **Public Key Cryptography**.

**Public Key Authentication** is going to be very crucial in **WEB3**.

- User signs a transaction using their **private key**.
- User then broadcasts the transaction to the blockchain network.
- Blockchain verifies the transaction using the **public key** of the user.

### #️⃣ Hashing Messages

First step to send a message before signing it is to hash it. Hashing is a process of converting a message into a fixed-size string of characters.

For this example, we will use ECDSA hashing algorithm. ECDSA is a digital signature algorithm that uses elliptic curve cryptography to sign and verify messages.

```js
// turn this into an array of bytes, the expected format for the hash algorithm
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
// hash the message using keccak256
const hash = keccak256(bytes);

console.log(toHex(hash)); // 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```

After we have the message hash we can sign it with our private key to prove that a particular address votes yes on proposal 327.

`hashMessage.js`

```js
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  return keccak256(utf8ToBytes(message));
}

module.exports = hashMessage;
```

### #️⃣ Signing Messages

Now that we have the message hash, we can sign it with our private key to prove that a particular address votes yes on proposal 327.

When signing a message with `secp256k1` we can return the signature along with the **_recovery bit_**, allowing us to recover the public key from the signature. This will allow a blockchain node to take a signature of a transaction and understand which address authenticated this particular transaction.

`signMessage.js`

```js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

const PRIVATE_KEY =
  "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
  const hash = hashMessage(msg);
  const signedMessage = await secp.sign(hash, PRIVATE_KEY, { recovered: true });
  return signedMessage;
}

module.exports = signMessage;
```

> **Note** :- The `sign` method will take your `message hash` along with the constant `PRIVATE_KEY` declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. Never use this specific key because it is published on the internet, so many people including yourself could authenticate with this specific private key. **In future lessons we'll be discussing good private key hygiene to avoid losing funds.**
>
> The `sign` method takes an optional third parameter called `options`, which you'll see in the documentation. Use this parameter to return the `recovered bit` so that the public key can be recovered from this signature.

### #️⃣ Recovering Public Keys

When the signature is passed with all of its components (recovery bit included), the public key can be recovered. This means that blockchain nodes will be able to understand who signed the transaction that was sent to them.

`recoverKey.js`

```js
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const hashMsg = hashMessage(message);
  const recoveryKey = await secp.recoverPublicKey(
    hashMsg,
    signature,
    recoveryBit
  );
  return recoveryKey;
}

module.exports = recoverKey;
```

### #️⃣ Public Key to Address

Bitcoin and Ethereum both have a transformation process to take a public key and turn it into an address. For `Bitcoin` it includes a checksum and Base58 encoding. `Ethereum`'s address transformation is quite a bit simpler, its address is the **_last 20 bytes of the hash of the public key_**.

`getAddress.js`

```js
const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
  let ModifPublicKey = publicKey.slice(1);
  return keccak256(ModifPublicKey).slice(-20);
}

module.exports = getAddress;
```

### 🧾 Proof of Work

Proof of Work is a consensus mechanism that is used to validate transactions on a blockchain. It's how a decentralized network like Bitcoin and Ethereum decide what Block/Transaction is **valid** and what isn't and who gets to add it to the blockchain and get rewarded.

**Blockchain consensus typically means at least 51% of nodes are in agreement over the current global state of the network.**

Proof of Work (PoW) and Proof of Stake (PoS) are two different consensus mechanisms that are used in blockchain networks.

> In PoW, in order to add a block to the blockchain, a miner must solve a complex mathematical problem. This process is called mining. The miner who solves the problem first gets to add the block to the blockchain and gets rewarded with cryptocurrency.

> In PoS, the nodes in the network validate transactions and blocks. They don't need to solve complex mathematical problems to add blocks to the blockchain. Instead, they use their cryptocurrency to vote on which transactions and blocks are valid. The nodes with the most cryptocurrency are the ones that add the most valid blocks to the blockchain.

```json
{
  "prevBlock": "000000000000000000145bv3f56ab1",
  "new_transactions": {
    "sender": "0x1234567890123456789012345678901234567890",
    "recipient": "0x1234567890123456789012345678901234567890",
    "amount": 10
  },
  "nonce": 0
}
```

Let's take this example and understand how PoW works. Lets work on it together. Follow along and navigate to this [link](https://emn178.github.io/online-tools/sha256.html)

1. Suppose, this is the transaction that we want to add to the blockchain. When we submit this transaction onto the SHA256 hash converter online tool, we get back a hash value.

2. If the hash value is less than the target, It is considered to be of **Valid PoW** and the transaction is valid and we can add it to the blockchain.

3. If the hash value is greater than the target, then the transaction is invalid and we can't add it to the blockchain. We need to increment the nonce value and try again until the target is reached.

4. The target difficulty is a measure of how difficult it is to find a hash value that meets the target. Blockchain has a quite high difficulty and it takes a lot of computational power to find a hash value that meets the target. Basically, the difficulty is the preceeding number of zeros of the hash value.

Ex. :- If you navigate to [Blockstream.info](https://blockstream.info/) and look for the recent transactions, you will see that the difficulty is around 19 zeros which is quite high.

A miner gets rewarded for the computational work they do.

![Block Transaction](/blogs/introduction-to-blockchain/block-transaction.png)

**Concentrate** over to the nonce value.

`0xee26dc20` (hexadecimal) = `3995756064` (decimal).
Imagine how much of power it actually takes to find a single hash value that staisfies the target. The screenshot actually shows that it took `3993.531 KWU` power to find the hash value that staisfies the target.

### 🏗️ Build A Miner

Now that we have a basic understanding of Proof of Work, let's build a miner. We will mimic the process of mining and add a block to the blockchain. There are several steps to it. We will go through them one by one.

**Step 1️⃣ :- The MEMPOOL.**

The mempool is a temporary storage of transactions that are waiting to be added to the blockchain. It is a place where transactions are temporarily stored before they are added to the blockchain. The mempool is not a part of the blockchain itself. It is just a temporary storage.

Users who want to make transactions, have to broadcast their transactions to the network. The **MEMPOOL** is a place for miners to keep those transactions that they want to add to the blockchain.

Typically, the miners will take all the transactions with the highest transaction fees and add them to the blockchain. This is called **Priority Fee**. They will add them to the block and try to find a valid **PoW**.

🏁 `Task at Hand` - Adding txn to the mempool

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

**Step 2️⃣ :- MINING BLOCKS**

In Bitcoin, the headers contain a lot of important information about the block such as - the **_Software version_**, the **_timestamp_**, the **_merkle root_**, **_prev Block hash_**, the **_nonce_**, and the **_target difficulty_**.

🏁 `Task at Hand` :- Try to update the the mine function to mine a block.
For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.

- Update the mine() function to create a new block object with a single property: id
- Set the id property to the block height prior to the new block being added
- Push the block object into the blocks array

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

// Updated mine function
function mine() {
  // TODO: mine a block
  let newBlock = { id: blocks.length };
  blocks.push(newBlock);
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

**Step 3️⃣ :- BLOCK HASH**

Typically, all the information in the header of the block is hashed together to create a unique hash based on those properties.

If anything changes in the header, it will affect the hash. Since each block also contains the hash of the block before it, it will affect every future block as well. Making it extremely difficult to change a previuosu block which is already in the blockchain.

🏁 `Task at Hand` :- Add the Hash property to the block object.

- Stringify the block object using JSON.stringify
- Take the SHA256 hash of the stringified block object
- Set the resulting value to a hash property on the mined block just before mining it

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  let newBlock = { id: blocks.length };
  let BlockHash = SHA256(JSON.stringify(newBlock));
  blocks.push({ ...newBlock, hash: BlockHash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

So anytime you change the details of the block, the hash will change.

**Step 4️⃣ :- BLOCK SIZE**

In Bitcoin, there is a specific block size limit that cannot be exceeded. The number of transactions that will fit inside of a block varies due to transactions being of all different sizes.

For the purposes of this exercise, we will use the **MAX_TRANSACTIONS** constant.

🏁 `Task at Hand` :- Mine Transactions

- Inside the mine function, pull transactions off the mempool and include them in the block in an array called transactions
- Remove each transaction you include in the block from the mempool
- Add the transactions array to the block before hashing the block

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  let transactions = [];
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }
  let newBlock = { id: blocks.length, transactions };
  let BlockHash = SHA256(JSON.stringify(newBlock));
  blocks.push({ ...newBlock, hash: BlockHash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

**Step 5️⃣ :- TARGET DIFFICULTY**

In bitcoin, the difficulty is adjusted every 2016 blocks, which is about every two weeks with the blocks being mined on average every 10 minutes.

At that point, the difficulty is adjusted to attempt to keep the mining intervals around that 10 minute per block mark.

🏁 `Task at Hand` :- Target Difficulty and PROOF OF WORK.

- In the mine function, prior to hashing the block, add a nonce property. This property should start at 0
- Keep changing the nonce until you find a hash that is less than the TARGET_DIFFICULTY

```js
const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  // TODO: add transaction to mempool
  mempool.push(transaction);
}

function mine() {
  // TODO: mine a block
  let transactions = [];
  while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
    transactions.push(mempool.pop());
  }
  let newBlock = { id: blocks.length, transactions };
  newBlock.nonce = 0;
  let hash;

  while (true) {
    hash = SHA256(JSON.stringify(newBlock)).toString();
    if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
      break;
    }
    newBlock.nonce++;
  }

  blocks.push({ ...newBlock, hash });
}

module.exports = {
  TARGET_DIFFICULTY,
  MAX_TRANSACTIONS,
  addTransaction,
  mine,
  blocks,
  mempool,
};
```

### 🚨 Data Intergrity in Blockchain Data Structures

If a blockchain is just a distributed database, how does the data it stores maintain data integrity? In other words, how do we make sure the state of the data is never corrupted in any way (ie, data lost, data maliciously manipulated, etc)?

> Since data is an input variable for the hash of each block, changing the data will change that block's hash. The new hash will not have three leading zeros, and therefore becomes invalid. In the same way, blockchains like Bitcoin and Ethereum, protect the integrity of any data held inside blocks in their chains; manipulating data in a block that has been nested deeply in the chain is a fool's errand.

> To give an example: In Bitcoin's genesis block, Satoshi sent Hal Finney `10 BTC`. Manipulating this value from `10 BTC` to `20 BTC` (Maybe Hal wants some more BTC!) would require **IMMENSE** computational power. It's a number so large that humans are not able to grasp how big it is.

**Q. Why is so much computational power required to manipulate data in early blockchain blocks?**

Let's look at a simple scenario:

1. The Bitcoin genesis block hash is `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f`

2. Mallory (crypto term for malicious actor!) manipulates a piece of data, producing a brand new hash for the same block: `eb3e5df5eefceb8950e4a444507ce7df1cc534f54a5113f2792ab64830392db0`

Because of this change, Mallory has causes a data mutation of the genesis block hash! 😱This is where the blockchain data structure is very powerful with data integrity: since the hash of the genesis block changed to be invalid, the block that was previously pointing to it (Block #1) no longer does (because pointers are based on block hashes!). This effect trickles down all the way to the end of the blockchain.

At this point, Mallory has caused a data mutation along the entire chain just by changing one tiny piece of data. In order to continue pushing, Mallory now needs to:

3. Hash the genesis block data until a "**valid hash**" is found
   So Mallory, now attacking the chain data integrity, must now hash the manipulated block many times in order to find a hash that meets the Bitcoin network difficulty target at the time.

4. Once a valid hash is found on the manipulated block, **Mallory must repeat the hashing process for EVERY block thereafter in order to successfully "attack" the chain**.

> This would take Mallory _trillions and trillions_ of years of constant computation via hashing. All while the rest of the miner network continues to hash

5. Attack unsuccessful! The blockchain data integrity remains intact.

### 🕋 BLockChain Data Structures

Blockchain data structures are a collection of data structures that are used to store and verify data in a blockchain. These data structures are designed to be efficient and secure. We will mimic the data structures of a blockchain and build a simple blockchain. This is how a **Block** is structured and **Blockchain** is a collection of blocks.

Key things to note about the Blockchain data structures:

1. The Blockchain is a collection of blocks.
2. Each block contains a hash of the previous block.
3. The hash of the previous block is used to validate the integrity of the blockchain.

if the hash of the previous block is not valid, the blockchain is invalid.
So the consensus mechanism is to validate the integrity of the blockchain by checking the hash of the previous block. This makes extremely difficult to change a previous block which is already in the blockchain. Let's say I am Mallory and I want to change the previous block of Block #X which is in between the Blockchain. I would have to hash the entire blockchain from Block #X to the current block inorder to satisfy the consensus mechanism.

Let's take a look at the Block and Blockchain data structures.

`Block.js`

```js
const SHA256 = require("crypto-js/sha256");

class Block {
  // data
  constructor(data) {
    this.data = data;
  }

  toHash() {
    // a hash!
    return SHA256(this.data + this.previousHash);
  }
}

module.exports = Block;
```

`Blockchain.js`

```js
const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [this.createNewBlock()];
  }

  createNewBlock() {
    return new Block("");
  }

  // Adding a block to the chain.
  addBlock(block) {
    block.previousHash = this.chain[this.chain.length - 1].toHash();
    this.chain.push(block);
  }

  // Validating if every block in the chain is valid. If not, the chain is invalid.
  isValid() {
    for (let i = this.chain.length - 1; i > 0; i--) {
      let block = this.chain[i];
      let prevBlock = this.chain[i - 1];
      if (block.previousHash.toString() !== prevBlock.toHash().toString()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
```

Let's go over to [BLOCKCHAIN.DEMO](https://blockchaindemo.io/) and understand how these work and what will happen if we try to change a previous block.

![Block Demo 1](/blogs/introduction-to-blockchain/blockchain-demo-1.png)

Now let's say. Harsh wanted to scam me and he wants more BTC! 💰. He changed the `Block1` and edited it to 3 BTC. 😮.
What would happen now ?

![Block Demo 2](/blogs/introduction-to-blockchain/blockchain-demo-2.png)

As soon as Harsh changes the `Block1` and edits it to 3 BTC, the blockchain is invalid. The blockchain is no longer valid. This is because the hash of the previous block ( _for Block #2_ ) is not valid.

Now think these to be somewhere in between the Blockchain where the complexity of solving the hash is so high that it would take someone like Harsh a lot of time to solve it. This is how blockchains work.

![Blockchain Linkage](/blogs/introduction-to-blockchain//blockchain-linkage.png)

## 🤩 Congrats! You did it

Great! You have successfully completed this blog. This was a very difficult topic to understand and I hope you have learned something new.
You deserve a toast 🥂. This was the first blog of the Web3 series. Here's the Link to the next blog **Proof of Work and Proof of Stake**.
If you have been following up and have created something, make sure to showcase your project connect with me on [LinkedIn](https://www.linkedin.com/in/abhayashankar/).
