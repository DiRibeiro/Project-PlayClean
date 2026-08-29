import axios from 'axios';

const MOCK_TOKEN = 'mock-token';
const MOCK_IMAGE =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=';

const now = new Date();
const isoDaysAgo = (days) => new Date(now.getTime() - days * 86400000).toISOString();
const isoDaysFromNow = (days) => new Date(now.getTime() + days * 86400000).toISOString();

const nextId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const getValue = (values, key, fallback = '') => {
  if (!values) return fallback;
  if (typeof FormData !== 'undefined' && values instanceof FormData) {
    return values.get(key) || fallback;
  }
  return values[key] || fallback;
};

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
};

const state = {
  reports: [
    {
      _id: 'report-1',
      title: 'Descarte irregular na avenida',
      typeReport: 'Resíduos',
      status: 0,
      dateCreate: isoDaysAgo(4),
      dateOcurr: isoDaysAgo(5),
      adressOcurr: 'Av. Jorge Dariva, Centro',
      name: 'Maria Oliveira',
      phone: '(51) 99999-1000',
      description: 'Há sacos de lixo acumulados próximos ao meio-fio.',
      images: [MOCK_IMAGE],
      anchor: { lat: -29.8868, long: -50.2698 },
    },
    {
      _id: 'report-2',
      title: 'Entulho em terreno',
      typeReport: 'Entulho',
      status: 1,
      dateCreate: isoDaysAgo(12),
      dateOcurr: isoDaysAgo(13),
      adressOcurr: 'Rua Garibaldi, Albatroz',
      name: 'Joao Santos',
      phone: '(51) 99999-2000',
      description: 'Material de obra descartado em area aberta.',
      images: [MOCK_IMAGE],
      anchor: { lat: -29.8993, long: -50.2554 },
    },
  ],
  cataTreco: [
    {
      _id: 'ct-1',
      protocol: 'CT-0001',
      status: 0,
      dateCreate: isoDaysAgo(2),
      dateOcurr: '',
      adressOcurr: 'Rua Costa Gama, 120',
      name: 'Carlos Pereira',
      cpf: '000.000.000-00',
      local: 'Calçada',
      description: 'Sofa e duas cadeiras para retirada.',
    },
    {
      _id: 'ct-2',
      protocol: 'CT-0002',
      status: 1,
      dateCreate: isoDaysAgo(8),
      dateOcurr: isoDaysFromNow(3),
      adressOcurr: 'Rua Marechal Floriano, 45',
      name: 'Ana Martins',
      cpf: '111.111.111-11',
      local: 'Garagem',
      description: 'Armario desmontado e colchao.',
    },
  ],
  leis: [
    {
      _id: 'lei-1',
      title: 'Lei de Residuos Solidos',
      name: 'Art. 12',
      type: 'Municipal',
      typeLei: 'Municipal',
      status: 0,
      description: 'Define regras para descarte e acondicionamento de residuos.',
      file: 'mock/lei-residuos.pdf',
    },
    {
      _id: 'lei-2',
      title: 'Codigo de Posturas',
      name: 'Art. 32',
      type: 'Municipal',
      typeLei: 'Municipal',
      status: 2,
      description: 'Preve responsabilidades sobre limpeza de terrenos.',
      file: 'mock/codigo-posturas.pdf',
    },
  ],
  coletas: [
    {
      _id: 'coleta-1',
      neighborhood: 'Centro',
      organic: 'Segunda, quarta e sexta pela manha.',
      selective: 'Terca-feira pela tarde.',
    },
    {
      _id: 'coleta-2',
      neighborhood: 'Albatroz',
      organic: 'Terca, quinta e sabado pela manha.',
      selective: 'Quinta-feira pela tarde.',
    },
  ],
  calendars: [
    {
      _id: 'calendar-1',
      title: 'Mutirao de limpeza',
      description: 'Acao comunitaria de limpeza no bairro Centro.',
      dateOcurr: isoDaysFromNow(7),
      image: 'mock/evento-mutirao.jpg',
    },
    {
      _id: 'calendar-2',
      title: 'Educacao ambiental',
      description: 'Palestra sobre separacao correta de residuos.',
      dateOcurr: isoDaysFromNow(14),
      image: 'mock/evento-educacao.jpg',
    },
  ],
  photos: [
    {
      _id: 'gallery-1',
      title: 'Acoes ambientais',
      images: ['https://www.defesanet.com.br/wp-content/uploads/2024/09/202409-XXxIV-19-FYI-iDFP-ADN-010.jpg'],
    },
  ],
};

const dashboardReports = () => {
  const totalReports = state.reports.length;
  const closedReports = state.reports.filter((report) => report.status === 1).length;

  return {
    bookmark: {
      month: new Date().getMonth(),
      totalReports,
      closedReports,
      openReports: totalReports - closedReports,
    },
    lineChart: { data: [1, 2, 0, 3, 4, 2, 5, 3, 2, 4, 3, totalReports] },
    map: {
      list: state.reports.map((report) => ({
        _id: report._id,
        anchor: report.anchor,
        payload: report.title,
      })),
    },
  };
};

