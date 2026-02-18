import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X } from 'lucide-react';

const VoiceAssistant = ({ language = 'en-IN' }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = language;
      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setTranscript(transcript);
            handleVoiceCommand(transcript);
          } else {
            interimTranscript += transcript;
          }
        }
      };
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, [language]);

  const speak = useCallback((text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [language]);

  const handleVoiceCommand = useCallback((text) => {
    const lower = text.toLowerCase();
    if (lower.includes('top crops') || lower.includes('best crops')) {
      speak('The top ranked oilseed crop this season is Mustard, Pusa Bold variety, with 94% confidence score and expected yield of 1.9 tonnes per hectare in Rajasthan.');
    } else if (lower.includes('mustard')) {
      speak('Mustard, variety Pusa Bold, is ranked number 1. Expected yield 1.9 tonnes per hectare. Confidence: 94%. Best grown in Rajasthan and Haryana during the rabi season.');
    } else if (lower.includes('soybean')) {
      speak('Soybean is ranked number 2. Expected yield 1.8 tonnes per hectare. Great for kharif season in Madhya Pradesh and Maharashtra.');
    } else if (lower.includes('help')) {
      speak('I can help you with: top crop rankings, specific crop details like mustard or soybean, treatment recommendations, and regional insights. Just say the crop name or ask for top crops.');
    } else if (lower.includes('stop')) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [speak]);

  if (!isSupported) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-2">
      {/* Transcript Popup */}
      {showPopup && transcript && (
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 max-w-[280px] relative">
          <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
            <X size={14} />
          </button>
          <p className="text-xs text-gray-500 mb-1 font-medium">You said:</p>
          <p className="text-sm text-gray-800">{transcript}</p>
        </div>
      )}
      {/* Mic Button */}
      <div className="relative">
        {isListening && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40"></span>
        )}
        <button
          onClick={() => {
            if (isListening) { recognitionRef.current?.stop(); }
            else { setTranscript(''); setShowPopup(true); recognitionRef.current?.start(); setIsListening(true); }
          }}
          className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 ${
            isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
          } text-white`}
          title={isListening ? 'Stop listening' : 'Speak a command'}
        >
          {isListening ? <MicOff size={22} /> : <Mic size={22} />}
        </button>
      </div>
    </div>
  );
};

export const SpeakButton = ({ text, language = 'en-IN' }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  if (!window.speechSynthesis) return null;
  const speak = () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <button onClick={speak} className="inline-flex items-center text-primary hover:text-primary/70 transition-colors" title="Listen">
      {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </button>
  );
};

export default VoiceAssistant;
