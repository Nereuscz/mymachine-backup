"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import styles from "./SchoolsMap.module.css";

type TooltipDirection = "top" | "bottom" | "left" | "right";

const REGION_BOUNDS: [[number, number], [number, number]] = [
  [48.6165408, 15.5424248],
  [49.633255, 17.6469364],
];

const LOCATIONS: Array<{
  label: string;
  lat: number;
  lng: number;
  direction: TooltipDirection;
  emphasized?: boolean;
}> = [
  {
    label: "Brno a okolí",
    lat: 49.1922443,
    lng: 16.6113382,
    direction: "top",
    emphasized: true,
  },
  { label: "Znojmo", lat: 48.8554341, lng: 16.0489457, direction: "right" },
  { label: "Višňové", lat: 48.9824147, lng: 16.1502546, direction: "top" },
  { label: "Hustopeče", lat: 48.9399831, lng: 16.7369738, direction: "left" },
  { label: "Kyjov", lat: 49.0104456, lng: 17.1224867, direction: "top" },
  { label: "Milotice", lat: 48.9556303, lng: 17.1414953, direction: "left" },
  { label: "Hodonín", lat: 48.8563914, lng: 17.1234655, direction: "bottom" },
];

export default function SchoolsMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let map: import("leaflet").Map | undefined;

    async function initializeMap() {
      if (!containerRef.current) return;

      const L = await import("leaflet");
      if (disposed || !containerRef.current) return;

      const regionBounds = L.latLngBounds(REGION_BOUNDS);
      const compactLabels = window.matchMedia("(max-width: 600px)").matches;

      map = L.map(containerRef.current, {
        maxBounds: regionBounds,
        maxBoundsViscosity: 1,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      LOCATIONS.forEach((location) => {
        const coordinates = L.latLng(location.lat, location.lng);
        const tooltipOffset: [number, number] =
          location.direction === "top"
            ? [0, location.emphasized ? -11 : -8]
            : location.direction === "bottom"
              ? [0, 8]
              : location.direction === "left"
                ? [-8, 0]
                : [8, 0];

        L.circleMarker(coordinates, {
          radius: location.emphasized ? 10 : 7,
          color: "#0c0c0c",
          weight: 2,
          fillColor: "#cbcd15",
          fillOpacity: 1,
        })
          .addTo(map!)
          .bindTooltip(location.label, {
            permanent: !compactLabels,
            direction: compactLabels ? "top" : location.direction,
            offset: tooltipOffset,
            className: "mm-map-tooltip",
          });
      });

      map.fitBounds(regionBounds, {
        padding: [20, 20],
        maxZoom: 8,
      });
      const regionZoom = map.getZoom();
      map.setMinZoom(regionZoom);
      map.setZoom(regionZoom + 1);
    }

    void initializeMap();

    return () => {
      disposed = true;
      map?.remove();
    };
  }, []);

  return (
    <div className={styles.frame}>
      <div
        ref={containerRef}
        className={styles.map}
        role="region"
        aria-label="Mapa měst se zapojenými školami MyMachine"
      />
      <span className={styles.regionBadge}>Jihomoravský kraj</span>
      <span className={styles.mobileHint}>Klepnutím zobrazíte město</span>
    </div>
  );
}
