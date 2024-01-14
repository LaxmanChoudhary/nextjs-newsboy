const defaults = {
  headers: {
    "X-Api-Key": process.env.API_KEY || "",
  },
};

const getArticles = async (url: string) => {
  const res = await fetch(url, { headers: defaults.headers });
  const data = await res.json();
  return data;
};

export { getArticles };
