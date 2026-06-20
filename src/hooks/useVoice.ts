import { useState } from 'react';

export const useVoice = () => {
  const [isListening, setIsListening] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);

  const [text, setText] = useState('');

  const startListening = () => {
    setIsListening(true);

    setText('Hello Jarvis');
  };

  const stopListening = () => {
    setIsListening(false);

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return {
    text,
    isListening,
    isProcessing,
    startListening,
    stopListening,
  };
};
