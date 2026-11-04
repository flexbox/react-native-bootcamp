import type { Part, ToolPart } from '@/agent/types';

/**
 * A scripted agent that streams text and tool calls, so the chat UI can be built
 * before plugging in a real model. Swap `runAgent` for an API call later.
 */

type Step =
  | { type: 'text'; text: string }
  | (Omit<ToolPart, 'id' | 'status'> & { duration: number });

function scriptFor(prompt: string): Step[] {
  return [
    {
      type: 'text',
      text: `On it. Let me look at the codebase before touching anything for "${prompt.trim()}".`,
    },
    {
      type: 'tool',
      tool: 'Grep',
      target: 'KeyboardAvoidingView',
      summary: 'Found 2 files',
      duration: 600,
    },
    {
      type: 'tool',
      tool: 'Read',
      target: 'src/app/chat.tsx',
      summary: 'Read 84 lines',
      duration: 500,
    },
    {
      type: 'text',
      text: 'The chat jumps because the whole screen is resized every time the keyboard moves. I will extend the scrollable area instead, with `KeyboardChatScrollView`.',
    },
    {
      type: 'tool',
      tool: 'Edit',
      target: 'src/app/chat.tsx',
      summary: 'Updated with 3 additions and 2 removals',
      diff: [
        { kind: 'context', text: 'return (' },
        { kind: 'remove', text: '  <KeyboardAvoidingView behavior="padding">' },
        { kind: 'remove', text: '    <ScrollView>' },
        { kind: 'add', text: '  <KeyboardChatScrollView' },
        { kind: 'add', text: '    keyboardLiftBehavior="persistent"' },
        { kind: 'add', text: '    blankSpace={blankSpace}>' },
      ],
      duration: 900,
    },
    {
      type: 'tool',
      tool: 'Bash',
      target: 'npx tsc --noEmit',
      output: ['Found 0 errors.'],
      duration: 1200,
    },
    {
      type: 'text',
      text: 'Done. The new message now stays pinned at the top while the answer streams in, and opening the keyboard no longer moves the conversation.',
    },
  ];
}

function sleep(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new Error('aborted'));
      return;
    }
    const timeout = setTimeout(resolve, ms);
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(timeout);
        reject(new Error('aborted'));
      },
      { once: true }
    );
  });
}

type RunAgentOptions = {
  signal: AbortSignal;
  onUpdate: (parts: Part[]) => void;
};

export async function runAgent(prompt: string, { signal, onUpdate }: RunAgentOptions) {
  let parts: Part[] = [];
  const push = (part: Part) => {
    parts = [...parts, part];
    onUpdate(parts);
  };
  const replaceLast = (part: Part) => {
    parts = [...parts.slice(0, -1), part];
    onUpdate(parts);
  };

  await sleep(700, signal);

  for (const [index, step] of scriptFor(prompt).entries()) {
    const id = `${index}`;

    if (step.type === 'text') {
      const words = step.text.split(' ');
      push({ type: 'text', id, text: '' });
      for (let count = 3; count < words.length + 3; count += 3) {
        await sleep(60, signal);
        replaceLast({ type: 'text', id, text: words.slice(0, count).join(' ') });
      }
    } else {
      const { duration, ...tool } = step;
      push({ ...tool, id, status: 'running' });
      await sleep(duration, signal);
      replaceLast({ ...tool, id, status: 'done' });
    }

    await sleep(250, signal);
  }
}
