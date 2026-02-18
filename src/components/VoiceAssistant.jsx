import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Mic, MicOff, Volume2, VolumeX, X, ChevronUp, BookOpen, Navigation } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

// PAGE CONTENT REGISTRY — maps routes to readable summaries
const PAGE_CONTENT = {
  '/homepage-ai-agricultural-intelligence-platform': `Welcome to AgroYield AI home page. 
    India's number 1 AI platform for oilseed yield optimization. 
    Top ranked crop today: Mustard with 94% confidence in Rajasthan.
    Soybean ranked 2nd in Madhya Pradesh with 91% confidence.
    Groundnut ranked 3rd in Gujarat with 88% confidence.
    We serve over 15,000 farmers with 34% average yield increase and 92% prediction accuracy.`,
  '/ai-ranking-engine-methodology-showcase': `AI Ranking Engine page. 
    Our system analyzes 4 key data sources: Weather patterns from 15,000 stations, 
    Soil conditions with 500 parameters, Market prices from 2,000 centers, 
    and 10 years of historical yield data.
    Current top ranked oilseed: Mustard scoring 94.2 points.
    Soybean at 91.8 and Groundnut at 89.5.`,
  '/crop-championship-center-interactive-rankings': `Crop Championship Rankings page. 
    Rank 1: Mustard, Pusa Bold variety, 89% success probability, expected yield 18.9 quintals per hectare.
    Rank 2: Soybean JS 335, 85% success probability, 12.5 quintals per hectare.
    Rank 3: Groundnut TAG 24, 78% success probability, 18.7 quintals per hectare.
    Rank 4: Sunflower KBSH 44, 82% success probability, 22.5 quintals per hectare.
    Use the calculator to estimate your success probability based on soil, irrigation, and farm size.`,
  '/treatment-rankings-fertilizer-pesticide-intelligence': `Treatment Rankings page.
    Top fertilizer: NPK 19:19:19 Complex Fertilizer, effectiveness 94%, safety rating A.
    Use the ROI calculator to see your expected returns.
    Compare up to 4 treatments side by side.`,
  '/farmer-success-league-community-leaderboards': `Farmer Success League page.
    Top ranked farmer: Rajesh Kumar from Pune Maharashtra with overall score 94.
    Growing mustard with 35% profit margin.
    Active challenge: Winter Crop Optimization with 50,000 rupee prize pool.`,
  '/regional-intelligence-center-location-specific-insights': `Regional Intelligence Center.
    28 active regions covered across India.
    Rajasthan: Mustard yields up 38% with Pusa Bold variety.
    Madhya Pradesh: Soybean farmers saved 28,000 rupees per hectare.
    Gujarat: Groundnut with drip irrigation showed 40% water savings.`,
};

// VOICE NAVIGATION MAP
const NAVIGATION_COMMANDS = {
  'go home': '/homepage-ai-agricultural-intelligence-platform',
  'go to home': '/homepage-ai-agricultural-intelligence-platform',
  'open home': '/homepage-ai-agricultural-intelligence-platform',
  'home page': '/homepage-ai-agricultural-intelligence-platform',
  'go to rankings': '/crop-championship-center-interactive-rankings',
  'open rankings': '/crop-championship-center-interactive-rankings',
  'crop rankings': '/crop-championship-center-interactive-rankings',
  'show rankings': '/crop-championship-center-interactive-rankings',
  'go to treatments': '/treatment-rankings-fertilizer-pesticide-intelligence',
  'open treatments': '/treatment-rankings-fertilizer-pesticide-intelligence',
  'treatment page': '/treatment-rankings-fertilizer-pesticide-intelligence',
  'fertilizers': '/treatment-rankings-fertilizer-pesticide-intelligence',
  'go to ai': '/ai-ranking-engine-methodology-showcase',
  'ai engine': '/ai-ranking-engine-methodology-showcase',
  'how it works': '/ai-ranking-engine-methodology-showcase',
  'methodology': '/ai-ranking-engine-methodology-showcase',
  'go to success league': '/farmer-success-league-community-leaderboards',
  'success league': '/farmer-success-league-community-leaderboards',
  'leaderboard': '/farmer-success-league-community-leaderboards',
  'farmers': '/farmer-success-league-community-leaderboards',
  'go to regional': '/regional-intelligence-center-location-specific-insights',
  'regional intelligence': '/regional-intelligence-center-location-specific-insights',
  'regional page': '/regional-intelligence-center-location-specific-insights',
  'my region': '/regional-intelligence-center-location-specific-insights',
};

