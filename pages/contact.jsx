import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">To contact me, you can get information from the section below.</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href="https://instagram.com/login">
                    <div className="flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-instagram fa-2x" />
                        <p className="font-semibold text-xl">Very Soon!!!</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://twitter.com/Gamerarmy%20Bot%20List">
                    <div className="mt-2 flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-twitter fa-2x" />
                        <p className="font-semibold text-xl">@Gamerarmy Bot List</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/776757761701838858">
                    <div className="mt-2 flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">Nils#0683</p>
                    </div>
                </a>
                <a href="">
                    <div className="mt-2 flex justify-between bg-[#191932]/20 hover:bg-[#191932]/30 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">Very Soon!!!</p>
                    </div>
                </a>
              <div>
        <title>Home | nils-fuchs.ml</title>
        <meta name="description" content="Contact Nils here. (Beta Project)" />
        <link rel="icon" href="/assets/techs/favicon.png" type="image/x-icon" />
               </div>
            </div>
        </div>
      </div>
    </>
  )
}
