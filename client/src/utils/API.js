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
  deletePLists: function(id) {
    return axios.delete("/api/bplogchart/" + id);
  },
  // Saves a book to the database
  savePLists: function(bookData) {
    return axios.post("/api/bplogchart", bookData);
  }
};