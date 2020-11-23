import { api } from '../../hooks/useAxios';

export const RaffleService = {
  winnerList: {
    content: [
      {
        id: '5fb7f4e1905a025b653d36ce',
        createDate: '2020-11-20T10:55:20.723-0600',
        prize: {
          id: '5fb7f50c905a025b653d36cf',
          name: 'Tarjeta de video NVIDIA 3090 gg',
          imgPath: 'https://picsum.photos/seed/picsum/200/300',
        },
        participant: {
          id: '18934',
          name: 'Ricardo Zepeda',
          address: 'Casa',
          phone: '50233124371',
          area: 'Profiling',
          email: 'rzepeda@tigo.com.gt',
        },
      },
     {
        id: '5fb7f4e1905a025b653d36ce',
        createDate: '2020-11-20T10:55:20.723-0600',
        prize: {
          id: '5fb7f50c905a025b653d36cf',
          name: 'Tarjeta de video NVIDIA 3090',
          imgPath: 'https://picsum.photos/seed/picsum/200/300',
        },
        participant: {
          id: '18934',
          name: 'Ricardo Zepeda',
          address: 'Casa',
          phone: '50233124371',
          area: 'Profiling',
          email: 'rzepeda@tigo.com.gt',
        },
      },

    ],
  },

  async getCurrentRaffleWinners() {
    // return api.get('/raffle').then((reponse) => response.content);
    return this.winnerList.content;
  },

  async getWinnersList() {
    // return api.get('/raffle').then((reponse) => response.content);
    return this.winnerList.content;
  },
};
