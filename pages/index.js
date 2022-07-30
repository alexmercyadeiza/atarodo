import Head from 'next/head'

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

      <div className="text-4xl grid place-items-center h-screen">
        <div>
          <img
            src="https://ik.imagekit.io/et8vxrzxxdj/atarodo/atarodo_EFJ3ErEG-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1659197026116"
            className="p-10 w-80"
          />
        </div>
      </div>
    </div>
  );
}
