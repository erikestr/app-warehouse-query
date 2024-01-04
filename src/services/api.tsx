const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const headers = {
  'Content-Type': 'application/json',
  // You can add more headers as needed
};

export const login = async (username: string, password: string, remeber: boolean) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username, password, remeber}),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error: any) {
    throw new Error(`Error in login request: ${error.message}`);
  }
};