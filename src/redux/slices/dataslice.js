// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    users: [],
    problems: [],
    parishes: [],
    statusComplaints: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setProblems: (state, action) => {
      state.problems = action.payload;
    },
    setParishes: (state, action) => {
      state.parishes = action.payload;
    },
    setStatusComplaints: (state, action) => {
      state.statusComplaints = action.payload;
    },
  },
});

export const {
  setUsers,
  setProblems,
  setParishes,
  setStatusComplaints,
} = dataSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('http://localhost:5000/users');
  const data = await response.json();
  dispatch(setUsers(data));
};

export const fetchProblems = () => async (dispatch) => {
  const response = await fetch('http://localhost:5000/problems');
  const data = await response.json();
  dispatch(setProblems(data));
};

export const fetchParishes = () => async (dispatch) => {
  const response = await fetch('http://localhost:5000/parish');
  const data = await response.json();
  dispatch(setParishes(data));
};

export const fetchStatusComplaints = () => async (dispatch) => {
  const response = await fetch('http://localhost:5000/status_complaints');
  const data = await response.json();
  dispatch(setStatusComplaints(data));
};

export default dataSlice.reducer;
