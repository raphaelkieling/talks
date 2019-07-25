export function getGrupos() {
  console.log("[api] grupos");
  return mock([
    {
      text: "Grupo 1",
      value: {
        id: 1,
        description: "Grupo 1"
      }
    },
    {
      text: "Grupo 2",
      value: {
        id: 2,
        description: "Grupo 2"
      }
    }
  ]);
}

export function getFatos() {
  console.log("[api] fatos");
  return mock([]);
}

export function getEnvolvidos() {
  console.log("[api] envolvidos");
  return mock([
    {
      id: 1,
      name: "Raphael Kieling",
      fato: {
        grupo: {
          id: 2,
          description: "Grupo 2"
        },
        natureza: {
          id: 2,
          description: "Roubo"
        }
      }
    },
    {
      id: 1,
      name: "Pablo Escobar",
      fato: {
        grupo: {
          id: 2,
          description: "Grupo 2"
        },
        natureza: {
          id: 2,
          description: "Roubo Grande"
        }
      }
    }
  ]);
}

export function getNaturezas() {
  console.log("[api] naturezas");
  return mock([
    {
      text: "Briga",
      value: {
        id: 1,
        description: "Briga"
      }
    },
    {
      text: "Roubo",
      value: {
        id: 2,
        description: "Roubo"
      }
    }
  ]);
}

function mock(data, { time, random } = { random: true }) {
  if (random) time = Math.random() * 2000;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
