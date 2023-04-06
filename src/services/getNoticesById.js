import { API } from '../API';

export async function fetchNoticeById(noticeId) {
  const { data } = await API.get(`/notices/noticeId/${noticeId}`);
  return data;
}
