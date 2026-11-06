import { useEffect, useRef, useState } from 'react';
import { relationship } from '../data/relationship';
import { getRelationshipTime } from '../utils/relationShipCounter';
import './RelationshipCounter.css';

function RelationshipCounter() {
  const [timeTogether, setTimeTogether] = useState(
    () => getRelationshipTime(relationship.startDate),
  );
  const [position, setPosition] = useState(null);
  const counterRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeTogether(getRelationshipTime(relationship.startDate));
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    function keepCounterInViewport() {
      const counter = counterRef.current;
      if (!counter || !position) {
        return;
      }

      const maxLeft = Math.max(0, window.innerWidth - counter.offsetWidth);
      const maxTop = Math.max(0, window.innerHeight - counter.offsetHeight);
      const left = Math.min(position.left, maxLeft);
      const top = Math.min(position.top, maxTop);

      if (left !== position.left || top !== position.top) {
        setPosition({ left, top });
      }
    }

    window.addEventListener('resize', keepCounterInViewport);
    return () => window.removeEventListener('resize', keepCounterInViewport);
  }, [position]);

  function handlePointerDown(event) {
    if (event.button !== 0) {
      return;
    }

    const counter = counterRef.current;
    if (!counter) {
      return;
    }

    event.preventDefault();
    const bounds = counter.getBoundingClientRect();
    dragRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      left: bounds.left,
      top: bounds.top,
    };
    setPosition({ left: bounds.left, top: bounds.top });
    counter.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!dragRef.current || !counterRef.current) {
      return;
    }

    const counter = counterRef.current;
    const maxLeft = Math.max(0, window.innerWidth - counter.offsetWidth);
    const maxTop = Math.max(0, window.innerHeight - counter.offsetHeight);
    const nextLeft = dragRef.current.left + event.clientX - dragRef.current.pointerX;
    const nextTop = dragRef.current.top + event.clientY - dragRef.current.pointerY;

    setPosition({
      left: Math.min(Math.max(0, nextLeft), maxLeft),
      top: Math.min(Math.max(0, nextTop), maxTop),
    });
  }

  function handlePointerEnd() {
    dragRef.current = null;
  }

  return (
    <aside
      ref={counterRef}
      className="relationship-counter"
      style={position ? { left: position.left, top: position.top, right: 'auto' } : undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      aria-label={`Juntos há ${timeTogether.days} dias, ${timeTogether.hours} horas e ${timeTogether.minutes} minutos`}
      title="Arraste para mover"
    >
      <span className="relationship-counter__heart" aria-hidden="true">♥</span>
      <span>{timeTogether.days.toLocaleString('pt-BR')} dias juntos</span>
      <span className="relationship-counter__separator" aria-hidden="true">·</span>
      <span>{timeTogether.hours}h {String(timeTogether.minutes).padStart(2, '0')}m</span>
    </aside>
  );
}

export default RelationshipCounter;
