import { useEffect, useState } from 'react'
import TechIcon from '../../components/tech-icon'
import InfoWork from './components/info-work'
import Section from './components/section'
import * as S from './styles'
import { IoLogoJavascript } from 'react-icons/io5'
import { api } from '../../hooks/api'
import { PropsExperience } from '../../types/api-interface'
import { iconMapping } from '../../utils'
import { PropsIcon } from '../project'

const AboutMe = () => {
  const [experiencesWork, setExperiencesWork] = useState<PropsExperience[]>()
  const [experiencesEducation, setExperiencesEducation] =
    useState<PropsExperience[]>()
  const [icons, setIcons] = useState<PropsIcon[] | null>(null)
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const responseWork = await api.get<PropsExperience[]>(
          `experiences?type=WORK`
        )
        const responseEducation = await api.get<PropsExperience[]>(
          `experiences?type=EDUCATION`
        )
        setExperiencesWork(responseWork.data)
        setExperiencesEducation(responseEducation.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExperiences()
  }, [])

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await api.get('icon')
        setIcons(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchIcons()
  }, [])

  return (
    <S.Container>
      <main>
        <Section title="Sobre mim">
          <S.InfoProfile>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </S.InfoProfile>
        </Section>
        <Section title="Experiência de Trabalho">
          {experiencesWork &&
            experiencesWork.map((experience) => {
              return (
                <InfoWork
                  title={experience.title}
                  date={experience.endDate}
                  mode={experience.mode}
                  companyName={experience.organization}
                />
              )
            })}
        </Section>
        <Section title="Education">
          {experiencesEducation &&
            experiencesEducation.map((experience) => {
              return (
                <InfoWork
                  title={experience.title}
                  date={experience.endDate}
                  mode={experience.mode}
                  companyName={experience.organization}
                />
              )
            })}
        </Section>
      </main>
      {
        //TODO: Adiconar cor ao icone
      }
      <aside>
        <Section title="Tech Stack">
          <S.WrapperIcon>
            <S.StyleIcon>
              <TechIcon Icon={IoLogoJavascript} size={48} color={'#F5DE19'} />
            </S.StyleIcon>
            {icons &&
              icons.map((icon, index) => {
                const IconComponent = iconMapping[icon.name_icon]
                if (IconComponent) {
                  return (
                    <S.StyleIcon>
                      <TechIcon
                        key={index}
                        Icon={IconComponent}
                        color="#F5DE19"
                        size={48}
                      />
                    </S.StyleIcon>
                  )
                }
                return null
              })}
          </S.WrapperIcon>
        </Section>
      </aside>
    </S.Container>
  )
}

export default AboutMe
