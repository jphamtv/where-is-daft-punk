import styles from './TargetMarker.module.css';

interface TargetMarkerProps {
  name: string;
  x: number;
  y: number;
}

export default function TargetMarker({ name, x, y }: TargetMarkerProps) {
  return (
    <div 
      className={styles.markerContainer}
      style={{ 
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* <div className={styles.marker} /> */}
      <span className={styles.label}>{name}</span>
    </div>
  );
}