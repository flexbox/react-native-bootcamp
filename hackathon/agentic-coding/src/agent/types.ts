export type DiffLine = {
  kind: 'add' | 'remove' | 'context';
  text: string;
};

export type TextPart = {
  type: 'text';
  id: string;
  text: string;
};

export type ToolPart = {
  type: 'tool';
  id: string;
  tool: 'Read' | 'Grep' | 'Edit' | 'Bash';
  target: string;
  status: 'running' | 'done';
  summary?: string;
  diff?: DiffLine[];
  output?: string[];
};

export type Part = TextPart | ToolPart;

export type Turn = {
  id: string;
  prompt: string;
  parts: Part[];
  status: 'streaming' | 'done' | 'stopped';
};
