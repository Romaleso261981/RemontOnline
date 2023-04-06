import { API } from '../API';

export async function deleteNoticeById(noticeId) {
  const { data } = await API.delete(`/notices/delete/${noticeId}`);
  return data;
}
