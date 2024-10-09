// src/services/eventService.js
// import axios from 'axios';

// const API_URL = 'http://your-api-url.com/api/events';

// // Get all events
// export const getAllEvents = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Create a new event
// export const createEvent = async (eventData) => {
//   try {
//     const response = await axios.post(API_URL, eventData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Update an event
// export const updateEvent = async (id, eventData) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, eventData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Delete an event
// export const deleteEvent = async (id) => {
//   try {
//     await axios.delete(`${API_URL}/${id}`);
//   } catch (error) {
//     throw error;
//   }
// };
