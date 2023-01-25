import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);

  const handleToggle = (type) => {
    if (type == "one") {
      setOne(true);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(false);
    }

    if (type == "two") {
      setOne(false);
      setTwo(true);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(false);
    }

    if (type == "three") {
      setOne(false);
      setTwo(false);
      setThree(true);
      setFour(false);
      setFive(false);
      setSix(false);
    }

    if (type == "four") {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(true);
      setFive(false);
      setSix(false);
    }

    if (type == "five") {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(true);
      setSix(false);
    }

    if (type == "six") {
      setOne(false);
      setTwo(false);
      setThree(false);
      setFour(false);
      setFive(false);
      setSix(true);
    }
  };

  return (
    <div>
      <Head>
        <title>
          Atarodo &mdash; Growth, Marketing and Communications Agency
        </title>
        <meta
          name="description"
          content="Better marketing results for future-forward businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pb-20">
        <div className="grid bg-yellow-50 bg-opacity-50 py-10 md:grid-cols-2 md:py-20">
          <div className="grid place-self-center">
            <div className="mb-20 px-10 md:px-20">
              <img
                src="https://ik.imagekit.io/et8vxrzxxdj/atarodo/atarodo_EFJ3ErEG-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659197026116"
                className="w-36"
                alt=""
              />
            </div>

            <div className="space-y-6 px-10 md:px-20">
              <div className="text-6xl font-medium">
                Better marketing results for future-forward businesses.
              </div>
              <div className="text-2xl font-medium">
                Win hearts and pockets with data-driven marketing strategies
                that deliver growth at scale for your business.
              </div>

              <div className="flex space-x-5">
                {/* <!-- <input type="text" className="block w-full rounded-md border-gray-300 bg-gray-100 px-7 text-lg focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Leave us your email" /> --> */}
                <button className="hover:text- btn h-[4.5rem] rounded-md border border-red-300 bg-red-100 px-9 text-xl font-normal capitalize text-red-500 hover:border-red-500 hover:bg-red-500 hover:text-white">
                  Schedule a strategy session
                </button>
              </div>
            </div>
          </div>

          <div
            className="mx-10 mt-10 h-80 self-center rounded-md bg-black bg-cover bg-center p-10 md:mx-20 md:mt-0 md:h-[40rem] md:px-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/7970846/pexels-photo-7970846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
          ></div>
        </div>

        <div className="mx-auto grid w-3/4 grid-cols-6 gap-10 bg-opacity-5 py-10 px-10">
          <div className="grid w-full place-items-center grayscale">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314653/Atarodo%20Logos/AFTS_General_Logo_letterhead_1_ph29za.jpg"
              alt=""
            />
          </div>

          <div className="grid w-full place-items-center">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314645/Atarodo%20Logos/63ac294bda54a2252afa05f3_Group_11_fb0jd9.svg"
              alt=""
            />
          </div>

          <div className="grid w-full place-items-center p-6 grayscale">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314644/Atarodo%20Logos/logo-10cfbe158c56868f553d06d1ed5ed677e2c4f0341176a1e8e588a2945988c351_lwpibe.png"
              alt=""
            />
          </div>

          <div className="grid w-full place-items-center p-6 grayscale">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314643/Atarodo%20Logos/yev3hmh0yumv3kkzyywq_dsmnwd.png"
              alt=""
            />
          </div>

          <div className="grid w-full place-items-center p-6 grayscale filter">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314642/Atarodo%20Logos/EFmLYXL8_400x400_bxwcxk.jpg"
              alt=""
            />
          </div>

          <div className="grid w-full place-items-center p-6 grayscale filter">
            <img
              src="https://res.cloudinary.com/dsud8phmd/image/upload/v1674314641/Atarodo%20Logos/koolute_wl64ar.jpg"
              alt=""
            />
          </div>
        </div>

        {/* <!-- Goals --> */}
        <div className="px-10 bg-opacity-10 bg-at-green pb-10 mb-20 md:px-20">
          <div className="grid space-y-20 py-20">
            <div className="grid space-y-5 place-self-center text-center">
              <div className="px-10 text-6xl font-semibold tracking-tight md:px-0">
                We spice it up different, <br />
                and invite brands like yours to a treat.
              </div>
              <div className="place-self-center px-10 text-xl leading-6 md:w-1/2 md:px-0">
                Win with the perfect blend of messaging, tactics, and channels
                that help you stand out.
              </div>
            </div>

            <div className="grid gap-10 px-4 md:grid-cols-4 md:px-0">
              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Digital Advertising
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Reach the people that matter to your business in valuable
                    and exciting ways. Amplify your message, and grow your
                    online audience with a variety of ad formats.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Digital Strategy
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    From email marketing campaigns to search engine optimization
                    tactics and more, we&rsquo;ll help you refine the right
                    marketing mix for your business.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Social Media Management
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Brands that stand out connect with emotions, elevate the
                    conversation, and delight audiences with platform-specific,
                    thumb-stopping, and multi-format content.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Web-Mobile Optimization + SEO
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Tell your story and sell your product experience better
                    across screens, and take advantage of search engines to
                    increase organic visibility for your business.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Growth Marketing &amp; Strategy
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Tell your story and sell your product experience better
                    across screens, and take advantage of search engines to
                    increase organic visibility for your business.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Marketing Automation
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Take out repetitive work from your marketing, and deliver
                    personalised experiences across multiple user touchpoints in
                    your apps and digital products.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Product Design + Development
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    We simplify complex brand-user interactions, solve design
                    challenges for businesses, enhance customer experiences
                    across web, apps and other brand touchpoints.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
                <div className="space-y-4">
                  <div className="text-xl font-medium tracking-normal text-gray-700">
                    Online Reputation Management
                  </div>
                  <div className="text-sm leading-6 tracking-normal text-gray-600">
                    Create and maintain a solid brand voice, and build the
                    online image you desire. Let&rsquo;s help you Tactically
                    create and share online narratives of yourself or business.
                  </div>
                </div>
                <div className="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-sm font-medium text-gray-700">
                    Learn more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 md:px-20 space-y-20">
          <div className="grid px-10 md:px-20">
            <div className="text-5xl text-center font-medium">
              Reach and go beyond your business goals.
            </div>
          </div>

          <div className="mx-auto grid grid-cols-4 gap-6">
            <div className="h-96 bg-[#FFEBB4] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#B86A29]">
                Build an online presence for your business and help people
                discover you easily.
              </div>
            </div>

            <div className="h-96 bg-[#FEF0E1] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320778/Business%20Goals%20Section/05_slqbq3.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#661A17]">
                Deepen customer relationships with automated offers and
                incentives.
              </div>
            </div>

            {/* <div className="h-96 bg-[#FBD6B7] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320812/Business%20Goals%20Section/02_use_aurfgd.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#AA4430]">
                Court customer loyalty and nurture valuable relationships with
                your online audience.
              </div>
            </div> */}

            <div className="h-96 bg-[#F4A5A0] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320785/Business%20Goals%20Section/03_pbv7fp.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#791C2A]">
                Drive brand awareness for your business, attract the right
                customers for your business.
              </div>
            </div>

            <div className="h-96 bg-[#83C8C0] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320780/Business%20Goals%20Section/04_cu7h89.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#255357]">
                Boost Sales and Revenue with online marketing campaigns that
                reach the right people.
              </div>
            </div>

            <div className="h-96 bg-[#C8E7FA] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320782/Business%20Goals%20Section/06_antjtj.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#094E6D]">
                Transform data into revenue with email marketing; reach your
                customer&rsquo;s inbox and grow your business.
              </div>
            </div>

            <div className="h-96 bg-[#FBD6B7] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674677272/Business%20Goals%20Section/pexels-tima-miroshnichenko-5198239_esdabq.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#AA4430]">
                Automate and personalize marketing workflows that keep your
                customers engaged.
              </div>
            </div>

            <div className="h-96 bg-[#FFEBB4] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320758/Business%20Goals%20Section/10_gc6kdj.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#B86A29]">
                Get more people to download and use your app.
              </div>
            </div>

            {/* <div className="h-96 bg-[#F4A5A0] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320785/Business%20Goals%20Section/03_pbv7fp.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#791C2A]">
                Drive brand awareness for your business, attract the right
                customers for your business.
              </div>
            </div> */}

            {/* <div className="h-96 bg-[#83C8C0] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320780/Business%20Goals%20Section/04_cu7h89.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#255357]">
                Boost Sales and Revenue with online marketing campaigns that
                reach the right people.
              </div>
            </div> */}

            {/* <div className="h-96 bg-[#FEF0E1] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674320778/Business%20Goals%20Section/05_slqbq3.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#661A17]">
                Build great customer relationships with conversational
                marketing.
              </div>
            </div> */}

            <div className="h-96 bg-[#FFEBB4] p-6">
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium text-[#B86A29]">
                Build and refine a great online reputation strategy for you or
                your business
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Section 4 --> */}
        <div className="bg-gray-100">
          <div className="my-20 mx-auto grid w-2/3 grid-cols-2 place-items-center gap-14 p-10 py-40">
            <div className="space-y-7">
              <div className="text-4xl font-medium">
                No matter the size of your business, think of àtarodo as growth
                partners.
              </div>
              <div className="font-medium">
                From water tight content marketing strategies, to emails that
                converts, hypertargeted ads that leaves nothing on the table,
                and digital experiences that connect deeply with your users, we
                are helping ambitious businesses like yours go further, faster.
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.7"
                  stroke="currentColor"
                  className="h-9 w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-sm font-semibold">Schedule a session</div>
              </div>
            </div>
            {/* <!-- Dropdowns --> */}
            <div className="w-full">
              <div
                onClick={() => setTwo(!two)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">Startups</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${two && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {two && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      Build and nurture a valuable online audience for your
                      startup.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Become a market leader with thought leadership that stands
                      out.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Create and grow a robust lead pipeline.
                    </div>
                    <div className="pt-6">
                      Get consistent user growth, boost sales and revenue.
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setOne(!one)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">
                    Digital Commerce Businesses
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${one && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {one && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      <span className="font-medium">Get Discovered:</span> Make
                      it easy for your customers to find you online.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Build relationships with your audience with engaging
                      content.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Attract the right people and generate more quality leads.
                    </div>
                    <div className="pt-6">
                      Boost sales with digital ads that converts.
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setFour(!four)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">Agencies</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${four && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {four && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      Run successful campaigns for your clients with expert
                      support.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Easily outsource client work and deliver great results on
                      time.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Get informed second opinions on strategies and marketing
                      collaterals.
                    </div>
                    <div className="pt-6">
                      Leverage our media relationships for global PR campaigns.
                    </div>
                  </div>
                )}
              </div>

              {/* <div className="border-b border-yellow-700 border-opacity-20 py-6">
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">
                    International Businesses
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                <div>
                  <div className="border-b border-gray-200 py-6">
                    Launch in new markets with localised strategies that
                    connects.
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    Grow your business bottom line with sustainable online and
                    offline marketing strategies.
                  </div>
                  <div className="border-b border-gray-200 py-6">
                    Maintain top-of-mind awareness with multi-channel
                    advertising campaigns.
                  </div>
                  <div className="pt-6">
                    Execute widescale, hyperlocal, and cross-cultural marketing
                    campaigns successfully.
                  </div>
                </div>
              </div> */}

              <div
                onClick={() => setFive(!five)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">
                    Media and Publishers
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${five && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {five && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      Reach more in-market and affinity audiences for your
                      publication.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Grow subscriptions and meaningful engagements.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Build and maintain an engaged community of fans of your
                      work.
                    </div>
                    <div className="pt-6">
                      Run campaigns for new product launches, events, and
                      merchandise.
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setThree(!three)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">
                    International Businesses
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${three && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {three && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      Launch in new markets with localised strategies that
                      connects.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Grow your business bottom line with sustainable online and
                      offline marketing strategies.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Maintain top-of-mind awareness with multi-channel
                      advertising campaigns.
                    </div>
                    <div className="pt-6">
                      Execute widescale, hyperlocal, and cross-cultural
                      marketing campaigns successfully.
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setSix(!six)}
                className="border-b border-yellow-700 border-opacity-20 py-6"
              >
                <div className="flex cursor-pointer justify-between text-yellow-600 hover:opacity-60">
                  <div className="text-xl font-medium capitalize">
                    Thought Leaders and Influential Figures
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.0"
                    stroke="currentColor"
                    className={`h-6 w-6 ${six && `rotate-90`}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>

                {six && (
                  <div>
                    <div className="border-b border-gray-200 py-6">
                      Create and nurture a loyal following online.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Build authentic relationships with storytelling and unique
                      content.
                    </div>
                    <div className="border-b border-gray-200 py-6">
                      Understand your audience and interact with them based on
                      reliable insights.
                    </div>
                    <div className="pt-6">
                      Measurably grow your personal brand and monetise your
                      audience.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 px-10 md:px-20">
          <div className="grid items-center justify-between">
            <div>
              {/* <!-- <div className="capitalize">featured posts</div> --> */}
              <div className="w-2/4 text-4xl font-medium">
                Grow your business with leading marketing insights, curated just
                for you.
              </div>
            </div>

            <div className="flex cursor-pointer  items-center space-x-2 hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="0.7"
                stroke="currentColor"
                className="h-9 w-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <div>Read more on the blog</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            <a
              target="_blank"
              href="https://theatarodong.medium.com/how-to-successfully-partner-with-creators-3e68316a3233"
              className="h-[30rem] hover:opacity-80"
            >
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-center p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674329393/image_g5sjek.jpg')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium">
                How to successfully partner with creators
              </div>
            </a>

            <a
              target="_blank"
              href="https://theatarodong.medium.com/hyper-localized-marketing-campaigns-the-what-the-why-the-how-and-examples-e3914c33a387"
              className="h-[30rem] hover:opacity-80"
            >
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-right p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674330357/image_wci6qm.png')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium">
                Hyper-localized Marketing Campaigns — The What, The Why, The
                How, and Examples
              </div>
            </a>

            <a
              target="_blank"
              href="https://theatarodong.medium.com/are-short-form-videos-the-future-of-marketing-8d844ede55c9"
              className="h-[30rem] hover:opacity-80"
            >
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-right p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674330807/image_k1zzw2.png')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium">
                Are short-form videos the future of marketing?
              </div>
            </a>

            <a
              target="_blank"
              href="https://theatarodong.medium.com/developing-a-pr-plan-for-your-start-up-9f9f563cc793"
              className="h-[30rem] hover:opacity-80"
            >
              <div
                className="h-2/3 bg-gray-200 bg-cover bg-right p-2"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674330889/image_pw7gbd.png')`,
                }}
              ></div>
              <div className="text- pt-6 font-medium">
                Developing a PR plan for your start-up
              </div>
            </a>
          </div>
        </div>

        <div className="space-y-10 bg-orange-800 py-20">
          <div
            className="mx-auto h-[35rem] w-2/3 bg-gray-400 bg-cover p-10"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dsud8phmd/image/upload/v1674334726/pexels-nappy-936144_1_tdq1fi.jpg')`,
            }}
          ></div>
          <div className="mx-auto grid w-2/3 space-y-10">
            <div className="text-center text-2xl text-white">
              Atarodo is a full service agency working at the intersection of
              brand storytelling and performance. We transform brands into
              delightful experiences, customers into advocates, and ideas into
              resilient companies.
            </div>
            <div className="grid place-self-center">
              <button className="btn h-[4.5rem] rounded-full border-none bg-orange-100 px-9 text-xl font-normal capitalize text-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                Schedule a strategy session
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <div className="space-y-6 px-10 pt-20 md:px-20">
          <div className="grid grid-cols-3">
            <div className="space-y-6">
              <div className="font-bold">Follow us on social.</div>
              <div>
                <div>Twitter</div>
                <div>LinkedIn</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-bold">Call or Email</div>
              <div>
                <div>
                  <a href="tel:+234 810 9229 773">+234 810 9229 773</a>
                </div>
                <div>theatarodong@gmail.com</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="font-bold">átarodo</div>
              <div>
                <div>&copy; 2022 Atarodo.</div>
                <div>All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
