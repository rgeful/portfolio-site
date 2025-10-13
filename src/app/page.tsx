'use client';
import Image from "next/image";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
} from "react-icons/ri";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/rgeful",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saul-plascencia-86460128a/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Email",
    href: "mailto:saulplascencia09@gmail.com",
    Icon: RiMailLine,
  },
];
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] overflow-hidden items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Image
              src="/me.jpg"
              alt="Saul"
              width={122}
              height={122}
              quality={100}
              priority
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-start', flexDirection: 'column' }}>
                <p style={{ fontSize: '38px' }}>Hi, I&apos;m Saul</p>
                <p className="text-md">Computer science student</p>
              </div>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                {socials.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75"
                    >
                  <social.Icon
                    style={{ fontSize: "1.25em" }}
                  />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          </main>
        </div>
      );
    }