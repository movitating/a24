import getKobisData from '@entities/Product/api/kobis.api';
import type { DailyTop10List } from '@entities/Product/api/kobis.api.type';
import { useEffect, useState } from 'react';

function MainContent() {
  const [data, setData] = useState<DailyTop10List[] | null>(null);

  const fetchMovieList = async () => {
    console.log('서버에 데이터 요청');

    try {
      const movie = await getKobisData('20250620', 'searchDailyBoxOfficeList');
      console.log('서버 데이터 호출', movie);
      setData(movie);
    } catch (err) {
      console.error('에러 발생', err);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const movieList = data?.map((item: DailyTop10List) => {
    return (
      <li className="dailyBoxOfficeList__item" key={item.rank}>
        <span className="dailyBoxOfficeList__item--rank">{item.rank}</span>
        <div>
          <span className="dailyBoxOfficeList__item--title">{item.movieNm}</span>
          <span className="dailyBoxOfficeList__item--date">{item.openDt}</span>
        </div>
      </li>
    );
  });

  return <ul className="dailyBoxOfficeList">{movieList}</ul>;
}

export default MainContent;
