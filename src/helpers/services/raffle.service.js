import { api } from '../../hooks/useAxios';

export const RaffleService = {
  winnerList: [
    {
      workId: '151515',
      name: 'Juan Carlos Bodoque',
      reward: {
        name: 'Nvidia RTX 3090',
        image: 'https://picsum.photos/seed/picsum/300/150',
      },
    },
    {
      workId: '152425',
      name: 'Tulio Tribiño',
      reward: {
        name: 'Viaje a las Bahamas',
        image: 'https://picsum.photos/300/150',
      },
    },
  ],

  async getTotalWinners() {
    // return api.get('/raffle');
    return 2;
  },

  async getAWinner() {
    this.winnerList.push({
      workId: '151515',
      name: 'Juan Carlos Bodoque',
      reward: {
        name: 'Nvidia RTX 3090',
        image: 'https://picsum.photos/seed/picsum/300/150',
      },
    });
    return {
      workId: '151515',
      name: 'Juan Carlos Bodoque',
      reward: {
        name: 'Nvidia RTX 3090',
        image: 'https://picsum.photos/seed/picsum/300/150',
      },
    };
  },
  async getWinnersList() {
    // return api.get('/winners');
    return this.winnerList;
  },
};
