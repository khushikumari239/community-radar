import { createStep, createWorkflow } from '@mastra/core/workflows';
import { z } from 'zod';

const summarizeWins = createStep({
  id: 'summarize-wins',
  description: 'Reads raw community chat text and returns a summary + draft tweet of the best builder wins',
  inputSchema: z.object({
    chatText: z.string().describe('The raw community chat/discussion text to analyze'),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
  execute: async ({ inputData, mastra }) => {
    const { chatText } = inputData;

    if (!chatText) {
      throw new Error('Chat text not found');
    }

    const agent = mastra?.getAgent('communityRadarAgent');
    if (!agent) {
      throw new Error('Community Radar agent not found');
    }

    const response = await agent.generate([
      {
        role: 'user',
        content: chatText,
      },
    ]);


   

    return {
      result: response.text,
    };
  },
});

const communityRadarWorkflow = createWorkflow({
  id: 'community-radar-workflow',
  inputSchema: z.object({
    chatText: z.string().describe('The raw community chat/discussion text to analyze'),
  }),
  outputSchema: z.object({
    result: z.string(),
  }),
})
  .then(summarizeWins);

communityRadarWorkflow.commit();

export { communityRadarWorkflow };