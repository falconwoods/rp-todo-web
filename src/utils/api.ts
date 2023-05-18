export async function postData(url: string, data: any, config: any = {}) {
  try {
    let fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
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
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

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

