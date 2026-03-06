'use server';

import { z } from 'zod';
import { notion } from '@/app/lib/notion';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client';
import { checkBotId } from 'botid/server';

const schema = z.strictObject({
  name: z.string().min(2, { error: 'Please provide a name' }),
  organisation: z.string({ error: 'Please provide the name of your organisation' }),
  email: z.email({ error: 'Please provide a valid email address' }),
  telephone: z.string({ error: 'Please provide a telephone number' }),
  project: z
    .string({ error: 'Please provide information on the project' })
    .min(20, { error: 'Please give me more information on the project (min 20 characters)' }),
});

export async function sendContactForm(initialState: unknown, formData: FormData) {
  const result = schema.safeParse({
    name: formData.get('name'),
    organisation: formData.get('organisation'),
    email: formData.get('email'),
    telephone: formData.get('telephone'),
    project: formData.get('project'),
  });

  if (!result.success) {
    return {
      errors: z.flattenError(result.error),
      payload: formData,
    };
  }

  const verification = await checkBotId({
    developmentOptions: {
      bypass: 'HUMAN', // To test error: 'BAD_BOT'
    },
  });

  if (verification.isBot) {
    return { message: 'Access denied' };
  }

  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Date: { date: { start: new Date().toISOString() } },
        Name: { title: [{ text: { content: result.data.name } }] },
        Email: { email: result.data.email },
        Organisation: { rich_text: [{ text: { content: result.data.organisation } }] },
        Telephone: { phone_number: result.data.telephone ?? '' },
        Project: { rich_text: [{ text: { content: result.data.project ?? '' } }] },
      },
    });
    return { message: 'Success' };
  } catch (error: unknown) {
    console.error(error);
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          return { message: 'Request timed out' };
        case APIErrorCode.ObjectNotFound:
          return { message: 'Object not found' };
        case APIErrorCode.Unauthorized:
          return { message: 'Unauthorised' };
        default:
          return { message: 'Unknown Error' };
      }
    }
  }
}