// CROP DATA RESPONSES
const CROP_INFO = {
  mustard: 'Mustard, variety Pusa Bold, is ranked number 1. Expected yield: 18.9 quintals per hectare. Success probability: 89%. Investment: 35,000 rupees. ROI: 165%. Best for Rajasthan and Haryana during rabi season. Low water requirement of just 300 millimeters.',
  soybean: 'Soybean, variety JS 335, is ranked number 2. Expected yield: 12.5 quintals per hectare. Success probability: 85%. It is a nitrogen-fixing crop ideal for Madhya Pradesh and Maharashtra during kharif season.',
  groundnut: 'Groundnut, variety TAG 24, is ranked number 3. Expected yield: 18.7 quintals per hectare. Success probability: 78%. Market price around 6,377 rupees per quintal. Best for Gujarat sandy loam soils.',
  sunflower: 'Sunflower, variety KBSH 44, is ranked number 4. Expected yield: 22.5 quintals per hectare. Success probability: 82%. Can be grown in both kharif and rabi seasons. High oil extraction rate of 40 to 42 percent.',
  sesame: 'Sesame, variety GT 10, is ranked number 5. Expected yield: 8.5 quintals per hectare. Success probability: 76%. Sesame commands premium market price of 15,000 rupees per quintal due to its high oil and medicinal value.',
  castor: 'Castor, variety GCH 7, is ranked number 6. Expected yield: 16.2 quintals per hectare. Extremely drought tolerant. Good for arid regions of Gujarat and Rajasthan.',
  linseed: 'Linseed, also called alsi, variety Gaurav, is ranked number 7. Expected yield: 10.2 quintals per hectare. High omega 3 content commands premium prices in health market.',
  safflower: 'Safflower, variety PBNS 12, is ranked number 8. Expected yield: 12.8 quintals per hectare. Extremely drought tolerant, ideal for dry Deccan plateau regions.',
};

