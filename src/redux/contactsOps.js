import { createAsyncThunk } from "@reduxjs/toolkit";

export const apiGetAllProfiles = createAsyncThunk("contacts/fetchAll", async);
