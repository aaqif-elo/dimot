import { defineDb, defineTable, column, NOW } from "astro:db";

const Poll = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    // A string of text.
    author: column.text({}),
    question: column.text({}),
    createdAt: column.date({ default: NOW }),
    updatedAt: column.date({ default: NOW }),
    voteCount: column.number({ default: 0 }),
    verified: column.boolean({ default: false }),
  },
});

const PollChoice = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    pollId: column.number({ references: () => Poll.columns.id }),
    choice: column.text({}),
    voteCount: column.number({ default: 0 }),
  },
});

const Vote = defineTable({
  columns: {
    id: column.number({
      primaryKey: true,
    }),
    pollChoiceId: column.number({ references: () => PollChoice.columns.id }),
    createdAt: column.date({ default: NOW }),
    username: column.text({ optional: true }),
    ip: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Poll, PollChoice, Vote },
});
