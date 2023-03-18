import { getAllNews } from '../API';
import { useEffect, useState } from 'react';

export const App = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [queri, setQueri] = useState('sponsors');
  console.log(queri);

  useEffect(() => {
    async function get() {
      try {
        const { data } = await getAllNews();
        setTransactionList(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  function goNews() {
    setQueri('news');
  }
  
  function goSponsors() {
    setQueri('sponsors');
  }

  return (
    <>
      {transactionList.map(
        ({
          _id,
          date,
          description,
          url,
          address,
          addressUrl,
          phone,
          title,
          workDays,
        }) => (
          <ul key={_id}>
            <li>{date}</li>
            <li>{address}</li>
            <li>{addressUrl}</li>
            <li>{title}</li>
            <li>{phone}</li>
            <li>{description}</li>
            <li>{url}</li>
          </ul>
        ),
      )}
      <button onClick={goNews}>news</button>
      <button onClick={goSponsors}>sponsors</button>
    </>
  );
};
