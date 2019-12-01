import axios from "axios";

const AxiosAPICall = {
  postCall: function(url, val) {
    return axios.post(url, val);
  },
  getAllCall: function(url) {
    return axios.get(url);
  },
  deleteCall: function(url) {
    return axios.delete(url);
  },
  updateCall: function(url, val) {
    return axios.put(url, val);
  }
};

export default AxiosAPICall;
