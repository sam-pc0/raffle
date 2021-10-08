export const enumCollections = {
  WINNERS: "winners",
  PARTICIPANTS: "participants",
  REWARDS: "rewards",
};

export class Participant {
  constructor({ name, area, phone }) {
    this.name = name;
    this.area = area;
    this.phone = phone;
  }
}

export class Reward {
  constructor(name, wasWon) {
    this.name = name;
    this.wasWon = wasWon;
    this.imgPath = "https://picsum.photos/200/300";
  }
}

export class Winner {
  constructor({ participant, reward }) {
    this.participant = participant;
    this.reward = reward;
  }
}

export const Rewards = [
  new Reward("PlayStation 5", false),
  new Reward("Curso Udemy", false),
  new Reward("Batidora", false),
];
