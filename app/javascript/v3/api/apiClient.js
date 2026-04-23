import axios from 'axios';

const { apiHost = '' } = window.ClordConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
