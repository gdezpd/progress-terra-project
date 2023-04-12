import axios from "axios";

enum NetworkRequestsAndKeys {
    TOKEN_URL = 'http://84.201.188.117:5021/',
    BONUS_URL = 'http://84.201.188.117:5003',
    ACCESS_KEY = '891cf53c-01fc-4d74-a14c-592668b7a03c',
    CLIENT_ID = '2c44d8c2-c89a-472e-aab3-9a8a29142315',
    DEVICE_ID = '7db72635-fd0a-46b9-813b-1627e3aa02ea',
}

export const instanceForToken = axios.create({
    baseURL: NetworkRequestsAndKeys.TOKEN_URL,
    timeout: 1000,
    headers: {
        AccessKey: NetworkRequestsAndKeys.ACCESS_KEY,
    },
});
export const instanceForBonuses = axios.create({
    baseURL: NetworkRequestsAndKeys.BONUS_URL,
    timeout: 1000,
    headers: {
        AccessKey: NetworkRequestsAndKeys.ACCESS_KEY,
    },
});

export const getAccessToken = async () => {
    const {data} = await instanceForToken.post('/api/v3/clients/accesstoken', {
        idClient: NetworkRequestsAndKeys.CLIENT_ID,
        paramValue: NetworkRequestsAndKeys.DEVICE_ID,
    })
    if (data.result.status === 0) {
        return data.accessToken
    } else throw new Error('Проверьте соединение с интернетом')
}

export const getBonuses = async (token: string) => {
    const {data} = await instanceForBonuses.get(`/api/v3/ibonus/generalInfo/${token}`);
    if (data.resultOperation.status === 0) {
        return data.data;
    } else throw new Error('Проверьте соединение с интернетом');
};
