import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MOCAPI_URL = import.meta.env.VITE_MOCAPI_URL;

axios.defaults.baseURL = MOCAPI_URL;

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContactData, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContactData);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${taskId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
