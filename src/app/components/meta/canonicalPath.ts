/**
 *  Gets the public url from the current .env
 *  Strips any `http/s/www` prefix so we can enforce `https://www.`
 *  Selects the current path from Routing state
 *  Generates a canonical path based upon the project url & current page,
 *  preventing any query strings making it into our canonical url
 */

import { useSelector } from 'react-redux';
import { routing } from '@zengenti/contensis-react-base/redux';

const projectUrl = PUBLIC_URI.replace(/(http|https):\/\/|www\.|\/$/g, '');
const enforcedProjectUrl = 'https://www.' + projectUrl;
const currentPath = useSelector(routing.selectors.selectCurrentPath);

export const canonicalPath = `${enforcedProjectUrl}${currentPath}`;
