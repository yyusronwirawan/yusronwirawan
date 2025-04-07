import { Github, Instagram } from 'lucide-react';
import { Profile } from '../types';
import { STACKS } from './stack';

export const MY_PROFILE: Profile = {
  name: 'Yusron Wirawanto',
  nickName: 'Yusron',
  avatar: 'https://avatars.githubusercontent.com/u/118438035?v=4',
  address: 'Ponorogo, East Java, Indonesia 🇮🇩',
  status1: 'Working remotely',
  description: 'Specialist in technology and software engineering with experience in web development, IoT, cybersecurity, and cryptography. Focus on responsive, user-friendly, high-performance websites, and system security. More than 4 years of experience in creating innovative digital solutions, mastering frontend & backend technology, and committed to continuing to learn and adapt to the latest developments.',
  socials: [
    
    { label: 'GitHub', href: 'https://github.com/yyusronwirawan', icon: Github },
    { label: 'Instagram', href: 'https://instagram.com/yyusronwirawan', icon: Instagram },
  ],
  skills: STACKS,
};
