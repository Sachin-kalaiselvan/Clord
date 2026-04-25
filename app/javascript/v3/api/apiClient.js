import axios from 'axios';

const { apiHost = '' } = window.nerixConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
