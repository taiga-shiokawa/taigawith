import Image from 'next/image';
import Container from '../common/Container';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiGo, 
  SiOpenjdk,
  SiSharp, 
  SiSpringboot,
  SiDotnet
} from 'react-icons/si';

const About = () => {
  const mainSkills = [
    {
      category: 'フロントエンド',
      items: [
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiTypescript, name: 'TypeScript' },
      ]
    },
    {
      category: 'バックエンド',
      items: [
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiGo, name: 'Golang' },
        { icon: SiOpenjdk, name: 'Java' },
        { icon: SiSharp, name: 'C#' }
      ]
    },
    {
      category: 'フレームワーク',
      items: [
        { icon: SiSpringboot, name: 'Spring Boot' },
        { icon: SiDotnet, name: 'ASP.NET Core MVC' }
      ]
    }
  ];

  const contacts = [
    { icon: FaEnvelope, href: 'mailto:taiga.hr12@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/taiga-shiokawa', label: 'GitHub' }
  ];

  return (
    <section id="about" className="py-20 bg-primary/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent/10 backdrop-blur-sm rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center text-accent/50">
              <svg
                className="w-24 h-24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
              </svg>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-white/80">
              <p>
                現在は、WEB開発会社にてフロントエンド開発とLP制作を担当しています。
                フルスタック開発の経験を活かし、幅広い技術スタックを用いた開発が可能です。
              </p>
              <p>
                AI駆動開発を取り入れることで、最速での価値提供を実現します。
                常に最新の技術トレンドをキャッチアップし、効率的な開発を心がけています。
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">技術スタック</h3>
              {mainSkills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-2">
                  <h4 className="text-sm font-medium text-white/60">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <skill.icon className="w-4 h-4" />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-accent transition-colors"
                    aria-label={contact.label}
                  >
                    <contact.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About; 