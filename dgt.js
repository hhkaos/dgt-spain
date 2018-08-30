const urlBase = 'http://infocar.dgt.es/etraffic/BuscarElementos';
const params = {
    latNS: 44.110407,
    longNS: 4.99257,
    latSW: 27.321927,
    longSW: -18.342391,
    zoom: 10,
    accion: 'getElementos',
    Camaras: false,
    SensoresTrafico: false,
    SensoresMeteorologico: false,
    Paneles: false,
    Radares: false,
    IncidenciasRETENCION: false,
    IncidenciasOBRAS: false,
    IncidenciasMETEOROLOGICA: false,
    IncidenciasPUERTOS: false,
    IncidenciasOTROS: false,
    IncidenciasEVENTOS: false,
    IncidenciasRESTRICCIONES: false,
    niveles: false,
    caracter: 'acontecimiento'
};

module.exports = {
        urlBase: urlBase,
        params: params
};
