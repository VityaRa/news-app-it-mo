import { API_URL } from "./const";
import { sleep } from "./sleep";
import { NewItem } from "./types";

interface NewsListResponse {
  results: NewItem[];
}

interface GetListArgs {
    title_contains?: string;
};

const buildQuery = (args: GetListArgs) => {
    const params = new URLSearchParams();
    args.title_contains && params.set('title_contains', args.title_contains);
    return '?' + params.toString();
}

export const getNewsList = async ({ title_contains }: GetListArgs) => {
  try {
    await sleep(500);
    const response = await fetch(API_URL + buildQuery({title_contains}));
    const result = (await response.json()) as NewsListResponse;
    return {
      data: result.results,
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: e,
    };
  }
};

interface GetByIdArgs {
  id: number
}

export const getNewById = async ({ id }: GetByIdArgs) => {
  try {
    await sleep(500);
    const response = await fetch(`${API_URL}/${id}`);
    const result = (await response.json()) as NewItem;
    return {
      data: result,
      error: null,
    };
  } catch (e) {
    return {
      data: null,
      error: e,
    };
  }
};

