export function getEstados() {
  return fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  ).then(r => r.json());
}

export function getMunicipios(ufId) {
  return fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/municipios`
  ).then(r => r.json());
}
