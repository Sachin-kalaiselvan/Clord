import axios from 'axios';

const { apiHost = '' } = window.clordConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