const dashboardCataTreco = () => {
  const totalCt = state.cataTreco.length;
  const closedCt = state.cataTreco.filter((item) => item.status > 0).length;

  return {
    bookmark: {
      month: new Date().getMonth(),
      totalCt,
      closedCt,
      openCt: totalCt - closedCt,
    },
    lineChart: { data: [0, 1, 1, 2, 1, 3, 2, 2, 4, 3, 2, totalCt] },
    map: { list: [] },
  };
};

const ok = (config, data, status = 200) => ({
  data,
  status,
  statusText: 'OK',
  headers: {},
  config,
  request: {},
});

const getPath = (url = '') => {
  try {
    return new URL(url, window.location.origin).pathname;
  } catch {
    return url.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
  }
};

const removeById = (collection, id) => {
  const index = collection.findIndex((item) => item._id === id);
  if (index >= 0) collection.splice(index, 1);
};

const handleGet = (config, path) => {
  if (path === '/dashboardReports') return ok(config, dashboardReports());
  if (path === '/dashboardCataTreco') return ok(config, dashboardCataTreco());
  if (path === '/report') return ok(config, { result: state.reports });
  if (path === '/reportStatus') return ok(config, state.reports);
  if (path === '/allCataTreco') return ok(config, state.cataTreco);
  if (path === '/leis') return ok(config, state.leis);
  if (path === '/coleta') return ok(config, state.coletas);
  if (path === '/calendars') return ok(config, state.calendars);
  if (path === '/photos') return ok(config, { result: state.photos });

  const photoMatch = path.match(/^\/photos\/([^/]+)$/);
  if (photoMatch) {
    const gallery = state.photos.find((item) => item._id === photoMatch[1]);
    return ok(config, { result: gallery ? [gallery] : [] });
  }

  return null;
};

const handlePost = (config, path) => {
  const body = config.data;

  if (path === '/login') {
    return ok(config, {
      token: MOCK_TOKEN,
      result: {
        _id: 'user-mock',
        firstName: 'Usuario',
        lastName: 'Mock',
        cpf: '',
        phone: '',
        userName: 'mock',
        reports: [],
        type: 'admin',
      },
    });
  }

  if (path === '/validateToken') return ok(config, { valid: true });

  if (path === '/tradeTokenToUser') {
    return ok(config, {
      _id: 'user-mock',
      firstName: 'Usuario',
      lastName: 'Mock',
      cpf: '',
      phone: '',
      userName: 'mock',
      reports: [],
      type: 'admin',
    });
  }

  if (path === '/report') {
    state.reports.unshift({
      _id: nextId('report'),
      title: getValue(body, 'title', 'Denuncia mock'),
      typeReport: getValue(body, 'typeReport', 'Geral'),
      status: 0,
      dateCreate: new Date().toISOString(),
      dateOcurr: getValue(body, 'dateOcurr', new Date().toISOString()),
      adressOcurr: getValue(body, 'adressOcurr', 'Endereco mock'),
      name: getValue(body, 'name', 'Cidadao mock'),
      phone: getValue(body, 'phone', ''),
      description: getValue(body, 'description', 'Registro criado com backend mockado.'),
      images: [MOCK_IMAGE],
      anchor: { lat: -29.895021, long: -50.272371 },
    });
    return ok(config, { result: state.reports[0] });
  }

  if (path === '/reportStatus') {
    const data = parseBody(body);
    const report = state.reports.find((item) => item._id === data._id);
    if (report) report.status = data.status;
    return ok(config, report || {});
  }

  if (path === '/cataTreco') {
    state.cataTreco.unshift({
      _id: nextId('ct'),
      protocol: `CT-${String(state.cataTreco.length + 1).padStart(4, '0')}`,
      status: 0,
      dateCreate: new Date().toISOString(),
      dateOcurr: '',
      adressOcurr: getValue(body, 'adressOcurr', 'Endereco mock'),
      name: getValue(body, 'name', 'Solicitante mock'),
      cpf: getValue(body, 'cpf', ''),
      local: getValue(body, 'local', 'Calcada'),
      description: getValue(body, 'description', 'Solicitacao criada com backend mockado.'),
    });
    return ok(config, state.cataTreco[0]);
  }

  if (path === '/cataTrecoStatus') {
    const data = parseBody(body);
    const item = state.cataTreco.find((ct) => ct._id === data._id);
    if (item) {
      item.status = data.status;
      item.dateOcurr = data.dateOcurr;
    }
    return ok(config, item || {});
  }

  if (path === '/leis') {
    state.leis.unshift({
      _id: nextId('lei'),
      title: getValue(body, 'title', 'Lei mock'),
      name: getValue(body, 'name', 'Artigo mock'),
      type: getValue(body, 'type', 'Municipal'),
      typeLei: getValue(body, 'typeLei', 'Municipal'),
      status: 0,
      description: getValue(body, 'description', 'Lei criada com backend mockado.'),
      file: 'mock/lei.pdf',
    });
    return ok(config, state.leis[0]);
  }

  if (path === '/coleta') {
    state.coletas.unshift({
      _id: nextId('coleta'),
      neighborhood: getValue(body, 'neighborhood', 'Bairro mock'),
      organic: getValue(body, 'organic', 'Coleta organica mock.'),
      selective: getValue(body, 'selective', 'Coleta seletiva mock.'),
    });
    return ok(config, state.coletas[0]);
  }

  if (path === '/coletaUpdate') {
    const data = parseBody(body);
    const item = state.coletas.find((coleta) => coleta._id === data._id);
    if (item) Object.assign(item, data);
    return ok(config, item || {});
  }

  if (path === '/calendars') {
    state.calendars.unshift({
      _id: nextId('calendar'),
      title: getValue(body, 'title', 'Evento mock'),
      description: getValue(body, 'description', 'Evento criado com backend mockado.'),
      dateOcurr: getValue(body, 'dateOcurr', new Date().toISOString()),
      image: 'mock/evento.jpg',
    });
    return ok(config, state.calendars[0]);
  }

  if (path === '/calendarsUpdate') {
    const data = parseBody(body);
    const item = state.calendars.find((calendar) => calendar._id === data._id);
    if (item) Object.assign(item, data);
    return ok(config, item || {});
  }

  if (path === '/photos') {
    state.photos.unshift({
      _id: nextId('gallery'),
      title: getValue(body, 'title', 'Galeria mock'),
      images: ['mock/gallery-upload.jpg'],
    });
    return ok(config, state.photos[0]);
  }

  if (path === '/updateUser') {
    const result = {
      _id: 'user-mock',
      firstName: getValue(body, 'firstName', 'Usuario'),
      lastName: getValue(body, 'lastName', 'Mock'),
      cpf: getValue(body, 'cpf', ''),
      phone: getValue(body, 'phone', ''),
      userName: getValue(body, 'userName', 'mock'),
      reports: [],
      type: 'admin',
    };
    return ok(config, { token: MOCK_TOKEN, result });
  }

  return null;
};

