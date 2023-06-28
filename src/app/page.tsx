import AboutSection from '@/components/about'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HomeSection from '@/components/home'
import ProjectsSection from '@/components/projects'
import SkillsSection from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <HomeSection />
        <div
          id='content'
          className='px-8 relative flex items-center max-w-[1100px] mx-auto'
        >
          <div className='h-full text-left max-w-full'>
            <div className='grid grid-cols-2 gap-2 h-full w-full'>
              <Header />
              <div className='col-span-1 max-[800px]:col-span-2 flex flex-col'>
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
