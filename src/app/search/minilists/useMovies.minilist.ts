import { useEffect, useState } from 'react';
import { useMinilist } from '@zengenti/contensis-react-base/search';
import { useSelector } from 'react-redux';
import { selectSearchExists } from '~/redux/selectors';
import type { UseMinilistProps } from '@zengenti/contensis-react-base/search';

type MovieProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};
const omdbapiResultMapper = (body: any): MovieProps[] => {
  return body?.Search?.map((r: any): MovieProps => {
    return {
      id: r.imdbID,
      title: r.Title + ' ' + r.Year,
      description: '',
      image: r?.Poster !== 'N/A' ? r.Poster : null,
      link: 'https://www.imdb.com/title/' + r.imdbID,
    };
  });
};

const minilistInitState = {
  id: '',
} as UseMinilistProps;

// Minilist example using a config that is created on the fly
// and also is using a custom (non-Contensis) api to fetch its results
export default () => {
  const isSearchSetup = useSelector(selectSearchExists);
  const [minilistOptions, setMinilistOptions] = useState(minilistInitState);

  useEffect(() => {
    if (!isSearchSetup) return; // Since we are dynamically injecting search redux, we need to wait until it loads

    setMinilistOptions({
      id: 'movies',
      config: {
        title: 'Custom Api',
        customApi: {
          uri: 'http://www.omdbapi.com/?apikey=b194ff96',
        },
      },
      mappers: {
        customApi: () => ({
          // adds query param `s=dawn of the dead`
          s: 'dawn of the dead',
        }),
        results: omdbapiResultMapper,
      },
    });
  }, [isSearchSetup]);

  return useMinilist<MovieProps>(minilistOptions);
};
