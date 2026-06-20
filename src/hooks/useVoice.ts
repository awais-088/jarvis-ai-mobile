import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';

const useVoice = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = result => {
      if (result.value?.length) {
        setText(result.value[0]);
      }
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      setIsListening(true);
      await Voice.start('en-US');
    } catch (error) {
      console.log(error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    text,
    isListening,
    startListening,
    stopListening,
  };
};

export default useVoice;
