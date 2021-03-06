import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';

function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-theme-card-bg flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center ml-2 rounded-full">
        <Image src="/logo2.png" width={80} height={80} layout="fixed" />
        <div className="flex ml-4 bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-300" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none flex-shrink"
            type="text"
            placeholder="search GuildHub"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="font-semibold whitespace-nowrap text-white">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
