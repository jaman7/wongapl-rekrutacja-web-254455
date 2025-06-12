import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import type { FooterQuery, FooterQueryVariables } from '../../tina/__generated__/types';

type Props = {
  variables: FooterQueryVariables;
  data: FooterQuery;
  query: string;
};

const FooterText = (props: Props) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const footer = data.footer;

  if (!footer?.body?.children?.length) {
    return <p className="text-sm text-gray-400">Brak treści stopki</p>;
  }

  return <TinaMarkdown content={footer?.body} />;
};

export default FooterText;
