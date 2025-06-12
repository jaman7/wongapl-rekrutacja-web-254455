import { tinaField, useTina } from 'tinacms/dist/react';
import type { PageQuery, PageQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const HomePage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { hero, features, testimonials, section1, section2, section3, body } = data.page;

  return (
    <main className="block">
      <section className={`bg-gradient-to-r from-${hero?.gradientFrom} to-${hero?.gradientTo} text-white py-28 relative overflow-hidden`}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">{hero?.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">{hero?.subtitle}</p>
          <div className="flex justify-center gap-4">
            {hero?.buttons?.map((btn, i) => (
              <a
                key={i}
                href={btn?.href ?? ''}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  btn?.variant === 'primary'
                    ? 'bg-white text-purple-700 shadow hover:bg-gray-100'
                    : 'border border-white text-white hover:bg-white hover:text-purple-700'
                }`}
              >
                {btn?.label}
              </a>
            ))}
          </div>
        </div>

        {hero?.showBlob && (
          <svg
            className="absolute -top-16 -right-20 opacity-30 w-[400px] h-[400px] rotate-12"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#ffffff" d="M41.6,-55.3C54.8,-50.3,67.7,-39.8..." transform="translate(100 100)" />
          </svg>
        )}
      </section>

      <section className="max-w-7xl mx-auto p-10">
        <TinaMarkdown content={body} />
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {features?.map((f) => (
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{f?.title}</h3>
                <p className="text-gray-600">{f?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What People Say</h2>
          <div className="grid sm:grid-cols-2 gap-10">
            {testimonials?.map((t) => (
              <div className="border p-6 rounded-lg">
                <img src={t?.avatar ?? ''} alt={t?.author ?? ''} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <blockquote className="italic text-gray-700">“{t?.quote}”</blockquote>
                <p className="mt-4 font-semibold">{t?.author}</p>
                <p className="text-sm text-gray-500">{t?.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src={section1?.image ?? ''} alt="Illustration 1" className="w-full" />
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">{section1?.title}</h2>
            <p>{section1?.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center p-10">
        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-4">{section2?.title}</h2>
          <p>{section2?.subtitle}</p>
        </div>
        <img src={section2?.image ?? ''} alt="Illustration 2" className="w-full" />
      </section>

      <section className="bg-gray-100 p-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src={section3?.image ?? ''} alt="Illustration 1" className="w-full" />
          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-4">{section3?.title}</h2>
            <p>{section3?.subtitle}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
