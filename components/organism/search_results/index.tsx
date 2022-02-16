import { Results } from './results';

import { post3, post1, post2 } from "../../../shared/data"
//function

const data = [post1, post2, post3, post1, post2, post3]

export const Search_results = () => <Results posts={data} />