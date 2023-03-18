import axios from "axios";

let api;

async function getToken() {
  let token = localStorage.getItem("token");

  let expirationDate = localStorage.getItem("expirationDate");
  const isTokenExpired = new Date().getTime() > Number(expirationDate);

  if (!token || !expirationDate || isTokenExpired) {
    const response = await axios.post(
      "https://cloud.squidex.io/identity-server/connect/token",
      {
        scope: "squidex-api",
        client_secret: "qcnwculd9ujg9oalyygr0lyeqyxg4p9g4mehlhxyeeax",
        client_id: "minerals-squidex:default",
        grant_type: "client_credentials",
      },
      {
        headers: {
          ["Content-Type"]: "application/x-www-form-urlencoded",
        },
      }
    );

    token = response.data.access_token;
    expirationDate = new Date().getTime() + 2591999 * 1000;

    localStorage.setItem("token", token);
    localStorage.setItem("expirationDate", expirationDate);
  }
  return token;
}

export async function createSquidexService() {
  if (api) {
    return api;
  }
  const token = await getToken();
  api = axios.create({
    baseURL: `https://cloud.squidex.io/api/content/minerals-squidex/`,
    headers: {
      Authorization: `Bearer ${token}`,
      ["X-Resolve-Urls"]: "*",
    },
  });
  return api;
}

export async function getHomepage(urlPreview) {
  if (urlPreview) {
    return api.get("homepage/bc15e44e-994d-4965-930a-dfbcf5f230ac", {
      headers: { "X-Unpublished": 1 },
    });
  }
  return api.get("homepage/bc15e44e-994d-4965-930a-dfbcf5f230ac");
}
