import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_URL } from "../utils/const";
import { connect } from "react-redux";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(MAIN_URL);

      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getlastIndex = (array) => {
  let maxID = 0;
  // Перебор массива объектов
  for (let i = 0; i < array.length; i++) {
    const currentID = array[i].ID;
    // Проверка нахождения текущего ID больше максимального
    if (currentID > maxID) {
      maxID = currentID;
    }
  }
  return (maxID + 1);
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {
    createUser(state, action) {
      // const users2 = getSta
      // console.log('action.payload', action.payload);
      // // console.log(current(state));
      // console.log('users2', users2);
      // console.log(getlastIndex(state.users));

// state.users.push(action.payload);
      state.users.push({
        // ID: getlastIndex(state.users),
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.name,
        phone: action.payload.name,
        zipcode: action.payload.zipcode || '',
      })
    },
    removeUsers(state, action) {
      console.log('action',action);
      
      state.users = state.users.filter(user => !(action.payload.includes(user.id)))
    },

    addUsers(state, action) {
      console.log('test addusers');
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { createUser, removeUsers, addUsers } = userSlice.actions;
export default userSlice.reducer;