import Link from 'next/link';
import Image from 'next/image';

import CodeBlock from './CodeBlock';

const CustomLink = props => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} /> // eslint-disable-line
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  pre: props => <div {...props} />,
  code: CodeBlock,
};

export default MDXComponents;
