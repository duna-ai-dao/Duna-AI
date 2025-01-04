# DUNA Project

## Overview
The DUNA Project is a **Node.js application (in TypeScript)** designed to automate the creation and deployment of Solidity smart contracts based on structured records. It leverages MongoDB for data storage, a Large Language Model (LLM) for code generation, and blockchain integration for contract deployment.

---

## Features
1. **Store DUNA Records**: Records are stored in MongoDB for easy retrieval and manipulation.
2. **Generate Smart Contracts**: Automatically generate Solidity contracts using a Large Language Model (LLM) like OpenAI.
3. **Compile and Deploy Contracts**: Compile and deploy the generated contracts to a blockchain (e.g., Ethereum).
4. **Obfuscation**: Implements logic to make the project difficult to understand for outsiders.

---

## Project Structure

```
config/              # Configuration files
├── database.ts      # MongoDB connection setup
├── llm.ts           # LLM configuration
└── blockchain.ts    # Blockchain setup (e.g., provider, contracts)
models/              # MongoDB models or record interfaces
└── DunaRecord.ts    # Interface or schema for DUNA-related records
routes/              # API routes
├── dunaRoutes.ts    # Routes for DUNA-related operations
└── index.ts         # Index for all routes
services/            # Business logic and service integrations
├── llmService.ts    # Interact with LLM (e.g., OpenAI API)
├── contractService.ts # Logic for contract generation, compilation, and deployment
└── dunaService.ts   # CRUD logic for DUNA records
utils/               # Utility functions
├── logger.ts        # Custom logger (if needed)
└── obfuscator.ts    # Functions for obfuscation or inline logic
index.ts             # Application entry point
app.ts               # Express application setup
```

---

## Detailed Explanation

### 1. Configurations
- **`config/database.ts`**:
  - Manages MongoDB connection using `MongoClient`.
  - Exports a function to initialize and connect to the database.

- **`config/llm.ts`**:
  - Stores LLM API configuration (e.g., API keys, endpoints).

- **`config/blockchain.ts`**:
  - Configures blockchain providers and wallet credentials for deploying contracts.

### 2. Models
- **`models/DunaRecord.ts`**:
  - Defines the structure for DUNA-related records stored in MongoDB.
  - Example:
    ```typescript
    export interface DunaRecord {
      id: string;
      name: string;
      description: string;
      parameters: Record<string, any>;
    }
    ```

### 3. Routes
- **`routes/dunaRoutes.ts`**:
  - Provides API endpoints for DUNA-related operations:
    - **`GET /duna`**: Fetch all records from MongoDB.
    - **`POST /duna`**: Add a new record to MongoDB.
  
- **`routes/index.ts`**:
  - Centralizes all API routes for easier integration.

### 4. Services
- **`services/llmService.ts`**:
  - Handles interactions with the LLM API.
  - Example:
    - Sends a MongoDB record to the LLM to generate Solidity code.
    - Returns the generated Solidity smart contract.

- **`services/contractService.ts`**:
  - Manages contract compilation and deployment using tools like `ethers.js`.
  - Example:
    - Compiles Solidity code and deploys it to the blockchain.

- **`services/dunaService.ts`**:
  - Implements CRUD operations for managing DUNA-related records in MongoDB.

### 5. Utilities
- **`utils/logger.ts`**:
  - Custom logger for tracking events like errors and application activity.
  - Example:
    ```typescript
    export const log = (message: string) => {
      console.log(`[LOG]: ${message}`);
    };
    ```

- **`utils/obfuscator.ts`**:
  - Contains logic to obfuscate generated Solidity code or other outputs.
  - Example:
    ```typescript
    export const obfuscateCode = (code: string): string => {
      return code.split("").reverse().join(""); // Example: Reverse the code
    };
    ```

---

## Setup and Usage

### 1. Installation
Install the required dependencies:
```bash
npm install express mongodb dotenv axios ethers
npm install -D typescript @types/node @types/express
```

### 2. Environment Variables
Create a `.env` file with the following variables:
```env
MONGO_URI=mongodb://localhost:27017
OPENAI_API_KEY=your-openai-api-key
RPC_URL=https://mainnet.infura.io/v3/your-project-id
PRIVATE_KEY=your-ethereum-wallet-private-key
PORT=3000
```

### 3. Running the Application
Compile and run the project:
```bash
npx tsc && node dist/index.js
```

---

## Future Improvements
1. Add authentication and authorization for API routes.
2. Enhance obfuscation techniques for higher security.
3. Support multiple blockchain networks (e.g., Polygon, Binance Smart Chain).
4. Implement a user-friendly frontend for record management.

---

## License
This project is licensed under the MIT License.

