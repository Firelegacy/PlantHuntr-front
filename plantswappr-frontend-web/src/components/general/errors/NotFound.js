import React from 'react';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return <p>{t('404')}</p>;
}

export default NotFound;
