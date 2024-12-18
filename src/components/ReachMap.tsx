import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';

const ReachMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Inicializa o mapa
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Substitua pelo seu token do Mapbox
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-50, -15], // Centro no Brasil
      zoom: 3
    });

    // Adiciona controles de navegação
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="alcance" className="bg-cream dark:bg-darknavy py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Nosso Alcance
        </h2>
        <Card className="p-4">
          <div ref={mapContainer} className="h-[400px] rounded-lg" />
        </Card>
        <div className="mt-8 text-center">
          <p className="text-softgray">
            Alcançando vidas através da tradução de conteúdo reformado em diversos países.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReachMap;