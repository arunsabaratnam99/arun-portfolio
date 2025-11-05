"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { portfolioData } from "@/config/portfolio-data";

// Set Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoiYXJ1bnNhYmFyYXRuYW0iLCJhIjoiY21obGJ0Y3ozMWF3NDJqbzhseGI2YnFsaiJ9.-hcJPtpQ-IfRVQ76ky6FKQ";

export function MapboxCard() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: portfolioData.map.center as [number, number],
      zoom: portfolioData.map.zoom,
      interactive: true,
      attributionControl: false,
    });

    // Add subtle attribution
    map.current.addControl(
      new mapboxgl.AttributionControl({
        compact: true,
      })
    );

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-full rounded-lg overflow-hidden text-white transform transition-transform duration-300 hover:scale-[1.02]">
      <div
        ref={mapContainer}
        className="absolute inset-0 z-0 mapbox-container"
      />

      <div className="pointer-events-none absolute inset-0 z-10 p-4 flex flex-col justify-between">
        <div>
          <div className="font-bold uppercase font-geist-mono">Map</div>
          <div className="font-geist text-xl">Where I am.</div>
        </div>
      </div>

      <style jsx global>{`
        .mapbox-container .mapboxgl-ctrl-group {
          background: #2a2a2a !important;
          border: 1px solid #1a1a1a !important;
        }

        .mapbox-container .mapboxgl-ctrl-group button {
          background-color: #2a2a2a !important;
          color: #888 !important;
        }

        .mapbox-container .mapboxgl-ctrl-group button:hover {
          background-color: #3a3a3a !important;
        }

        .mapbox-container .mapboxgl-ctrl-attrib {
          background-color: rgba(26, 26, 26, 0.5) !important;
          font-size: 8px !important;
        }

        .mapbox-container .mapboxgl-ctrl-attrib a {
          color: #666 !important;
        }
      `}</style>
    </div>
  );
}
