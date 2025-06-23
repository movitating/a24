import type { DailyTop10List } from '@entities/Product/api/kobis.api.type';

async function getKobisData(date: string, requestData: string) {
  const API_KEY = import.meta.env.VITE_API_KOBIS_KEY;
  const response = await fetch(
    `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/${requestData}.json?key=${API_KEY}&targetDt=${date}`
  );

  try {
    console.log('response 응답 완료');

    const data = await response.json();
    console.log(data);

    const dataList = data.boxOfficeResult.dailyBoxOfficeList.map((item: DailyTop10List) => ({
      movieNm: item.movieNm,
      rank: item.rank,
      openDt: item.openDt,
    }));

    return dataList;
  } catch (err) {
    console.error('response 응답 에러: ', err, response.statusText);
  }
}

export default getKobisData;
