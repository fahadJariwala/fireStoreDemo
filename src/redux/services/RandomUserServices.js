import API from './Api';

export const getUsers = (limit = 10) => {
  return API.get(
    `https://randomuser.me/api/?inc=gender,name,dob,email,picture,phone&results=${limit}`,
  );
};
