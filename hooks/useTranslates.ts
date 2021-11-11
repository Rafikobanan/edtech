import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { FormatXMLElementFn, Options, PrimitiveType } from 'intl-messageformat';

type Message =
  | [
      MessageDescriptor,
      Record<
        string,
        PrimitiveType | React.ReactNode | FormatXMLElementFn<React.ReactNode, React.ReactNode>
      >?,
      Options?
    ]
  | string
  | undefined;

const useTranslates = (...messages: Message[]): (React.ReactNode | string)[] => {
  const intl = useIntl();

  return messages.map((message) => {
    if (!message) return '';

    if (typeof message === 'string') return intl.formatMessage({ id: message });

    return intl.formatMessage(...message);
  });
};

export default useTranslates;
