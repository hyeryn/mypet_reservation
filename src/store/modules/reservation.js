const account = {
    namespaced: true,
    state: {
      name: 'martin',
      age: 10,
      gender: 'male',
      job: 'doctor',
      email: 'martin@gmail.com',
      phoneNumber: '010-1111-2222',
    },
    getters: {
      GET_NAME: state => state.name,
      GET_EMAIL: state => state.email,
      GET_PHONE_NUMBER: state => state.phoneNumber,
    },
  };
   
  export default account;