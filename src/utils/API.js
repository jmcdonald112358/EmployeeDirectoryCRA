/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
   getRandomUser: function() {
      return axios.get("https://randomuser.me/api/?results=20&nat=us'");
   }
};