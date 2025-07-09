import React from 'react'

const AboutMe = () => {
  return (
    <>
      <p className='text-md md:text-lg mb-4'>
        Hey there
        <span
          role='img'
          aria-label='waving hand'
          className='inline-block ml-1 align-middle'>
          👋
        </span>
        ! I’m Nishanth Prasanna Kumar — a passionate Full-Stack Software
        Engineer with around 4 years of industry experience, and a recent
        Master’s graduate in Computer Science from UC Riverside.
      </p>
      <p className='text-md md:text-lg mb-4'>
        I specialize in building fast, accessible, and scalable web applications
        that make a real difference. Whether it&apos;s crafting sleek user
        interfaces with React and TypeScript, designing clean backend APIs with
        FastAPI and Django, or optimizing cloud workflows using AWS, I love
        turning complex problems into elegant solutions.
      </p>
      <p className='text-md md:text-lg mb-4'>
        At HashedIn by Deloitte, I led the development of performance
        dashboards, real-time data visualizations, and cloud resource tools that
        improved efficiency across teams. I take pride in writing clean,
        reusable code and collaborating across teams to bring ideas to life —
        from whiteboard to production.
      </p>
      <p className='text-md md:text-lg mb-4'>
        Outside of work, I enjoy exploring emerging web technologies, building
        side projects, and diving into design systems and architecture patterns.
        I believe great software is not just functional — it’s thoughtful,
        inclusive, and built to last.
      </p>
      <p className='text-md md:text-lg mb-4'>
        Let’s build something awesome together.
      </p>
    </>
  )
}

export default AboutMe