const VoiceAssistant = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const recognitionRef = useRef(null);
  const speakRef = useRef(null);

  // Use refs to avoid stale closure in event handlers
  const navigateRef = useRef(navigate);
  const locationRef = useRef(location);
  useEffect(() => { navigateRef.current = navigate; }, [navigate]);
  useEffect(() => { locationRef.current = location; }, [location]);

  const speak = useCallback((text, onDone) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.92;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    utterance.onstart = () => { setIsSpeaking(true); setIsReading(true); };
    utterance.onend = () => { setIsSpeaking(false); setIsReading(false); if (onDone) onDone(); };
    utterance.onerror = () => { setIsSpeaking(false); setIsReading(false); };
    window.speechSynthesis.speak(utterance);
    speakRef.current = utterance;
  }, [language]);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setIsReading(false);
  }, []);

  const readCurrentPage = useCallback(() => {
    const path = locationRef.current.pathname;
    const content = PAGE_CONTENT[path] || 
      `You are on the ${path.replace(/-/g, ' ').replace(/\//g, '')} page of AgroYield AI, 
       India's premier oilseed crop optimization platform.`;
    setResponse('Reading this page...');
    speak(`Reading page. ${content}`);
  }, [speak]);

  const processCommand = useCallback((text) => {
    const lower = text.toLowerCase().trim();
    let responseText = '';

    // STOP commands
    if (lower.includes('stop') || lower.includes('quiet') || lower.includes('silence')) {
      stopSpeaking();
      responseText = 'Stopped.';
      setResponse(responseText);
      return;
    }

    // READ PAGE command
    if (lower.includes('read page') || lower.includes('read this') || lower.includes('what is on this page') || lower.includes('describe page')) {
      readCurrentPage();
      return;
    }

    // NAVIGATION commands
    for (const [phrase, path] of Object.entries(NAVIGATION_COMMANDS)) {
      if (lower.includes(phrase)) {
        responseText = `Navigating to ${phrase}...`;
        setResponse(responseText);
        speak(responseText, () => navigateRef.current(path));
        return;
      }
    }

    // CROP INFO commands
    for (const [crop, info] of Object.entries(CROP_INFO)) {
      if (lower.includes(crop)) {
        responseText = info;
        setResponse(responseText);
        speak(responseText);
        return;
      }
    }

    // FEATURE commands
    if (lower.includes('top crop') || lower.includes('best crop') || lower.includes('number one')) {
      responseText = CROP_INFO.mustard;
    } else if (lower.includes('all crop') || lower.includes('list crop')) {
      responseText = 'There are 8 ranked oilseed crops: Mustard ranked 1st, Soybean 2nd, Groundnut 3rd, Sunflower 4th, Sesame 5th, Castor 6th, Linseed 7th, and Safflower 8th.';
    } else if (lower.includes('weather') || lower.includes('rain') || lower.includes('climate')) {
      responseText = 'Current weather insight: Rajasthan has optimal cool dry conditions for mustard. Madhya Pradesh has good moisture for soybean. Gujarat has sandy soil suitable for groundnut cultivation this season.';
    } else if (lower.includes('market price') || lower.includes('msp') || lower.includes('price')) {
      responseText = 'Current MSP prices: Mustard 5,650 rupees per quintal. Soybean 4,300 rupees. Groundnut 6,377 rupees. Sunflower 5,800 rupees. Sesame fetches premium price of 15,000 rupees per quintal in open market.';
    } else if (lower.includes('calculate') || lower.includes('roi') || lower.includes('profit')) {
      responseText = 'To calculate ROI, go to the Treatment Rankings page and use the ROI Calculator. Or go to Crop Championship for the Success Probability Calculator. Say: go to treatments, or go to rankings.';
    } else if (lower.includes('scheme') || lower.includes('government') || lower.includes('subsidy')) {
      responseText = 'Available government schemes: PM Fasal Bima Yojana for crop insurance at just 2% premium. PM KISAN gives 6,000 rupees per year directly to your account. Kisan Credit Card for low interest loans. Say: go to regional, for full scheme details.';
    } else if (lower.includes('help') || lower.includes('what can you') || lower.includes('commands')) {
      responseText = 'I can help you with: navigate pages, say "go to home" or "open rankings". Get crop details, say "mustard" or "soybean". Read the page, say "read page". Get market prices, say "market price". Get weather info, say "weather". List all crops, say "list crops". Stop speaking, say "stop".';
    } else if (lower.includes('accuracy') || lower.includes('reliable') || lower.includes('how accurate')) {
      responseText = 'AgroYield AI has 94.2% prediction accuracy validated by ICAR and state agricultural universities. Our yield predictions are accurate within 8% margin. Weather impact assessment accuracy is 91%, and market price forecasting is 87% accurate.';
    } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('namaste')) {
      responseText = 'Namaste! I am AgroYield AI voice assistant. I can help you navigate the platform, get crop rankings, market prices, weather insights, and government schemes. Say "help" for all available commands.';
    } else {
      responseText = `I heard: "${text}". Try saying "help" for available commands, or a crop name like "mustard" or "soybean", or "go to rankings" to navigate.`;
    }

    setResponse(responseText);
    speak(responseText);
    setCommandHistory(prev => [{ command: text, response: responseText.slice(0, 80) + '...', time: new Date().toLocaleTimeString() }, ...prev.slice(0, 4)]);
  }, [speak, stopSpeaking, readCurrentPage]);

  // Store processCommand in ref to avoid stale closure in recognition handler
  const processCommandRef = useRef(processCommand);
  useEffect(() => { processCommandRef.current = processCommand; }, [processCommand]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
    setIsSupported(true);
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = language;
    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) { finalTranscript += t; }
        else { interimTranscript += t; }
      }
      if (interimTranscript) setTranscript(interimTranscript);
      if (finalTranscript) {
        setTranscript(finalTranscript);
        setShowPanel(true);
        // Use ref to always get latest processCommand
        processCommandRef.current(finalTranscript);
      }
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (e) => { console.warn('Speech recognition error:', e.error); setIsListening(false); };
    recognitionRef.current = recognition;
    return () => { recognition.abort(); };
  }, [language]);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      setResponse('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
        setShowPanel(true);
      } catch (e) {
        console.warn('Could not start recognition:', e);
      }
    }
  };

  if (!isSupported) return null;

  return (
    <>
      {/* Floating Voice Panel */}
      {showPanel && (
        <div className="fixed bottom-24 right-6 z-[9998] w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-red-400 animate-pulse' : isSpeaking ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
              <span className="text-white text-sm font-semibold">
                {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'AgroYield Voice'}
              </span>
            </div>
            <button onClick={() => setShowPanel(false)} className="text-white/80 hover:text-white">
              <X size={16} />
            </button>
          </div>
          {/* Content */}
          <div className="p-4 space-y-3">
            {transcript && (
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 font-medium mb-1">You said:</p>
                <p className="text-sm text-gray-800 font-medium">"{transcript}"</p>
              </div>
            )}
            {response && (
              <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                <p className="text-xs text-primary font-medium mb-1">Response:</p>
                <p className="text-sm text-gray-700">{response.slice(0, 120)}{response.length > 120 ? '...' : ''}</p>
              </div>
            )}
            {/* Quick Commands */}
            <div>
              <p className="text-xs text-gray-400 font-medium mb-2">Quick commands:</p>
              <div className="flex flex-wrap gap-1">
                {['top crops', 'market price', 'go to rankings', 'read page', 'help'].map(cmd => (
                  <button key={cmd} onClick={() => { setTranscript(cmd); processCommandRef.current(cmd); }}
                    className="px-2 py-1 bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-600 text-xs rounded-full transition-colors">
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
            {/* Command History */}
            {commandHistory.length > 0 && (
              <div className="border-t border-gray-100 pt-2">
                <p className="text-xs text-gray-400 font-medium mb-1">Recent:</p>
                {commandHistory.slice(0, 2).map((item, i) => (
                  <div key={i} className="text-xs text-gray-500 truncate">{item.time} — "{item.command}"</div>
                ))}
              </div>
            )}
          </div>
          {/* Action Buttons */}
          <div className="px-4 pb-4 flex gap-2">
            <button onClick={readCurrentPage} 
              className="flex-1 flex items-center justify-center space-x-1 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs text-gray-700 transition-colors">
              <BookOpen size={12} />
              <span>Read Page</span>
            </button>
            <button onClick={stopSpeaking}
              className="flex-1 flex items-center justify-center space-x-1 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-lg text-xs text-gray-700 transition-colors">
              <VolumeX size={12} />
              <span>Stop</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Mic Button */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-2">
        {/* Toggle Panel button */}
        {!showPanel && (
          <button onClick={() => setShowPanel(true)} 
            className="w-8 h-8 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
            <ChevronUp size={14} />
          </button>
        )}
        {/* Main Mic Button */}
        <div className="relative">
          {isListening && (
            <>
              <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30"></span>
              <span className="absolute -inset-2 rounded-full bg-red-300 animate-ping opacity-20" style={{animationDelay: '0.3s'}}></span>
            </>
          )}
          {isSpeaking && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></span>
          )}
          <button
            onClick={toggleListening}
            className={`relative w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 ${
              isListening ? 'bg-red-500 hover:bg-red-600 scale-110' : 
              isSpeaking ? 'bg-yellow-500 hover:bg-yellow-600' :
              'bg-primary hover:bg-primary/90'
            } text-white`}
            title={isListening ? 'Stop listening (click to stop)' : isSpeaking ? 'Speaking...' : 'Voice Assistant — Click to speak'}
          >
            {isListening ? <MicOff size={22} /> : isSpeaking ? <Volume2 size={22} /> : <Mic size={22} />}
          </button>
        </div>
        {/* Tooltip on first visit */}
        {!showPanel && !isListening && (
          <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
            🎙 Voice Control
          </div>
        )}
      </div>
    </>
  );
};

export const SpeakButton = ({ text }) => {
  const { language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  if (!window.speechSynthesis) return null;
  
  const speak = () => {
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.92;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <button onClick={speak} 
      className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-primary/10 text-primary hover:text-primary/70 transition-colors" 
      title={isSpeaking ? 'Stop reading' : 'Read aloud'}>
      {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
    </button>
  );
};

export default VoiceAssistant;
