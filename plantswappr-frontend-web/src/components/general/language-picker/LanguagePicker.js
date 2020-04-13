import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/core';

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();

  return (
    <Button
      type="button"
      variant="ghost"
      variantColor="gray"
      size="sm"
      aria-label="Change language"
      onClick={() =>
        i18n.changeLanguage(i18n.languages[0] === 'en' ? 'fr' : 'en')
      }
    >
      {t('language.'.concat(i18n.languages[0]))}
    </Button>
  );
};

export default LanguagePicker;
