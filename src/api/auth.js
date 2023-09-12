export async function asyncRegister(user) {
  return await fetch(
    'http://ec2-35-159-37-149.eu-central-1.compute.amazonaws.com/api/auth/signUp',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  );
}
