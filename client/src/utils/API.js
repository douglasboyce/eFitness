import axios from "axios";

export default {
  // Gets all books
  getBPLists: function() {
    return axios.get("/api/bplogchart");
  },
  // Gets the book with the given id
  getPLists: function(id) {
    return axios.get("/api/bplogchart/" + id);
  },
  // Deletes the book with the given id
  deleteBPLists: function(id) {
    return axios.delete("/api/bplogchart/" + id);
  },
  // Saves a book to the database
  saveBPLists: function(BPData) {
    return axios.post("/api/bplogchart", BPData);
  }
};