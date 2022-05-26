interface OMDBApiSearchResultItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface OMDBApiSearchResult {
  Search?: OMDBApiSearchResultItem[];
  totalResults?: string;
  Response?: string;
}

export default (body: OMDBApiSearchResult) =>
  body?.Search?.map((r: OMDBApiSearchResultItem) => ({
    title: r.Title + ' ' + r.Year,
    description: '',
    image: r.Poster && r.Poster !== 'N/A' ? r.Poster : null,
    link: 'https://www.imdb.com/title/' + r.imdbID,
  }));
