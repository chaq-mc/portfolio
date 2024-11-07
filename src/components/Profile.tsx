const Profile = () => {

  const avatarURL = import.meta.env.VITE_PROFILE_AVATAR_URL;

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Chequel McNeil</h1>
            <span className="bg-gradient-to-r from-accent via-slate-400 to-green-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Software Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter antialiased">
            I am a results focused software engineer with 7+ years of experience in development, design, analysis, debugging, and implementation of enterprise level solutions. Well versed in a variety of technologies and languages utilized to build modern enterprise applications.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-full h-96" src={avatarURL} alt="Chequel McNeil" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile