interface IPoll {
  id: number;
  author: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  voteCount: number;
  verified: boolean;
}

interface IPollChoice {
  id: number;
  pollId: number;
  choice: string;
  voteCount: number;
}

interface IVote {
  id: number;
  pollChoiceId: number;
  createdAt: Date;
  username: string;
  ip: string;
}

export type { IPoll, IPollChoice, IVote };
