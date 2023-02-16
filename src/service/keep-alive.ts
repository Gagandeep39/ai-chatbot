import axios from 'axios';

export async function keepRenderAwake() {
  const url = process.env.RENDER_URL;
  console.log(`Waking up render at ${url}`);

  const res = await axios.get(`${url}/ping`);
  if (res.status === 200) console.log('Successfully woke up render');
}
