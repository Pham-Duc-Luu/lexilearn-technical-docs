import { useEffect } from 'react';

export default function RedocPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js';
    script.async = true;
    script.onload = () => {
      window?.Redoc.init(
        '/swagger/openapi.json',
        {},
        document.getElementById('redoc-container')
      );
    };
    document.body.appendChild(script);
  }, []);

  return <div id="redoc-container" style={{ height: '100vh' }} />;
}
