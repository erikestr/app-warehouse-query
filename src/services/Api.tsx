const BASE_URL = import.meta.env.VITE_BASE_URL as string;

let headers = {
  'Content-Type': 'application/json',
};

function getHeaders(): any {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${sessionStorage.getItem('_token')}`,
  };
}

export const authLogin = async (username: string, password: string, remeber: boolean) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username, password, remeber }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('_token', data['access_token']);
      sessionStorage.setItem('_sys_user', data['sys_user']);
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error: any) {
    throw new Error(`Error in login request: ${error.message}`);
  }
};

export const listExistences = async (userid: string, itemnmbr?: string, batchnmbr?: string) => {
  const url = `${BASE_URL}/api/v1/wharehouse/query?userid=${userid}&itemnmbr=${itemnmbr ?? ''}&batchnmbr=${batchnmbr ?? ''}`;

  try {
    const response: Response = await fetch(url, {
      method: 'GET',
      headers: getHeaders(),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
  } catch (error: any) {
    throw new Error(`Error in the fetch request: ${error.message}`);
  }
};