const handleDelete = (config, path) => {
  const reportMatch = path.match(/^\/report\/([^/]+)$/);
  if (reportMatch) {
    removeById(state.reports, reportMatch[1]);
    return ok(config, {});
  }

  const cataTrecoMatch = path.match(/^\/cataTreco\/([^/]+)$/);
  if (cataTrecoMatch) {
    removeById(state.cataTreco, cataTrecoMatch[1]);
    return ok(config, {});
  }

  const leisMatch = path.match(/^\/leis\/([^/]+)$/);
  if (leisMatch) {
    removeById(state.leis, leisMatch[1]);
    return ok(config, {});
  }

  const coletaMatch = path.match(/^\/coleta\/([^/]+)$/);
  if (coletaMatch) {
    removeById(state.coletas, coletaMatch[1]);
    return ok(config, {});
  }

  const calendarMatch = path.match(/^\/calendars\/([^/]+)$/);
  if (calendarMatch) {
    removeById(state.calendars, calendarMatch[1]);
    return ok(config, {});
  }

  const photosMatch = path.match(/^\/photos\/([^/]+)$/);
  if (photosMatch) {
    removeById(state.photos, photosMatch[1]);
    return ok(config, {});
  }

  const singlePhotoMatch = path.match(/^\/singlePhoto\/([^/]+)\/(\d+)$/);
  if (singlePhotoMatch) {
    const gallery = state.photos.find((item) => item._id === singlePhotoMatch[1]);
    if (gallery) gallery.images.splice(Number(singlePhotoMatch[2]), 1);
    return ok(config, {});
  }

  return null;
};

const getMockResponse = (config = {}) => {
  const path = getPath(config.url);
  const method = (config.method || 'get').toLowerCase();

  if (method === 'get') return handleGet(config, path);
  if (method === 'post') return handlePost(config, path);
  if (method === 'delete') return handleDelete(config, path);

  return null;
};

export function setupApiFallbackMocks() {
  if (process.env.NODE_ENV !== 'development') return;
  if (window.__PLAYCLEAN_API_FALLBACK_MOCKS__) return;

  window.__PLAYCLEAN_API_FALLBACK_MOCKS__ = true;

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) return Promise.reject(error);

      const response = getMockResponse(error.config);
      if (!response) return Promise.reject(error);

      console.info(`[mock-api] ${response.config.method?.toUpperCase() || 'GET'} ${getPath(response.config.url)}`);
      return Promise.resolve(response);
    }
  );
}
