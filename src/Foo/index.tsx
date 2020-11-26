import React from 'react';

export interface FooProps {
  title?: string;
  a?: any;
}

export default (props: FooProps) => {
  const { title, a } = props;
  console.log(title, a);
  return <h1>{title}</h1>;
};
