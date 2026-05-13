/**
 * ============================================================================
 * AnimatedSection.tsx — Utilitários de Animação de Scroll
 * ============================================================================
 * 
 * Este módulo exporta 3 componentes reutilizáveis para animações baseadas em scroll:
 * 
 * 1. AnimatedSection
 *    - Componente wrapper que anima um elemento quando ele entra no viewport
 *    - Suporta 5 direções: up, down, left, right, none
 *    - Usa IntersectionObserver via useInView do Framer Motion
 *    - Ideal para títulos de secção e blocos individuais
 * 
 * 2. StaggerContainer
 *    - Container que aplica animação escalonada aos filhos
 *    - Cada filho aparece com um pequeno atraso (stagger)
 *    - Usa variants do Framer Motion com staggerChildren
 *    - Ideal para grids de cards (projetos, skills, certs, etc.)
 * 
 * 3. StaggerItem
 *    - Item individual dentro de um StaggerContainer
 *    - DEVE ser usado como filho direto de StaggerContainer
 *    - Define variants para animação de entrada (fade + slide up)
 * 
 * UTILIZAÇÃO:
 * 
 *   // Animação simples de um título:
 *   <AnimatedSection direction="up" delay={0.2}>
 *     <h1>Título Animado</h1>
 *   </AnimatedSection>
 * 
 *   // Grid com animação escalonada:
 *   <StaggerContainer className="grid grid-cols-3 gap-4">
 *     <StaggerItem><Card1 /></StaggerItem>
 *     <StaggerItem><Card2 /></StaggerItem>
 *     <StaggerItem><Card3 /></StaggerItem>
 *   </StaggerContainer>
 * 
 * ============================================================================
 */

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// ============================================================================
// AnimatedSection — Animação individual com direção e atraso configurável
// ============================================================================

interface AnimatedSectionProps {
  children: ReactNode;           // Conteúdo a animar
  className?: string;            // Classes CSS adicionais
  delay?: number;                // Atraso em segundos (padrão: 0)
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Direção da animação
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) {
  const ref = useRef(null);
  // useInView retorna true quando o elemento entra no viewport
  // once: true = animação acontece apenas na primeira vez
  // margin: '-80px' = margem de gatilho (começa 80px antes do elemento)
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  // Mapeamento de direções para offsets X/Y
  const directions = {
    up: { y: 40, x: 0 },      // Entra de baixo para cima
    down: { y: -40, x: 0 },    // Entra de cima para baixo
    left: { x: 40, y: 0 },     // Entra da direita para esquerda
    right: { x: -40, y: 0 },   // Entra da esquerda para direita
    none: { x: 0, y: 0 },      // Apenas fade in
  };

  // Dispara a animação quando o elemento fica visível
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] // Cubic bezier suave
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// StaggerContainer — Container com animação escalonada para múltiplos itens
// ============================================================================

export function StaggerContainer({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        // staggerChildren: cada filho aparece com 0.1s de diferença
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================================================
// StaggerItem — Item individual dentro de StaggerContainer
// ============================================================================

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },           // Estado inicial: invisível + 30px abaixo
        visible: {
          opacity: 1,
          y: 0,                                    // Estado final: visível + posição correta
          transition: { duration: 0.5, ease: 'easeOut' }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
