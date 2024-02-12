import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function () {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log('data', data);
    return data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {
    createUser(state, action) {
      state.users.push({
        // action.payload,
        // name,
        // username,
        // email,
        // phone,
        // zipcode
      })
    },
    removeUsers(state, action) {
      state.users = state.users.filter(user => !(action.payload.includes(user.id)))
    },
    addUsers(state, action) { },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state,action) => {
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