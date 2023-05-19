export async function postData(url: string, data: any, config: any = {}) {
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

export async function getData(url: string) {
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

