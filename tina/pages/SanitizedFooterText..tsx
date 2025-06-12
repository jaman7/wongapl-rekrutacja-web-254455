import { useTina } from 'tinacms/dist/react';
import type { FooterQuery, FooterQueryVariables } from '../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { renderToStaticMarkup } from 'react-dom/server';
import sanitizeHtml from 'sanitize-html';

type Props = {
  variables: FooterQueryVariables;
  data: FooterQuery;
  query: string;
};

const SanitizedFooterText = (props: Props) => {
  const { data } = useTina(props);
  const footer = data.footer;

  if (!footer?.body?.children?.length) {
    return <p className="text-sm text-gray-400">Brak treści stopki</p>;
  }

  const rawHtml = renderToStaticMarkup(<TinaMarkdown content={footer.body} />);
  const sanitizedHtml = sanitizeHtml(rawHtml, {
    allowedTags: ['p', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  });

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default SanitizedFooterText;

// import { useTina } from 'tinacms/dist/react';
// import { TinaMarkdown } from 'tinacms/dist/rich-text';
// import sanitizeHtml from 'sanitize-html';
// import type { FooterQuery, FooterQueryVariables } from '../__generated__/types';
// import { SafeTinaMarkdown } from '../../src/components/react/SanitizedMarkdown';

// type Props = {
//   variables: FooterQueryVariables;
//   data: FooterQuery;
//   query: string;
// };

// const FooterText = (props: Props) => {
//   const { data } = useTina({
//     query: props.query,
//     variables: props.variables,
//     data: props.data,
//   });

//   const footer = data.footer;

//   if (!footer?.body?.children?.length) {
//     return <p className="text-sm text-gray-400">Brak treści stopki</p>;
//   }

//   // return <TinaMarkdown content={footer?.body} />;
//   return <SafeTinaMarkdown content={footer.body} />;
// };

// export default FooterText;
