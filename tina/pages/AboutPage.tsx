import { tinaField, useTina } from 'tinacms/dist/react';
import type { PageQuery, PageQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Props = {
  variables: PageQueryVariables;
  data: PageQuery;
  query: string;
};

const AboutPage = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { hero, aboutSections, testimonials, section1, section2, section3, body } = data.page;

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
        </div>
      </section>

      <section className="px-4 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {aboutSections?.map((section, index) => (
            <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-12`}>
              <img src={section?.image ?? ''} alt={section?.title ?? ''} className="w-full md:w-1/2" />
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{section?.title}</h2>
                <p className="text-lg text-gray-700 whitespace-pre-line">{section?.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-10">
        <TinaMarkdown content={body} />
      </section>
    </main>
  );
};

export default AboutPage;
