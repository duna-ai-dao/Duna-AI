import dotenv from 'dotenv';

dotenv.config();

export const LLM_API_KEY = process.env.OPENAI_API_KEY;
export const LLM_API_ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
