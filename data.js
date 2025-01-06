exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Datos obtenidos correctamente",
        flujo: 42, // Datos de ejemplo
        volumen: 100,
      }),
    };
  } else if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    const litros = body.litros || 0;
    console.log(`Se han solicitado ${litros} litros de agua`);
    return {
      statusCode: 200,
      body: "Riego activado",
    };
  }

  return {
    statusCode: 404,
    body: "Ruta no encontrada",
  };
};
