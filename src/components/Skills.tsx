import React from 'react'
import Image from 'next/image'
import path from 'path'

const Skills = () => {

    const images =[
        { name: 'css', path:'/CSS.svg'},
        { name: 'docker', path: '/Docker.svg'},
        { name: 'Figma', path: 'Figma.svg'},
        { name: 'Git', path: 'Git.svg'},
        { name: 'GiHub', path: 'GitHub.svg'},
        { name: 'HTML', path: 'HTML.svg'},
        { name: 'Illustrator', path: 'Illustrator.svg'},
        { name: 'Java', path: 'Java.svg'},
        { name: 'JS', path: 'JS.svg'},
        { name: 'MaterialUI', path: 'MaterialUI-Dark.svg'},
        { name: 'MySQL', path: 'MySQL.svg'},
        { name: 'NextJS', path: 'NextJS-Dark.svg'},
        { name: 'Photoshop', path: 'Photoshop.svg'},
        { name: 'PHP', path: 'PHP.svg'},
        { name: 'Postman', path: 'Postman.svg'},
        { name: 'React', path: 'React.svg'},
        { name: 'Spring-Dark', path: 'Spring-Dark.svg'},
        { name: 'Tailwind', path: 'Tailwind.svg'},
        { name: 'TS', path: 'TS.svg'},
    ]
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
        {images.map((images, index) => (
            <Image src={images.path} alt='Hamburger' key={index} width={40} height={40}/>
        ))}
    </div>
  )
}

export default Skills