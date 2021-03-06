import Image from 'next/image';
function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-theme-accent-green cursor-pointer">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p className="text-white">{name}</p>
      <div className="absolute bottom-1 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
