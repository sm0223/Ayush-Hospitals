import axios from "axios";

const api = axios.create(
    {
      baseURL : 'https://dea4-119-161-98-68.in.ngrok.io/'
    }
);

const login = async (username, password) => {
  console.log("user : ", username, password)
  if(username == "root" && password =="pass") {
    const responseData = {
      userId: "U-001",
      userName: "Shubham",
      userType: "staff",
      status: "verified",
    }
    return responseData;
  }
  else {
    return {};
  }
}

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};