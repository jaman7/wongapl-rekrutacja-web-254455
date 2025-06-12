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
      <section
        className="relative py-24 bg-center bg-cover"
        style={{
          backgroundImage: `url(${hero?.backgroundImage})`,
          color: hero?.textColor || 'white',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white/90 mb-6 drop-shadow-lg">{hero?.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-lg">{hero?.subtitle}</p>
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
      </section>

      <section className="max-w-7xl mx-auto p-10">
        <TinaMarkdown content={body} />
      </section>

      <section className="px-4 py-10 bg-gray-50 text-center">
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

      <section className="px-4 py-10 bg-white">
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

      <section className="bg-gray-100 px-4 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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

      <section className="bg-gray-100 px-4 py-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
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
