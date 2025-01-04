import axios from 'axios';
import { LLM_API_KEY, LLM_API_ENDPOINT } from '../config/llm';
import { DunaRecord } from '../models/DunaRecord';

export const generateSolidityCode = async (record: DunaRecord): Promise<string> => {
  const response = await axios.post(LLM_API_ENDPOINT, {
    prompt: `Generate a Solidity smart contract for the following record: ${JSON.stringify(record)}`,
    max_tokens: 150,
  }, {
    headers: {
      'Authorization': `Bearer ${LLM_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  return response.data.choices[0].text;
};
