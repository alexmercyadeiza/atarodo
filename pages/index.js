import Head from "next/head";

export default function Home() {
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

      <div class="space-y-32 pt-10 md:pt-20">
        {/* <!--Header--> */}
        <div class="grid md:grid-cols-2">
          <div class="grid place-self-center">
            <div class="mb-20 px-10 md:px-20">
              <img
                src="https://ik.imagekit.io/et8vxrzxxdj/atarodo/atarodo_EFJ3ErEG-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659197026116"
                class="w-36"
                alt=""
              />
            </div>

            <div class="space-y-6 px-10 md:px-20">
              <div class="text-5xl font-medium">
                Better marketing results for future-forward businesses.
              </div>
              <div class="text-xl">
                Win hearts and pockets with data-driven marketing strategies
                that deliver growth at scale for your business.
              </div>

              <div class="flex space-x-5">
                <input
                  type="text"
                  class="block w-full rounded-md border-gray-300 bg-gray-100 px-7 text-lg focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Leave us your email"
                />
                <button class="btn hover:text- h-[4.5rem] rounded-md border-none bg-[#008037] px-9 text-lg font-normal capitalize hover:bg-[#037032]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div
            class="mx-10 mt-10 h-80 self-center rounded-md bg-black bg-cover bg-center p-10 md:mx-20 md:mt-0 md:h-[40rem] md:px-20"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/7970846/pexels-photo-7970846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
          >
            {/* <!-- <div class="w-full"></div> --> */}
          </div>
        </div>

        <div class="bg-at-green grid space-y-20 bg-opacity-10 py-20">
          <div class="grid space-y-5 place-self-center text-center">
            <div class="px-10 text-4xl tracking-tight md:px-0">
              We spice it up different, <br />
              and invite brands like yours to a treat.
            </div>
            <div class="place-self-center px-10 font-medium leading-6 md:w-1/2 md:px-0">
              Win hearts and pockets with data-driven marketing strategies that
              deliver growth at scale for your business.
            </div>
          </div>

          <div class="grid gap-10 px-10 md:grid-cols-3 md:px-20">
            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  Digital Advertising
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  Reach the people that matter to your business in valuable and
                  exciting ways. Amplify your message, and grow your online
                  audience with a variety of ad formats. From display, video,
                  search, social media ads, and more, trust us to connect
                  emotionally with your audience, and drive meaningful
                  engagements for your business.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>

            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  Digital Strategy
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  In today&rsquo;s hyper-connected world, businesses that win
                  know that it&rsquo;s a jungle out here battling for hearts and
                  minds. It&rsquo;s why they come to us for integrated digital
                  strategies that are heavy on data, user-centric, and
                  hyperlocal. The menu is robust. From email marketing campaigns
                  to search engine optimization tactics, we&rsquo;ll help you
                  refine the right marketing mix for your business.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>

            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  Social Media Management
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  Businesses that win tell great stories. We know it&rsquo;s not
                  enough to just maintain a stream of content on social media.
                  Brands that stand out delight audiences with
                  platform-specific, thumb-stopping, and multi-format content
                  that drives socially relevant conversations, shapes the
                  culture around them, and converts followers to brand
                  advocates.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>

            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  Growth Marketing &amp; Strategy
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  Go from 0 to 100, or from 10000 to a million subscribers and
                  more for your digital products. Growth is in our DNA, and for
                  whatever stage you are at your product lifecycle, we are happy
                  to help. B2B, B2C, SaaS and other hybrid companies count on us
                  to make sense of customer data, spot and take advantage of
                  growth opportunities at scale, and create intelligent
                  strategies that improve customer acquisition, activation, and
                  retention.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>

            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  UI/UX Design Consulting
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  Great products begin with a user-centred design thinking
                  process. We simplify complex brand-user interactions, solve
                  design challenges for businesses, enhance customer experiences
                  across web, apps and other brand touchpoints, and build
                  consistent brand design experiences that foster trust, elevate
                  meaningful engagements while positively impacting business
                  objectives.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>

            <div class="flex flex-col justify-between space-y-10 rounded-md border bg-white p-10">
              <div class="space-y-4">
                <div class="text-xl font-medium tracking-normal text-gray-700">
                  Online Reputation Management
                </div>
                <div class="text-sm leading-6 tracking-normal text-gray-600">
                  In a dissonant digital culture, what you say, and what is
                  heard, are two different realities. We know that perception is
                  everything, so let&rsquo;s help you create and maintain a
                  solid brand voice, and build the online image you desire,
                  deepened online narratives of yourself or business, nurture
                  valuable relationships with your audience, monitor, manage,
                  and engage press with tact.
                </div>
              </div>
              <div class="flex cursor-pointer items-center space-x-2 hover:opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
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
                <div class="text-sm font-medium text-gray-700">Learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
