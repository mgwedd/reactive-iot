import React, { Component } from 'react';

export default function PostScreen( props ) {
  const { match } = props;
  return (
    <h2>{`Read: ${match.params.slug}`}</h2>
  );
}
