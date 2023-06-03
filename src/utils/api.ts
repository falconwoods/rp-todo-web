
const SERVER = process.env.SERVER ? process.env.SERVER : 'http://192.168.1.102:3000';

export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'CustomError';
    this.status = status;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export async function postAPI(api: string, data: any, config: any = {}) {
  const url = SERVER + api;
  return await postData(url, data, config);
}

export async function getAPI(api: string, queries: any = {}) {
  const queryString = new URLSearchParams(queries).toString();
  const url = `${SERVER}${api}?${queryString}`;
  return await getData(url);
}

async function postData(url: string, data: any, config: any = {}) {
  try {
    let fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include' as RequestCredentials
    }
    fetchOption = { ...config, ...fetchOption, body: JSON.stringify(data) }
    const response = await fetch(url, fetchOption);

    let responseData;

    if (!response.ok) {
      console.log('response', response)
      //throw new HttpError(response.statusText, response.status);
      responseData = { data: null, error: response.statusText, status: response.status }
    }
    else {
      responseData = await response.json();
    }

    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getData(url: string) {
  let fetchOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include' as RequestCredentials
  }

  try {
    const response = await fetch(url, fetchOption);

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

