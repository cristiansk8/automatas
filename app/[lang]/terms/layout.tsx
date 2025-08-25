import { ReactNode } from 'react';

// Se convierte el componente en asíncrono para manejar los 'params' como una promesa.
export default async function TerminosLayout({
  children,
  params,
}: {
  children: ReactNode;
  // Se tipan los params como una promesa, al igual que en el layout padre.
  params: Promise<{ lang: string }>; 
}) {
  // Se usa 'await' para obtener el valor del idioma.
  const { lang } = await params;
  
  // Puedes usar la variable 'lang' aquí si necesitas lógica
  // o contenido específico en tu layout de términos.
  
  return (
    // La etiqueta <section> es un buen contenedor para la página de términos.
    <section>{children}</section>
  );
}
