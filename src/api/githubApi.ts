import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: 'Bearer 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'
  },
});
