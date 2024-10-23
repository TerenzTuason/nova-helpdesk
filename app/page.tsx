import Link from "next/link";
import SideBar from "./components/Sidebar";

interface companyUpdate {
  title: string,
  description: string
}

export default function Home() {

  const companyUpdates : companyUpdate[] = [
    {
      title: "New member of the dev team...",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis consequuntur odit ducimus dignissimos? Dolore itaque, praesentium dolorum similique doloribus excepturi perferendis soluta rerum quia, neque optio libero ipsa. Suscipit?"
    },
    {
      title: "New website live!",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maxime vel, quam aut architecto eveniet eligendi deleniti enim ut cupiditate temporibus, veniam nisi? Natus quos corrupti voluptatibus, perspiciatis culpa illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor asperiores eligendi tempore accusantium modi maiores suscipit tempora molestias cumque consequuntur sint nostrum nihil, dolorem officiis facilis soluta eos ratione."
    }
  ]

  return (
    <div className="p-[30px] bg-gunmetal min-h-screen">

      <p className='text-white text-center'>Welcome to the NovaHelpdesk Dashboard! Here you can quickly see an overview of your ticket statuses, including open, closed, and pending tickets. Stay updated with recent activities, such as ticket updates and new ticket creations, and keep an eye on important announcements like software updates and scheduled maintenance. For any assistance, feel free to contact our support team or refer to the help documentation.</p>

      <p className='font-bold text-lavender mt-[30px]'>Company Updates</p>

      {companyUpdates.map((update) => (
        <div className='mt-[20px] w-full flex flex-col gap-[10px] bg-jet text-white rounded-[10px] p-[20px]'>
          <p className="font-bold">{update.title}</p>
          <p>{update.description}</p>
        </div>
      ))}


    </div>
  );
}
