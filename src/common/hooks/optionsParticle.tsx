import type { ISourceOptions } from '@tsparticles/engine'
import { useMemo } from 'react'

enum MoveDirection {
  Top,
  Bottom,
  Left,
  Right,
}

export const useParticleOptions = (): ISourceOptions => {
  return useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'bubble',
          },
        },
        modes: {
          bubble: {
            distance: 300,
            duration: 2,
            opacity: 0.8,
            size: 20,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: ['#ffffff', '#495057', '#7572D5'],
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
          direction: MoveDirection.Top,
          enable: true,
          outModes: {
            default: 'out',
            bottom: 'out',
            left: 'out',
            right: 'out',
            top: 'out',
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 1500,
          },
          value: 200,
        },
        opacity: {
          random: {
            enable: true,
            minimumValue: 0.1,
          },
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: {
            enable: true,
            minimumValue: 1,
          },
          value: {
            min: 1,
            max: 5,
          },
          animation: {
            enable: true,
            speed: 4,
            minimumValue: 0.3,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )
}
