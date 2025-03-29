import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

// const features = [
//   {
//     name: 'Push to deploy.',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: CloudArrowUpIcon,
//   },
//   {
//     name: 'SSL certificates.',
//     description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Database backups.',
//     description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
//     icon: ServerIcon,
//   },
// ]

// export default function Features() {
//   return (
//     <div className="overflow-hidden border-4 border-gray-50 bg-gray-50 rounded-t-[40px] py-24 sm:py-32" style={{ marginTop: "-67px" }}>      <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <div className="lg:pt-4 lg:pr-8">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
//               <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
//                 A better workflow
//               </p>
//               <p className="mt-6 text-lg/8 text-gray-400">
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
//                 iste dolor cupiditate blanditiis ratione.
//               </p>
//               <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
//                 {features.map((feature) => (
//                   <div key={feature.name} className="relative pl-9">
//                     <dt className="inline font-semibold text-gray-900">
//                       <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
//                       {feature.name}
//                     </dt>{' '}
//                     <dd className="inline">{feature.description}</dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//           <img
//             alt="Product screenshot"
//             src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
//             width={2432}
//             height={1442}
//             className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }
// import { useState } from "react";

// const features = [
//   {
//     id: "tabs-with-card-1",
//     title: "All-in-one workspace",
//     description: "Create a business, whether you’ve got a fresh idea.",
//     imgMobile: "./src/assets/image copy.png",
//     imgBrowser: "./src/assets/image copy 2.png",
//   },
//   {
//     id: "tabs-with-card-2",
//     title: "Automation on a whole new level",
//     description: "Use automation to scale campaigns profitably and save time doing it.",
//     imgMobile: "./src/assets/image copy.png",
//     imgBrowser: "./src/assets/image copy 2.png",
//   },
//   {
//     id: "tabs-with-card-3",
//     title: "Solving problems for every team",
//     description: "One tool for your company to share knowledge and ship projects.",
//     imgMobile: "./src/assets/image copy.png",
//     imgBrowser: "./src/assets/image copy 2.png",
//   },
// ];

// export default function FeaturesTabs() {
//   const [activeTab, setActiveTab] = useState(features[0].id);

//   return (
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       <nav className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4" aria-label="Tabs" role="tablist">
//         {features.map((feature) => (
//           <button
//             key={feature.id}
//             onClick={() => setActiveTab(feature.id)}
//             className={`w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none p-3 md:p-5 rounded-xl dark:hover:bg-neutral-800 ${
//               activeTab === feature.id ? "bg-gray-100 dark:bg-neutral-800 text-blue-600" : "text-gray-800 dark:text-white"
//             }`}
//           >
//             <span className="sm:mt-5">
//               <span className="block font-semibold">{feature.title}</span>
//               <span className="hidden lg:block mt-2">{feature.description}</span>
//             </span>
//           </button>
//         ))}
//       </nav>

//       <div className="mt-12 md:mt-16">
//         {features.map((feature) => (
//           <div key={feature.id} className={activeTab === feature.id ? "block" : "hidden"}>
//             <div className="max-w-[1140px] lg:pb-32 relative">
//               <figure className="hidden absolute bottom-0 start-0 z-2 max-w-full w-60 h-auto mb-20 ms-20 lg:block">
//                 <div className="p-1.5 bg-gray-100 rounded-3xl shadow-lg dark:bg-neutral-700">
//                   <img className="max-w-full rounded-[1.25rem] h-auto" src={feature.imgMobile} alt="Features Image" />
//                 </div>
//               </figure>
//               <figure className="ms-auto me-20 relative z-1 max-w-full w-3xl h-auto shadow-lg rounded-b-lg">
//                 <div className="relative flex items-center max-w-3xl bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-neutral-800 dark:border-neutral-700">
//                   <div className="flex justify-center items-center size-full bg-gray-200 text-sm rounded-sm dark:bg-neutral-700 dark:text-neutral-200">www.preline.co</div>
//                 </div>
//                 <div className="bg-gray-800 rounded-b-lg">
//                   <img className="max-w-full h-auto rounded-b-lg" src={feature.imgBrowser} alt="Features Image" />
//                 </div>
//               </figure>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

const features = [
  {
    title: "AI Generations",
    description: "Never get stuck on a blank screen. Generate and edit components from a prompt or image.",
    videoSrc: "./src/assets/rec1.mp4",
    poster: "./src/assets/singer.png",
  },
  {
    title: "Tailwind Visual Editor",
    description: "Build and customize components with a visual editor designed for Tailwind and shadcn/ui.",
    videoSrc: "/videos/features/tailwind.mp4",
    poster: "/images/landing/features/tailwind.webp",
  },
  {
    title: "Code Export",
    description: "Export quality Next.js, Tailwind & shadcn/ui code. Customize without limits and host anywhere.",
    videoSrc: "/videos/features/code-export.mp4",
    poster: "/images/landing/features/code-export.webp",
  },
  {
    title: "Templates & Sections",
    description: "Get started quickly with beautifully designed and customizable templates & components.",
    videoSrc: "/videos/features/sections.mp4",
    poster: "/images/landing/features/sections.webp",
  },
];

const FeatureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressValue = 0;
    let progressInterval;
    
    const startProgress = () => {
      progressInterval = setInterval(() => {
        progressValue += 0.5; // Reduced speed of timeline progression
        setProgress(progressValue);
        if (progressValue >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setProgress(0); // Reset progress before moving to next section
            setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
          }, 500);
        }
      }, 50);
    };

    startProgress();

    return () => clearInterval(progressInterval);
  }, [activeIndex]);

  return (
    <section className="relative flex flex-col items-start gap-10 px-40 py-20 container mx-auto">
      <div className="container px-4 lg:px-0">
        <h2 className="max-w-3xl text-balance font-heading text-3xl font-medium tracking-tighter sm:text-5xl">
          Generative UI meets visual editing
        </h2>
      </div>
      
      {/* Desktop Section */}
      <div className="hidden lg:flex w-full items-center gap-24">
        <div className="flex w-[380px] flex-col gap-10 relative">
          {features.map((feature, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Effect - Only Active Div */}
              {activeIndex === index && (
                <div className="absolute left-[-24px] top-0 h-full w-1 rounded-full bg-gray-400 overflow-hidden"> {/* Changed color to gray-400 */}
                  <div
                    className="absolute left-0 top-0 w-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" // Added gradient color
                    style={{
                      height: `${progress}%`,
                      transition: "height 0.5s linear",
                    }}
                  ></div>
                </div>
              )}
              <button
                className={`relative flex flex-col items-start py-1 lg:cursor-pointer ${
                  activeIndex === index ? "opacity-100" : "opacity-60 hover:opacity-90"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <h4 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </button>
            </div>
          ))}
        </div>
        
        {/* Video Display */}
        <div>
          <video
            width="640"
            height="360"
            poster={features[activeIndex].poster}
            autoPlay
            playsInline
            loop
            className="rounded-md border-default shadow-default"
          >
            <source src={features[activeIndex].videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
