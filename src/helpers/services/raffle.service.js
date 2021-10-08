import IndexedDbService from "../services/indexed-db";
import { enumCollections, Winner, Participant, Reward } from "../type";

export const RaffleService = {
  async getWinners() {
    let winners = await IndexedDbService.read(enumCollections.WINNERS);
    return winners.map((winner) => new Winner(winner));
  },

  async updatetWinners(winners) {
    return IndexedDbService.update(enumCollections.WINNERS, winners);
  },

  async getParticipants() {
    let participants = await IndexedDbService.read(
      enumCollections.PARTICIPANTS
    );
    return participants.map((participant) => {
      return new Participant(participant);
    });
  },

  async updateParticipants(participants) {
    return IndexedDbService.update(enumCollections.PARTICIPANTS, participants);
  },

  async getRewards() {
    let rewards = IndexedDbService.read(enumCollections.REWARDS);
    return rewards.map((reward) => new Reward(reward.name, reward.wasWon));
  },

  async updateRewards(rewards) {
    return IndexedDbService.update(enumCollections.WINNERS, rewards);
  },
};
