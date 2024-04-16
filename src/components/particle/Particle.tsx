import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { type Container } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import { useParticleOptions } from '../../common/hooks'

export const Particle = () => {
  const [init, setInit] = useState(false)

  const options = useParticleOptions()

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container)
  }

  return init ? (
    <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
  ) : (
    <></>
  )
}
