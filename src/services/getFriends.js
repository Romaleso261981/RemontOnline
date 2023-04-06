import { API } from '../API';
import { toast } from 'react-toastify';

export async function fetchFriends() {
  try {
    const { data } = await API.get(`/servicessidebar`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
}
