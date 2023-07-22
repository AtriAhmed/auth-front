import React from 'react'
import { ChatBubbleLeftRightIcon, ExclamationTriangleIcon, HomeIcon, InformationCircleIcon, ListBulletIcon, MapPinIcon, PlusIcon, QuestionMarkCircleIcon, TagIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useAuthContext } from '../utils/AuthProvider';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const {user,setUser} = useAuthContext() 
  return (

            <div className="sidebar pt-[4rem] lg:fixed w-full lg:w-[250px] flex flex-row lg:flex-col lg:flex-nowrap flex-wrap overflow-auto h-full shadow bg-gray-800 text-white">

<Link to="/admin/" className="flex flex-row gap-4 p-4 no-underline">
                      <HomeIcon className="block h-6 w-6 flex-start" aria-hidden="true"/>
                            <span className='flex-end'>Home</span>
                        </Link>
     

                   

            </div>

  )
}
