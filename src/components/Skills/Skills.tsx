'use client'

import AWSIcon from '@/assets/svg/AWSIcon'
import CSSIcon from '@/assets/svg/CSSIcon'
import DjangoIcon from '@/assets/svg/DjangoIcon'
import DockerIcon from '@/assets/svg/DockerIcon'
import FastAPIIcon from '@/assets/svg/FastAPIIcon'
import FirebaseIcon from '@/assets/svg/FirebaseIcon'
import FlaskIcon from '@/assets/svg/FlaskIcon'
import GitIcon from '@/assets/svg/GitIcon'
import GraphQLIcon from '@/assets/svg/GraphQLIcon'
import HTMLIcon from '@/assets/svg/HTMLIcon'
import JavaScriptIcon from '@/assets/svg/JavaScriptIcon'
import JenkinsIcon from '@/assets/svg/JenkinsIcon'
import MongoDBIcon from '@/assets/svg/MongoDBIcon'
import NextJSIcon from '@/assets/svg/NextJSIcon'
import NodeJSIcon from '@/assets/svg/NodeJSIcon'
import PostgreSQLIcon from '@/assets/svg/PostgreSQLIcon'
import PythonIcon from '@/assets/svg/PythonIcon'
import ReactIcon from '@/assets/svg/ReactIcon'
import ReduxIcon from '@/assets/svg/ReduxIcon'
import TypeScriptIcon from '@/assets/svg/TypeScriptIcon'
import WebpackIcon from '@/assets/svg/WebpackIcon'
import classNames from 'classnames'

const skills = [
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'Python', Icon: PythonIcon },
  { name: 'HTML5', Icon: HTMLIcon },
  { name: 'CSS3', Icon: CSSIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'React Native', Icon: ReactIcon },
  { name: 'Redux', Icon: ReduxIcon },
  { name: 'Node.js', Icon: NodeJSIcon },
  { name: 'Webpack', Icon: WebpackIcon },
  { name: 'Django', Icon: DjangoIcon },
  { name: 'Flask', Icon: FlaskIcon },
  { name: 'FastAPI', Icon: FastAPIIcon },
  { name: 'PostgreSQL', Icon: PostgreSQLIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'Firebase', Icon: FirebaseIcon },
  { name: 'AWS', Icon: AWSIcon },
  { name: 'GraphQL', Icon: GraphQLIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'Jenkins', Icon: JenkinsIcon },
  { name: 'Docker', Icon: DockerIcon },
]

export default function Skills({ dualPage }: { dualPage?: boolean }) {
  return (
    <div
      className={classNames('grid gap-y-4 gap-x-2 grid-cols-3 sm:grid-cols-4', {
        'md:gap-8 md:grid-cols-6 xl:grid-cols-8': !dualPage,
        'md:gap-4 md:grid-cols-5': dualPage,
      })}>
      {skills.map(({ name, Icon }) => (
        <button
          key={name}
          className='group hover:scale-120 focus:scale-120 transition cursor-pointer'
          onClick={() => {}}>
          <div className='w-full flex flex-col items-center gap-2 p-2'>
            <Icon className='h-[40px] w-[40px] md:h-[50px] md:w-[50px]' />
            <p className='text-md md:text-lg text-center'>{name}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
