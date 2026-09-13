/** Sustituye estos valores antes de publicar la web de forma definitiva. */
export const SITE = {
  name: 'Sobretaula', legalName: 'Sobretaula Digital, S.L.', nif: 'B-00000000',
  address: 'Carrer de la Marina, 00, 08000 Barcelona, España', email: 'legal@sobretaula.es',
  supportEmail: 'hola@sobretaula.es', domain: 'https://sobretaula.es', lastUpdated: '13 de septiembre de 2026',
} as const;

export const LEGAL_DOCUMENTS = [
  { slug: 'aviso-legal', title: 'Aviso legal', sections: [['Titularidad', `Este sitio pertenece a ${SITE.legalName}, NIF ${SITE.nif}, ${SITE.address}. Contacto: ${SITE.email}.`], ['Objeto', 'Sobretaula presenta software de gestión para restaurantes. El contenido es informativo.']] },
  { slug: 'privacidad', title: 'Política de privacidad', sections: [['Responsable', `${SITE.legalName}, ${SITE.address}. Email: ${SITE.email}.`], ['Datos y finalidad', 'Tratamos los datos que envías para responder a solicitudes de demo. No vendemos datos personales.'], ['Derechos', `Puedes ejercer tus derechos escribiendo a ${SITE.email}.`]] },
  { slug: 'cookies', title: 'Política de cookies', sections: [['Situación actual', 'Esta landing no utiliza cookies publicitarias ni perfiles de seguimiento por defecto.'], ['Cambios', `Si incorporamos analítica o cookies no esenciales, actualizaremos esta política. Consultas: ${SITE.email}.`]] },
  { slug: 'condiciones-saas', title: 'Condiciones del servicio SaaS', sections: [['Objeto', 'Sobretaula ofrece herramientas digitales para organizar reservas, sala, carta, equipo, caja, facturas e informes.'], ['Cuenta y uso', 'La empresa cliente debe proteger sus credenciales y dar acceso solo a personas autorizadas.'], ['Contratación', 'El plan, precio, impuestos y servicios se concretan en la propuesta aceptada. Este documento requiere revisión jurídica antes de contratar.']] },
] as const;
