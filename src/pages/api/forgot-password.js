export default async (req, res) => {
    const { method, body } = req;
    const response = await fetch('https://my-api-endpoint.com/api/myEndpoint', {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.status(200).json(data);
};